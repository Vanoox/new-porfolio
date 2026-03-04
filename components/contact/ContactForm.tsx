"use client";

import React, { useState } from 'react';
import { CloseIcon } from '@/components/icons'; // Upewnij się, że masz CloseIcon w icons.tsx

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Symulacja wysyłania (tutaj docelowo dodasz np. fetch do swojego API mailowego)
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 1000);
  };

  return (
    <>
      {/* 
        ================================================================
        GŁÓWNY KOMPONENT: FORMULARZ
        ================================================================
      */}
      <section className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] p-8 lg:p-10 w-full relative">
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
          Send a message
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
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

          <button 
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold py-4 rounded-xl transition-all text-sm shadow-md disabled:opacity-70 flex justify-center items-center gap-2"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Dopisana zgoda z klikalnym linkiem */}
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">
            By sending this message, you agree to the{" "}
            <button 
              type="button" 
              onClick={() => setIsPrivacyOpen(true)}
              className="font-medium text-gray-900 dark:text-white underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </button>.
          </p>

        </form>
      </section>

      {/* 
        ================================================================
        KOMPONENT MODAL (POPUP) DLA POLITYKI PRYWATNOŚCI
        ================================================================
      */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          
          {/* Ciemne tło (Backdrop) - kliknięcie w nie również zamyka modal */}
          <div 
            className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsPrivacyOpen(false)}
          ></div>
          
          {/* Okno Modala */}
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Nagłówek okna z przyciskiem zamknięcia */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shrink-0 z-10">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy Policy</h3>
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Treść okna (Z możliwością przewijania - scroll) */}
            <div className="p-6 sm:px-8 sm:py-6 overflow-y-auto overscroll-contain">
              <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                
                <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">1. Introduction</h4>
                <p className="mb-5">
                  Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your personal information when you contact me through this website.
                </p>

                <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">2. Information I Collect</h4>
                <p className="mb-5">
                  When you submit the contact form, I collect the personal data you provide, which includes your <strong>Name</strong>, <strong>Email Address</strong>, and the contents of your <strong>Message</strong>.
                </p>

                <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">3. How I Use Your Information</h4>
                <p className="mb-5">
                  The information provided is used strictly to respond to your inquiry, discuss potential business opportunities, and provide you with the services you requested (e.g., voice acting, language lessons, or fitness training). I do not use your email for marketing newsletters unless explicitly requested.
                </p>

                <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">4. Data Sharing & Security</h4>
                <p className="mb-5">
                  Your personal information will never be sold, rented, or shared with third parties. All data transmitted through this form is sent via secure, encrypted protocols and is stored only as long as necessary to fulfill the purpose of your request.
                </p>

                <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">5. Your Rights</h4>
                <p>
                  You have the right to request the deletion of any personal data I hold about you. If you wish to have your previous communications deleted from my inbox, simply send a direct email to <em>hello@johnthoinn.com</em>.
                </p>

              </div>
            </div>

            {/* Stopka Modala */}
            <div className="p-4 sm:p-6 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 shrink-0 flex justify-end">
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium px-6 py-2.5 rounded-xl transition-all text-sm"
              >
                I Understand
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
