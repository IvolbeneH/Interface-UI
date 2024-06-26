'use client'

import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export function ImagePreview() {

    const { files } = useFileInput()

    const previewURL = useMemo(() => {
        if (files.length === 0) {
            return
        }
        return URL.createObjectURL(files[0])

    }, [files])

    if (previewURL === null) {
        return (
            <div className='bg-violet-50 flex h-16 w-16 justify-center items-center rounded-full'>
                <User className='w-8 h-8 text-violet-500' />
            </div>
        )
    } else {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={previewURL}
                alt=""
                className="h-16 w-16 rounded-full object-cover"
            />
        )
    }
}