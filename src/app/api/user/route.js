import { deleteAll, seed } from "@/lib/seed";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await seed();
    // const result = await deleteAll();
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
