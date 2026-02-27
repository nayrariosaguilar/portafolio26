'use client';

import { useState } from 'react';

export default function ScheduleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateTime: '',
  });
  const [loading, setLoading] = useState(false);
  const [meetLink, setMeetLink] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMeetLink('');

    try {
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMeetLink(data.meetLink);
      } else {
        setError(data.error || 'Ocurrió un error');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 max-w-md mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-md space-y-4 border border-zinc-200 dark:border-zinc-800">
      <h2 className="text-2xl font-bold">Agendar Reunión</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            required
            type="text"
            className="w-full p-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            required
            type="email"
            className="w-full p-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Fecha y Hora</label>
          <input
            required
            type="datetime-local"
            className="w-full p-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
            value={formData.dateTime}
            onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Agendando...' : 'Confirmar Reunión'}
        </button>
      </form>

      {meetLink && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          <p className="font-bold">¡Agendado!</p>
          <p className="text-sm">Recibirás un correo con la invitación y el link de Meet:</p>
          <a href={meetLink} target="_blank" className="underline font-mono text-xs break-all">
            {meetLink}
          </a>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded">
          {error}
        </div>
      )}
    </section>
  );
}
