"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export default function ChatWidget() {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://progen5.app.n8n.cloud/webhook/13040d38-35b9-4b6e-a715-d13c7166b55a/chat",
      mode: "window",
      showWelcomeScreen: false,
      loadPreviousSession: true,
      initialMessages: [
        "Hey there! 👋",
        "Welcome to Progen5! I am here to help you build your startup 🚀",
        "Ask me anything about our services, pricing or how we work!",
      ],
      i18n: {
        en: {
          title: "Progen5 Assistant 🚀",
          subtitle: "Ask us anything about building your startup!",
          footer: "",
          getStarted: "Start Chat",
          inputPlaceholder: "Ask about our services...",
          closeButtonTooltip: "Close chat",
        },
      },
    });
  }, []);

  return null;
}
