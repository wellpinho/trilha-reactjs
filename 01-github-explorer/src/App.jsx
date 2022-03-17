import Contador from './components/Contador';
import { Repositorylist } from './components/RepositoryList';
import './styles/global.scss'

export const App = () => {
  return (
    <>
      <Repositorylist />
      <Contador />
    </>
  );
}
