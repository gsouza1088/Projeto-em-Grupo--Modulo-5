import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Depoimentos from '../components/Depoimentos'
import Banners from '../components/Banners'

function Home() {
    return (
        <>
            <Banners /> 
            <br/>
            <br/>
            <Container>
                <Destaques />

                <br />
                <br />
                <Depoimentos />
            </Container>
        </>
    );
}

export default Home;