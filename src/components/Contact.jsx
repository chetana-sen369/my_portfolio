import React from "react";
import {useRef} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form =useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm(
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  ).then(
    ()=>{
      alert("Message sent successfully !");
      //clear form
      form.current.reset();
    },
    (error)=>{
      alert("Failed to send message.");
      console.log(error);
    }
  );
  }
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-10 bg-[#020617] text-white"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
       Let's Connect
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        I’m open to internships, full-time opportunities, and collaborations.
        Feel free to reach out. 
      </p>

      {/* Container */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE - INFO */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
          
          <h3 className="text-xl font-semibold mb-4">
            Contact Details
          </h3>

          <div className="space-y-4 text-gray-300">
            
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a
                href="mailto:chetanasen369@gmail.com"
                className="text-blue-400 hover:underline"
              >
                chetanasen369@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-sm">GitHub</p>
              <a
                href="https://github.com/chetana-sen369"
                className="text-blue-400 hover:underline"
              >
                chetana-sen369
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/chetana-sen-2666a325b"
                className="text-blue-400 hover:underline"
              >
                Chetana Sen 
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <span className="text-blue-400 hover:underline">
                 9030770009 
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - SIMPLE FORM */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
          
          <h3 className="text-xl font-semibold mb-4">
            Send a Message
          </h3>

          <form className="space-y-4" ref={form} onSubmit={sendEmail}> 

            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              className="w-full p-3 rounded-md bg-[#020617] border border-gray-700 focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              className="w-full p-3 rounded-md bg-[#020617] border border-gray-700 focus:border-blue-500 outline-none"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-[#020617] border border-gray-700 focus:border-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-md"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Chetana Sen. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;