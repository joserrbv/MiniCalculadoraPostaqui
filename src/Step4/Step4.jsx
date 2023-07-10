import "@fontsource/roboto/400.css";
import { Typography } from "@mui/material";
import styled from "styled-components";
import InfoOrigem from "../Components/InfoOrigem/InfoOrigem";
import InfoDestino from "../Components/InforDestino/InfoDestino";
import seta from "../assets/Arrow1.svg";
import logo from "../assets/postaqui4.png";
import ColumnFour from "../Components/ColumnFour/ColumnFour";
import InfoFinal from "../Components/InfoFinal/InfoFinal";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffcd40;
  width: 100%;
  font-family: Roboto;
  height: 750px;
`;

const Logo = styled.img`
  margin-top: 2%;
  width: 255px;
  height: 74px;
  flex-shrink: 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

const Seta = styled.img`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: -20px;
`;

const CustomLabel = styled.div`
  min-widht: 30px;
`;

const Step4 = () => {
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
        <CustomLabel>
          <Seta src={seta} alt="seta entre origem e destino" />
        </CustomLabel>
        <InfoDestino />
        <CustomLabel>
          <Seta src={seta} alt="seta entre origem e destino" />
        </CustomLabel>
        <InfoFinal />
      </Section>

      <main>
        <ColumnFour />
      </main>
    </Home>
  );
};

export default Step4;
