import styled from "styled-components";
import Button from "@mui/base/Button";
import { Link } from "react-router-dom";
import DadosdeDestino1 from "../Title/DadosdeDestino1";
import ColumnTwo from "../ColumnTwo/ColumnTwo";

const CustomContainer = styled.div`
  background-color: #e1e1e1;
  border-radius: 20px;
  text-align: center;
  width: 1135px;
  padding-top: 30px;
  padding-bottom: 20px;

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

  @media (max-width: 480px) {
    width: 340px;
  }

  @media (max-width: 380px) {
    width: 240px;
  }
`;

const CustomButton = styled(Button)(
  () => `
  width: 160px;
  height: 33px;
  border-radius: 15px;
  background:  #2D9CDB;
  border: none;
  cursor: pointer;
   
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
 
  `
);

const DadosdeOrigem = () => {
  return (
    <CustomContainer>
      <DadosdeDestino1 />

      <div className="InputAll">
        <ColumnTwo />
      </div>
      <div>
        <Link to={`/step3/`}>
          <CustomButton type="submit">Avançar</CustomButton>
        </Link>
      </div>
    </CustomContainer>
  );
};

export default DadosdeOrigem;
