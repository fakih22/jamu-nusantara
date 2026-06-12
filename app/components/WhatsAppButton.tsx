import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6282336618275"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#1e8f5a] hover:bg-[#1a7a4d] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
