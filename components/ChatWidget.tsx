"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface ChatMessageItem {
  id: string;
  role: "user" | "assistant";
  text: string;
}

export default function ChatWidget() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const userMsg: ChatMessageItem = {
      id: crypto.randomUUID(),
      role: "user",
      text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[999] w-[min(100%,360px)] rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-3 shadow-lg">
      <ul className="mb-2 max-h-48 space-y-1 overflow-y-auto text-sm">
        {messages.map((item) => (
          <li
            key={item.id}
            className={
              item.role === "user"
                ? "text-right text-[var(--text-primary)]"
                : "text-left text-[var(--text-secondary)]"
            }
          >
            {item.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="min-w-0 flex-1 rounded border border-[var(--border)] bg-[var(--bg-primary)] px-2 py-1 text-[var(--text-primary)]"
          placeholder="Type a message…"
          aria-label="Chat message"
        />
        <button
          type="submit"
          className="rounded bg-blue px-3 py-1 text-sm text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}
