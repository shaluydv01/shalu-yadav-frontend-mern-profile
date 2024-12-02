import "./Form.css";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  // Local state for the form fields
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form submission handler
  const loginHandler = async (e) => {
    e.preventDefault();

    // Basic validation to check if fields are filled
    if (!fullname || !email || !message) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    // Set submitting state to disable form during submission
    setIsSubmitting(true);

    try {
      // Instead of sending the data to the backend, log it to the console
      console.log("Form Data Submitted:");
      console.log("Full Name:", fullname);
      console.log("Email:", email);
      console.log("Message:", message);

      // Show success message
      toast.success("Message logged to console successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      // Clear form fields
      setEmail("");
      setFullname("");
      setMessage("");
    } catch (error) {
      // Handle errors and show failure message
      toast.error("Failed to log message", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      // Reset submitting state after the request completes
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="form-container">
        <form onSubmit={loginHandler}>
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            placeholder="Enter your full name"
            id="fullname"
            disabled={isSubmitting}
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="abc123@gmail.com"
            disabled={isSubmitting}
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            id="message"
            disabled={isSubmitting}
          />

          <input
            type="submit"
            id="submit-btn"
            disabled={isSubmitting}
            value={isSubmitting ? "Sending..." : "Send Message"}
          />
        </form>
      </div>
    </>
  );
};

export default Form;
