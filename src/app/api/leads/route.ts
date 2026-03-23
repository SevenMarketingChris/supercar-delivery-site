import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, sourcePageSlug, sourcePageH1 } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // Email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const lead = {
      ...body,
      submittedAt: new Date().toISOString(),
      sourcePageSlug,
      sourcePageH1,
    };

    // Forward to webhook if configured
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }).catch(() => {
        // Don't fail the user submission if webhook fails
      });
    }

    // Log lead (in production, store in DB or send to CRM)
    console.log("New lead:", JSON.stringify(lead, null, 2));

    return NextResponse.json({ success: true, message: "Quote request received." });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
