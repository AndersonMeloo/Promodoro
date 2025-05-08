import sass from './sass.module.scss'

type DefaultButtonProps = {

    icon: React.ReactNode;
    color?: 'green' | 'red',
} & React.ComponentProps<'button'>

function DefaultButton({ icon, color = 'green', ...rest }: DefaultButtonProps) {

    return (

        <>
            <button className={`${sass.button} ${sass[color]}`} {...rest}>
                {icon}
            </button>
        </>
    );
}

export default DefaultButton;