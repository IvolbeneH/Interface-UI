'use client'

import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps extends Select.SelectProps {
    children: ReactNode
    placeholder: string
}

export function Selects({ children, placeholder, ...props }: SelectProps) {
    return (
        <Select.Root {...props}>
            <Select.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-500'>
                <Select.Value className='text-black' placeholder={placeholder} />
                <Select.Icon>
                    <ChevronDown className='h-5 w-5 text-zinc-500' />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content
                    side='bottom'
                    position='popper'
                    className='z-10 rounded-lg border border-zinc-300 bg-white w-[--radix-select-trigger-width] animate-sliedeDownAndFade'
                    sideOffset={6}
                >
                    <Select.Viewport>
                        {children}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}