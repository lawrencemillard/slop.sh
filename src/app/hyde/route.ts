import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    // Construct the absolute path to hyde.sh
    const hydeScriptPath = path.join(
      process.cwd(),
      "src",
      "app",
      "hyde",
      "hyde.sh",
    );
    console.log(hydeScriptPath);

    // Read the content of the bash script
    const scriptContent = await fs.readFile(hydeScriptPath, "utf8");

    // Return the content in the response
    return new NextResponse(scriptContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain", // Set content type to plain text
      },
    });
  } catch (error) {
    console.error("Error reading hyde.sh:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to read hyde.sh" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}

export const config = {
  runtime: "nodejs",
};
