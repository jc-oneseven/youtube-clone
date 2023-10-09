import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomMessage, generateRandomNames } from "../utils/helper";

const data = [];

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(20) + "🚀",
        })
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log("Live Chat render");

  return (
    <div className="border border-gray-300 p-3 flex flex-col">
      <div className="h-[480px] overflow-auto flex flex-col-reverse">
        {/* Warning: Don't use index as a key */}
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage
            key={index}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Jagdish",
              message: liveMessage + "🛑",
            })
          );

          setLiveMessage("");
        }}
        className="flex items-center gap-2">
        <input
          className="flex-grow p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Enter message"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-2 bg-blue-600 text-white rounded">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
