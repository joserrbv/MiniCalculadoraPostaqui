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
  height: 600px;
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
