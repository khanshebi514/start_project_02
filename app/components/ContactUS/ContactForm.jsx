"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/api/contact";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const services = [
  "Electrical Engineering",
  "National Broadband Network (NBN)",
  "Project Management",
  "Engineering Consultancy",
  "Cost Estimation",
  "Quantity Takeoff",
  "LUC Assessment Services",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const data = await submitContactForm(formData);

      setSuccessMessage(
        data.message || "Your enquiry has been submitted successfully.",
      );

      // Clear form after successful submission
      setFormData(initialForm);
    } catch (error) {
      console.error("Contact form submission error:", error);

      setErrorMessage(
        error.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-brand-lg
        border
        border-brand-border
        bg-brand-surface
        p-6
        shadow-brand
        sm:p-8
        lg:p-10
      "
    >
      {/* Form Header */}

      <div>
        <span
          className="
            text-sm
            font-bold
            uppercase
            tracking-[0.15em]
            text-brand-secondary
          "
        >
          Project Enquiry
        </span>

        <h2
          className="
            mt-2
            text-2xl
            font-extrabold
            text-brand-heading
            sm:text-3xl
          "
        >
          Tell us about your project
        </h2>

        <p
          className="
            mt-3
            text-sm
            leading-7
            text-brand-muted
          "
        >
          Complete the form below and provide as much detail as possible about
          your requirements.
        </p>
      </div>

      {/* Form Fields */}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {/* Name */}

        <div>
          <label
            htmlFor="name"
            className="
              text-sm
              font-semibold
              text-brand-heading
            "
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="
              mt-2
              w-full
              rounded-brand
              border
              border-brand-border
              bg-brand-background
              px-4
              py-3
              text-sm
              text-brand-text
              outline-none
              transition-all
              duration-300
              placeholder:text-brand-muted
              focus:border-brand-secondary
              focus:ring-2
              focus:ring-brand-secondary/10
            "
          />
        </div>

        {/* Email */}

        <div>
          <label
            htmlFor="email"
            className="
              text-sm
              font-semibold
              text-brand-heading
            "
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="
              mt-2
              w-full
              rounded-brand
              border
              border-brand-border
              bg-brand-background
              px-4
              py-3
              text-sm
              text-brand-text
              outline-none
              transition-all
              duration-300
              placeholder:text-brand-muted
              focus:border-brand-secondary
              focus:ring-2
              focus:ring-brand-secondary/10
            "
          />
        </div>

        {/* Phone */}

        <div>
          <label
            htmlFor="phone"
            className="
              text-sm
              font-semibold
              text-brand-heading
            "
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="
              mt-2
              w-full
              rounded-brand
              border
              border-brand-border
              bg-brand-background
              px-4
              py-3
              text-sm
              text-brand-text
              outline-none
              transition-all
              duration-300
              placeholder:text-brand-muted
              focus:border-brand-secondary
              focus:ring-2
              focus:ring-brand-secondary/10
            "
          />
        </div>

        {/* Company */}

        <div>
          <label
            htmlFor="company"
            className="
              text-sm
              font-semibold
              text-brand-heading
            "
          >
            Company
          </label>

          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name"
            className="
              mt-2
              w-full
              rounded-brand
              border
              border-brand-border
              bg-brand-background
              px-4
              py-3
              text-sm
              text-brand-text
              outline-none
              transition-all
              duration-300
              placeholder:text-brand-muted
              focus:border-brand-secondary
              focus:ring-2
              focus:ring-brand-secondary/10
            "
          />
        </div>

        {/* Service */}

        <div className="sm:col-span-2">
          <label
            htmlFor="service"
            className="
              text-sm
              font-semibold
              text-brand-heading
            "
          >
            Service Required
          </label>

          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="
              mt-2
              w-full
              rounded-brand
              border
              border-brand-border
              bg-brand-background
              px-4
              py-3
              text-sm
              text-brand-text
              outline-none
              transition-all
              duration-300
              focus:border-brand-secondary
              focus:ring-2
              focus:ring-brand-secondary/10
            "
          >
            <option value="">Select a service</option>

            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="
              text-sm
              font-semibold
              text-brand-heading
            "
          >
            Project Details
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, location, requirements, drawings, scope or any other relevant details."
            rows={6}
            required
            className="
              mt-2
              w-full
              resize-none
              rounded-brand
              border
              border-brand-border
              bg-brand-background
              px-4
              py-3
              text-sm
              leading-7
              text-brand-text
              outline-none
              transition-all
              duration-300
              placeholder:text-brand-muted
              focus:border-brand-secondary
              focus:ring-2
              focus:ring-brand-secondary/10
            "
          />
        </div>
      </div>

      {/* Success Message */}

      {successMessage && (
        <div
          className="
            mt-6
            rounded-brand
            border
            border-brand-border
            bg-brand-background
            p-4
            text-sm
            leading-6
            text-brand-secondary
          "
        >
          {successMessage}
        </div>
      )}

      {/* Error Message */}

      {errorMessage && (
        <div
          className="
            mt-6
            rounded-brand
            border
            border-brand-border
            bg-brand-background
            p-4
            text-sm
            leading-6
            text-brand-primary
          "
        >
          {errorMessage}
        </div>
      )}

      {/* Submit */}

      <div
        className="
          mt-7
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p
          className="
            max-w-sm
            text-xs
            leading-5
            text-brand-muted
          "
        >
          Your project information will only be used to understand your enquiry
          and respond to you.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            inline-flex
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-brand
            bg-brand-secondary
            px-7
            py-3.5
            text-sm
            font-bold
            text-brand-surface
            shadow-brand-button
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-brand-primary
            hover:shadow-brand
            disabled:cursor-not-allowed
            disabled:opacity-60
            disabled:hover:translate-y-0
            disabled:hover:shadow-brand-button
          "
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}

          {!isSubmitting && <span>→</span>}
        </button>
      </div>
    </form>
  );
}
