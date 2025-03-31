import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch("https://api.github.com/repos/q4ow/archium/releases/latest", {
            headers: {
                'User-Agent': 'slop.sh',
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch version: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const version = data.tag_name || data.name || "v1.5.3";
        return NextResponse.json({ version });
    } catch (error) {
        console.error("Error fetching version:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ version: "v1.5.3", error: errorMessage }, { status: 500 });
    }
}