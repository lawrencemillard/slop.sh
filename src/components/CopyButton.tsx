"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LuCopy, LuCheck } from "react-icons/lu";

interface CopyButtonProps {
    textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Copy failed", error);
        }
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 flex items-center gap-1 transition duration-200 ease-in-out transform hover:scale-105 hover:bg-foreground/5"
            onClick={handleCopy}
        >
            {copied ? <LuCheck className="w-4 h-4 text-green-500" /> : <LuCopy className="w-4 h-4" />}
            <span className="text-xs">{copied ? "Copied" : "Copy"}</span>
        </Button>
    );
}