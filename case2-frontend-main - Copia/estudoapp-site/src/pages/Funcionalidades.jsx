import ListaFuncionalidades from "../components/ListaFuncionalidades"
import Container from 'react-bootstrap/Container'
import Banners from "../components/Banners"
import { useEffect, useState } from "react"
import CmsApi from '../api/CmsApi'
import main from '../assets/css/main.css'

function Funcionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect(() => {
        async function fetchFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            if(!response.ok) {
                alert('Erro ao carregar funcionalidades')
                return
            }
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        fetchFuncionalidades()
    }, [])

    return (
        <>
        <Banners />
        <Container className="conteudo-margin">
            
            <h2>Nossos Produtos</h2> <br />
            <br />

            <p>Na Biblioteca virtual, você encontra o que deseja em Livros de diversos gêneros como romance, terror e ficção cientifica e muito mais!!! <br></br></p>
            <br />
            <br />
            
            

            <ListaFuncionalidades funcionalidades={funcionalidades} />
        </Container>
        </>
    );
}

export default Funcionalidades