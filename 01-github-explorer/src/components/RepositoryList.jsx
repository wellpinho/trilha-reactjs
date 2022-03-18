import { Repositoryitem } from "./RepositoryItem";
import { useEffect, useState } from "react";

import './../styles/repositories.scss'

// https://api.github.com/users/wellpinho/repos

export const Repositorylist = () => {
  // sempre que for uma listagem usamos no useState o tipo array
  const [repositories, setRepositories] = useState([]);

  // quando houver alteração o useEffect é o indicado
  useEffect(() => {
    fetch('https://api.github.com/users/wellpinho/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])
  // se o array ficar vazio, esta função só executa uma vez) 
  // sempre que repositories mudar o callback muda

  return (
    <section className="repository-list">
      <h1>List de Repositórios</h1>

      <ul>
        {/* o conceito de propriedades
        o component pai envia informação
        ao component filho */}
        {
          repositories.map(repo => {
            return <Repositoryitem repository={repo} key={repo.name} />
          })
        }
      </ul>
    </section>
  );
}
