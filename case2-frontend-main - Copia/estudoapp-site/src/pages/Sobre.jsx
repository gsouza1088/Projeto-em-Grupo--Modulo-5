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

    return (
        <Container className='conteudo-margin'>
            <h1>Sobre</h1>
             <p>Criado no intuito de facilitar a vida de todos os amantes por leitura, com a praticide de ter sua própria biblioteca em suas mãos, sem precisar sair do conforto da sua casa. E podendo levar para diversos tipos de ambientes a sua escolha.</p> 
             
            <Depoimentos />
        </Container>
    );
}

export default Sobre