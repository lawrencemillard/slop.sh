"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { LuExternalLink, LuTerminal, LuPackage, LuCode, LuCoffee, LuGithub, LuMail } from "react-icons/lu";
import Link from "next/link";

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const featureItems = [
    { icon: <LuPackage className="w-5 h-5" />, emoji: "🔄", title: "System Updates", description: "Update your system or specific packages with ease" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "📦", title: "Package Installation", description: "Install packages with simple commands" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "❌", title: "Package Removal", description: "Remove unwanted packages cleanly" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "🗑️", title: "Package Purging", description: "Completely remove packages and their dependencies" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "🧹", title: "Cache Cleaning", description: "Clean package cache to free up disk space" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "🧩", title: "Orphan Management", description: "Clean or list orphaned packages" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "🔍", title: "Package Search", description: "Find the packages you need" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "📋", title: "Package Listing", description: "List all installed packages" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "❓", title: "Package Information", description: "Get detailed information about packages" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "🌳", title: "Dependency Tree", description: "Visualize package dependencies" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "🔔", title: "Update Checking", description: "Check for available updates" },
    { icon: <LuPackage className="w-5 h-5" />, emoji: "🚀", title: "In active development", description: "More awesome features to come!" },
];

export default function ArchiumPage() {
    const [version, setVersion] = useState("Loading...");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestVersion = async () => {
            try {
                const response = await fetch("/api/archiumVersion");
                if (!response.ok) {
                    throw new Error(`Failed to fetch version: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setVersion(data.version);
            } catch (error) {
                console.error("Error fetching version:", error);
                setVersion("v1.5.3");
            } finally {
                setLoading(false);
            }
        };

        fetchLatestVersion();
    }, []);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-background py-10 px-4 mt-18"
        >
            <div className="max-w-[912px] mx-auto">
                <Card className="bg-card/50 backdrop-blur-sm border border-border shadow-lg rounded-lg mb-8">
                    <CardHeader className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center mb-4"
                        >
                            <img
                                src="/archium-transparent.svg"
                                alt="Archium"
                                className="w-32 h-auto"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <CardTitle className="text-5xl font-bold mb-2">Archium</CardTitle>
                            <CardDescription className="text-lg">
                                Fast &amp; Easy Package Management for Arch Linux
                            </CardDescription>
                        </motion.div>
                    </CardHeader>
                    <CardContent className="text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Badge variant="outline" className="text-md px-3 py-1 mb-4">
                                {loading || !version ? (
                                    <Skeleton className="w-20 h-6 rounded-md" />
                                ) : (
                                    version
                                )}
                            </Badge>

                            <div className="flex justify-center gap-4 mt-6">
                                <Button
                                    variant="default"
                                    className="gap-2"
                                    asChild
                                >
                                    <Link href="https://github.com/q4ow/archium" target="_blank" rel="noopener noreferrer">
                                        <LuGithub className="w-4 h-4" />
                                        GitHub
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="gap-2"
                                    asChild
                                >
                                    <Link href="https://github.com/q4ow/archium#%EF%B8%8F-installation" target="_blank" rel="noopener noreferrer">
                                        <LuTerminal className="w-4 h-4" />
                                        Installation Guide
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </CardContent>
                </Card>

                <Tabs defaultValue="features" className="w-full">
                    <TabsList className="grid grid-cols-4 mb-8">
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="installation">Installation</TabsTrigger>
                        <TabsTrigger value="usage">Usage</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>

                    <TabsContent value="features" className="space-y-4">
                        <h2 className="text-2xl font-semibold mb-6">✨ Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {featureItems.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Card className="h-full hover:shadow-md transition-shadow">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg flex items-center gap-2">
                                                <span>{feature.emoji}</span> {feature.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="installation">
                        <Card>
                            <CardHeader>
                                <CardTitle>🛠️ Installation</CardTitle>
                                <CardDescription>Follow these steps to install Archium</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-bold mb-2">1. Clone the Repository</h3>
                                    <div className="relative">
                                        <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-sm">
                                            git clone https://github.com/q4ow/archium.git
                                            cd archium
                                        </pre>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="absolute top-2 right-2"
                                            onClick={() => navigator.clipboard.writeText("git clone https://github.com/q4ow/archium.git\ncd archium")}
                                        >
                                            Copy
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-2">2. Compile the Program</h3>
                                    <div className="relative">
                                        <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-sm">
                                            make
                                        </pre>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="absolute top-2 right-2"
                                            onClick={() => navigator.clipboard.writeText("make")}
                                        >
                                            Copy
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-2">3. Install the Binary (Requires Root Permissions)</h3>
                                    <div className="relative">
                                        <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-sm">
                                            sudo make install
                                        </pre>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="absolute top-2 right-2"
                                            onClick={() => navigator.clipboard.writeText("sudo make install")}
                                        >
                                            Copy
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" asChild>
                                    <Link href="https://github.com/q4ow/archium#%EF%B8%8F-installation" target="_blank">
                                        View Full Instructions <LuExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="usage">
                        <Card>
                            <CardHeader>
                                <CardTitle>📖 Usage</CardTitle>
                                <CardDescription>How to use Archium effectively</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <p className="mb-2">When you run <code className="bg-muted px-1 rounded">archium</code>, you will see:</p>
                                    <div className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm border-l-4 border-primary">
                                        Welcome to Archium, type "h" for help<br />
                                        Archium $
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-4">Interactive Shell Commands</h3>
                                    <div className="overflow-x-auto rounded-md border">
                                        <table className="min-w-full divide-y divide-border">
                                            <thead className="bg-muted">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold">Command</th>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                <tr>
                                                    <td className="px-4 py-2"><code>u</code></td>
                                                    <td className="px-4 py-2">Update the system or a specific package</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>i</code></td>
                                                    <td className="px-4 py-2">Install packages</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>r</code></td>
                                                    <td className="px-4 py-2">Remove packages</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>p</code></td>
                                                    <td className="px-4 py-2">Purge packages</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>c</code></td>
                                                    <td className="px-4 py-2">Clean cache</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>cc</code></td>
                                                    <td className="px-4 py-2">Clear package build cache</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>o</code></td>
                                                    <td className="px-4 py-2">Clean orphaned packages</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>lo</code></td>
                                                    <td className="px-4 py-2">List orphaned packages</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>s</code></td>
                                                    <td className="px-4 py-2">Search for packages</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>l</code></td>
                                                    <td className="px-4 py-2">List installed packages</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>?</code></td>
                                                    <td className="px-4 py-2">Display package information</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>dt</code></td>
                                                    <td className="px-4 py-2">Display package dependency tree</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>cu</code></td>
                                                    <td className="px-4 py-2">Check for updates</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>h</code></td>
                                                    <td className="px-4 py-2">Display help</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>q</code></td>
                                                    <td className="px-4 py-2">Quit the application</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-4">Command-Line Arguments</h3>
                                    <div className="overflow-x-auto rounded-md border">
                                        <table className="min-w-full divide-y divide-border">
                                            <thead className="bg-muted">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold">Argument</th>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                <tr>
                                                    <td className="px-4 py-2"><code>--exec &lt;command&gt;</code></td>
                                                    <td className="px-4 py-2">Execute a specific command directly</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>--version</code>, <code>-v</code></td>
                                                    <td className="px-4 py-2">Display version information</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>--verbose</code>, <code>-V</code></td>
                                                    <td className="px-4 py-2">Enable verbose logging</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2"><code>--help</code>, <code>-h</code></td>
                                                    <td className="px-4 py-2">Display help for command-line arguments</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" asChild>
                                    <Link href="https://github.com/q4ow/archium#-usage" target="_blank">
                                        View Full Usage Documentation <LuExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="about">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>📦 Dependencies</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <Badge variant="outline" className="mr-2 mt-1">gcc</Badge>
                                            <span>GNU Compiler Collection</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Badge variant="outline" className="mr-2 mt-1">yay/paru</Badge>
                                            <span>AUR helpers for Arch Linux</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Badge variant="outline" className="mr-2 mt-1">git</Badge>
                                            <span>For installing <code className="bg-muted px-1 rounded">yay</code></span>
                                        </li>
                                        <li className="flex items-start">
                                            <Badge variant="outline" className="mr-2 mt-1">readline</Badge>
                                            <span>Library for command-line input</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Badge variant="outline" className="mr-2 mt-1">ncurses</Badge>
                                            <span>Library for text-based UIs</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>📝 Notes</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="mb-2">
                                            Archium uses <code className="bg-muted px-1 rounded">yay</code> by default. To use{" "}
                                            <code className="bg-muted px-1 rounded">paru</code>, create a file:
                                        </p>
                                        <div className="relative">
                                            <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-sm">
                                                touch $HOME/.archium-use-paru
                                            </pre>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="absolute top-2 right-2"
                                                onClick={() => navigator.clipboard.writeText("touch $HOME/.archium-use-paru")}
                                            >
                                                Copy
                                            </Button>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-2">If Archium fails to upgrade to a newer version:</p>
                                        <div className="relative">
                                            <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-sm">
                                                yay -Scc --noconfirm && yay -S archium --noconfirm
                                                paru -Scc --noconfirm && paru -S archium --noconfirm
                                            </pre>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="absolute top-2 right-2"
                                                onClick={() => navigator.clipboard.writeText("yay -Scc --noconfirm && yay -S archium --noconfirm\nparu -Scc --noconfirm && paru -S archium --noconfirm")}
                                            >
                                                Copy
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="md:col-span-2">
                                <CardHeader>
                                    <CardTitle>📜 License &amp; Contributing</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p>
                                        This program is licensed under the <strong>GNU General Public License v3.0</strong>.
                                        See the <Link href="https://github.com/q4ow/archium/blob/main/LICENSE" target="_blank" className="text-primary underline">LICENSE</Link> file for details.
                                    </p>
                                    <p>
                                        Contributions are welcome! Feel free to
                                        {" "}
                                        <Link href="https://github.com/q4ow/archium/fork" target="_blank" className="text-primary underline">fork the repository</Link>
                                        {" "}
                                        and submit a pull request or
                                        {" "}
                                        <Link href="https://github.com/q4ow/archium/issues" target="_blank" className="text-primary underline">open an issue</Link>
                                        {" "}
                                        if you encounter any bugs or have feature requests.
                                    </p>
                                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
                                        <div className="flex items-center gap-2">
                                            <LuMail className="h-5 w-5" />
                                            <span>Contact: <a href="mailto:me@keiran.cc" className="text-primary underline">Keiran</a></span>
                                        </div>
                                        <div>
                                            <Button variant="default" asChild>
                                                <Link href="https://github.com/q4ow/archium" target="_blank">
                                                    <LuGithub className="mr-2 h-4 w-4" /> View on GitHub
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground italic">
                                        Disclaimer: Archium is not affiliated with Arch Linux or its official package managers.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </motion.div>
    );
}