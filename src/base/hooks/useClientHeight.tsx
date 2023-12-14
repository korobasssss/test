import { useState, useEffect } from 'react';

export function useClientHeight(): number | null {
  const [height, setHeight] = useState<number | null>(measureHeight);

  const wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce();

  useEffect(() => {
    if (!wasRenderedOnClientAtLeastOnce) return;

    function setMeasuredHeight(): void {
      const measuredHeight = measureHeight();
      setHeight(measuredHeight);
    }

    window.addEventListener('resize', setMeasuredHeight);
    return () => window.removeEventListener('resize', setMeasuredHeight);
  }, [wasRenderedOnClientAtLeastOnce]);
  return wasRenderedOnClientAtLeastOnce ? height : null;
}

export function measureHeight(): number | null {
  if (!isClient()) return null;
  return document.documentElement.offsetHeight
    ? document.documentElement.offsetHeight
    : window.innerHeight;
}

function useWasRenderedOnClientAtLeastOnce(): boolean {
  const [wasRenderedOnClientAtLeastOnce, setWasRenderedOnClientAtLeastOnce] =
    useState(false);

  useEffect(() => {
    if (isClient()) {
      setWasRenderedOnClientAtLeastOnce(true);
    }
  }, []);
  return wasRenderedOnClientAtLeastOnce;
}

function isClient(): boolean {
  return typeof window !== 'undefined' || typeof document !== 'undefined';
}
