import React, { useContext } from 'react'
import { SkillsContext } from '../context/SiteContext'
import { Loader, Loader2 } from 'lucide-react';

const SpinningAnimation = () => {

    const { theme } = useContext(SkillsContext);

    return (
        <div className={`min-h-screen bg-white dark:bg-zinc-800 grid place-items-center w-full ${theme === 'dark' ? 'dark' : ''}`}>
            <Loader className='animate-spin text-blue-400 w-10 h-10' />
        </div>
    )
}

export default SpinningAnimation
