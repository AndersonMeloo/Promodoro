import sass from './sass.module.scss'

type HeadingProps = {
    children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {

    return <h1 className={sass.heading}>{children}</h1>
}