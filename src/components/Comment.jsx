// src/components/Comment.jsx
import { useState } from "react";

const Comment = ({ comment, onReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [replyUsername, setReplyUsername] = useState("");

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyContent.trim().length === 0 || replyContent.length > 140) {
      return; // Optionally handle error feedback for reply content length
    }
    onReply(replyContent, comment.id, replyUsername); // Include username in reply
    setReplyContent("");
    setReplyUsername("");
    setShowReplyForm(false);
  };

  return (
    <div className="border rounded p-4 mb-4 bg-gray-100">
      <p className="font-semibold">{comment.username}</p>
      <p>{comment.content}</p>
      <button
        onClick={() => setShowReplyForm((prev) => !prev)}
        className="text-blue-600 hover:underline mt-2"
      >
        Reply
      </button>

      {/* Inline Reply Form */}
      {showReplyForm && (
        <form onSubmit={handleReplySubmit} className="mt-2">
          <input
            type="text"
            value={replyUsername}
            onChange={(e) => setReplyUsername(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Your Username"
            required
          />
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Write a reply..."
            maxLength={140}
          />
          <p className="text-gray-500 text-xs">
            {replyContent.length}/140
          </p>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Post Reply
          </button>
        </form>
      )}

      {/* Nested Replies */}
      {comment.replies.length > 0 && (
        <div className="ml-6 mt-4">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} onReply={onReply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
