"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    if (id) {
      window.location.href = `/api/redirect/${id}`;
    }
  }, [id]);

  return null;
}