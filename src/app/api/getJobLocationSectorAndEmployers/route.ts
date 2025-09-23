import { getJobLocationSectorAndEmployers } from "@/sanity/client";
import { NextResponse } from "next/server";

export async function GET() {
  const info = await getJobLocationSectorAndEmployers();
  return NextResponse.json(info);
}
