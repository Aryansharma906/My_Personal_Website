import React, { useState, useEffect } from "react";
import RESEARCH_PROJECTS, { ResearchProject } from "@/config/researchProjects";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const Research: React.FC = () => {
  const [projects, setProjects] = useState<ResearchProject[]>(RESEARCH_PROJECTS);
  const [loading, setLoading] = useState(false); // No initial loading since config loads optimistically
  const [selected, setSelected] = useState<ResearchProject | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tryFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/research');
        if (!res.ok) throw new Error('API unavailable');
        const json = await res.json();
        if (Array.isArray(json.data) && json.data.length > 0) {
          setProjects(json.data);
        }
      } catch (e) {
        if (process.env.NODE_ENV === 'development') {
          console.log('Using local research projects from config');
        }
      } finally {
        setLoading(false);
      }
    };

    tryFetch();
  }, []);

  const openProject = (p: ResearchProject) => {
    setSelected(p);
    setOpen(true);
  };

  if (loading && projects.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <section id="research" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mx-auto">
          🔬
          Research & Projects
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mt-6">Research</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mt-2">
          Selected research projects and experiments.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.id} className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-44 bg-muted overflow-hidden">
                <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  {p.featured && <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Featured</span>}
                  <div className="flex-1 text-sm text-muted-foreground">{p.tags.slice(0, 3).join(" • ")}</div>
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow line-clamp-3">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button onClick={() => openProject(p)} className="text-sm font-semibold text-primary">View</button>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground">External</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selected?.title}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <p className="text-muted-foreground">{selected.tags.join(" • ")}</p>
              <p>{selected.details || selected.excerpt}</p>
              {selected.link && (
                <a href={selected.link} target="_blank" rel="noreferrer" className="text-primary font-semibold">Open repository / resource</a>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Research;

