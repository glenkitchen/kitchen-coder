"use client";

import { useEffect } from "react";

// Opens every collapsible section before printing so the printed CV is complete.
export default function PrintExpand() {
  useEffect(() => {
    const expand = () =>
      document.querySelectorAll("details").forEach((d) => (d.open = true));
    window.addEventListener("beforeprint", expand);
    return () => window.removeEventListener("beforeprint", expand);
  }, []);
  return null;
}
