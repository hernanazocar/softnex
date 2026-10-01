const logos = [
  { name: 'React', file: 'react' },
  { name: 'Next.js', file: 'nextjs' },
  { name: 'TypeScript', file: 'typescript' },
  { name: 'Node.js', file: 'nodejs' },
  { name: 'Python', file: 'python' },
  { name: 'PostgreSQL', file: 'postgresql' },
  { name: 'Flutter', file: 'flutter' },
  { name: 'AWS', file: 'amazonwebservices' },
  { name: 'Docker', file: 'docker' },
  { name: 'Vercel', file: 'vercel' },
  { name: 'Supabase', file: 'supabase' },
  { name: 'Figma', file: 'figma' },
]

export default function LogoMarquee() {
  return (
    <div
      className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-label="Tecnologías que usamos"
    >
      <div className="flex w-max gap-3 marquee-track">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.file}-${i}`}
            aria-hidden={i >= logos.length}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/tech/${logo.file}.svg`} alt="" className="w-5 h-5 object-contain" loading="lazy" />
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
