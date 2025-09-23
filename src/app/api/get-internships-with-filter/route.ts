import { getInternships } from "@/sanity/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
  const info = await getInternships(data);
  return NextResponse.json(info);
}
