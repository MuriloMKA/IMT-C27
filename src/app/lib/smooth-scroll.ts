import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function startSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });

  let frame = requestAnimationFrame(function raf(time) {
    lenis?.raf(time);
    frame = requestAnimationFrame(raf);
  });

  return () => {
    cancelAnimationFrame(frame);
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToId(id: string) {
  const target = id === 'top' ? 0 : document.getElementById(id);
  if (target === null) return;
  if (lenis) {
    lenis.scrollTo(target, { offset: 0 });
  } else if (target === 0) {
    window.scrollTo({ top: 0 });
  } else {
    target.scrollIntoView();
  }
}

export function lockScroll(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.style.overflow = locked ? 'hidden' : '';
}
