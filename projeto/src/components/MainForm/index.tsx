import { PlayCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";

function MainForm() {

    return (

        <>

            <form action="" className="form">

                <div className="formRow">
                    <DefaultInput id="meuInput" labelText="task" title="Formulario" required />
                </div>

                <div className="formRow">
                    <p>Próximo intervalo é de 25</p>
                </div>

                <div className="formRow">
                    <Cycles />
                </div>

                <div className="formRow">
                    <DefaultButton icon={<PlayCircleIcon />} color="green" />
                </div>
            </form>
        </>
    );
}

export default MainForm;