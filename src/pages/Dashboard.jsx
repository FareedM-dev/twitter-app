// src/components/Dashboard.jsx
import { useState, useEffect } from "react";
import Comment from "../components/Comment";

const mockComments = [
  {
    id: 1,
    username: "User1",
    content: "This is the first comment!",
    replies: [
      {
        id: 2,
        username: "User2",
        content: "This is a reply to the first comment.",
        replies: []
      }
    ]
  },
  {
    id: 3,
    username: "User3",
    content: "This is another comment with no replies.",
    replies: []
  }
];

const Dashboard = () => {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // Simulate fetching the logged-in username
  useEffect(() => {
    const loggedInUsername = localStorage.getItem("username"); // Replace this with your auth context
    if (loggedInUsername) {
      setUsername(loggedInUsername);
    }
  }, []);

  const handleNewComment = (content, username) => {
    const newComment = { id: Date.now(), username, content, replies: [] };

    setComments((prevComments) => [newComment, ...prevComments]); // Adding to the top
    setNewComment(""); // Clear input after submitting
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Username is required");
      return;
    }
    if (newComment.trim().length === 0 || newComment.length > 140) {
      setError("Comment must be between 1 and 140 characters");
      return;
    }
    handleNewComment(newComment, username);
    setError(""); // Clear error if submission is successful
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Microblog Dashboard</h1>
      {error && <p className="text-red-600">{error}</p>}

      {/* New Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder="Your Username"
          required
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="What's on your mind?"
          maxLength={140}
        />
        <p className="text-gray-500 text-xs">
          {newComment.length}/140
        </p>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Post
        </button>
      </form>

      {/* Display Comments */}
      <div className="mt-8">
        {comments.slice().reverse().map((comment) => ( // Reverse order
          <Comment key={comment.id} comment={comment} onReply={handleNewComment} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
