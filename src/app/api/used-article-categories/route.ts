import { client } from "@/sanity/client";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    array::unique(*[_type == "article" && defined(categories)].categories)
    | order(@ asc)
  `;
  const cats = await client.fetch<string[]>(query);
  return NextResponse.json(cats);
}
