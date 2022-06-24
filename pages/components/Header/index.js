import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    margin:0 10px;
    text-align:center;
`

const Heading = styled.h2`
    font-weight:700;
    font-size:48px;
`

const Text = styled.p`
    font-size:20px;
    text-align:center;
    padding:0 10px;
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