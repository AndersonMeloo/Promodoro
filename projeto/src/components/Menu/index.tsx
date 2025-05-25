import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import sass from './sass.module.scss'
import { useEffect, useState } from 'react'

type AvailableTheme = 'dark' | 'light'

export function Menu() {

    const [theme, setTheme] = useState(() => {

        const storageTheme = localStorage.getItem('theme') as AvailableTheme || 'dark'
        return storageTheme
    })

    function handleClickTheme() {

        setTheme(prevTheme => {

            prevTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return prevTheme
        })
    }

    const nextThemeIcon = {
        dark: <MoonIcon size={32} />,
        light: <SunIcon size={32} />
    }

    useEffect(() => {

        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    })

    return (
        <>
            <nav className={sass.menu}>

                <a href="#" className={sass.menuLink}>
                    <HouseIcon size={32} />
                </a>

                <a href="#" className={sass.menuLink}>
                    <HistoryIcon size={32} />
                </a>

                <a href="#" className={sass.menuLink}>
                    <SettingsIcon size={32} />
                </a>

                <a href="#" className={sass.menuLink} onClick={handleClickTheme}>
                    {nextThemeIcon[theme]}
                </a>
            </nav>
        </>
    )
}