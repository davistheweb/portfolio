"use client";
import { useEffect } from "react";
export default function ContactPage() {
  useEffect(() => {
    window.addEventListener("load", () =>
      window.open("https://wa.me/+2349018797128"),
    );
  }, []);

  return <div>redirecting to contact</div>;
}
