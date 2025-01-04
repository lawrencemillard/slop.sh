import { NextResponse } from "next/server";
import { fileTypeFromBuffer } from "file-type";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(`https://api.slop.sh/f/${params.id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "File not found" },
        { status: response.status }
      );
    }

    const buffer = await response.arrayBuffer();
    const fileType = await fileTypeFromBuffer(buffer);

    const contentType =
      fileType?.mime ||
      response.headers.get("content-type") ||
      "application/octet-stream";

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="${params.id}"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch file" },
      { status: 500 }
    );
  }
}
