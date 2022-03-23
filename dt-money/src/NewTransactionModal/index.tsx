import Modal from 'react-modal'
import { Container } from "./styles";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
// react modal sem isso fica acoplado ao elemento body
Modal.setAppElement('#root')

export function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModalProps) {
  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        Cadastrar transação
      </Modal>
    </Container>
  )
}