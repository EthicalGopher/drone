import  React,{ useState, useCallback, useRef, useEffect } from 'react';
import { Image, Mic,MessageCircle,Cog,SendHorizontal} from 'lucide-react';
import "../assets/styles/mic.scss";
import axios from 'axios';
import { browserName, CustomView } from 'react-device-detect';

const ResponseBox = ({imagetext}) => {
    const [responseText, setResponseText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);



    useEffect(() => {
        if (currentIndex < imagetext.length) {
            const timer = setTimeout(() => {
                setResponseText(prev => prev + imagetext[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 20);

            return () => clearTimeout(timer);
        }
    }, [imagetext, currentIndex]);
    return (
        <div className="p-3 h-64 overflow-y-scroll hidesrollbar" >
            <div className="wrapper">
                <div className="overflow-x-hidden overflow-y-scroll " id="dynamicimagechat">
                    <div  dangerouslySetInnerHTML={{ __html: responseText }} />

                    {currentIndex < imagetext.length && <span className="border-r-2 border-black animate-blink">&nbsp;</span>}
                </div>
            </div>
        </div>
    );
};
const ImageContainer = ({
                            imageUrl,
                            imageResponse,
                            onClose
                        }) => {
    return (
        <div className="mt-4 shadow-lg rounded-lg relative bg-[#111] border  border-#222 " style={{borderWidth:"5px"}} >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-all"
                aria-label="Close image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            <img src={imageUrl} alt="Selected" className="w-full h-48 object-cover rounded-t-lg shadow-lg"/>
            <ResponseBox imagetext={imageResponse} />
        </div>
    );
};



const VoiceInput = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageResponse, setImageResponse] = useState('');
    const [imageUploading, setImageUploading] = useState(false);
    const fileInputRef = useRef(null);
    const [isTranscribed, setIsTranscribed] = useState(false);
    const [, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [voices, setVoices] = useState([]);


    const [showChat, setShowChat] = useState(false);
    const [chatMessage, setChatMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [chat, setChat] = useState("");
    const [isChatstarted, setIsChatstarted] = useState(false);
    const [, setChattext] = useState("");



    useEffect(() => {
        if (!showChat || !chat || isChatstarted === false) return;

        const handlechat = async() => {
            try {
                const res = await axios.get(`https://drone-backend-thf8.onrender.com/api/v1/query?query=${encodeURIComponent(chat)}`);
                setChattext(res.data);

                // Add the AI response to chat history immediately after receiving it
                setChatHistory(prev => [...prev, { message: res.data, isUser: false }]);

                console.log(res.data);
            } catch (error) {
                console.error('Error processing response:', error);
                // Add error message to chat history
                setChatHistory(prev => [...prev, { message: "Sorry, I couldn't process your request.", isUser: false }]);
            } finally {
                setIsChatstarted(false);
                setIsLoading(false);
            }
        };

        handlechat();
    }, [chat]);
    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
        };
        // Load voices immediately and on change
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
        // Cleanup
        return () => {
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, []);

    const startListening = useCallback(() => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new (window ).webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.onstart = () => {
                setIsListening(true);
            };
            recognition.onresult = (event) => {
                const current = event.resultIndex;
                const transcript = event.results[current][0].transcript;
                setTranscript(transcript);
            };
            recognition.onend = () => {
                setIsListening(false);
                setIsTranscribed(true);
            };
            recognition.start();



        }
    }, []);

    const stopListening = useCallback(() => {
        setIsListening(false);
        setTranscript('');
    }, []);

    const handleImageClick = () => {
        setShowChat(false)
        fileInputRef.current?.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result );
                uploadImage(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImage = async (file) => {
        setImageUploading(true);
        setImageResponse('');

        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await axios.post('https://drone-backend-thf8.onrender.com/api/v1/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setImageResponse(response.data);
        } catch (error) {
            console.error("Error uploading image:", error);
            setImageResponse("Failed to upload image. Please try again.");
        } finally {
            setImageUploading(false);
        }
    };

    useEffect(() => {
        const fetchDataAndSpeak = async () => {
            if (!isTranscribed || !transcript) return;
            setIsLoading(true);
            try {
                const response = await axios.get(`https://drone-backend-thf8.onrender.com/api/v1/query?query=${encodeURIComponent(transcript)}`);
                const responseText = response.data;
                setText(responseText);

                // Create speech utterance
                const utterance = new SpeechSynthesisUtterance(responseText);

                // Preferred voices in order (excluding David)
                const preferredVoices = [
                    // Google voices are typically high quality
                    voices.find(v => v.name.includes('Google') && v.lang === 'en-US'),
                    // Microsoft voices other than David
                    voices.find(v => v.name.includes('Microsoft') && v.name.includes('Guy')),
                    // Last resort - first non-David voice
                    voices.find(v => !v.name.includes('David'))
                ];

                // Find the first available preferred voice
                const selectedVoice = preferredVoices.find(v => v !== undefined);
                if (selectedVoice) {
                    utterance.voice = selectedVoice;
                }

                // Always set English language
                utterance.lang = 'en-US';

                // Adjust speech parameters
                utterance.rate = 1;
                utterance.pitch = 0.5;
                utterance.volume = 0.6;

                window.speechSynthesis.speak(utterance);
            } catch (error) {
                console.error("Error fetching data:", error);
                setText("Sorry, I couldn't process your request.");
            } finally {
                setIsLoading(false);
                setIsTranscribed(false);
                setTranscript('');
            }
        };

        fetchDataAndSpeak();
    }, [isTranscribed, transcript, voices]);

    const handleSendMessage = () => {
        if (chatMessage.trim() === '') return;

        // Add user message to chat history
        setChatHistory(prev => [...prev, { message: chatMessage, isUser: true }]);

        // Set chat message and trigger API call
        setChat(chatMessage);
        setChatMessage('');
        setIsLoading(true);
        setIsChatstarted(true);

        // When response comes back, add it to chat history

    };

    const handlechatclick = () => {
        setShowChat(true)
        setSelectedImage("")
    }


    return (
        <>
            <section id="AIassitent">

            <CustomView condition={browserName === "Chrome" || browserName === "Edge" || browserName === "Safari"}  >

                <div >

                    <div className="max-w-[420px] mx-auto flex flex-col gap-11 ">
                        <div >

                            {imageResponse!="" && selectedImage && (
                                <ImageContainer
                                    imageUrl={selectedImage}
                                    imageResponse={imageResponse}
                                    onClose={() => setSelectedImage("")}
                                />
                            )}
                        </div>
                        <div>

                            <div className="button-mastery ">
                                <div className={`button-container ${isListening ? 'recording' : ''}`}>
                                    {isListening &&


                                        <div className="audio-visualizer">
                                            {[...Array(11)].map((_, i) => (
                                                <div key={i} className="audio-column-wrapper">
                                                    <div className={`audio-column audio-column-${Math.min(6, Math.abs(6 - i))}`}></div>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                    <div className="button-group">
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                        <input
                                            className="left-checkbox"
                                            id="left-checkbox"
                                            type="checkbox"
                                        />
                                        <label className="the-button left-button" htmlFor="left-checkbox" onClick={handleImageClick}>
                                            <Image className="svg" />
                                        </label>

                                        <input
                                            className="play-checkbox"
                                            id="play-checkbox"
                                            type="checkbox"
                                            checked={isListening}
                                            onChange={() => (isListening ? stopListening() : startListening())}
                                        />
                                        <label className="the-button play-button" htmlFor="play-checkbox">
                                            <div className="play-button-border">
                                                {isLoading||imageUploading?(<Cog className="mic-icon rotation-animation" size={32} />):(
                                                    <Mic className="mic-icon" size={32} />
                                                )}

                                            </div>
                                        </label>

                                        <input
                                            className="rec-checkbox"
                                            id="rec-checkbox"
                                            type="checkbox"
                                            checked={isListening || isLoading|| imageUploading}
                                            onChange={() => (isListening ? stopListening() : startListening())}
                                        />
                                        <label className="the-button right-button" htmlFor="rec-checkbox">
                                            <p></p>
                                            <div className="rec-dot"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="button-container-depth"></div>
                            </div>




                        </div>
                    </div>
                </div>
            </CustomView>
            <CustomView condition={browserName !== "Chrome" && browserName !== "Edge" && browserName !== "Safari"}>
                <div className="fixed bottom-0 left-0 right-0 p-4 ">
                    <div className="max-w-[420px] mx-auto flex flex-col gap-11 ">
                        <div>
                            {imageResponse !== "" && selectedImage && (
                                <ImageContainer
                                    imageUrl={selectedImage}
                                    imageResponse={imageResponse}
                                    onClose={() => setSelectedImage("")}
                                />
                            )}

                            {showChat && (
                                <div className="mt-4 shadow-lg rounded-lg relative">
                                    <button
                                        onClick={() => setShowChat(false)}
                                        className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-all"
                                        aria-label="Close chat"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    <div className="p-3 h-64 bg-[#111]   rounded-t-lg overflow-y-scroll " >
                                        {chatHistory.map((chat, index) => (
                                            <div
                                                key={index}
                                                className={`p-2 mb-2 rounded-lg ${
                                                    chat.isUser
                                                        ? 'bg-blue-600 text-white  ml-auto '
                                                        : 'bg-gray-700 text-white mr-auto'
                                                } max-w-[80%] break-words`}
                                            >
                                                {chat.message}
                                            </div>
                                        ))}
                                        {isLoading && (
                                            <div className="flex justify-center items-center p-2">
                                                <div className="animate-pulse flex space-x-1">
                                                    <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                                                    <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                                                    <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center p-3 bg-[#222] rounded-b-lg">
                                        <input
                                            type="text"
                                            className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l-full focus:outline-none"
                                            placeholder="Type a message..."
                                            value={chatMessage}
                                            onChange={(e) => setChatMessage(e.target.value)}
                                        />
                                        <button
                                            className="bg-blue-600 text-white p-2 rounded-r-full disabled:opacity-50"
                                            onClick={handleSendMessage}
                                            disabled={isLoading || chatMessage.trim() === ''}
                                        >
                                            <SendHorizontal />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="button-mastery">
                                <div className={`button-container ${showChat ? 'recording' : ''}`}>
                                    <div className="button-group">
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                        <input
                                            className="left-checkbox"
                                            id="left-checkbox"
                                            type="checkbox"
                                        />
                                        <label className="the-button left-button" htmlFor="left-checkbox" onClick={handleImageClick}>
                                            <Image className="svg" />
                                        </label>

                                        <input
                                            className="play-checkbox"
                                            id="play-checkbox"
                                            type="checkbox"
                                            checked={handlechatclick}
                                            onChange={() => setShowChat(!showChat)}
                                        />
                                        <label className="the-button play-button" htmlFor="play-checkbox">
                                            <div className="play-button-border">
                                                {imageUploading?(<Cog className="mic-icon rotation-animation" size={32} />):(

                                                showChat?
                                                    (<Cog className="mic-icon rotation-animation" size={32} />):(<MessageCircle className="mic-icon" size={32} />))}

                                            </div>
                                        </label>

                                        <input
                                            className="rec-checkbox"
                                            id="rec-checkbox"
                                            type="checkbox"
                                            checked={showChat || isLoading || imageUploading}
                                            onChange={() => setShowChat(!showChat)}
                                        />
                                        <label className="the-button right-button" htmlFor="rec-checkbox">
                                            <p></p>
                                            <div className="rec-dot"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="button-container-depth"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </CustomView>

            </section>
        </>
    );
};

export default VoiceInput;
