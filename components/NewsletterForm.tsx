"use client";
import { subscribeToNewsletter } from "@/actions/newsletter";
import { useState } from "react";
import { toast } from "sonner"; // Atau library toast pilihan Anda

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const result = await subscribeToNewsletter(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Thanks for subscribing!");
      (event.target as HTMLFormElement).reset();
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input name="email" type="email" placeholder="Enter your email" required className="border rounded px-3 py-2" />
      <button disabled={loading} className="bg-primary text-white px-4 py-2 rounded disabled:opacity-50">
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}
