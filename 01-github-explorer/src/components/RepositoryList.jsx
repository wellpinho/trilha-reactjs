import { Repositoryitem } from "./RepositoryItem";

const repository = {
  name: 'Trilha ReactJS',
  description: 'Trilha sobre ReactJs do Cruso Ignite da Rocketseat',
  link: 'https://github.com/wellpinho/trilha-reactjs/tree/main/01-github-explorer'
}

export const Repositorylist = () => {
  return (
    <section className="repository-list">
      <h1>List de Repositórios</h1>

      <ul>
        {/* o conceito de propriedades
        o component pai envia informação
        ao component filho */}
        <Repositoryitem repository={repository} />
        <Repositoryitem repository={repository} />
        <Repositoryitem repository={repository} />
        <Repositoryitem repository={repository} />
      </ul>
    </section>
  );
}
