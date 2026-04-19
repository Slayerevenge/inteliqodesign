"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  User,
  AtSign,
  Smartphone,
  Briefcase,
  MessageSquare,
} from "lucide-react";

const services = [
  "Home Interiors",
  "Corporate Interiors",
  "Turnkey Projects",
  "Civil Construction",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = `Hello Inteliqo! I'd like to discuss a project.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Message:* ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/919945688225?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
            Get In Touch
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-[#F4A898] rounded-full" />
          <div className="mt-1 mx-auto w-16 h-1 bg-[#8BB8E8] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-3">
                Let&apos;s discuss your project
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                Whether you&apos;re planning a home renovation, office redesign,
                or a brand-new construction, we&apos;d love to hear from you.
                Reach out and let&apos;s bring your vision to life.
              </p>
            </div>

            <div className="space-y-5">
              {/* Phone */}
              <a
                href="tel:+919945688225"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F4A898]/10 flex items-center justify-center group-hover:bg-[#F4A898]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#F4A898]" />
                </div>
                <div>
                  <p className="text-sm text-[#8A8585]">Phone</p>
                  <p className="text-[#1E1E1E] font-medium">+91 9945688225</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:agk6464@yahoo.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F4A898]/10 flex items-center justify-center group-hover:bg-[#F4A898]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#F4A898]" />
                </div>
                <div>
                  <p className="text-sm text-[#8A8585]">Email</p>
                  <p className="text-[#1E1E1E] font-medium">agk6464@yahoo.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F4A898]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#F4A898]" />
                </div>
                <div>
                  <p className="text-sm text-[#8A8585]">Location</p>
                  <p className="text-[#1E1E1E] font-medium">
                    Bangalore & Mysore, Karnataka, India
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919945688225"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F4A898]/10 flex items-center justify-center group-hover:bg-[#F4A898]/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#F4A898]" />
                </div>
                <div>
                  <p className="text-sm text-[#8A8585]">WhatsApp</p>
                  <p className="text-[#1E1E1E] font-medium">Send us a message</p>
                </div>
              </a>

              {/* Business Hours */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F4A898]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#F4A898]" />
                </div>
                <div>
                  <p className="text-sm text-[#8A8585]">Business Hours</p>
                  <p className="text-[#1E1E1E] font-medium">
                    Mon - Sat, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#FFF7F4] rounded-2xl p-8 border border-[#F0E8E8] space-y-5"
            >
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ADA8A8]" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8DCDA] rounded-lg text-[#1E1E1E] placeholder-[#ADA8A8] focus:outline-none focus:border-[#F4A898] focus:ring-1 focus:ring-[#F4A898] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ADA8A8]" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8DCDA] rounded-lg text-[#1E1E1E] placeholder-[#ADA8A8] focus:outline-none focus:border-[#F4A898] focus:ring-1 focus:ring-[#F4A898] transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ADA8A8]" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8DCDA] rounded-lg text-[#1E1E1E] placeholder-[#ADA8A8] focus:outline-none focus:border-[#F4A898] focus:ring-1 focus:ring-[#F4A898] transition-colors"
                />
              </div>

              {/* Service Dropdown */}
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ADA8A8]" />
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8DCDA] rounded-lg text-[#1E1E1E] focus:outline-none focus:border-[#F4A898] focus:ring-1 focus:ring-[#F4A898] transition-colors appearance-none"
                >
                  <option value="" disabled className="text-[#ADA8A8]">
                    Select a Service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[#ADA8A8]" />
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8DCDA] rounded-lg text-[#1E1E1E] placeholder-[#ADA8A8] focus:outline-none focus:border-[#F4A898] focus:ring-1 focus:ring-[#F4A898] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#1E1E1E] hover:bg-[#F4A898] text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg cursor-pointer"
              >
                <Send className="w-5 h-5" />
                Send via WhatsApp
              </button>

              <p className="text-center text-xs text-[#8A8585]">
                Your message will be sent via WhatsApp for a faster response.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
