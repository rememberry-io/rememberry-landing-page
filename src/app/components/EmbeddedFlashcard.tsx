"use client";
import React, { FormEvent, useState } from "react";

type EmbeddedFlashcardProps = {
  onSuccessfulSubmit: () => void;
};

export default function EmbeddedFlashcard({
  onSuccessfulSubmit,
}: EmbeddedFlashcardProps) {
  const [hasError, setHasError] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email")?.toString()!;

    const response = await fetch("/api/newsletter/submit", {
      method: "POST",
      body: email,
    });

    if (response.ok) {
      console.log("Form submitted");
      onSuccessfulSubmit();
    } else if (response.status === 409) {
      setHasError(true);
      console.error("Email is already registered");
    } else {
      console.error("Submission failed");
    }
  }

  return (
    <div className="max-w-lg mx-10 sm:mx-auto rounded-lg text-center shadow-2xl p-12 sm:max-w-[80%]o">
      <article>
        <h3 className="text-black font-medium text-lg sm:text-2xl">
          {" "}
          Join the waitlist 👀
        </h3>
        <br></br>
        <p className="text-zinc-400 text-xs leading-6 sm:text-base sm:leading-8 pb-4">
          {" "}
          Sign up to be one of the first to enhance your learning experience
          using <span className="font-bold">rememberry</span> 🫐.
        </p>
        <br className="leading-8"></br>
        <div className="relative align-middle">
          <form onSubmit={onSubmit}>
            <div className="relative flex flex-col items-stretch">
              <div className="flex items-center relative">
                <input
                  type="email"
                  className={`flex-grow rounded-l border text-xs text-black p-2 rounded-md pl-3 pr-8 py-2 w-full focus:outline-none ${
                    hasError
                      ? "border-red-500"
                      : "drop-shadow-md focus:border-blue-300"
                  }`}
                  placeholder="Email address"
                  name="email"
                />
                <button
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none text-xs text-zinc-400"
                  type="submit"
                >
                  -&gt;
                </button>
              </div>
              {hasError && (
                <p className="text-red-500 text-xs mt-1">
                  Your email is already registered
                </p>
              )}
            </div>
          </form>
        </div>
      </article>
    </div>
  );
}
