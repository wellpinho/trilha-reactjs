// para acessar as informações enviado do component pai 
// acessamos ela via params

export const Repositoryitem = (props) => {
  return (
    <li>
      {/* ?? é para que caso props.repository venha vazio */}
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>
        Acessar repositórios
      </a>
    </li>
  );
}
