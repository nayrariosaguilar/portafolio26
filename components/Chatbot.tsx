'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { IoChatbubblesOutline, IoClose, IoSend } from 'react-icons/io5';
import { HiCalendar, HiPhone, HiChatBubbleBottomCenter, HiArrowLeft } from 'react-icons/hi2';

type Message = { role: 'bot' | 'user'; content: string };
type Step = 'menu' | 'schedule' | 'call' | 'ask';

export default function Chatbot() {
  const t = useTranslations('Chatbot');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>('menu');

  // Ask mode state
  const [question, setQuestion] = useState('');
  const [askLoading, setAskLoading] = useState(false);

  // Schedule form state
  const [scheduleForm, setScheduleForm] = useState({ name: '', email: '', dateTime: '' });
  const [scheduleLoading, setScheduleLoading] = useState(false);
  const [meetLink, setMeetLink] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'bot', content: t('welcome') }]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, step]);

  const addBotMessage = (content: string) => {
    setMessages((prev) => [...prev, { role: 'bot', content }]);
  };

  const goToStep = (newStep: Step, botMessage: string) => {
    addBotMessage(botMessage);
    setStep(newStep);
  };

  const handleBack = () => {
    setMeetLink('');
    setScheduleForm({ name: '', email: '', dateTime: '' });
    setQuestion('');
    addBotMessage(t('welcome'));
    setStep('menu');
  };

  // Schedule form submit
  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setScheduleLoading(true);

    try {
      const res = await fetch('/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scheduleForm),
      });

      const data = await res.json();

      if (res.ok && data.meetLink) {
        setMeetLink(data.meetLink);
        addBotMessage(`${t('formSuccess')} ${data.meetLink}`);
      } else {
        addBotMessage(t('formError'));
      }
    } catch {
      addBotMessage(t('formError'));
    } finally {
      setScheduleLoading(false);
    }
  };

  // RAG question submit
  const handleAskSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || askLoading) return;

    const userQuestion = question.trim();
    setMessages((prev) => [...prev, { role: 'user', content: userQuestion }]);
    setQuestion('');
    setAskLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userQuestion, locale }),
      });

      const data = await res.json();

      if (data.answer) {
        addBotMessage(data.answer);
      } else {
        addBotMessage(t('askNoResult'));
      }
    } catch {
      addBotMessage(t('askNoResult'));
    } finally {
      setAskLoading(false);
    }
  };

  const inputClasses =
    'w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-500';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[320px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-all dark:border-gray-800 dark:bg-gray-900 sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-black p-4 text-white dark:bg-white dark:text-black">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <h3 className="font-semibold">{t('title')}</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 hover:bg-white/20 transition-colors"
            >
              <IoClose size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm break-words ${
                    msg.role === 'user'
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {askLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce [animation-delay:0ms]">.</span>
                    <span className="animate-bounce [animation-delay:150ms]">.</span>
                    <span className="animate-bounce [animation-delay:300ms]">.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Actions */}
          <div className="border-t border-gray-200 p-3 dark:border-gray-800">
            {/* Menu */}
            {step === 'menu' && (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => goToStep('schedule', t('scheduleInfo'))}
                  className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-black"
                >
                  <HiCalendar size={16} />
                  {t('optionSchedule')}
                </button>
                <button
                  onClick={() => goToStep('call', t('callComingSoon'))}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98] dark:border-gray-700 dark:text-gray-200"
                >
                  <HiPhone size={16} />
                  {t('optionCall')}
                </button>
                <button
                  onClick={() => goToStep('ask', t('askInfo'))}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98] dark:border-gray-700 dark:text-gray-200"
                >
                  <HiChatBubbleBottomCenter size={16} />
                  {t('optionAsk')}
                </button>
              </div>
            )}

            {/* Schedule Form */}
            {step === 'schedule' && (
              <div className="flex flex-col gap-2">
                {!meetLink ? (
                  <form onSubmit={handleScheduleSubmit} className="flex flex-col gap-2">
                    <input
                      type="text"
                      required
                      placeholder={t('formName')}
                      value={scheduleForm.name}
                      onChange={(e) => setScheduleForm((f) => ({ ...f, name: e.target.value }))}
                      className={inputClasses}
                    />
                    <input
                      type="email"
                      required
                      placeholder={t('formEmail')}
                      value={scheduleForm.email}
                      onChange={(e) => setScheduleForm((f) => ({ ...f, email: e.target.value }))}
                      className={inputClasses}
                    />
                    <input
                      type="datetime-local"
                      required
                      value={scheduleForm.dateTime}
                      onChange={(e) => setScheduleForm((f) => ({ ...f, dateTime: e.target.value }))}
                      className={inputClasses}
                    />
                    <button
                      type="submit"
                      disabled={scheduleLoading}
                      className="rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 dark:bg-white dark:text-black"
                    >
                      {scheduleLoading ? t('formSubmitting') : t('formSubmit')}
                    </button>
                  </form>
                ) : null}
                <button
                  onClick={handleBack}
                  className="flex items-center justify-center gap-1 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                >
                  <HiArrowLeft size={14} />
                  {t('back')}
                </button>
              </div>
            )}

            {/* Call - Coming Soon */}
            {step === 'call' && (
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleBack}
                  className="flex items-center justify-center gap-1 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                >
                  <HiArrowLeft size={14} />
                  {t('back')}
                </button>
              </div>
            )}

            {/* Ask - RAG */}
            {step === 'ask' && (
              <div className="flex flex-col gap-2">
                <form onSubmit={handleAskSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder={t('askPlaceholder')}
                    disabled={askLoading}
                    className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                  <button
                    type="submit"
                    disabled={askLoading || !question.trim()}
                    className="text-black transition-transform hover:scale-110 active:scale-95 disabled:opacity-30 dark:text-white"
                  >
                    <IoSend size={20} />
                  </button>
                </form>
                <button
                  onClick={handleBack}
                  className="flex items-center justify-center gap-1 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                >
                  <HiArrowLeft size={14} />
                  {t('back')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition-all hover:scale-110 active:scale-95 dark:bg-white dark:text-black"
      >
        {isOpen ? <IoClose size={28} /> : <IoChatbubblesOutline size={28} />}
      </button>
    </div>
  );
}
