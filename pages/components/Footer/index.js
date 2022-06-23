import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #101010;
  height: 40vh;
  display: flex;
  column-gap:3rem;
  justify-content:center;
`;

const FooterColumn = styled.div`
  color: #fff;
  font-size: 14px;
  ul{
    list-style:none;
  }
  li{
    color:rgba(255,255,255,.5);
    margin:11px 0;
    :hover{
        cursor:pointer;
        transform: translate(10px, 0);
        transition: transform ease .3s;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterColumn>
          <div>
            <ul>
              <h4>Apps</h4>
              <li>Wallet</li>
              <li>Bridge</li>
              <li>Staking</li>
              <li>Converter</li>
              <li>Explorer</li>
              <li>BTTCSCAN</li>
            </ul>
          </div>
        </FooterColumn>
        <FooterColumn>
          <div>
            <ul>
              <h4>Dev Center</h4>
              <li>Github</li>
              <li>Docs</li>
              <li>Faucet <span>How to Get</span></li>
              <li>Token Mapping</li>
              <li>Testnet</li>
            </ul>
          </div>
        </FooterColumn>
        <FooterColumn>
          <div>
            <ul>
              <h4>Help Center</h4>
              <li>User Guide</li>
              <li>FAQs</li>
              <li>Announcements</li>
            </ul>
          </div>
        </FooterColumn>
      </FooterContainer>
    </>
  );
};

export default Footer;
