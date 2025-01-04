import { Suspense } from "react";
import { notFound } from "next/navigation";
import FileViewer from "@/components/FileViewer";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: {
    id: string;
  };
}

async function getFileMetadata(id: string) {
  try {
    const res = await fetch(`https://api.slop.sh/f/${id}`, {
      method: "HEAD",
      cache: "no-store",
    });

    if (!res.ok) return notFound();

    return {
      contentType:
        res.headers.get("content-type") || "application/octet-stream",
      contentLength: res.headers.get("content-length"),
    };
  } catch (error) {
    return notFound();
  }
}

export async function generateMetadata(
  { params }: PageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const metadata = await getFileMetadata(params.id);

  const fileType = metadata.contentType.split("/")[0];
  const isImage =
    fileType === "image" ||
    (metadata.contentType === "application/octet-stream" &&
      params.id.match(/\.(jpg|jpeg|png|gif|webp)$/i));

  const isVideo =
    fileType === "video" ||
    (metadata.contentType === "application/octet-stream" &&
      params.id.match(/\.(mp4|webm|mov)$/i));

  const title = `${params.id} - slop.sh`;
  const description = `View or download this file on slop.sh`;
  const ogImageUrl = `https://api.slop.sh/f/${params.id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [ogImageUrl],
    //   videos: isVideo ? [ogImageUrl] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const metadata = await getFileMetadata(params.id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-4xl mx-auto p-4 py-8">
        <Suspense
          fallback={<Skeleton className="w-full h-[400px] rounded-lg" />}
        >
          <FileViewer
            id={params.id}
            contentType={metadata.contentType}
            contentLength={metadata.contentLength}
          />
        </Suspense>
      </div>
    </div>
  );
}
