import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import MainForm from "../../components/MainForm";
import { MainTemplate } from "../../Template/MainTemplate";

function Home() {

    return (

        <>
            <MainTemplate>

                <Container>
                    <CountDown />
                </Container>

                <Container>
                    <MainForm />
                </Container>

            </MainTemplate>
        </>
    );
}

export default Home;