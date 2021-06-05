import { ActivityTable } from "../../components/ActivityTable";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

export function Dashboard(){
    return(
        <>
            <Header/>
            <Container>
                <Summary></Summary>
                <ActivityTable></ActivityTable>
            </Container>
        </>
    )
}