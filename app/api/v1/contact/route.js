import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, service, message } = body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, service and message are required.",
        },
        { status: 400 },
      );
    }

    // Create enquiry
    const enquiry = await prisma.contactEnquiry.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        service,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact enquiry submitted successfully.",
        data: {
          id: enquiry.id,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your enquiry.",
      },
      { status: 500 },
    );
  }
}
