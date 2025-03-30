import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const hydeScriptPath = path.join(process.cwd(), 'app', 'hyde', 'hyde.sh');

    const scriptContent = await fs.readFile(hydeScriptPath, 'utf8');

    return new NextResponse(scriptContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Error reading hyde.sh:', error);
    return NextResponse.json(
      { error: 'Failed to read hyde.sh' },
      { status: 500 }
    );
  }
}
