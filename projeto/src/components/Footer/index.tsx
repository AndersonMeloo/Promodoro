import sass from './sass.module.scss'

function Footer() {
    return (

        <>
            <form action="" className={sass.form}>

                <a href="">Entenda como funciona a técnica prodomoro</a>
                <p>{new Date().getFullYear()} - Desenvolvido por Anderson Melo</p>
            </form>
        </>
    );
}

export default Footer;