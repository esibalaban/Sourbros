export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { db } from "../../../lib/firebaseAdmin";

type WaitlistEntry = {
  email: string;
  ts: string;
  platform?: string;
};

function isValidEmail(email: string): boolean {
  const re =
    // eslint-disable-next-line no-control-regex
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(req: Request) {
  let email = "";
  try {
    const body = await req.json();
    if (typeof body?.email === "string") {
      email = body.email.trim();
    }
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const emailLower = email.toLowerCase();
  const docRef = db.collection("waitlist").doc(emailLower);
  const snapshot = await docRef.get();

  if (snapshot.exists) {
    return NextResponse.json({
      ok: true,
      duplicate: true,
      message: "Already on the Android waitlist.",
    });
  }

  const entry: WaitlistEntry = {
    email,
    ts: new Date().toISOString(),
    platform: "android",
  };
  await docRef.set(entry, { merge: false });

  return NextResponse.json({
    ok: true,
    message: "Added to the Android waitlist.",
  });
}

