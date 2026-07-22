import { NextResponse } from "next/server";
import { contactSchema } from "@/features/contact/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);

    // TODO: Implement actual email sending (e.g., using Resend, SendGrid)
    // For now, just simulate success for Milestone 1 architecture
    console.log("Contact form payload received:", validatedData);

    return NextResponse.json(
      { message: "Message received successfully." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { message: "Invalid request data", errors: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
