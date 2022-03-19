// para acessar as informações enviado do component pai 
// acessamos ela via params
interface IRepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
} 

// props agora usa o formato da interface com seus atributos
export const Repositoryitem = (props: IRepositoryItemProps) => {
  return (
    <li>
      {/* ?? é para que caso props.repository venha vazio */}
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>
        Acessar o repositório
      </a>
    </li>
  );
}
