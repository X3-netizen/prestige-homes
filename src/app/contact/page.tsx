"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      console.log("Sending message:", formData);
      await new Promise((res) => setTimeout(res, 2000));
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="w-full max-w-2xl bg-black text-white p-10 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center tracking-wide">
          Contact Prestige Homes
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Experience the Difference. Reach out today.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            className="w-full p-4 bg-transparent border-b-2 border-gray-600 focus:border-gold outline-none transition"
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-4 bg-transparent border-b-2 border-gray-600 focus:border-gold outline-none transition"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-4 bg-transparent border-b-2 border-gray-600 focus:border-gold outline-none transition"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            className="w-full p-4 bg-transparent border-b-2 border-gray-600 focus:border-gold outline-none transition"
            name="message"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gold text-black font-semibold py-4 rounded-xl hover:bg-yellow-400 transition"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 mt-6 text-center font-medium">
            Message sent successfully ✅
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-6 text-center font-medium">
            Something went wrong ❌
          </p>
        )}
      </div>
    </div>
  );
}
