import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import correio from "../../assets/correios-logo-5 1.png";

const CustomButton = styled.button`
  width: 160px;
  height: 33px;
  border-radius: 15px;
  background: #2d9cdb;
  border: none;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const DivFour = styled.div`
  background-color: #ededed;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
  height: 300px;
  width: 1100px;

  @media (max-width: 1120px) {
    width: 900px;
  }

  @media (max-width: 925px) {
    width: 800px;
  }

  @media (max-width: 870px) {
    width: 700px;
  }

  @media (max-width: 750px) {
    width: 600px;
    height: 900px;
  }

  @media (max-width: 620px) {
    width: 450px;
  }

  @media (max-width: 540px) {
    width: 450px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 340px;
  }

  @media (max-width: 414px) {
    width: 300px;
    height: 400px;
  }

  @media (max-width: 412px) {
    width: 300px;
    height: 400px;
  }

  @media (max-width: 380px) {
    width: 240px;
  }

  @media (max-width: 375px) {
    width: 240px;
    height: 450px;
  }

  @media (max-width: 360px) {
    width: 250px;
  }
`;

const Correio = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`;

const ColumnFour = () => {
  return (
    <DivFour>
      <Typography
        variant="h4"
        color={"#1E1E1E"}
        text-align={"right"}
        font-family={"Roboto"}
        font-size={"24px"}
        font-style={"normal"}
        font-weight={"900"}
        line-height={"normal"}
        marginBottom={5}
      >
        Valor final do frete
      </Typography>
      <Typography
        color={"#000"}
        text-align={"center"}
        font-family={"Roboto"}
        font-size={"14px"}
        font-style={"normal"}
        font-weight={"700"}
        line-height={"normal"}
        marginBottom={5}
      >
        O melhor frete para o seu destino é com o valor de R$150,00 com
        <Correio src={correio} alt="Correios" />
        entrega no prazo de 5 dias uteis
      </Typography>
      <Typography
        variant="h4"
        color={"#000"}
        text-align={"center"}
        font-family={"Roboto"}
        font-size={"20px"}
        font-style={"normal"}
        font-weight={"700"}
        line-height={"bold"}
        marginBottom={5}
      >
        Sua economia foi de R$74,09
      </Typography>
      <Link to={`/step5/`}>
        <CustomButton type="submit">Avançar</CustomButton>
      </Link>
    </DivFour>
  );
};

export default ColumnFour;
