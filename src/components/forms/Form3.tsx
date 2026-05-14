"use client";

import React from "react";
import useBookingForm from "@/hooks/useBookingForm";

const formFields = [
  {
    label: "Your Name *",
    name: "name",
    type: "text",
    placeholder: "Full name",
  },
  {
    label: "Company",
    name: "company",
    type: "text",
    placeholder: "Company Name",
  },
  {
    label: "Phone / WhatsApp *",
    name: "phone",
    type: "text",
    placeholder: "+91 XXXXXX XXXXX",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "your@email.com",
  },

  {
    label: "Number of Guests",
    name: "guests",
    type: "text",
    placeholder: "8-25",
  },

  {
    label: "Preferred Dates",
    name: "dates",
    type: "text",
    placeholder: "e.g. 20–22 October 2025",
  },
];

const Form3 = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
  } = useBookingForm({
    includeMessage: true,
  });

  return (
    <div className="max-w-5xl mx-auto border border-secondary/20 bg-linear-to-r from-[#0d1b12] to-[#0a160f] rounded-md p-8 md:p-10">
      <form onSubmit={handleSubmit}>
        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formFields.map((field, index) => (
            <div key={index}>
              <label className="block text-sm uppercase tracking-widest text-[#8f8f84] mb-3">
                {field.label}
              </label>

              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full h-14 px-5 bg-transparent border border-secondary/20 rounded-md text-[#e5dcc7] placeholder:text-[#6f726b] outline-none focus:border-secondary transition"
              />

              {errors[field.name] && (
                <p className="text-red-400 text-sm mt-2">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="mt-10">
          <label className="block text-sm uppercase tracking-widest text-[#8f8f84] mb-3">
            Additional Requirements
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your group, any special requirements, preferred activities..."
            rows={7}
            className="w-full px-5 py-4 bg-transparent border border-secondary/20 rounded-md text-[#e5dcc7] placeholder:text-[#6f726b] outline-none focus:border-secondary transition resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-10 bg-secondary hover:bg-secondary/90 text-black uppercase tracking-[0.2em] text-sm py-5 rounded-md transition duration-300 font-medium disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default Form3;