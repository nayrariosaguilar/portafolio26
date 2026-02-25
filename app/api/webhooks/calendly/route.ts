import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const signature = req.headers.get("calendly-webhook-signature");
  const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;

  if (!signature || !signingKey) {
    return NextResponse.json({ error: "Missing signature or signing key" }, { status: 401 });
  }

  // Verify webhook signature
  const { t, v1 } = signature.split(",").reduce((acc: any, part) => {
    const [key, value] = part.split("=");
    acc[key] = value;
    return acc;
  }, {});

  const data = `${t}.${payload}`;
  const expectedSignature = crypto
    .createHmac("sha256", signingKey)
    .update(data)
    .digest("hex");

  if (expectedSignature !== v1) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
  }

  const event = JSON.parse(payload);

  // Handle the event (invitee.created, invitee.canceled, etc.)
  console.log("Calendly Event Received:", event.event);

  return NextResponse.json({ received: true });
}
