import sass from './sass.module.scss'

type ContainerProps = {
    children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {

    return (
        <div className={sass.container}>
            <div className={sass.content}>
                {children}
            </div>
        </div>
    )
}