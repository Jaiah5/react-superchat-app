
import React, { useState, useEffect } from "react";
import "../Chat.css";
import {
    collection,
    addDoc,
    where,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
  } from "firebase/firestore";
import { db, auth } from "../firebase-config";
  


export const Chat = (props) => {

    const {room} = props;

    const [newMessage, setNewMessage] = useState("");

    const [messages, setMessages] = useState([]);

    const messagesRef = collection(db, "messages");

    useEffect(() => {

        const queryMessages =query (messagesRef, where ("room", "==", room), orderBy("createAt"));

        const unsuscribe =  onSnapshot(queryMessages, (snapShot) => {
            let messages = [];
            snapShot.forEach((doc) => { 
                messages.push({...doc.data(), id: doc.id });
            });

            setMessages(messages);
        });

        return () => unsuscribe();

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newMessage === "") return; 

        await addDoc (messagesRef, {

            text:newMessage, 
            createAt: serverTimestamp (),
            user: auth.currentUser.displayName, 
            room,


        });

        setNewMessage ("")


    
    };

    return (
    
    <div className="chat-app">
        <div className="header">
        <h1>Welcome to: {room.toUpperCase()}</h1>
      </div>

      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="user">{message.user}:</span> {message.text}

          </div>
           ))}
           </div>
        <form onSubmit={handleSubmit} className="new-message-form">
            <input className="new-message-input" placeholder="Type your message here" onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
            />
            <button type="submit" className="send-button">Send</button>
        </form>



    </div>
);
};