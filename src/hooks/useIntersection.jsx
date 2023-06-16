"use client";

import { useEffect, useState, useRef } from "react";

function useIntersection() {
  const [load, setLoad] = useState(16);
  const [visible, setVisible] = useState(false);
  const limit = useRef(null);

  useEffect(() => {
    const oberver = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        rootMargin: "100px",
      }
    );
    oberver.observe(limit.current);
    return () => oberver.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      setLoad((load) => load + 12);
    }
  }, [visible]);

  return { limit, load };
}

export default useIntersection;
