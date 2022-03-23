import { useEffect } from "react";
import { axiosApi } from "../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    axiosApi.get('/transactions')
      .then((response) => console.log(response.data))
  }, []) // array vazio indica que só quero executar este cara uma vez
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">+R$12.000</td>
            <td>Desenvolvimento</td>
            <td>23/03/2022</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$750</td>
            <td>casa</td>
            <td>05/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}