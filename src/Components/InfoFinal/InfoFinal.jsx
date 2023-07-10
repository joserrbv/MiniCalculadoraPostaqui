import styled from "styled-components";
import "@fontsource/roboto/400.css";

const FormControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
`;

const CustomFormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Label = styled.label`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CustomLabel = styled.label`
  color: #1e1e1e;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #27ae60;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 30px;
  width: 250px;
`;

const InfoFinal = () => {
  return (
    <FormContainer>
      <FormControl>
        <CustomLabel>Destino</CustomLabel>
      </FormControl>
      <CustomFormControl>
        <FormControl>
          <Label> AxLxC: </Label>
          <Label> 15x12x15 </Label>
        </FormControl>
        <FormControl>
          <Label> Logistica Reversa: </Label>
          <Label> Não </Label>
        </FormControl>
        <FormControl>
          <Label> Mãos próprias: </Label>
          <Label> Sim </Label>
        </FormControl>
        <FormControl>
          <Label> Aviso de recebimento: </Label>
          <Label> Sim </Label>
        </FormControl>
        <FormControl>
          <Label> Valor Mercadoria: </Label>
          <Label> R$264,00 </Label>
        </FormControl>
      </CustomFormControl>
    </FormContainer>
  );
};

export default InfoFinal;
