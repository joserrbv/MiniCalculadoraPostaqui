import styled from "styled-components";
import Button from "@mui/base/Button";
import { Link } from "react-router-dom";
import DadosdeEnvio3 from "../Title/DadosdeEnvio3";
import ColumnThree from "../ColumnThree/ColumnThree";

const CustomContainer = styled.div`
  background-color: #e1e1e1;
  border-radius: 20px;
  text-align: center;
  width: 1135px;
  padding-top: 30px;
  padding-bottom: 20px;
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

const DadosdeDestino = () => {
  return (
    <CustomContainer>
      <DadosdeEnvio3 />

      <div className="InputAll">
        <ColumnThree />
      </div>
      <div>
        <Link to={`/Step4/`}>
          <CustomButton type="submit">Avançar</CustomButton>
        </Link>
      </div>
    </CustomContainer>
  );
};

export default DadosdeDestino;
