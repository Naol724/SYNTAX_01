"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Github, Linkedin, Instagram, MessageSquare } from "lucide-react";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { insertContactMessageSchema, type InsertContactMessage } from "@/shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => { setSubmitted(true); form.reset(); },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <div className="glass rounded-full inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium mb-7">
            <MessageSquare className="w-3.5 h-3.5 text-blue-300" /> 24-Hour Response Guaranteed
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-6">Get In Touch</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none"><path d="M0 48L1440 48L1440 16C1200 48 960 0 720 16C480 32 240 0 0 16L0 48Z" className="fill-gray-50 dark:fill-gray-900"/></svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">Contact Information</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Visit our office or reach us online — we're available Mon–Sat.</p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: <MapPin className="w-4 h-4" />, label: "Address", val: "Bole Dembel, Amir Commercial Complex\nAddis Ababa, Ethiopia", color: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400" },
                  { icon: <Phone className="w-4 h-4" />, label: "Phone", val: "+251 945 455 141\n+251 940 023 840", color: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400" },
                  { icon: <Mail className="w-4 h-4" />, label: "Email", val: "syntaxsoftwaresolution@gmail.com", color: "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400" },
                  { icon: <Clock className="w-4 h-4" />, label: "Hours", val: "Mon–Fri: 8AM–6PM\nSat: 9AM–4PM\nSupport: 24/7", color: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-gray-800 dark:text-gray-200 text-sm mt-0.5 whitespace-pre-line leading-relaxed">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Follow Us</p>
                <div className="flex flex-col gap-2">
                  {[
                    { icon: <Github className="w-4 h-4" />, label: "SYTAXSOFTWARESOLUTIONS", href: "https://github.com/SYTAXSOFTWARESOLUTIONS", color: "hover:bg-gray-100 dark:hover:bg-gray-700" },
                    { icon: <Linkedin className="w-4 h-4" />, label: "syntax-software-solutions", href: "https://linkedin.com/company/syntax-software-solutions", color: "hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-700 dark:text-blue-400" },
                    { icon: <Instagram className="w-4 h-4" />, label: "syntax.software.solution", href: "https://instagram.com/syntax.software.solution", color: "hover:bg-pink-50 dark:hover:bg-pink-900/20 text-pink-600 dark:text-pink-400" },
                  ].map((s) => (
                    <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-gray-600 dark:text-gray-300 text-sm ${s.color}`}>
                      {s.icon}
                      <span className="font-medium text-xs">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 animate-pulse-ring">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-700 dark:text-blue-300">24-Hour Response</p>
                  <p className="text-xs text-blue-600/80 dark:text-blue-400/80 mt-0.5">We respond to every inquiry on business days.</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                <div className="px-8 pt-8 pb-6 border-b border-gray-100 dark:border-gray-700">
                  <h2 className="text-xl font-black text-gray-900 dark:text-white">Send Us a Message</h2>
                  <p className="text-sm text-gray-400 mt-1">Fill in the form and we'll get back to you shortly.</p>
                </div>

                <div className="p-8">
                  {submitted ? (
                    <div className="text-center py-12 animate-scale-in">
                      <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-200/50 dark:shadow-green-900/20">
                        <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Message Sent! 🎉</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-1">Thanks for reaching out to Syntax Software Solutions.</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">We'll respond within 24 hours.</p>
                      <button onClick={() => setSubmitted(false)} className="btn-outline">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      {mutation.isError && (
                        <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl mb-6 text-sm text-red-700 dark:text-red-400 animate-scale-in">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <span>Something went wrong. Please try again or email us directly.</span>
                        </div>
                      )}

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit((d) => mutation.mutate(d))} className="space-y-5">
                          <div className="grid sm:grid-cols-2 gap-5">
                            <FormField control={form.control} name="name" render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Abebe Kebede" className="field h-11 rounded-xl" {...field} />
                                </FormControl>
                                <FormMessage className="text-xs" />
                              </FormItem>
                            )} />
                            <FormField control={form.control} name="email" render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Email Address</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="abebe@example.com" className="field h-11 rounded-xl" {...field} />
                                </FormControl>
                                <FormMessage className="text-xs" />
                              </FormItem>
                            )} />
                          </div>

                          <FormField control={form.control} name="subject" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="I'd like to build a mobile app..." className="field h-11 rounded-xl" {...field} />
                              </FormControl>
                              <FormMessage className="text-xs" />
                            </FormItem>
                          )} />

                          <FormField control={form.control} name="message" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                                  rows={6}
                                  className="field rounded-xl resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs" />
                            </FormItem>
                          )} />

                          <button
                            type="submit"
                            disabled={mutation.isPending}
                            className="btn-primary w-full justify-center h-12 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {mutation.isPending ? (
                              <>
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                Send Message
                              </>
                            )}
                          </button>
                        </form>
                      </Form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
