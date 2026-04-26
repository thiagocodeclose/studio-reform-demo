import { Reveal } from '@/components/Reveal';

const pillars = [
  'Reformer',
  'Barre',
  'Sculpt',
  'Mat Flow',
  'Stretch & Recovery',
];

export function PhilosophyBar() {
  return (
    <div
      className="py-5 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-pearl)', borderBottom: '1px solid var(--border)' }}
    >
      <Reveal direction="none">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6">
          {pillars.map((p, i) => (
            <span key={p} className="flex items-center gap-8">
              <span
                className="font-heading italic text-ink/70 tracking-wide"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
              >
                {p}
              </span>
              {i < pillars.length - 1 && (
                <span style={{ color: 'var(--blush)', fontSize: '0.5rem' }}>◆</span>
              )}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
