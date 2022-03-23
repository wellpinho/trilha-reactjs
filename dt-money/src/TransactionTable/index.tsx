import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then((response) => response.json())
      .then((data) => console.log(data))
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