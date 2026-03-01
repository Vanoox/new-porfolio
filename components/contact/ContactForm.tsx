"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Symulacja wysyłania
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 1000);
  };

  return (
    <section className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] p-8 lg:p-10 w-full relative">
      
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
        Send a message
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        {/* Imię */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-1">
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            required
            placeholder="John Doe"
            className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-1">
            Email address
          </label>
          <input 
            type="email" 
            id="email" 
            required
            placeholder="john@example.com"
            className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Temat (Dropdown - idealny, żeby połączyć różne specjalizacje Johna) */}
        <div className="flex flex-col gap-2">
          <label htmlFor="topic" className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-1">
            Topic
          </label>
          <select 
            id="topic" 
            className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none cursor-pointer"
          >
            <option value="voice">Voice Acting</option>
            <option value="language">Language Tutoring</option>
            <option value="pilates">Pilates & Fitness</option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>

        {/* Wiadomość */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-1">
            Message
          </label>
          <textarea 
            id="message" 
            required
            rows={4}
            placeholder="Tell me about your project..."
            className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
          />
        </div>

        {/* Przycisk Submit */}
        <button 
          type="submit"
          disabled={isSubmitting}
          className="mt-4 w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold py-4 rounded-xl transition-all text-sm shadow-md disabled:opacity-70 flex justify-center items-center gap-2"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

      </form>
    </section>
  );
}
