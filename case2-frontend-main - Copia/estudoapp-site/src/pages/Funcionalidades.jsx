import ListaFuncionalidades from "../components/ListaFuncionalidades"
import Container from 'react-bootstrap/Container'
import Banners from "../components/Banners"
import { useEffect, useState } from "react"
import CmsApi from '../api/CmsApi'

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
            
            <h1>Produtos</h1>
            <img
                        className="d-block w-100"
                        src="https://blogdocolecionador.com.br/wp-content/uploads/2018/05/como-comecar-uma-colecao-de-livros-dicas.jpg"
                        alt="Outro slide incrível" width="5000" height="200"
                    />
            
            

            <ListaFuncionalidades funcionalidades={funcionalidades} />
        </Container>
        </>
    );
}

export default Funcionalidades