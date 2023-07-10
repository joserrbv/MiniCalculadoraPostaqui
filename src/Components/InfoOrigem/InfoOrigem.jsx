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
  background-color: #f2994a;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 30px;
  width: 250px;
`;

const InfoOrigem = () => {
  return (
    <FormContainer>
      <FormControl>
        <CustomLabel>Origem</CustomLabel>
      </FormControl>
      <CustomFormControl>
        <FormControl>
          <Label>Paulo Viana da Silva </Label>
          <Label> - 111.111.111-11</Label>
        </FormControl>
        <FormControl>
          <Label>37.130-127 </Label>
          <Label> - São Paulo </Label> <Label>- SP </Label>
          <Label> - Osasco </Label>
        </FormControl>
        <FormControl>
          <Label> - Centro </Label>
          <Label> - Rua Presidente Kennedy </Label>
          <Label> - 1052</Label>
        </FormControl>
        <FormControl>
          <Label> -AP152</Label>
        </FormControl>
      </CustomFormControl>
    </FormContainer>
  );
};

export default InfoOrigem;
