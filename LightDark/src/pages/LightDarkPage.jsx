import { Moon, Sun } from 'lucide-react'
import React, { useContext } from 'react'
import { SkillsContext } from '../context/SiteContext'

const LightDarkPage = () => {
    const { theme, setTheme } = useContext(SkillsContext);

    return (
        <div className={`min-h-screen bg-white dark:bg-zinc-800 grid place-items-center w-full ${theme === 'dark' ? 'dark' : ''}`}>

            <div className='bg-zinc-100 dark:bg-zinc-700 p-2 rounded-xl flex gap-3' >

                <button onClick={() => setTheme('light')} className='p-2 bg-transparent text-black rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-100/10 dark:text-white transition-all duration-300' >
                    <Sun className='hover:rotate-180 transition-transform duration-500' />
                </button>

                <button onClick={() => setTheme('dark')} className='p-2 bg-transparent text-black rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-100/10 dark:text-white transition-all duration-300' >
                    <Moon className='hover:-rotate-180 transition-transform duration-500' />
                </button>

            </div>

        </div>
    )
}

export default LightDarkPage
