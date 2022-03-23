import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from "./styles";

import closeImg from './../assets/close.svg';
import incomeImg from './../assets/income.svg';
import outcomeImg from './../assets/outcome.svg';

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
// react modal sem isso fica acoplado ao elemento body
Modal.setAppElement('#root');

export function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModalProps) {
  return (
      <Modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <button 
          type="button" 
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="fechar modal" />
        </button>

        <Container>
          <h2>Cadastrar transação</h2>

          <form>
            <input type="text" placeholder="Título" />
            <input type="number" placeholder="Valor" />

            <TransactionTypeContainer>
              <button type="button">
                <img src={incomeImg} alt="entrada" />
                <span>Entrada</span>
              </button>

              <button type="button">
                <img src={outcomeImg} alt="saída" />
                <span>Saída</span>
              </button>
            </TransactionTypeContainer>

            <input type="number" placeholder="Categoria" />
            <button type="submit">Cadastrar</button>
          </form>
        </Container>
      </Modal>
  )
}