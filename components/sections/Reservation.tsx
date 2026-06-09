'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck, Check, Loader2, MessageCircle, PartyPopper } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { restaurant } from '@/lib/data';
import { cn } from '@/lib/utils';

type Fields = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  request: string;
};

const occasions = ['Casual Dining', 'Birthday', 'Anniversary', 'Family Get-together', 'Business Meal', 'Other'];

const empty: Fields = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  guests: '2',
  occasion: 'Casual Dining',
  request: '',
};

export function Reservation() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setF((p) => ({ ...p, [k]: e.target.value }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!f.name.trim()) e.name = 'Please enter your name';
    if (!/^[+\d][\d\s-]{8,14}$/.test(f.phone.trim())) e.phone = 'Enter a valid phone number';
    if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email';
    if (!f.date) e.date = 'Pick a date';
    if (!f.time) e.time = 'Pick a time';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setState('sending');
    // Front-end demo: simulate request, then show success. Wire to an API/WhatsApp on launch.
    setTimeout(() => setState('done'), 1100);
  };

  const waMessage = `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(
    `Hi Aarohi! Table reservation:\nName: ${f.name}\nPhone: ${f.phone}\nDate: ${f.date}\nTime: ${f.time}\nGuests: ${f.guests}\nOccasion: ${f.occasion}${f.request ? `\nNote: ${f.request}` : ''}`
  )}`;

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reserve" className="section relative overflow-hidden bg-forest-radial text-cream">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-px relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left pitch */}
        <div className="lg:col-span-5">
          <SectionHeading
            light
            align="left"
            kicker="Reserve a Table"
            title={<>Book your seat at Aarohi</>}
            subtitle="Tell us when you're coming and how many — we'll keep a warm, fresh table ready for you."
          />
          <Reveal delay={3}>
            <ul className="mt-8 flex flex-col gap-3 text-sm text-cream/75">
              {[
                'Instant confirmation on call or WhatsApp',
                'Special seating for families & groups',
                'Let us know about birthdays & anniversaries',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/20 text-gold-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Form card */}
        <div className="lg:col-span-7">
          <Reveal delay={1}>
            <div className="rounded-3xl border border-cream/10 bg-cream-100 p-6 text-forest shadow-luxe md:p-8">
              <AnimatePresence mode="wait">
                {state === 'done' ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
                      <PartyPopper className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 font-serif text-2xl font-semibold text-forest">
                      Reservation request received!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-forest-700/70">
                      Thank you, {f.name.split(' ')[0] || 'guest'}. To confirm instantly, send us the
                      details on WhatsApp or give us a quick call.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <a href={waMessage} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <MessageCircle className="h-4 w-4" /> Confirm on WhatsApp
                      </a>
                      <button
                        onClick={() => {
                          setF(empty);
                          setState('idle');
                        }}
                        className="btn-ghost"
                      >
                        New booking
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={submit}
                    noValidate
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    <Field label="Full name" error={errors.name} className="sm:col-span-1">
                      <input className="inp" value={f.name} onChange={set('name')} placeholder="Your name" />
                    </Field>
                    <Field label="Phone" error={errors.phone}>
                      <input className="inp" value={f.phone} onChange={set('phone')} placeholder="+91 9XXXXXXXXX" inputMode="tel" />
                    </Field>
                    <Field label="Email (optional)" error={errors.email} className="sm:col-span-2">
                      <input className="inp" value={f.email} onChange={set('email')} placeholder="you@email.com" inputMode="email" />
                    </Field>
                    <Field label="Date" error={errors.date}>
                      <input className="inp" type="date" min={today} value={f.date} onChange={set('date')} />
                    </Field>
                    <Field label="Time" error={errors.time}>
                      <input className="inp" type="time" value={f.time} onChange={set('time')} />
                    </Field>
                    <Field label="Guests">
                      <select className="inp" value={f.guests} onChange={set('guests')}>
                        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((g) => (
                          <option key={g} value={g}>
                            {g} {g === '1' ? 'guest' : 'guests'}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Occasion">
                      <select className="inp" value={f.occasion} onChange={set('occasion')}>
                        {occasions.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Special request (optional)" className="sm:col-span-2">
                      <textarea
                        className="inp min-h-[84px] resize-y"
                        value={f.request}
                        onChange={set('request')}
                        placeholder="High chair, quiet corner, Jain food, cake…"
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={state === 'sending'}
                      className="btn-gold sm:col-span-2 !py-3.5"
                    >
                      {state === 'sending' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          <CalendarCheck className="h-4 w-4" /> Request Reservation
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-forest-700/50 sm:col-span-2">
                      We&apos;ll confirm by phone/WhatsApp. No payment needed to book.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        :global(.inp) {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgba(14, 59, 46, 0.15);
          background: #fffdf8;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: #0a2c22;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.inp:focus) {
          border-color: #c8a04b;
          box-shadow: 0 0 0 3px rgba(200, 160, 75, 0.25);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn('block', className)}>
      <span className="mb-1.5 block text-sm font-medium text-forest-700/80">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-ember-600">{error}</span>}
    </label>
  );
}
