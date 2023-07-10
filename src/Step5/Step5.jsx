import "@fontsource/roboto/400.css";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Button from "@mui/base/Button";
import { Link } from "react-router-dom";
import logo from "../assets/postaqui4.png";
import caminhao from "../assets/caminhao_correios.png";

const CustomButton = styled(Button)(
  () => `
    width: 160px;
    height: 33px;
    border-radius: 15px;
    background:  #2D9CDB;
    border: none;     
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor:pointer    
    `
);

const Conta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  font-family: Roboto;
  height: 700px;
`;

const Caminhao = styled.img`
  width: 454px;
  height: 224px;
  flex-shrink: 0;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const Logo = styled.img`
  margin-top: 2%;
  width: 255px;
  height: 74px;
  flex-shrink: 0;
`;

const Step5 = () => {
  return (
    <Conta>
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
        <Caminhao src={caminhao} alt="Caminhao do correio" />
        <Typography
          variant="h3"
          marginBottom={5}
          marginTop={5}
          fontSize={16}
          textAlign={"center"}
          fontWeight={700}
          color={"#1E1E1E"}
        >
          Parabéns o seu frete foi postado com sucesso.
        </Typography>
        <Typography
          variant="h3"
          fontSize={14}
          textAlign={"center"}
          fontWeight={700}
          color={"#1E1E1E"}
        >
          O seu código de rastreio é
        </Typography>
        <Typography
          variant="h3"
          marginBottom={5}
          fontSize={20}
          textAlign={"center"}
          fontWeight={700}
          color={"#1E1E1E"}
        >
          BR98755665SB
        </Typography>

        <Link to={`/`}>
          <CustomButton>Nova Postagem</CustomButton>
        </Link>
      </main>
    </Conta>
  );
};

export default Step5;
