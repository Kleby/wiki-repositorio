import { useState } from 'react';
import gitLogo from '../assets/icons8-github-75.png'
import { Button, Input, ItemRepor } from '../components';
import { api } from '../services/api';
import { Container, Content } from './styles';


const App = () => {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    await api.get(`repos/${currentRepo}`)
      .then( res => res.data)
      .then(data => {
              const isExist = repos.find(repo => {
                return repo.id === data.id
                } );
              if(!isExist){
                setRepos( prev => [...prev, data]);
                setCurrentRepo('');
                return;
              }
              alert("Repositório ja existente");
            
      })
      .catch(e => alert(`Repositório não encontrado.\n ERROR ${e}`))
  }

  const handleRemoveRepo = (id) => {
    const existingRepos = repos.map( item => item).filter( repo => repo.id !== id);
    repos.splice('');
    setRepos(existingRepos.map( repo => repo));

  }

  return (
    <Container>
      <h1>Wiki Repositórios</h1>
      <Content>
        <img src={gitLogo} alt="Logo github"/>
        <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo}/>
        {repos.map( repo => <ItemRepor repo={repo} handleRemoveRepo={handleRemoveRepo} />)}
      </Content>
    </Container>
  );
}

export default App;
