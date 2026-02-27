import ScheduleForm from '@/components/ScheduleForm';

export const metadata = {
  title: 'Agendar Videollamada',
  description: 'Agenda una reunión de 1 hora conmigo en mi Google Calendar.',
};

export default function AgendarPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Reserva una videollamada
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Selecciona una fecha y hora que te venga bien para hablar sobre tu proyecto o simplemente conocernos.
        </p>
      </div>

      <ScheduleForm />

      <div className="mt-12 text-center text-sm text-zinc-500">
        <p>✓ Reunión de 60 minutos</p>
        <p>✓ Google Meet incluido</p>
        <p>✓ Confirmación inmediata</p>
      </div>
    </div>
  );
}
