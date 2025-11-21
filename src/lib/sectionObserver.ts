// Attach 'animate-section' class to all top-level sections and toggle 'in-view' when visible
export default function initSectionObserver() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
    if (!sections.length) return;

    sections.forEach((s) => s.classList.add('animate-section'));

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const el = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    el.classList.add('in-view');
                } else {
                    el.classList.remove('in-view');
                }
            });
        },
        { threshold: 0.12 }
    );

    sections.forEach((s) => io.observe(s));
}
