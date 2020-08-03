import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { Input, InputLabel, IconButton } from "@material-ui/core";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";

import "./App.css";
import Message from "./Message";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  //Enter username on the start of the app
  useEffect(() => {
    setUsername(prompt("please enter your name"));
  }, []);

  //Database connection
  useEffect(() => {
    //Listening to any changes in database
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  const displayMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="app">
      <div className="app__header">
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
        <h1>Messenger Application</h1>
        <strong>Welcome {username || "Unknown"}</strong>
      </div>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__formControlInput"
            placeholder="Enter message..."
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__formControlButton"
            color="primary"
            variant="contained"
            type="submit"
            onClick={displayMessage}
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} currentUser={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
