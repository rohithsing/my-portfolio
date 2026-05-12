
import React, { useState, useRef, useEffect } from 'react';
import { askAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Rohith's AI Assistant. Ask me anything about his skills, experience, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await askAssistant(userMessage);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 shadow-2xl rounded-[2.5rem] border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-zoom-in mb-4">
          {/* Header */}
          <div className="p-6 bg-blue-600 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">R</div>
              <div>
                <h3 className="font-bold text-sm">Portfolio Assistant</h3>
                <p className="text-[10px] opacity-80">Ask me anything about Rohith!</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">✕</button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-tl-none'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 disabled:opacity-50"
                disabled={isLoading}
              >
                ↑
              </button>
            </div>
          </form>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl shadow-2xl flex items-center justify-center text-2xl transition-all hover:scale-110 active:scale-95 group"
        >
          <span className="group-hover:rotate-12 transition-transform">💬</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-50 dark:border-slate-950"></div>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
