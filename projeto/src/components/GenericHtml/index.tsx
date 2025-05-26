import sass from './sass.module.scss'

type GenericHtmlProps = {
    children: React.ReactNode
}

function GenericHtml({ children }: GenericHtmlProps) {

    return (

        <>
            <div className={sass.genericHtml}>
                {children}
            </div>
        </>
    );
}

export default GenericHtml;