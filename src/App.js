import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome:'EUA',
      corPrimaria:'#191D88',
      corSecundaria:'#F90716'
    },
    {
      nome:'Alemanha',
      corPrimaria:'#191825',
      corSecundaria:'#FFEA20'
    },
    {
      nome:'URSS',
      corPrimaria:'#D21312',
      corSecundaria:'#F15A59'
    },
    {
      nome:'Grã-Bretanha',
      corPrimaria:'#B31312',
      corSecundaria:'#1450A3'
    },
    {
      nome:'Japão',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'China',
      corPrimaria:'#FCE700',
      corSecundaria:'#D71313'
    },
    {
      nome:'Itália',
      corPrimaria:'#B61919',
      corSecundaria:'#1A5D1A'
    },
    {
      nome:'França',
      corPrimaria:'#B61919',
      corSecundaria:'#00337C'
    },
    {
      nome:'Suécia',
      corPrimaria:'#F0DE36',
      corSecundaria:'#19A7CE'
    },
    {
      nome:'Israel',
      corPrimaria:'#0D1282',
      corSecundaria:'#FFF5E0'
    }
  ]

  const [combatentes, setCombatentes] = useState([])

  const aoNovoCombatentesAdicionado = (combatente) => {
    setCombatentes([...combatentes, combatente])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCombatenteCadastrado={combatente =>  aoNovoCombatentesAdicionado(combatente)}/>
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        combatentes={combatentes.filter(combatente => combatente.time === time.nome)}
      />)}
      
      <Rodape/>
    
    </div>
  );
}

export default App;
