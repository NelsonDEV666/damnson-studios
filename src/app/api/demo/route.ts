import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

interface DemoSubmissionPayload {
  artistName: string;
  email: string;
  genre: string;
  trackLink: string;
}

function isValidPayload(body: unknown): body is DemoSubmissionPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.artistName === "string" && b.artistName.trim().length >= 2 &&
    typeof b.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.genre === "string" && b.genre.trim().length >= 2 &&
    typeof b.trackLink === "string" && b.trackLink.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!isValidPayload(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid submission data." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { success: false, message: "Server is missing Supabase configuration." },
        { status: 500 }
      );
    }

    // Service-role client — server-only, never expose this key to the browser.
    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

    const { error } = await supabaseAdmin.from("demo_submissions").insert({
      artist_name: body.artistName,
      email: body.email,
      genre: body.genre,
      track_link: body.trackLink,
      submitted_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return NextResponse.json(
        { success: false, message: "Could not save submission. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your demo has been submitted successfully! We'll review it within 48 hours.",
    });
  } catch (err) {
    console.error("Demo submission route error:", err);
    return NextResponse.json(
      { success: false, message: "Unexpected server error." },
      { status: 500 }
    );
  }
}
