import sass from './sass.module.scss'

type DefaultInputProps = {

    id: string,
    labelText: string,
} & React.ComponentProps<'input'>

function DefaultInput({ id, labelText, type, ...props }: DefaultInputProps) {

    return (

        <>
            <label htmlFor={id} id={id}>{labelText}</label>
            <input type={type} id={id} {...props} className={sass.input} />
        </>
    );
}

export default DefaultInput;