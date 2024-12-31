import { NextRequest, NextResponse } from "next/server";

const urlMap: Record<string, { url: string; name: string }> = {
  bio: { url: "https://e-z.bio/kc", name: "Bio" },
  github: { url: "https://github.com/keirim", name: "GitHub" },
  discord: {
    url: "https://discord.com/users/1230319937155760131",
    name: "Discord",
  },
  bsky: { url: "https://bsky.app/profile/keiran.cc", name: "Bluesky" },
  twitter: { url: "https://twitter.com/_keirandev", name: "Twitter" },
};

export async function GET(req: NextRequest) {
  const { pathname } = new URL(req.url);
  const id = pathname.split("/").pop();

  if (id && urlMap[id]) {
    return NextResponse.redirect(urlMap[id].url);
  } else {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
}
