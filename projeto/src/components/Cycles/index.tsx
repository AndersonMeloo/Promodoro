import sass from './sass.module.scss'

function Cycles() {

    return (

        <>
            <div className={sass.cycles}>
                <span>Ciclos:</span>

                <div className={sass.cycleDots}>

                    <span className={`${sass.cycleDot} ${sass.workTime}`}></span>
                    <span className={`${sass.cycleDot} ${sass.shortBreakTime}`}></span>
                    <span className={`${sass.cycleDot} ${sass.workTime}`}></span>
                    <span className={`${sass.cycleDot} ${sass.shortBreakTime}`}></span>
                    <span className={`${sass.cycleDot} ${sass.workTime}`}></span>
                    <span className={`${sass.cycleDot} ${sass.shortBreakTime}`}></span>
                    <span className={`${sass.cycleDot} ${sass.workTime}`}></span>
                    <span className={`${sass.cycleDot} ${sass.longBreakTime}`}></span>
                </div>
            </div>

        </>
    );
}

export default Cycles;