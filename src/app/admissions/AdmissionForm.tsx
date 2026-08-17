"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Phone, MessageSquare } from "lucide-react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    childName: "",
    dob: "",
    grade: "Montessori 1",
    parentName: "",
    phone: "",
    whatsapp: "",
    address: "",
    transport: "Yes",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Construct prefilled WhatsApp message
    const waText = encodeURIComponent(
      `*New Admission Enquiry - Kids covE School*\n\n` +
      `*Child Name:* ${formData.childName}\n` +
      `*DOB / Age:* ${formData.dob}\n` +
      `*Grade Applying:* ${formData.grade}\n` +
      `*Parent Name:* ${formData.parentName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*WhatsApp:* ${formData.whatsapp || formData.phone}\n` +
      `*Address / Location:* ${formData.address}\n` +
      `*Transportation Required:* ${formData.transport}\n` +
      (formData.message ? `*Notes:* ${formData.message}` : "")
    );

    // Open WhatsApp directly with the enquiry
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
            Enquiry Received! 🎉
          </h3>
          <p className="font-body text-text-body max-w-md mx-auto mb-6 leading-relaxed">
            Thank you for reaching out to Kids covE School of Excellence. Our
            admissions team will contact you shortly to guide you through the
            next steps.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-primary text-white rounded-full font-body font-bold text-sm shadow-md hover:bg-primary-hover transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center sm:text-left mb-6">
            <h3 className="font-heading text-2xl sm:text-3xl text-text-dark">
              Online Admission Enquiry 📝
            </h3>
            <p className="font-body text-xs sm:text-sm text-text-muted mt-1">
              Fill in your details below. You can also directly connect via
              WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Child Name */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Child&apos;s Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Aayan Mohammed"
                value={formData.childName}
                onChange={(e) =>
                  setFormData({ ...formData, childName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark"
              />
            </div>

            {/* Child DOB / Age */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Child&apos;s Date of Birth / Age{" "}
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 15/04/2021 or 4 Years"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Grade Applying For */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Grade Applying For <span className="text-primary">*</span>
              </label>
              <select
                value={formData.grade}
                onChange={(e) =>
                  setFormData({ ...formData, grade: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark bg-white"
              >
                <option value="Montessori 1">Montessori 1 (Age 2.5+)</option>
                <option value="Montessori 2">Montessori 2 (Age 3.5+)</option>
                <option value="Montessori 3">Montessori 3 (Age 4.5+)</option>
                <option value="Montessori 4 (Grade 1)">
                  Montessori 4 (Grade 1)
                </option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
              </select>
            </div>

            {/* Parent / Guardian Name */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Parent / Guardian Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ibrahim K"
                value={formData.parentName}
                onChange={(e) =>
                  setFormData({ ...formData, parentName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Primary Phone Number <span className="text-primary">*</span>
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
            {/* Residential Location */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                Address / Location <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ozhukur, Mongam, Morayur"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark"
              />
            </div>

            {/* Transportation Requirement */}
            <div>
              <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
                School Bus Transport Required?
              </label>
              <select
                value={formData.transport}
                onChange={(e) =>
                  setFormData({ ...formData, transport: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark bg-white"
              >
                <option value="Yes">Yes, Bus Transport Required</option>
                <option value="No">No, Self-Arranged Transport</option>
              </select>
            </div>
          </div>

          {/* Notes / Message */}
          <div>
            <label className="block font-body font-bold text-xs sm:text-sm text-text-dark mb-1.5">
              Any Specific Query or Questions? (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Tell us any specific requirements, previous schooling, or queries..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 font-body text-sm text-text-dark resize-none"
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              className="w-full sm:flex-1 py-4 bg-gradient-to-r from-primary to-accent-pink text-white rounded-full font-body font-bold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit &amp; Chat on WhatsApp</span>
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
