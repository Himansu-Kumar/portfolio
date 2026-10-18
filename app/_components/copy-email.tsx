"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "copied" | "failed";

// Copies the address to the clipboard. Falls back to a temporary textarea
// where the Clipboard API is unavailable (e.g. non-secure contexts).
async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  const ok = document.execCommand("copy");
  area.remove();
  if (!ok) throw new Error("copy failed");
}

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function handleCopy() {
    try {
      await copyText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2000);
  }

  const label =
    status === "copied" ? "Copied" : status === "failed" ? "Couldn’t copy" : "Copy address";

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="link-underline -my-3 inline-flex min-h-11 cursor-pointer items-center py-3 font-mono text-[0.75rem] text-fg-soft hover:text-fg focus-visible:text-fg"
      >
        <span className={status === "copied" ? "text-accent" : undefined}>{label}</span>
        <span className="sr-only"> ({email})</span>
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied"
          ? "Email address copied to clipboard"
          : status === "failed"
            ? "Could not copy the email address"
            : ""}
      </span>
    </>
  );
}
