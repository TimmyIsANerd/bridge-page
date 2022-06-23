import styled from 'styled-components';

const Container = styled.div`
    width:700px;
`

const Heading = styled.h2`
    font-weight:700;
    font-size:48px;
`

const Text = styled.p`
    font-size:20px;
`


const Header = () =>{
    return(
        <>
            <Container>
                <Heading>
                    BitTorrent Bridge
                </Heading>
                <Text>
                A secure, fast, and reliable heterogeneous cross-chain bridge <a href="">User Guide</a>
                </Text>
            </Container>
        </>
    )
}

export default Header;