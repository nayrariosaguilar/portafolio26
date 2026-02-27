import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export async function POST(request: Request) {
  try {
    const { name, email, dateTime } = await request.json();

    // Validación básica
    if (!name || !email || !dateTime) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    const start = new Date(dateTime);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hora de duración

    const event = {
      summary: `Reunión: ${name}`,
      description: `Reunión agendada desde el portfolio personal. Contacto: ${email}`,
      start: {
        dateTime: start.toISOString(),
        timeZone: 'UTC', // Ajustar según zona horaria
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: 'UTC',
      },
      attendees: [{ email }],
      conferenceData: {
        createRequest: {
          requestId: `meet-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1,
    });

    const meetLink = response.data.hangoutLink;

    return NextResponse.json({
      success: true,
      meetLink,
      message: 'Reunión agendada correctamente',
    });
  } catch (error: any) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Error al crear la reunión en Google Calendar' },
      { status: 500 }
    );
  }
}
