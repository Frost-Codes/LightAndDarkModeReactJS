import { createContext, useEffect, useState } from "react";



export const SkillsContext = createContext()


const SkillsContextProvider = (props) => {

    const [theme, setTheme] = useState('');

    useEffect(() => {
        // Check if user saved a theme
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setTheme(savedTheme);
        } 
        else {
            // fallback to system preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }
    }, []);

    // save theme changes
    useEffect(() => {
        localStorage.setItem('theme', theme);

    }, [theme]);




    const value = {

        theme, setTheme

    }

    return (
        <SkillsContext.Provider value={value}>

            {props.children}

        </SkillsContext.Provider>
    )
}

export default SkillsContextProvider