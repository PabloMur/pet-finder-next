import { NextRequest, NextResponse } from "next/server";

export default function GET(request: NextRequest) {
  return NextResponse.json({ ok: true });
}
