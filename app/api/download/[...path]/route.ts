import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const assetPath = params.path.join("/");
  const filePath = path.join(process.cwd(), "public", assetPath);

  try {
    const fileBuffer = await fs.readFile(filePath);

    const headers = new Headers();
    headers.append(
      "Content-Disposition",
      `attachment; filename="${path.basename(filePath)}"`
    );

    return new NextResponse(fileBuffer, { headers });
  } catch (error) {
    console.error("File not found:", filePath);
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
