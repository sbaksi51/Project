import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import  "./Chat.css";
import Chatbot from 'react-chatbot-kit';
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <IconButton>
                    <Avatar />
                </IconButton>
            </div>
 
            <div className="chat_body">
                <div className = "chatbot">
                <Chatbot 
                    config = {config}
                    actionProvider = {ActionProvider}
                    messageParser = {MessageParser}
                />
                </div>
            </div>
        </div>
    );
}

export default Chat;
