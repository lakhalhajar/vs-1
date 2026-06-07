import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, message } = data
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
    }

    // TODO: Wire to transactional email / CRM. For now, log server-side.
    console.log('Contact enquiry received:', { name, email, phone, message })

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 })
  }
}
