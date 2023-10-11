import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ur31oum", "template_wrjygli", form.current, "ln-Sal_bmzck9Jt-Q").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-white p-8 rounded shadow-md max-w-md mx-auto">
      <div className="mb-4 mt-40">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          name="user_email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea
          name="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
      </div>
      <div className="flex justify-end">
        <input
          type="submit"
          value="Send"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </div>
    </form>
  );
};

export default Contact;
