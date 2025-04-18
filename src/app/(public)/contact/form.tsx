"use client";

import ComponentContainer from "@/components/component-container";
import { Button } from "@/components/dris/button";
import { Input } from "@/components/dris/input";
import { Label } from "@/components/dris/label";
import { Textarea } from "@/components/dris/textarea";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FormEvent, useState } from "react";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    if (form.honeypot.value !== "") {
      setStatus("honey");
      setIsSubmitting(false);
      return;
    }

    fetch("https://api.formscale.dev/s/umaxbwv7", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("form submitted. i'll respond asap.");
          form.reset();

          // Handle success (ex: redirect to success page)
        } else {
          return response.json().then((data: { error: string | string[] }) => {
            const error = data.error || "submission failed. please try again.";
            setStatus(Array.isArray(error) ? error.join(", ") : error.toLowerCase());
          });
        }
      })
      .catch((error) => {
        setStatus(error.message || "network error. please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <ComponentContainer>
      <form className="flex flex-col gap-2 w-full max-w-sm" onSubmit={handleSubmit}>
        <Label htmlFor="email">email*</Label>
        <Input id="email" name="email" variant="minimal" placeholder="elamri@dris.llc" required />
        <Label htmlFor="message">message*</Label>
        <Textarea
          id="message"
          name="message"
          variant="minimal"
          placeholder="write a message.."
          minLength={5}
          required
        />
        <Input id="honeypot" variant="minimal" placeholder="honey" className="hidden" />
        {status && <p className="text-sm text-gray-500 mb-2">{status}</p>}
        <Button variant="aqua" rounded="md" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "click"}
          <ArrowRightIcon />
        </Button>
      </form>
    </ComponentContainer>
  );
}
