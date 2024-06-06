import { formatBytes } from "@/app/utils/format-bytes";
import { CloudUpload, Trash2 } from "lucide-react";

export interface FileItemsProps {
    name: string
    size: number
}

export function FileItem({ name, size }: FileItemsProps) {
    return (
        <div className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4">
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
                <CloudUpload className="h-4 w-4" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1">
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-700">{name}</span>
                    <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
                </div>
                <div className="flex items-center w-full gap-3">
                    <div className="h-2 flex-1 rounded-full bg-zinc-100">
                        <div className="h-2 rounded-full bg-violet-700 w-4/5" />
                    </div>
                    <span className="text-sm font-medium text-zinc-700">80%</span>
                </div>
            </div>
            <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
                <Trash2 className="h-5 w-5 text-zinc-500" />
            </button>
        </div>
    )
}