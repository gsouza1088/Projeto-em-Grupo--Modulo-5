import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return(
        <Container className='conteudo-margin'>
             <h1>Sobre</h1>
            <p>Criado em 2023, com o bjetivo de reunir acervos de livros em um unico portal. Somos um marketplace dedicado a livros e tornamos a vida dos leitores mais facil. <br />
                Conectando leitores a pequenos livreiros, reunindo exemplares novos e seminovos, estimulamos o consumo consiente e ajudamos a democratizar a leitura no Brasil.
                No intuito de facilitar a vida de todos os amantes por leitura, com a praticide de ter sua própria biblioteca em suas mãos, sem precisar sair do conforto da sua casa. Podendo levar para diversos tipos de ambientes a sua escolha. </p> 
            
          
        
            <Depoimentos />
        </Container>
    );
}

export default Sobre
   