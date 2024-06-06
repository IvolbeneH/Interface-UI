
import { ComponentProps } from "react";

interface inputPrefixProps extends ComponentProps<'div'> { }

export function InputPrefix(props: inputPrefixProps) {
    return (
        <div {...props} />
    )
}

interface inputControlProps extends ComponentProps<'input'> { }

export function InputControl(props: inputControlProps) {
    return (
        <input
            className='outline-none flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none'
            {...props}
        />
    )
}

interface InputRootProps extends ComponentProps<'input'> { }

export function InputRoot(props: InputRootProps) {
    return (
        <div className='flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:shadow-lg'
            {...props}
        />
    )
}