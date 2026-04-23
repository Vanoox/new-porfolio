"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  confirmTitle: string;
  confirmDescription: string;
  mainTitle: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  topic: string;
  // topicField: string[];
  message: string;
  messagePlaceholder: string;
  sendingMessage: string;
  sendButton: string;
  policyText: string;
  policyLink: string;
  policyTitle: string;
  // policyDescription: string;
  policyAgreeButton: string;
};

export default function ContactForm(props: Props) {
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
      <Card className="w-full relative overflow-hidden rounded-4xl shadow-lg">
        <div
          className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 pointer-events-none bg-background/40 backdrop-blur-[2px] ${
            showSuccess ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`bg-background border border-border shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col items-center text-center transform transition-transform duration-500 pointer-events-auto ${
              showSuccess ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            }`}
          >
            <div className="w-14 h-14 bg-muted text-foreground rounded-full flex items-center justify-center mb-4">
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
            <h4 className="text-xl font-bold text-foreground mb-2">{props.confirmTitle}</h4>
            <p className="text-sm text-muted-foreground">{props.confirmDescription}</p>
          </div>
        </div>

        <CardHeader className={`transition-opacity duration-300 ${showSuccess ? "opacity-30" : "opacity-100"}`}>
          <CardTitle className="text-xl font-semibold">{props.mainTitle}</CardTitle>
        </CardHeader>

        <CardContent className={`transition-opacity duration-300 ${showSuccess ? "opacity-30" : "opacity-100"}`}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Field>
              <FieldLabel htmlFor="name">{props.name}</FieldLabel>
              <Input
                type="text"
                id="name"
                required
                disabled={isSubmitting || showSuccess}
                placeholder={props.namePlaceholder}
                className="rounded-xl px-4 py-3"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">{props.email}</FieldLabel>
              <Input
                type="email"
                id="email"
                required
                disabled={isSubmitting || showSuccess}
                placeholder={props.emailPlaceholder}
                className="rounded-xl px-4 py-3"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="topic">{props.topic}</FieldLabel>
              <Select disabled={isSubmitting || showSuccess} defaultValue="voice">
                <SelectTrigger id="topic" className="rounded-xl px-4 py-3 h-auto">
                  <SelectValue placeholder="Select topic" />
                </SelectTrigger>
                <SelectContent>
                  {/* <SelectItem value="voice">{props.topicField}</SelectItem>
                  <SelectItem value="language">{props.topicField}</SelectItem>
                  <SelectItem value="pilates">{props.topicField}</SelectItem>
                  <SelectItem value="other">{props.topicField}</SelectItem> */}
                  <SelectItem value="voice">1</SelectItem>
                  <SelectItem value="language">2</SelectItem>
                  <SelectItem value="pilates">3</SelectItem>
                  <SelectItem value="other">4</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="message">{props.message}</FieldLabel>
              <Textarea
                id="message"
                required
                rows={4}
                disabled={isSubmitting || showSuccess}
                placeholder={props.messagePlaceholder}
                className="resize-none rounded-xl px-4 py-3"
              />
            </Field>

            <Button
              type="submit"
              disabled={isSubmitting || showSuccess}
              className="mt-4 w-full py-6 rounded-xl text-sm font-semibold transition-all shadow-md"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {props.sendingMessage}
                </>
              ) : (
                props.sendButton
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-1">
              {props.policyText}{" "}
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(true)}
                className="font-medium text-foreground underline underline-offset-2 hover:text-primary transition-colors"
              >
                {props.policyLink}
              </button>
              .
            </p>
          </form>
        </CardContent>
      </Card>

      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col gap-0 p-0 sm:rounded-3xl overflow-hidden">
          <DialogHeader className="px-6 sm:px-8 py-5 border-b border-border bg-background shrink-0">
            <DialogTitle className="text-lg font-semibold text-foreground">{props.policyTitle}</DialogTitle>
            <DialogDescription className="sr-only">Privacy Policy details and terms.</DialogDescription>
          </DialogHeader>

          <div className="p-6 sm:px-8 sm:py-6 overflow-y-auto overscroll-contain">
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <h4 className="text-foreground font-semibold text-base mb-2">1. Introduction</h4>
              <p className="mb-5">
                Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your
                personal information when you contact me through this website.
              </p>

              <h4 className="text-foreground font-semibold text-base mb-2">2. Information I Collect</h4>
              <p className="mb-5">
                When you submit the contact form, I collect the personal data you provide, which includes your{" "}
                <strong>Name</strong>, <strong>Email Address</strong>, and the contents of your <strong>Message</strong>
                .
              </p>

              <h4 className="text-foreground font-semibold text-base mb-2">3. How I Use Your Information</h4>
              <p className="mb-5">
                The information provided is used strictly to respond to your inquiry, discuss potential business
                opportunities, and provide you with the services you requested (e.g., voice acting, language lessons, or
                fitness training). I do not use your email for marketing newsletters unless explicitly requested.
              </p>

              <h4 className="text-foreground font-semibold text-base mb-2">4. Data Sharing & Security</h4>
              <p className="mb-5">
                Your personal information will never be sold, rented, or shared with third parties. All data transmitted
                through this form is sent via secure, encrypted protocols and is stored only as long as necessary to
                fulfill the purpose of your request.
              </p>

              <h4 className="text-foreground font-semibold text-base mb-2">5. Your Rights</h4>
              <p>
                You have the right to request the deletion of any personal data I hold about you. If you wish to have
                your previous communications deleted from my inbox, simply send a direct email to{" "}
                <em>hello@johnthoinn.com</em>.
              </p>
              {/* {props.policyDescription} */}
            </div>
          </div>

          <DialogFooter className="px-6 py-4 sm:px-8 border-t border-border bg-muted/30 shrink-0">
            <Button onClick={() => setIsPrivacyOpen(false)} className="rounded-xl px-6 w-full sm:w-auto">
              {props.policyAgreeButton}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
