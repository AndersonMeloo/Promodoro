import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import sass from './sass.module.scss'

export function Menu() {

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

                <a href="#" className={sass.menuLink}>
                    <SunIcon size={32} />
                </a>

            </nav>
        </>
    )
}