'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function ChatWidget() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !(window as any).chatInitialized) {
      createChat({
        webhookUrl: 'https://progen5.app.n8n.cloud/webhook/13040d38-35b9-4b6e-a715-d13c7166b55a/chat',
        showWelcomeScreen: true,
        initialMessages: [
          'Hey 👋',
          'Welcome to Progen5 - we turn startup ideas into real products 🚀'
        ]
      });

      (window as any).chatInitialized = true;
    }
  }, []);

  return null;
}