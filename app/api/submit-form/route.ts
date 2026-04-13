import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK
  if (!webhook) {
    return NextResponse.json({ error: 'Google Sheets webhook URL is not configured.' }, { status: 500 })
  }

  let body
  try {
    body = await request.json()
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const payload = {
    timestamp: new Date().toISOString(),
    name: `${body.fname || ''} ${body.lname || ''}`.trim(),
    email: body.email || '',
    company: body.company || '',
    phone: body.phone || '',
    packagingType: body.ptype || '',
    quantity: body.qty || '',
    brief: body.brief || '',
  }

  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const detail = await response.text()
      return NextResponse.json({ error: 'Failed to forward form data to sheet.', detail }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: 'Unable to submit form at this time.' }, { status: 502 })
  }
}
