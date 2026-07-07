import { content } from "@/lib/content";
import Section from "../Section";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
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
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-rose-400 mb-6">Contact Information</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            I am currently open to new opportunities and collaborations. Feel free to reach out to me via email or phone.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start group">
                            <div className="p-4 bg-white/5 backdrop-blur-md shadow-lg border border-white/10 text-cyan-400 rounded-2xl mr-5 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email</h4>
                                <a href={`mailto:${content.personal.email}`} className="text-lg font-bold text-slate-200 hover:text-cyan-400 transition-colors">
                                    {content.personal.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="p-4 bg-white/5 backdrop-blur-md shadow-lg border border-white/10 text-cyan-400 rounded-2xl mr-5 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</h4>
                                <a href={`tel:${content.personal.phone.replace(/\s+/g, '')}`} className="text-lg font-bold text-slate-200 hover:text-cyan-400 transition-colors">
                                    {content.personal.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="p-4 bg-white/5 backdrop-blur-md shadow-lg border border-white/10 text-cyan-400 rounded-2xl mr-5 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Location</h4>
                                <p className="text-lg font-bold text-slate-200">
                                    {content.personal.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                    <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/20 via-blue-500/10 to-transparent rounded-bl-full -z-10" />
                        <form
                            action={`mailto:${content.personal.email}`}
                            method="GET"
                            encType="text/plain"
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="subject"
                                        className="w-full px-5 py-4 rounded-xl border border-white/10 bg-[#0f172a]/50 focus:bg-[#0f172a]/80 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder-slate-500 text-slate-200 shadow-inner"
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
                                        className="w-full px-5 py-4 rounded-xl border border-white/10 bg-[#0f172a]/50 focus:bg-[#0f172a]/80 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder-slate-500 text-slate-200 shadow-inner"
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
                                    name="body"
                                    rows={5}
                                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-[#0f172a]/50 focus:bg-[#0f172a]/80 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder-slate-500 text-slate-200 shadow-inner resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(8,-145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,-145,178,0.6)] hover:-translate-y-1"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </Section>
    );
}
