import "@fontsource/roboto/400.css";
import { Typography } from "@mui/material";
import styled from "styled-components";
import logo from "../assets/postaqui4.png";
import DadosdeOrigem from "../Components/InputsStep1/DadosdeOrigem";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffcd40;
  width: 100%;
  font-family: Roboto;
  height: 617px;

  @media (max-width: 1280px) {
    height: 800px;
  }

  @media (max-width: 1024px) {
    height: 600px;
  }

  @media (max-width: 912px) {
    height: 1368px;
  }

  @media (max-width: 820px) {
    height: 1180px;
  }

  @media (max-width: 768px) {
    height: 1024px;
  }

  @media (max-width: 540px) {
    height: 1150px;
  }

  @media (max-width: 414px) {
    height: 1200px;
  }

  @media (max-width: 412px) {
    height: 1200px;
  }

  @media (max-width: 280px) {
    height: 1230px;
  }
`;

const Logo = styled.img`
  margin-top: 2%;
  width: 255px;
  height: 74px;
  flex-shrink: 0;
`;

function Step1() {
  return (
    <Home>
      <Logo className="Home_Logo" src={logo} alt="logo da empresa" />

      <Typography
        variant="h3"
        marginBottom={5}
        fontSize={36}
        textAlign={"center"}
        fontWeight={700}
        color={"#1E1E1E"}
      >
        Teste Calculadora Postaqui
      </Typography>

      <main>
        <DadosdeOrigem />
      </main>
    </Home>
  );
}

export default Step1;
