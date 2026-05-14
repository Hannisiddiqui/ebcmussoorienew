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
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "your@email.com",
  },
  {
    label: "Phone / WhatsApp *",
    name: "phone",
    type: "text",
    placeholder: "+91 XXXXXX XXXXX",
  },
  {
    label: "Preferred Dates",
    name: "dates",
    type: "text",
    placeholder: "e.g. 20–22 October 2025",
  },
  {
    label: "Number of Guests",
    name: "guests",
    type: "number",
    placeholder: "2",
  },
  {
    label: "Room Type",
    name: "roomType",
    type: "select",
    placeholder: "Select a room (optional)",
    options: [
      "Andrew's Villa",
      "Twin Luxury Cottages",
      "The Zenith",
      "Surveyor Suite",
      "The Surveyor",
      "The Glamper",
      "The Camper",
    ],
  },
];

const Form2 = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useBookingForm({
    includeCheckIn: false,
    includeCheckOut: false,
    includeMessage: true,
    onSubmitSuccess: () => {
      console.log("Form submitted successfully!");
    },
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

              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name as keyof typeof formData] || ""}
                  onChange={handleChange}
                  className="w-full h-14 px-5 bg-transparent border border-secondary/20 rounded-md text-[#e5dcc7] outline-none focus:border-secondary transition"
                >
                  <option value="" className="bg-[#102117] text-[#d6d0be]">
                    {field.placeholder}
                  </option>

                  {field.options?.map((option, i) => (
                    <option
                      key={i}
                      value={option}
                      className="bg-[#102117] text-[#d6d0be]"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <div>
                  <input
                    type={field.type}
                    name={field.name}
                    value={
                      formData[field.name as keyof typeof formData] || ""
                    }
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`w-full h-14 px-5 bg-transparent border rounded-md text-[#e5dcc7] placeholder:text-[#6f726b] outline-none focus:border-secondary transition ${
                      errors[field.name as keyof typeof errors]
                        ? "border-red-500"
                        : "border-secondary/20"
                    }`}
                  />

                  {errors[field.name as keyof typeof errors] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name as keyof typeof errors]}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="mt-10">
          <label className="block text-sm uppercase tracking-widest text-[#8f8f84] mb-3">
            Message / Special Requirements
          </label>

          <textarea
            name="message"
            value={formData.message || ""}
            onChange={handleChange}
            placeholder="Tell us about your stay — occasion, any special requests, questions..."
            rows={7}
            className="w-full px-5 py-4 bg-transparent border border-secondary/20 rounded-md text-[#e5dcc7] placeholder:text-[#6f726b] outline-none focus:border-secondary transition resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-10 bg-secondary hover:bg-secondary/90 text-black uppercase tracking-[0.2em] text-sm py-5 rounded-md transition duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>

        {/* Success Message */}
        <p className="text-center text-[#7d7d73] text-sm mt-6">
          {submitSuccess &&
            "Thank you! We'll respond within 2 hours."}
        </p>
      </form>
    </div>
  );
};

export default Form2;