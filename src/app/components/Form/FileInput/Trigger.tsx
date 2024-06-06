'use client'

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export interface TriggerProps {

}

export function Trigger(props: TriggerProps) {

    const { id } = useFileInput()

    return (
        <label htmlFor={id} className='group flex-1 cursor-pointer flex-col flex items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:bg-violet-50 transition'>
            <div className='rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:bg-violet-100 group-hover:border-violet-100 transition'>
                <UploadCloud className='h-5 w-5 text-zinc-500 group-hover:text-violet-600' />
            </div>
            <div className='flex flex-col items-center gap-1'>
                <span className='text-sm group-hover:text-violet-600'>
                    <span className='font-semibold text-violet-700 group-hover:text-violet-800'>Click to upload</span> or drag and drop
                </span>
                <span className='text-xs group-hover:text-violet-800' >SVG, PNG, JPG or GIF (max. 800x400px)</span>
            </div>
        </label>
    )
}