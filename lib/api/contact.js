// lib/api/contact.js

export async function submitContactForm(formData) {
  const response = await fetch("/api/v1/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to submit your enquiry.");
  }

  return data;
}
