import { useState } from 'react';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './NewTransactionModal';
import { GlobalStyle } from "./styles/Global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  // quando for um evento click ou ação do user
  // começar nome da função com handle...
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      {/* passando a função via props para o filho no caso index do component header */}
      <Header onOpenNewTranslationModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal 
        // passando a função via props para o filho
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
