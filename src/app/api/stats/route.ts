import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const wakatimeUsername = 'keiran';
        const wakatimeApiUrl = `https://wakatime.com/api/v1/users/${wakatimeUsername}/stats?is_including_today=true`;

        const response = await fetch(wakatimeApiUrl, {
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_WAKATIME_API_KEY}`,
            },
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch WakaTime data' }, { status: response.status });
        }

        const data = await response.json();
        
        if (!data || !data.data) {
            return NextResponse.json({ error: 'Invalid WakaTime data' }, { status: 500 });
        }

        const transformedData = {
            totalTime: data.data.human_readable_total,
            languages: data.data.languages,
        };

        return NextResponse.json(transformedData);
    } catch (error) {
        console.error('Error fetching WakaTime data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}