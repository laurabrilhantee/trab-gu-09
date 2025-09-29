import { useState } from 'react'
import './App.css'

function App() {
  const [cidade, setCountCidade] = useState('');
  const [clima, setClima] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

//função para buscar dados db clima 
const buscaClima = async () => {

if(!cidade.trim()){
  setErro('Por favor, digite uma cidade');
  return;
  }
}

  setCarregando(true);
  setErro('');

try{
  const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'
  const url = `https://api.openweathermao.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`;
  const resposta = await fetch(url);

  if (!resposta.ok){
    throw new Error('Cidade não encontrada');
  }

  const dados = await resposta.json();
  setClima(dados);

  } catch (error){
    setErro(error.message);
    setClima(null);
  } finally {
    setCarregando(false);

  };
    const handlekeyPress = (e) => {
      if(e.key == 'Enter'){
        buscaclima();
      }
    };
  return (
    <>
      <div className="app-container">
      <div className="contant-wrapper">

      </div>
      </div>
    </>
  )
}
export default App
