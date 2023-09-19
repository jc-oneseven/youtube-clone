import React from "react";

const commentsData = [
  {
    id: 1,
    text: "I recently read a fascinating book on artificial intelligence.",
    user: "AIEnthusiast",
    timestamp: "2023-09-19T10:00:00",
    replies: [
      {
        id: 2,
        text: "That sounds intriguing! What book was it?",
        user: "BookLover",
        timestamp: "2023-09-19T10:05:00",
        replies: [
          {
            id: 3,
            text: "It was 'Artificial Intelligence: A Modern Approach' by Russell and Norvig. Highly recommended!",
            user: "AIEnthusiast",
            timestamp: "2023-09-19T10:10:00",
            replies: [
              {
                id: 4,
                text: "I've heard great things about that book. I'll definitely check it out!",
                user: "BookLover",
                timestamp: "2023-09-19T10:15:00",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        text: "AI is such an exciting field with endless possibilities.",
        user: "TechGeek",
        timestamp: "2023-09-19T10:08:00",
        replies: [],
      },
    ],
  },
  {
    id: 6,
    text: "I attended a machine learning conference last week. It was eye-opening!",
    user: "MLConferenceGoer",
    timestamp: "2023-09-19T10:20:00",
    replies: [
      {
        id: 7,
        text: "Which conference was it? I'm always on the lookout for good ML events.",
        user: "AIEnthusiast",
        timestamp: "2023-09-19T10:25:00",
        replies: [
          {
            id: 8,
            text: "It was the 'Machine Learning Summit 2023' in San Francisco. Fantastic speakers!",
            user: "MLConferenceGoer",
            timestamp: "2023-09-19T10:30:00",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="my-6 bg-white p-2 rounded-lg ">
      <div className="flex gap-3">
        <img
          className="w-11 h-11"
          src="https://cdn-icons-png.flaticon.com/512/219/219959.png"
          alt="user profile"
        />
        <div>
          <h3 className="text-lg font-bold"> {data.user} </h3>
          <p className="text-gray-700"> {data.text} </p>
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment data={comment} />
      <div className="ml-4 pl-8 border-l border-l-gray-300">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="my-4 bg-gray-100 p-4">
      <h2 className="text-xl font-bold my-4"> Comments </h2>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
