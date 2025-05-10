import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const { token } = await req.json();

    (await cookies()).set('session', token, {
        httpOnly: true,
        secure: true,
        path: '/',
        sameSite: 'lax',
        // maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({ ok: true })
}
