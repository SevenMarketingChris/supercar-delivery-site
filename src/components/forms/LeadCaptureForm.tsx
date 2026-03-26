"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { LockIcon } from "@/components/svg/icons";

interface LeadCaptureFormProps {
  deliveryLocation?: string;
  sourcePageSlug: string;
  sourcePageH1: string;
}

export default function LeadCaptureForm({
  deliveryLocation = "",
  sourcePageSlug,
  sourcePageH1,
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("website")) {
      setLoading(false);
      return;
    }

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      pickupLocation: data.get("pickupLocation"),
      deliveryLocation: data.get("deliveryLocation"),
      carMakeModel: data.get("carMakeModel"),
      message: data.get("message"),
      sourcePageSlug,
      sourcePageH1,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface-card border border-gold/30 rounded-lg p-8 text-center" role="alert">
        <div className="text-gold text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-display text-text-heading mb-2">Quote Request Received</h3>
        <p className="text-text-secondary">
          Thank you. We&apos;ll be in touch within 2 hours with your personalised quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-card border border-border-subtle rounded-lg p-6 md:p-8"
      id="quote"
    >
      <h3 className="text-xl font-display text-text-heading mb-1">
        Get Your Free Quote
      </h3>
      <p className="text-sm text-text-secondary mb-6">
        Tell us about your shipment and we&apos;ll respond within 2 hours.
      </p>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          required
          className="w-full bg-surface-elevated border border-border-subtle rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          className="w-full bg-surface-elevated border border-border-subtle rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 transition-colors"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
          className="w-full bg-surface-elevated border border-border-subtle rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 transition-colors"
        />
        <input
          type="text"
          name="pickupLocation"
          placeholder="Pickup Location *"
          required
          className="w-full bg-surface-elevated border border-border-subtle rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 transition-colors"
        />
        <input
          type="text"
          name="deliveryLocation"
          placeholder="Delivery Location *"
          required
          defaultValue={deliveryLocation}
          className="w-full bg-surface-elevated border border-border-subtle rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 transition-colors"
        />
        <input
          type="text"
          name="carMakeModel"
          placeholder="Car Make & Model *"
          required
          className="w-full bg-surface-elevated border border-border-subtle rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 transition-colors"
        />
        <textarea
          name="message"
          placeholder="Additional Notes (optional)"
          rows={3}
          className="w-full bg-surface-elevated border border-border-subtle rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 transition-colors resize-none"
        />

        {/* Honeypot */}
        <input
          type="text"
          name="website"
          className="absolute opacity-0 h-0 w-0 -z-10"
          tabIndex={-1}
          autoComplete="off"
        />

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Get My Free Quote"}
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-text-secondary">
          <LockIcon className="text-gold" size={14} />
          <span>Your details are secure and never shared</span>
        </div>
      </div>
    </form>
  );
}
