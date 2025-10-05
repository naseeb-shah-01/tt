import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Basic validation
    if (!body?.name || !body?.email) {
      return NextResponse.json({ ok: false, error: "Missing name or email" }, { status: 400 })
    }

    // For now, just log the payload. Replace with DB or integration as needed.
    console.log("[v0] waitlist submission:", body)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[v0] waitlist error:", err)
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 })
  }
}
