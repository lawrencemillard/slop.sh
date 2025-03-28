"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Language {
    name: string;
    percent: number;
}

interface WakaTimeData {
    totalTime: string;
    languages: Language[];
}

const WakaTimeStats: React.FC = () => {
    const [data, setData] = useState<WakaTimeData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/stats");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-96 mt-8"
            >
                <Card className="relative overflow-hidden bg-background/50 backdrop-blur-xs border border-border shadow-lg">
                    <CardContent className="p-8 text-center">
                        <p>Loading...</p>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }

    if (error) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-96 mt-8"
            >
                <Card className="relative overflow-hidden bg-background/50 backdrop-blur-xs border border-border shadow-lg">
                    <CardContent className="p-8 text-center text-red-500">
                        <p>Error: {error}</p>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[912px] mt-8 mx-auto"
        >
            <Card className="relative overflow-hidden bg-background/50 backdrop-blur-xs border border-border shadow-lg">
                <CardContent className="p-8">
                    <h1 className="text-2xl font-bold mb-4">WakaTime Stats</h1>
                    {data && data.languages.length > 0 ? (
                        <>
                            <p className="mb-4">
                                <strong>Total Time Tracked:</strong> {data.totalTime}
                            </p>
                            <h2 className="text-xl font-semibold mb-2">Languages</h2>
                            <ul className="list-disc list-inside">
                                {data.languages.map((language, index) => (
                                    <li key={index}>
                                        {language.name}: {language.percent.toFixed(2)}%
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <div className="text-center mt-4">
                            <p>No tracked data available for the last 7 days.</p>
                            <p>Start coding to see your stats!</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default WakaTimeStats;