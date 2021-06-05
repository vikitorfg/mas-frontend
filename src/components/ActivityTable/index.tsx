import { Container } from "./styles";

export function ActivityTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliacao</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programacao Web</td>
                        <td>Implementacao de adsf</td>
                        <td>8.5</td>
                        <td>04/05/2021</td>
                    </tr>
                    <tr>
                        <td>Programacao Web</td>
                        <td>Implementacao de adsf</td>
                        <td>8.5</td>
                        <td>04/05/2021</td>
                    </tr>
                    <tr>
                        <td>Programacao Web</td>
                        <td>Implementacao de adsf</td>
                        <td>8.5</td>
                        <td>04/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}