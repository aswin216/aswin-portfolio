export const smoothScroll = (id: string) => {
  const target = document.getElementById(id);

  if (!target) return;

  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY;

  const distance = end - start;
  const duration = 1000;

  let startTime: number | null = null;

  const animate = (currentTime: number) => {
    if (startTime === null) {
      startTime = currentTime;
    }

    const progress = Math.min(
      (currentTime - startTime) / duration,
      1
    );

    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(
      0,
      start + distance * ease
    );

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};