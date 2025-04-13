import { TimerIcon } from 'lucide-react'
import sass from './sass.module.scss'

export function Logo() {

    return (
        <>
            <div className={sass.logo}>
                <a href="#" className={sass.logoLink}>
                    <TimerIcon size={64} />
                    <span>Chronos</span>
                </a>
            </div>
        </>
    )
}