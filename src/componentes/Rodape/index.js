import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape-container'>
            <div className='sociais'>
                <a href='facebook.com' target='_blank'>
                <img src='/imagens/fb.png' alt='Logo do Facebook'/>
                </a>
                <a href='twitter.com' target='_blank'>
                <img src='/imagens/tw.png' alt='Logo do Twitter'/>
                </a>
                <a href='instagram.com' target='_blank'>
                <img src='/imagens/ig.png' alt='Logo do Instagram'/>
                </a>
            </div>
            <div className='logo'>
                <img src='imagens/logo.png' alt='Logo do Organo'/>
            </div>
            <div className='texto'>
                <h4>Desenvolvido por Gabriel Rafael</h4>
            </div>
        </footer>
    )
}

export default Rodape