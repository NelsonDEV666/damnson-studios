"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { LoadingSpinner } from "@/components/ui/loading";

interface DemoSubmissionForm {
  artistName: string;
  email: string;
  genre: string;
  trackLink: string;
}

interface SubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
  successMessage?: string;
}

type FormErrors = Partial<Record<keyof DemoSubmissionForm, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SOUNDCLOUD_REGEX = /^https?:\/\/(?:www\.)?soundcloud\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+/;
const DROPTRACK_REGEX = /^https?:\/\/(?:www\.)?droptrack\.com\/[a-zA-Z0-9-]+/;
const DIRECT_WAV_REGEX = /^https?:\/\/[^\s]+\.wav$/i;
const PRIVATE_LINK_REGEX = /^https?:\/\/[^\s]+\/(?:private|listen|share)\/[a-zA-Z0-9-]+/;

function isValidTrackLink(link: string): boolean {
  return (
    SOUNDCLOUD_REGEX.test(link) ||
    DROPTRACK_REGEX.test(link) ||
    DIRECT_WAV_REGEX.test(link) ||
    PRIVATE_LINK_REGEX.test(link)
  );
}

const INITIAL_FORM: DemoSubmissionForm = {
  artistName: "",
  email: "",
  genre: "",
  trackLink: "",
};

export function DemoSubmission() {
  const [formData, setFormData] = useState<DemoSubmissionForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<SubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  });

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!formData.artistName.trim() || formData.artistName.trim().length < 2) {
      next.artistName = "Artist name is required (minimum 2 characters).";
    }
    if (!formData.email.trim()) {
      next.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!formData.genre.trim() || formData.genre.trim().length < 2) {
      next.genre = "Genre is required (minimum 2 characters).";
    }
    if (!formData.trackLink.trim()) {
      next.trackLink = "A track link is required.";
    } else if (!isValidTrackLink(formData.trackLink)) {
      next.trackLink = "Provide a valid SoundCloud, DropTrack, or direct WAV link.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof DemoSubmissionForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ isSubmitting: false, isSuccess: false, isError: false });

    if (!validate()) return;

    setState((prev) => ({ ...prev, isSubmitting: true, isError: false }));

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Demo submission failed. Please try again.");
      }

      setState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        successMessage: result.message,
      });
      setFormData(INITIAL_FORM);
    } catch (err) {
      setState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: err instanceof Error ? err.message : "An unexpected error occurred.",
      });
    }
  };

  const inputClass = (field: keyof DemoSubmissionForm) => `
    w-full bg-void border ${errors[field] ? "border-red-500" : "border-border"} rounded-lg px-4 py-3
    font-body text-sm text-white placeholder-muted/50
    focus:outline-none focus:border-neon focus:shadow-neon
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const labelClass = "font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-1 block";

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 glass rounded-3xl p-8 md:p-10">
        <div>
          <label htmlFor="artistName" className={labelClass}>Artist / Project Name *</label>
          <input
            id="artistName"
            name="artistName"
            value={formData.artistName}
            onChange={handleChange}
            placeholder="e.g., Cokeboii Abraxas"
            className={inputClass("artistName")}
            disabled={state.isSubmitting}
          />
          {errors.artistName && <p className="text-red-500 text-xs mt-1">{errors.artistName}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass("email")}
            disabled={state.isSubmitting}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="genre" className={labelClass}>Genre *</label>
          <input
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Hip-Hop, R&B, Drill…"
            className={inputClass("genre")}
            disabled={state.isSubmitting}
          />
          {errors.genre && <p className="text-red-500 text-xs mt-1">{errors.genre}</p>}
        </div>

        <div>
          <label htmlFor="trackLink" className={labelClass}>Track Link *</label>
          <input
            id="trackLink"
            name="trackLink"
            type="url"
            value={formData.trackLink}
            onChange={handleChange}
            placeholder="https://soundcloud.com/your-private-track"
            className={inputClass("trackLink")}
            disabled={state.isSubmitting}
          />
          {errors.trackLink && <p className="text-red-500 text-xs mt-1">{errors.trackLink}</p>}
          <p className="text-[0.65rem] text-muted/50 mt-1">
            Private SoundCloud, DropTrack, or direct WAV file links accepted.
          </p>
        </div>

        <button
          type="submit"
          disabled={state.isSubmitting}
          className="
            mt-2 w-full flex items-center justify-center gap-3
            bg-neon text-void
            font-body font-bold text-sm tracking-[0.1em] uppercase
            px-6 py-4 rounded-lg
            hover:bg-[#d17fff] hover:shadow-neon
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
          "
        >
          {state.isSubmitting ? (
            <>
              <LoadingSpinner size="sm" />
              Sending…
            </>
          ) : (
            "Submit Demo"
          )}
        </button>

        {state.isError && state.errorMessage && (
          <div className="bg-red-500/10 border border-red-500/40 rounded-lg p-4 text-red-400 text-sm">
            {state.errorMessage}
          </div>
        )}
      </form>

      {state.isSuccess && (
        <div
          className="
            fixed bottom-6 right-6 z-50 max-w-md w-[90vw] sm:w-full
            glass rounded-2xl p-6
            border border-neon/40 shadow-neon
            animate-slideUp
          "
        >
          <div className="flex items-start gap-4">
            <span className="text-neon text-xl">⚡</span>
            <div>
              <h4 className="font-display text-lg tracking-widest text-white uppercase">
                Demo Submitted
              </h4>
              <p className="text-muted text-sm mt-1 leading-relaxed">
                {state.successMessage || "Your demo has been received. We'll be in touch soon."}
              </p>
              <button
                onClick={() => setState((prev) => ({ ...prev, isSuccess: false }))}
                className="mt-3 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-neon hover:text-[#d17fff] transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
