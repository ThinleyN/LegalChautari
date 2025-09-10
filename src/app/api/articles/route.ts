import { getArticles } from "@/sanity/client";
import { NextResponse } from "next/server";

export async function GET() {
  const article = await getArticles();
  return NextResponse.json(article);
}
