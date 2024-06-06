import { Bold, Briefcase, Italic, Link, List, ListOrdered, Mail, User, Users } from 'lucide-react';
import { InputControl, InputPrefix, InputRoot } from './components/Input';
import { SettingsTabs } from './components/SettingsTabs/SettingsTabs';
import * as FileInput from './components/Form/FileInput'
import { Selects } from './components/Form/Selects';
import { SelectItem } from './components/Form/SelectItem';



export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className='mt-6 flex flex-col '>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-200 pb-5'>
          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900'>Personal Info</h2>
            <span className='text-sm text-zinc-500'>Update your photo and personal details here.</span>
          </div>
          <div className='flex items-center gap-2'>
            <button type='submit' className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50'>Cancel</button>
            <button
              type='submit'
              form='settings'
              className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700' >
              Save
            </button>
          </div>
        </div>


        <form id='settings' action="" className='mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200'>
          <div className='flex flex-col lg:grid gap-3 lg:grid-cols-form'>
            <label htmlFor="first name" className='text-sm font-medium text-zinc-700'>Name</label>
            <div className='lg:grid gap-6 flex flex-col lg:grid-cols-2'>
              <InputRoot>
                <InputPrefix>
                  <User className='h-5 w-5 text-zinc-500' />
                </InputPrefix>
                <InputControl id='first name' defaultValue="Ivolbene" placeholder='Nome' />
              </InputRoot>
              <InputRoot>
                <InputPrefix>
                  <Users className='h-5 w-5 text-zinc-500' />
                </InputPrefix>
                <InputControl defaultValue="Hassib" placeholder='Sobrenome' />
              </InputRoot>
            </div>
          </div>

          <div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
            <label htmlFor="email" className='text-sm font-medium text-zinc-700'>Email address</label>
            <InputRoot>
              <InputPrefix>
                <Mail className='h-5 w-5 text-zinc-500' />
              </InputPrefix>
              <InputControl id='email' type='email' defaultValue="ivolbene1@gmail.com" placeholder='Email' />
            </InputRoot>
          </div>

          <div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
            <label htmlFor="photo" className='text-sm font-medium text-zinc-700'>
              Your photo
              <span className='text-sm font-normal text-zinc-500 block mt-0.5'>This will be displayed on your profile.</span>
            </label>

            <FileInput.Root className='flex items-start gap-5'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>

          </div>

          <div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
            <label htmlFor="role" className='text-sm font-medium text-zinc-700'>
              Role
            </label>
            <InputRoot>
              <InputPrefix>
                <Briefcase className='h-5 w-5 text-zinc-500' />
              </InputPrefix>
              <InputControl id='role' defaultValue="Front-End" />
            </InputRoot>
          </div>

          <div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
            <label htmlFor="country" className='text-sm font-medium text-zinc-700'>
              Country
            </label>
            <Selects placeholder='Select a country'>
              <SelectItem value='br' text='Brasil' />
              <SelectItem value='us' text='United States' />
            </Selects>
          </div>

          <div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
            <label htmlFor="Timezone" className='text-sm font-medium text-zinc-700'>
              Timezone
            </label>
            <Selects placeholder='Select a timezone'>
              <SelectItem value='pacific' text='Pacif Standard Time (PST) (UTC-08:00)' />
              <SelectItem value='br' text='America São Paulo (UTC-03:00)' />
            </Selects>
          </div>

          <div className='flex flex-col lg:grid lg:grid-cols-form gap-3 mt-3'>
            <label htmlFor="bio" className='text-sm font-medium text-zinc-700'>
              Bio
              <span className='text-sm font-normal text-zinc-500 block mt-0.5'>Write a short introduction.</span>
            </label>
            <div className='space-y-3'>
              <div className='lg:grid gap-3 flex flex-col lg:grid-cols-2'>
                <Selects placeholder='' defaultValue='normal'>
                  <SelectItem value='normal' defaultChecked text='Normal Text' />
                  <SelectItem value='md' text='Marckdown' />
                </Selects>
                <div className='flex items-center gap-1'>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md">
                    <Bold
                      className="h-4 w-4 text-zinc-500" strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md">
                    <Italic
                      className="h-4 w-4 text-zinc-500" strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md">
                    <Link
                      className="h-4 w-4 text-zinc-500" strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md">
                    <List
                      className="h-4 w-4 text-zinc-500" strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500" strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                className='min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm'
              />
            </div>
          </div>

          <div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
            <label htmlFor="projects" className='text-sm font-medium text-zinc-700'>
              Portfolio Projects
              <span className='text-sm font-normal text-zinc-500 block mt-0.5'>Share a few snippets of your work.</span>
            </label>
            <FileInput.Root >
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          <div className='flex items-center justify-end gap-2 pt-5'>
            <button type='submit' className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50'>Cancel</button>
            <button
              type='submit'
              className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700' >
              Save
            </button>
          </div>

        </form>
      </div>
    </>
  );
}
