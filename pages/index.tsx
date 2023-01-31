import Head from 'next/head'
import { Inter } from '@next/font/google'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    setTheme(theme)
  }, [darkMode])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>Pyaeh Phyoe Ko Ko</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className='text-lg flex flex-col items-center min-h-screen p-12 dark:bg-zinc-900 bg-zinc-50'>
        <div className='max-w-[70rem]'>
          <header className='flex justify-end'>
            <button className='flex h-12 w-12 rounded-full items-center justify-center bg-zinc-900 dark:bg-zinc-50 '>
              <DarkModeSwitch
                checked={!darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </button>
          </header>

          <section className='py-10 border-b border-zinc-300 dark:border-[#2c2c2c]'>
            <div className='flex items-center justify-between'>
              <h3>Hi</h3>
              {/* <h3 className='text-4xl font-bold mb-2.5'>Hey, I'm Pyaeh Phyoe Ko Ko!</h3> */}
              <div className='w-40 h-40 rounded-full'>
                <Image
                  alt='avatar'
                  width={160}
                  height={160}
                  src="./avatar.png"
                />
              </div> 
            </div>
          </section> 

          <section className='py-10 border-b border-zinc-300 dark:border-[#2c2c2c]'>
            <h3 className='text-xl font-bold mb-2.5'>Technical Skills</h3>
            <ul className='pl-12'>
              <li>Programming Languages: HTML, CSS, JavaScript, TypeScript
              </li>
              <li>Frameworks and Libraries: React, Next, ReactNative, Bootstrap, JQuery, Tailwind, Socket.io,  Puppeteer, CodeMirror
              </li>
              <li>Databases: MongoDB</li>
              <li>Tools: Git, JIRA
              </li>
            </ul>
          </section>
          <section className='py-10 border-b border-zinc-300 dark:border-[#2c2c2c]'>
            <h3 className='text-xl font-bold mb-2.5'>My Personal Projects</h3>
            <ul className="pl-12">
              <li><a href='http://www.cssgradienteditor.com'>cssgradienteditor.com</a></li>
              <li><a href='http://www.csstextshadoweditor.com'></a>csstextshadoweditor.com</li>
              <li><a href='http://www.html-css-js-editor.vercel.app'></a>html-css-js-editor.vercel.app</li>
              <li><a href='http://www.real-time-open-chat.vercel.app'></a>real-time-open-chat.vercel.app</li>
            </ul>
          </section>
          <footer>
            <div className='flex p-16 justify-around'>
              <a href="http://www.github.com/pyaeh-phyoe" className='hover:underline hover:underline-offset-4 hover:decoration-2	 dark:hover:text-pink-500'>GitHub</a>
              <a href="http://www.linkedin.com/in/pyaehphyoekoko" className='hover:underline hover:underline-offset-4 hover:decoration-2	 dark:hover:text-pink-500'>LinkedIn</a>
              <a href="https://pyaeh-phyoe.github.io/resume/" className='hover:underline hover:underline-offset-4 hover:decoration-2	 dark:hover:text-pink-500'>Resume</a> 
            </div>
            <div className='flex justify-center' onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}>
              <button className='w-12 h-12 flex items-center justify-center bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              </button>
            </div>

          </footer>
        </div> 
      </main>

    </>
  )
}
