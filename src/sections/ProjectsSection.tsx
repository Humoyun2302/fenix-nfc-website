import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Modal } from '@/components/Modal'
import { projects, type Project } from '@/data/projects'

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-pad py-16 sm:py-24">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Портфолио"
            title="Проекты и форматы"
            description="Примеры форматов FENIX NFC: меню, настольные таблички, визитки и отельные решения."
            className="mb-12"
          />
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="group w-full overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.02] text-left transition duration-300 hover:border-flame/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink/50 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-soft backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-xl font-medium">{project.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">{project.description}</p>
                  </div>
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted transition group-hover:border-flame/40 group-hover:text-flame">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Modal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ''}
      >
        {selected && (
          <div className="space-y-4">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full rounded-2xl border border-white/8"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed text-muted">{selected.description}</p>
            <p className="text-sm leading-relaxed text-soft">
              <span className="text-flame-soft">Результат: </span>
              {selected.result}
            </p>
            <div className="flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
