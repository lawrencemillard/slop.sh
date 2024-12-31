'use client';

import { useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';

const urlMap: Record<string, string> = {
  bio: "https://e-z.bio/kc",
  github: "https://github.com/keirim",
  discord: "https://discord.com/users/1230319937155760131",
  bsky: "https://bsky.app/profile/keiran.cc",
  twitter: "https://twitter.com/_keirandev",
};

export default function Page() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    if (id && urlMap[id]) {
      window.location.href = urlMap[id];
    } else {
      notFound();
    }
  }, [id]);

  return null;
}