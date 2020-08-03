import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./Message.css";
const Message = forwardRef(({ message, currentUser }, ref) => {
  const isUser = currentUser === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      {message.text ? (
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
          <CardContent>
            {isUser ? (
              <Typography color="white" variant="h5" component="h2">
                {message.text}
              </Typography>
            ) : (
              <Typography color="white" variant="h5" component="h2">
                {message.username || "Unknown User"}: {message.text}
              </Typography>
            )}
          </CardContent>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
});

export default Message;
