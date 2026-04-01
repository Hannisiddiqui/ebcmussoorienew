"use client";

import useBookingForm from "@/hooks/useBookingForm";
import { countries } from "@/utils/countryCode";
import React from "react";

const Form1 = () => {
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeMessage: true,
    onSubmitSuccess: () => {},
  });
  const formFields = [
    {
      name: "name",
      label: "Full Name*",
      type: "text",
      value: formData.name,
      onChange: handleChange,
    },
    {
      name: "phone",
      label: "Mobile Number",
      type: "tel",
      value: formData.phone,
      onChange: handleChange,
    },
    {
      name: "email",
      label: "Email Id",
      type: "email",
      value: formData.email,
      onChange: handleChange,
    },
    {
      name: "message",
      label: "Type your message...",
      type: "textarea",
      value: formData.message,
      onChange: handleChange,
    },
  ];
  return (
    <form className="flex flex-col gap-4 text-xl" onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <React.Fragment key={index}>
          {field.type === "textarea" ? (
            <textarea
              key={index}
              name={field.name}
              placeholder={field.label}
              rows={4}
              className="p-4 border border-primary rounded-lg w-full placeholder:text-[#7F7F7F] focus:outline-none text-p2 resize-none"
              value={field.value}
              onChange={field.onChange}
            ></textarea>
          ) : field.type === "tel" ? (
            <div className="flex " key={index}>
              <div className="relative">
                <select
                  className="py-4 ps-4 border-y-[0.5px] font-secondary border-l-[0.5px] rounded-l-lg cursor-pointer border-primary appearance-none w-full placeholder:text-[#7F7F7F] focus:outline-none text-p2"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFieldValue("countryCode", e.target.value)}
                  style={{ width: `${formData.countryCode.length * 2.5}ch` }}
                >
                  {countries.map((country, index) => (
                    <option
                      key={index}
                      value={country.code}
                      className="rounded-lg"
                    >
                      {country.code}
                    </option>
                  ))}
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <FromDropDown />
                </span>
              </div>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className="p-4 border-y-[0.5px] border-r-[0.5px] border-primary rounded-r-lg w-full placeholder:text-[#7F7F7F] focus:outline-none text-p2"
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ) : (
            <input
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.label}
              className="p-4 border border-primary rounded-lg w-full placeholder:text-[#7F7F7F] focus:outline-none text-p2"
              value={field.value}
              onChange={field.onChange}
            />
          )}

          {errors[field.name] && (
            <p className="text-red-500">{errors[field.name]}</p>
          )}
        </React.Fragment>
      ))}
      <button
        type="submit"
        className="bg-primary rounded-lg text-white text-lg py-4 font-primary font-medium tracking-widest!"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <span className="flex items-center justify-center gap-2.5">
            Submit
          </span>
        )}
      </button>
    </form>
  );
};

export default Form1;

export const FromDropDown = () => (
  <svg
    width={24}
    height={12}
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_689_1906)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9967 8.65702L19.0677 1.58602L20.4817 3.00001L12.7037 10.778C12.5162 10.9655 12.2619 11.0708 11.9967 11.0708C11.7316 11.0708 11.4772 10.9655 11.2897 10.778L3.51172 3.00002L4.92572 1.58602L11.9967 8.65702Z"
        fill="#686868"
      />
    </g>
    <defs>
      <clipPath id="clip0_689_1906">
        <rect
          width={12}
          height={24}
          fill="white"
          transform="translate(5.24538e-07 12) rotate(-90)"
        />
      </clipPath>
    </defs>
  </svg>
);
