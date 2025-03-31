import { NextRequest } from "next/server";
import { redirectLinks } from "@/lib/links";

type ContextType = {
  params: Promise<{
    alias: string;
  }>;
};

export async function GET(
  request: NextRequest,
  context: ContextType,
): Promise<Response> {
  try {
    const params = await context.params;
    const { alias } = params;

    if (!alias || !(alias in redirectLinks)) {
      return new Response(JSON.stringify({ error: "Page not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const destinationUrl = redirectLinks[alias];

    return Response.redirect(destinationUrl, 308);
  } catch (error) {
    console.error("Error in redirect handler:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
