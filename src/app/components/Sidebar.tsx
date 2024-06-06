'use client'

import Image from 'next/image'
import Logo from '../assets/Logomark.svg'
import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Menu, Search, SquareStack, Users } from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSPaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from './Input'
import * as Collapsible from '@radix-ui/react-collapsible'


export function Siderbar() {
    return (
        <Collapsible.Root className="border-b p-4 data-[state=open]:bottom-0 border-zinc-200 py-8 flex flex-col gap-6 fixed left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative lg:data-[state=closed]:bottom-0">
            <div className='flex items-center justify-between'>
                <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900 mx-1">
                    <Image src={Logo} height={32} width={32} alt='' />
                    Teams Developers
                </strong>
                <Collapsible.Trigger asChild className='lg:hidden'>
                    <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
                        <Menu className="h-6 w-6 text-zinc-500" />
                    </button>
                </Collapsible.Trigger>
            </div>

            <Collapsible.Content forceMount className='flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex'>
                <InputRoot>
                    <InputPrefix>
                        <Search className='h-5 w-5 text-zinc-500' />
                    </InputPrefix>
                    <InputControl placeholder='Search' />
                </InputRoot>

                <nav className="space-y-0.5">
                    <NavItem title="Home" icon={Home} />
                    <NavItem title="Dashboard" icon={BarChart} />
                    <NavItem title="Projects" icon={SquareStack} />
                    <NavItem title="Tasks" icon={CheckSquare} />
                    <NavItem title="Reporting" icon={Flag} />
                    <NavItem title="Users" icon={Users} />
                </nav>


                <div className='mt-auto flex flex-col gap-6'>
                    <nav className='space-y-0.5'>
                        <NavItem title="Support" icon={LifeBuoy} />
                        <NavItem title="Users" icon={Cog} />
                    </nav>
                    <UsedSPaceWidget />

                    <div className='h-px bg-zinc-200'></div>

                    <Profile />
                </div></Collapsible.Content>
        </Collapsible.Root>
    )
}