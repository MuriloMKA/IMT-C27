import { useEffect, useState } from 'react';
import { launch } from '../data/content';

const pad = (n: number) => String(n).padStart(2, '0');

function remaining(target: number) {
  const ms = Math.max(0, target - Date.now());
  const minutes = Math.ceil(ms / 60_000);
  return {
    done: ms === 0,
    days: Math.floor(minutes / 1440),
    hours: Math.floor((minutes % 1440) / 60),
    minutes: minutes % 60,
  };
}

export function LaunchCountdown() {
  const target = new Date(launch.date).getTime();
  const [left, setLeft] = useState(() => remaining(target));

  useEffect(() => {
    const id = window.setInterval(() => setLeft(remaining(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  if (left.done) return null;

  const units = [
    { value: left.days, label: left.days === 1 ? 'dia' : 'dias' },
    { value: left.hours, label: left.hours === 1 ? 'hora' : 'horas' },
    { value: left.minutes, label: 'min' },
  ];

  return (
    <div className="flex flex-col items-center px-6 text-center" role="timer" aria-live="off">
      <span className="eyebrow text-[0.65rem] text-gold">{launch.label}</span>
      <div className="mt-3 flex items-start">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-start">
            {i > 0 && <span className="mx-3 mt-2 block h-8 w-px bg-gold/40 md:mx-5 md:h-10" aria-hidden />}
            <div className="flex min-w-[3.5rem] flex-col items-center md:min-w-[4.5rem]">
              <span className="font-display text-4xl leading-none font-light text-ivory tabular-nums md:text-5xl">
                {pad(unit.value)}
              </span>
              <span className="eyebrow mt-2 text-[0.6rem] text-ivory/55">{unit.label}</span>
            </div>
          </div>
        ))}
      </div>
      <span className="mt-3 text-sm text-ivory/60">{launch.note}</span>
    </div>
  );
}
