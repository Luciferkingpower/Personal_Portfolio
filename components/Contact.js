"use client"

import { useState } from "react"
import React from 'react'
import emailjs from "emailjs-com"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
          'service_knoxe4b', // Replace with your EmailJS service ID
          'template_8lf9f3f', // Replace with your EmailJS template ID
          formData,
          'z5XmDKH2hBKKI7I3U' // Replace with your EmailJS user ID
        ).then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        }).catch((err) => {
          console.log('FAILED...', err);
          alert('Failed to send message. Please try again later.');
        });
      };
    

  return (
    <section id="contact" className="text-slate-300 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        {/* Contact Us Section */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-200">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-indigo-300">Feel free to reach out to us for any inquiries or collaborations. We’re here to help you with your needs.</p>
        </div>
        <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-slate-300">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-slate-300">Email</label>
                <input type="email" id="email"value={formData.email}onChange={handleChange} name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-slate-300">Message</label>
                <textarea id="message" value={formData.message}onChange={handleChange} name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" spellCheck="false" data-ms-editor="true"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">example@email.com</a>
            </div>
          </div>
        </form>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-slate-200 mb-4">Looking to Create a Website?</h2>
          <p className="text-lg text-indigo-300 mb-8">If you have a project or an idea in mind and need a website designed or developed, don't hesitate to get in touch. We would love to help you bring your vision to life!</p>
          <a href="mailto:ayushtemkar9@gmail.com" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
