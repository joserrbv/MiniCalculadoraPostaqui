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
