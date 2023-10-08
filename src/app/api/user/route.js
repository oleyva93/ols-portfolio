import { db } from "@/lib/kysely";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await db.selectFrom("users").selectAll().execute();
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
