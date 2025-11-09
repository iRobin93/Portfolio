import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface Comment {
  id: number;
  name: string;
  theComment: string;
}

const apiUrl = "https://ukesoversikt.azurewebsites.net/api/Comments";

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [lastCommentId, setLastCommentId] = useState<number | null>(null);

  const getComments = async () => {
    try {
      const res = await axios.get(apiUrl, {
        headers: { "x-functions-key": import.meta.env.VITE_AZURE_FUNCTION_KEY },
      });
      setComments(res.data);
    } catch (err) {
      console.error("Feil ved henting av kommentarer:", err);
    }
  };

  const postComment = async () => {
    if (!name || !text) return;

    const newComment = { name, theComment: text };
    try {
      const response = await axios.post(apiUrl, newComment, {
        headers: { "x-functions-key": import.meta.env.VITE_AZURE_FUNCTION_KEY },
      });

      // Store the ID of the comment just created
      setLastCommentId(response.data.id);

      // Optionally refresh or append comments
      setComments((prev) => [...prev, response.data]);


    } catch (err) {
      console.error("Feil ved posting:", err);
    }
  };

  const deleteComment = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/${id}`, {
        headers: { "x-functions-key": import.meta.env.VITE_AZURE_FUNCTION_KEY },
      });
      getComments();
    } catch (err) {
      console.error("Feil ved sletting:", err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-orange-100 rounded-3xl shadow-md p-6"
    >
      <h2 className="text-2xl font-bold text-orangeBrand mb-4">💬 Kommentarer</h2>

      <div className="flex flex-col gap-2 mb-4">
        <input
          className="border border-orange-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orangeBrand/50"
          type="text"
          placeholder="Ditt navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="border border-orange-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orangeBrand/50"
          placeholder="Skriv en kommentar..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={postComment}
          className="bg-orangeBrand text-white rounded-xl px-4 py-2 font-semibold hover:bg-orange-500 transition"
        >
          Legg igjen kommentar
        </button>
      </div>

      <div className="space-y-3">
        {comments.map((c) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-orange-100 rounded-lg p-3 flex justify-between items-start bg-orange-50"
          >
            <div>
              <strong>{c.name}</strong>
              <p className="text-sm text-gray-700">{c.theComment}</p>
            </div>
            {lastCommentId === c.id && (
              <button
                onClick={() => deleteComment(c.id)}
                className="text-xs text-red-500 hover:text-red-700 transition"
              >
                Slett
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CommentSection;
