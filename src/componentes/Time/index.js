import Combatente from '../Combatente'
import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}

    return (
        props.combatentes.length > 0 && <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='combatentes'>
            {props.combatentes.map( combatente => <Combatente corDeFundo={props.corPrimaria} key={combatente.nome} nome={combatente.nome} cargo={combatente.cargo} imagem={combatente.imagem}/>)}
            </div>    
        </section>
    )
}

export default Time