import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    console.log('Received body:', body) // Debug: see what you're receiving

    const {
      firstname,
      email,
      website,
      services,
      growth_blocker,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content
    } = body

    const insertData = {
      full_name: firstname,
      email,
      website,
      services,
      growth_blocker,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    }

    console.log('Inserting data:', insertData) // Debug: see what you're inserting

    const { data, error } = await supabase
      .from('leads')
      .insert([insertData])
      .select() // Add this to return the inserted row

    console.log('Insert result:', { data, error }) // Debug: see the result

    if (error) {
      console.error('Supabase error:', error) // More detailed error

      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'EMAIL_EXISTS' },
          { status: 409 }
        )
      }
      throw error
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Server error:', err)
    return NextResponse.json(
      { error: 'SERVER_ERROR', details: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}