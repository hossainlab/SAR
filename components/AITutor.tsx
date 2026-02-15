
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { askTutor } from '../services/geminiService';

const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hello! I'm VizBot, your R data visualization assistant. Got a question about ggplot2, ggpubr, or tidyplots? I'm here to help!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const result = await askTutor(userMsg, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: result }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I had a momentary lapse. Could you ask that again?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] md:h-[600px] bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-900 p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-md">VB</div>
          <div>
            <h3 className="text-white font-semibold text-xs md:text-sm">VizBot Assistant</h3>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
              <span className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest">Active Now</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50 custom-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
            <div className={`max-w-[90%] md:max-w-[80%] p-3 md:p-4 rounded-2xl text-xs md:text-sm shadow-sm ${
              m.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
            }`}>
              <div className="prose prose-sm prose-slate max-w-none break-words">
                {m.content.split('\n').map((line, idx) => (
                  <p key={idx} className="mb-2 last:mb-0">{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex space-x-1.5">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 md:p-4 bg-white border-t border-slate-100 shrink-0">
        <div className="flex items-center space-x-2 bg-slate-100 rounded-full px-4 py-1.5 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all border border-transparent focus-within:border-indigo-100">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            className="flex-grow bg-transparent text-xs md:text-sm py-2 outline-none text-slate-700"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-all disabled:opacity-30 disabled:scale-95 transform active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AITutor;
