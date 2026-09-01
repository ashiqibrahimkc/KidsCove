"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Phone } from "lucide-react";

const positions = [
  "Grade Teacher",
  "Montessori Teacher",
  "Driver",
  "House Keeping",
  "Administration",
];

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    position: positions[0],
    expectedSalary: "",
    qualification: "",
    experience: "",
    cvNote: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const waText = encodeURIComponent(
      `*Job Application - Kids covE School*\n\n` +
      `*Full Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*WhatsApp:* ${formData.whatsapp || formData.phone}\n` +
      `*Position Applied For:* ${formData.position}\n` +
      `*Expected Salary:* ${formData.expectedSalary}\n` +
      `*Qualification:* ${formData.qualification}\n` +
      (formData.experience ? `*Experience:* ${formData.experience}\n` : "") +
      (formData.cvNote ? `*CV / Details:* ${formData.cvNote}\n` : "") +
      `\n_I will share my CV and certificates in this chat._`
    );

    window.open(`https://wa.me/918113000247?text=${waText}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-xl border border-primary/20">
      {submitted ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-accent-green/20 text-accent-green rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl text-text-dark mb-2">
            Application Sent! 🎉
          </h3>
          <p className="font-body text-text-body max-w-md mx-auto mb-4 leading-relaxed">
            Thank you for your interest in joining Kids covE School of
            Excellence. Our team will review your application and get back to
            you shortly.
          </p>
          <p className="font-body text-xs text-text-muted mb-6">
            Please share your CV and certificates as attachments in the WhatsApp
            conversation.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-primary text-white rounded-full font-body font-bold text-sm shadow-md hover:bg-primary-hover transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center sm:text-left mb-6">
            <h3 className="font-heading text-2xl sm:text-3xl text-text-dark">
              Job Application Form 📝
            </h3>
            <p className="font-body text-xs sm:text-sm text-text-muted mt-1">
              Fill in your details below. Your application will be sent directly
              via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Kumar"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark"
              />
            </div>

            {/* Position Applied For */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Position Applied For <span className="text-primary">*</span>
              </label>
              <select
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark bg-white"
              >
                {positions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Phone Number <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 9876543210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                WhatsApp Number (if different)
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 9876543210"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Expected Salary */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Expected Salary <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. ₹15,000 / month"
                value={formData.expectedSalary}
                onChange={(e) =>
                  setFormData({ ...formData, expectedSalary: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark"
              />
            </div>

            {/* Qualification */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Qualification <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. B.Ed, D.El.Ed, SSLC, Plus Two"
                value={formData.qualification}
                onChange={(e) =>
                  setFormData({ ...formData, qualification: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark"
              />
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
              Experience (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. 3 years as Primary Teacher at XYZ School"
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark"
            />
          </div>

          {/* CV / Cover Note */}
          <div>
            <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
              Brief CV / Cover Note (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Briefly describe your skills, certifications, and why you'd like to join Kids covE..."
              value={formData.cvNote}
              onChange={(e) =>
                setFormData({ ...formData, cvNote: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark resize-none"
            />
            <p className="font-body text-xs text-text-muted mt-1.5">
              You can share your full CV and certificates as attachments in the
              WhatsApp conversation after submitting.
            </p>
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              className="w-full sm:flex-1 py-4 bg-gradient-to-r from-primary to-accent-pink text-white rounded-full font-body font-bold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit &amp; Send via WhatsApp</span>
            </button>
            <a
              href="tel:+918113000247"
              className="w-full sm:w-auto px-6 py-4 bg-gray-100 text-text-dark rounded-full font-body font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call 811 3000 247</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
