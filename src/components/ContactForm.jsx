import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [isSending, setIsSending] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let error = {};
    if (!formData.name) error.name = "Name is required";
    if (!formData.email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error.email = "Email is invalid";
    }
    if (!formData.message) error.message = "Message is required";
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validate();
    if (Object.keys(validateError).length > 0) {
      setError(validateError);
    } else {
      setError({});
      setIsSending(true);
      emailjs
        .send(
          "service_tnu28le",
          "template_h0tzyae",
          formData,
          "8OeGf8DLZP1X3E5Bi"
        )
        .then((res) => {
          console.log("Hello", res.status, res.text);
          toast.success("Success");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Fail");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="text-black">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg text-white
            bg-transparent px-3 py-2 text-sm focus:bg-gray-100 focus:text-black"
          />
          {error.name && <p className="text-sm text-pink-700">{error.name}</p>}
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg text-white
            bg-transparent px-3 py-2 text-sm focus:bg-gray-100 focus:text-black"
          />
          {error.email && (
            <p className="text-sm text-pink-700">{error.email}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg text-white
            bg-transparent px-3 py-2 text-sm focus:bg-gray-100 focus:text-black"
            rows="4"
          />
          {error.message && (
            <p className="text-sm text-pink-700">{error.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 
          ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
