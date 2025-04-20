import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import '../assets/styles/aiassistent.scss';
import {Alignment, Fit, Layout, useRive} from "@rive-app/react-canvas";
import Droneicon from "../assets/drone_logo.riv";
const Dronelogo = () => {
    const { RiveComponent } = useRive({
        src: Droneicon,
        stateMachines: "State Machine 1",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
    });

    return (
        <RiveComponent
            id="drone"
            style={{
                maxWidth: "100vw",
                height: "100%",


                zIndex:"2",

                background: "transperent",
            }}
        />
    );
};

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Welcome message when chat is first opened
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    id: 1,
                    text: "Hello! I'm your AI assistant. How can I help you today?",
                    sender: 'assistant',
                    timestamp: new Date(),
                },
            ]);
        }
    }, [isOpen, messages.length]);

    // Auto-scroll to the bottom when new messages are added
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = async () => {
        if (inputValue.trim() === '') return;

        const userMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            // Send the user query to the API
            const response = await axios.get(
                `https://drone-backend-thf8.onrender.com/api/v1/query?query=${encodeURIComponent(inputValue)}`
            );

            // Add the assistant's response to the messages
            const assistantMessage = {
                id: Date.now() + 1,
                text: response.data || "I'm sorry, I couldn't process your request.",
                sender: 'assistant',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error fetching response:', error);

            // Add an error message
            const errorMessage = {
                id: Date.now() + 1,
                text: "I'm sorry, I couldn't connect to my knowledge base. Please try again later.",
                sender: 'assistant',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="ai-assistant-container">
            {/* Chat toggle button */}
            <button
                className={`chat-toggle-button  ${isLoading ? 'loading' : ''}`}
                onClick={toggleChat}
                aria-label="Toggle AI Assistant"
            >
                {isOpen ? (
                    <X size={24} />
                ) : (

                    <MessageCircle size={24} />
                )}
            </button>

            {/* Chat panel */}
            <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="assistant-info">
                        <div className="assistant-avatar">
                            <Bot size={24} />
                        </div>
                        <h3>AI Assistant</h3>
                    </div>
                    <button
                        className="close-button"
                        onClick={toggleChat}
                        aria-label="Close AI Assistant"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="chat-messages">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`message ${message.sender === 'user' ? 'user-message' : 'assistant-message'}`}
                        >
                            <div className="message-avatar">
                                {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                            </div>
                            <div className="message-content">
                                <div className="message-text">{message.text}</div>
                                <div className="message-time">{formatTime(message.timestamp)}</div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="typing-indicator">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chat-input-container">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        disabled={isLoading}
                        className="chat-input"
                    />
                    <button
                        className="send-button"
                        onClick={sendMessage}
                        disabled={isLoading || inputValue.trim() === ''}
                        aria-label="Send message"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIAssistant;