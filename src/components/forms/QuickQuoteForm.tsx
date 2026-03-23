"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { LockIcon } from "@/components/svg/icons";

interface QuickQuoteFormProps {
  sourcePageSlug: string;
  sourcePageH1: string;
}

export default function QuickQuoteForm({
  sourcePageSlug,
  sourcePageH1,
}: QuickQuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) {
      setLoading(false);
      return;
    }

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          pickupLocation: "",
          deliveryLocation: "",
          carMakeModel: "",
          sourcePageSlug,
          sourcePageH1,
        }),
      });
      setSubmitted(true);
    } catch {
      // Fail silently for quick form — they can use the full form
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface-card/80 backdrop-blur border border-gold/30 rounded-lg p-6 text-center">
        <p className="text-gold font-display text-lg">We&apos;ll be in touch within 2 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-card/80 backdrop-blur border border-border-subtle rounded-lg p-6"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="flex-1 bg-surface-elevated border border-border-subtle rounded-md px-4 py-3 text-white placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="flex-1 bg-surface-elevated border border-border-subtle rounded-md px-4 py-3 text-white placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 transition-colors"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          className="flex-1 bg-surface-elevated border border-border-subtle rounded-md px-4 py-3 text-white placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 transition-colors"
        />
        <Button type="submit" disabled={loading} className="whitespace-nowrap">
          {loading ? "..." : "Get Quote"}
        </Button>
      </div>

      {/* Honeypot */}
      <input type="text" name="company" className="absolute opacity-0 h-0 w-0 -z-10" tabIndex={-1} autoComplete="off" />

      <div className="flex items-center gap-2 text-xs text-text-secondary mt-3">
        <LockIcon className="text-gold" size={12} />
        <span>Free, no-obligation quote. We respond within 2 hours.</span>
      </div>
    </form>
  );
}
