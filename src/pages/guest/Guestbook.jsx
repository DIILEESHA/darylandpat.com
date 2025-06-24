import { useEffect, useState } from "react";
import { db, collection, addDoc, getDocs } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./guestbook.css";

const Guestbook = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const messagesCollection = collection(db, "leaveWishes");

  // Function to validate form
  const validateForm = () => {
    if (name.trim() === "" || message.trim() === "") {
      toast.error("Please enter your name and message!");
      return false;
    }
    if (name.length < 3) {
      toast.error("Name must be at least 3 characters!");
      return false;
    }
    if (message.length < 5) {
      toast.error("Message must be at least 5 characters!");
      return false;
    }
    return true;
  };

  // Function to submit a message
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await addDoc(messagesCollection, {
        name,
        message,
        createdAt: new Date(),
      });

      setName("");
      setMessage("");
      toast.success("Message submitted successfully! 🎉");
      fetchMessages(); // Refresh messages after submitting
    } catch (error) {
      toast.error("Error submitting message. Please try again.");
      console.error("Error adding message: ", error);
    }
  };

  // Function to fetch messages from Firestore
  const fetchMessages = async () => {
    try {
      const querySnapshot = await getDocs(messagesCollection);
      const fetchedMessages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(fetchedMessages);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching messages.");
      console.error("Error fetching messages: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="guestbook_container">
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="main_heading">Share Your Love & Wishes!</h2>
      <p className="short_para laqw">
        We would love to hear from you! Leave a heartfelt message, words of
        wisdom, or well wishes as we celebrate our special day.
      </p>

      <div className="form_container">
        <form onSubmit={handleSubmit} className="guest_form">
          <div className="form_input_section">
            <label className="input_label">Your Name</label>
            <input
              type="text"
              className="guest_input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form_input_section">
            <label className="input_label">Your Message</label>
            <textarea
              className="guest_input"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="rsvp_btn donal">
            Submit
          </button>
        </form>
      </div>

      {/* Messages Section */}
      <div className="messages_section">
        <h3 className="main_heading cra">Guest Messages</h3>
        {loading ? (
          <p className="short_para">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="short_para laqw">
            No messages yet. Be the first to share your wishes! 🎉
          </p>
        ) : (
          <ul className="messages_list">
            {messages.map((msg) => (
              <li key={msg.id} className="message_card">
                <h4 className="message_name">{msg.name}:</h4>
                <p className="message_text">{msg.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Guestbook;
