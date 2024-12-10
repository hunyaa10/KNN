import styled from "styled-components";
import logoPath from "../Icon/knn-logo.svg";

const Loading = () => {
  return (
    <Wrapper>
      <LogoBox>
        <LogoImg src={logoPath} alt="logo" />
        <LogoText>Korea News Network</LogoText>
      </LogoBox>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoBox = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;
`;
const LogoImg = styled.img`
  width: 12vw;
`;
const LogoText = styled.h1`
  width: 0;
  font-size: 1.8vw;
  overflow: hidden;
  border-right: 0.15rem solid #000;
  white-space: nowrap;
  animation: typing 2s steps(18) forwards, blink 0.75s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 18ch;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
