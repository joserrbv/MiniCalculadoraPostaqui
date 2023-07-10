import "@fontsource/roboto/400.css";
import { Typography } from "@mui/material";
import logo from "../assets/Postaqui4.png";
import DadosdeDestino from "../Components/InputsStep2/DadosdeDestino";
import styled from "styled-components";
import InfoOrigem from "../Components/InfoOrigem/InfoOrigem";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffcd40;
  width: 100%;
  font-family: Roboto;
  height: 700px;
`;

const Logo = styled.img`
  margin-top: 2%;
  width: 255px;
  height: 74px;
  flex-shrink: 0;
`;

const Section = styled.section`
  display: flex;
  align-items: left;
  width: 80%;
`;

const Step2 = () => {
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
      <Section>
        <InfoOrigem />
      </Section>
      <main>
        <DadosdeDestino />
      </main>
    </Home>
  );
};

export default Step2;
