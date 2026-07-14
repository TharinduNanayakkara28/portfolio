"use client";

import { content } from "@/lib/content";
import Section from "../Section";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

// 1. Go to https://web3forms.com, enter your Gmail, and copy the access key it emails you.
// 2. Paste it here, replacing the placeholder below. That's the only setup needed.
const WEB3FORMS_ACCESS_KEY = "31d434a6-1367-495f-9c39-0e86f2d1eb47";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("sending");
        setErrorMsg("");

        const formData = new FormData(form);
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);
        formData.append("subject", `New portfolio message from ${formData.get("name")}`);
        formData.append("from_name", "Portfolio Contact Form");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
                setErrorMsg(data.message || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setErrorMsg("Network error — please check your connection and try again.");
        }
    }

    return (
        <Section
            id="contact"
            title="Get In Touch"
            subtitle="Have a question or want to work together? Let's connect."
        >
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h3 className="eyebrow text-sm text-[#8b8d93] mb-6">Contact Information</h3>
                        <p className="text-[#8b8d93] mb-8 leading-relaxed">
                            I am currently open to new opportunities and collaborations. Feel free to reach out to me via email or phone.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start group">
                            <div className="enigma-tile p-4 text-[#2f6bff] rounded-2xl mr-5 shrink-0 transition-transform duration-300 group-hover:scale-105">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="eyebrow text-xs text-[#5c5e65] mb-1">Email</h4>
                                <a href={`mailto:${content.personal.email}`} className="text-lg font-bold text-[#f4f5f7] hover:text-[#2f6bff] transition-colors">
                                    {content.personal.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="enigma-tile p-4 text-[#2f6bff] rounded-2xl mr-5 shrink-0 transition-transform duration-300 group-hover:scale-105">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="eyebrow text-xs text-[#5c5e65] mb-1">Phone</h4>
                                <a href={`tel:${content.personal.phone.replace(/\s+/g, '')}`} className="text-lg font-bold text-[#f4f5f7] hover:text-[#2f6bff] transition-colors">
                                    {content.personal.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="enigma-tile p-4 text-[#2f6bff] rounded-2xl mr-5 shrink-0 transition-transform duration-300 group-hover:scale-105">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="eyebrow text-xs text-[#5c5e65] mb-1">Location</h4>
                                <p className="text-lg font-bold text-[#f4f5f7]">
                                    {content.personal.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                    <div className="enigma-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,_rgba(47,107,255,0.12),_transparent_70%)] -z-10" />
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Honeypot — hidden from humans, catches bots */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-2 focus:ring-[#2f6bff] focus:border-transparent outline-none transition-all placeholder-[#5c5e65] text-[#f4f5f7] shadow-inner"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-2 focus:ring-[#2f6bff] focus:border-transparent outline-none transition-all placeholder-[#5c5e65] text-[#f4f5f7] shadow-inner"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-2 focus:ring-[#2f6bff] focus:border-transparent outline-none transition-all placeholder-[#5c5e65] text-[#f4f5f7] shadow-inner resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                    required
                                ></textarea>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="btn-accent eyebrow inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 text-xs rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "sending" ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            Sending
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>

                                {status === "success" && (
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                                        <CheckCircle2 size={18} />
                                        Message sent — I&apos;ll get back to you soon.
                                    </span>
                                )}
                                {status === "error" && (
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-rose-400">
                                        <AlertCircle size={18} />
                                        {errorMsg}
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </Section>
    );
}
