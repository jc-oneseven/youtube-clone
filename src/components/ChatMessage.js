import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="my-2">
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-2">
        <img
          className="h-6"
          src="https://cdn-icons-png.flaticon.com/512/219/219959.png"
          alt="User Profile"
        />
        <div className="text-sm">
          <strong className="font-bold"> {name} </strong>
          <span> {message} </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
