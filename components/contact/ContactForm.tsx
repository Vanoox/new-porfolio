"use client";

import React, { useState } from "react";
import { CloseIcon } from "@/components/Icons";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      form.reset();

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] p-8 lg:p-10 w-full relative overflow-hidden">
        <div
          className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 pointer-events-none bg-white/40 dark:bg-gray-800/60 backdrop-blur-[2px] ${
            showSuccess ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`bg-white dark:bg-gray-900 border border-emerald-100 dark:border-emerald-900/50 shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col items-center text-center transform transition-transform duration-500 pointer-events-auto ${
              showSuccess ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            }`}
          >
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Thank you for reaching out.
              <br />
              I'll get back to you shortly.
            </p>
          </div>
        </div>

        <h2
          className={`text-xl font-semibold text-gray-900 dark:text-white mb-8 transition-opacity duration-300 ${showSuccess ? "opacity-30" : "opacity-100"}`}
        >
          Send a message
        </h2>

        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-6 transition-opacity duration-300 ${showSuccess ? "opacity-30" : "opacity-100"}`}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              disabled={isSubmitting || showSuccess}
              placeholder="John Doe"
              className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all disabled:opacity-50"
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
              disabled={isSubmitting || showSuccess}
              placeholder="john@example.com"
              className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="topic" className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-1">
              Topic
            </label>
            <select
              id="topic"
              disabled={isSubmitting || showSuccess}
              className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none cursor-pointer disabled:opacity-50"
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
              disabled={isSubmitting || showSuccess}
              placeholder="Tell me about your project..."
              className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || showSuccess}
            className="mt-4 w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold py-4 rounded-xl transition-all text-sm shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">
            By sending this message, you agree to the{" "}
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="font-medium text-gray-900 dark:text-white underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </button>
            .
          </p>
        </form>
      </section>
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsPrivacyOpen(false)}
          ></div>

          <div className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
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

            <div className="p-6 sm:px-8 sm:py-6 overflow-y-auto overscroll-contain">
              <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">1. Introduction</h4>
                <p className="mb-5">
                  Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your
                  personal information when you contact me through this website.
                </p>

                <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">2. Information I Collect</h4>
                <p className="mb-5">
                  When you submit the contact form, I collect the personal data you provide, which includes your{" "}
                  <strong>Name</strong>, <strong>Email Address</strong>, and the contents of your{" "}
                  <strong>Message</strong>.
                </p>

                <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">
                  3. How I Use Your Information
                </h4>
                <p className="mb-5">
                  The information provided is used strictly to respond to your inquiry, discuss potential business
                  opportunities, and provide you with the services you requested (e.g., voice acting, language lessons,
                  or fitness training). I do not use your email for marketing newsletters unless explicitly requested.
                </p>

                <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">
                  4. Data Sharing & Security
                </h4>
                <p className="mb-5">
                  Your personal information will never be sold, rented, or shared with third parties. All data
                  transmitted through this form is sent via secure, encrypted protocols and is stored only as long as
                  necessary to fulfill the purpose of your request.
                </p>

                <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">5. Your Rights</h4>
                <p>
                  You have the right to request the deletion of any personal data I hold about you. If you wish to have
                  your previous communications deleted from my inbox, simply send a direct email to{" "}
                  <em>hello@johnthoinn.com</em>.
                </p>
              </div>
            </div>
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
