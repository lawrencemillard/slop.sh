import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export interface Dependency {
    label: string;
    description: string;
}

interface DependenciesProps {
    dependencies: Dependency[];
    badgeWidth?: string;
}

export function Dependencies({ dependencies }: DependenciesProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Dependency</TableHead>
                    <TableHead>Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {dependencies.map((dep, index) => (
                    <TableRow key={index}>
                        <TableCell className="text-center">
                            {dep.label}
                        </TableCell>
                        <TableCell>{dep.description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}