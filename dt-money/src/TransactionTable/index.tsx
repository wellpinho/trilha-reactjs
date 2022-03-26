import { useEffect, useState } from "react";
import { axiosApi } from "../services/api";
import { Container } from "./styles";

interface ITransaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export function TransactionTable() {
  const [transactions, setTransaction] = useState<ITransaction[]>([])

  useEffect(() => {
    axiosApi.get('/transactions')
      .then((response) => setTransaction(response.data))
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
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>+R${transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </Container>
  )
}