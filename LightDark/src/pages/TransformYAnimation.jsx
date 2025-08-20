import React, { useContext } from 'react'
import { SkillsContext } from '../context/SiteContext';

const TransformYAnimation = () => {

    const { theme } = useContext(SkillsContext);

    return (
        <div className={`min-h-screen bg-white dark:bg-zinc-800 grid place-items-center w-full ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="flex items-center justify-center space-x-3">
                <span className="w-4 h-8 bg-blue-500 rounded-4xl animate-[stretch_1s_ease-in-out_infinite]"></span>
                <span className="w-4 h-8 bg-blue-500 rounded-4xl animate-[stretch_1s_ease-in-out_infinite_0.2s]"></span>
                <span className="w-4 h-8 bg-blue-500 rounded-4xl animate-[stretch_1s_ease-in-out_infinite_0.4s]"></span>
                <span className="w-4 h-8 bg-blue-500 rounded-4xl animate-[stretch_1s_ease-in-out_infinite_0.6s]"></span>
            </div>
        </div>
    )
}

export default TransformYAnimation
