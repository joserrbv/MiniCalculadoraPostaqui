import styled from "styled-components";
import TextField from "@mui/material/TextField";

const FormControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CustomFormContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "180px",
  margin: "0 auto",
  padding: "16px",
});

const CustomFormControl = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px",
  backgroundColor: "#fff",
});

const CustomLabel = styled("div")({
  marginBottom: "1px",
  textAlign: "left",
  fontSize: "10px",
  color: "#000",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
});

const Label = styled("label")({
  marginBottom: "1px",
  textAlign: "left",
  fontSize: "10px",
  color: "#000",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
});

const CustomTextField = styled(TextField)`
  .MuiInputBase-root {
    height: 32px;
    backgroundcolor: #fff;
    border: 0;
  }
`;

const ColumnOne = () => {
  return (
    <div>
      <FormControl>
        <FormContainer>
          <Label htmlFor="nome">Nome completo</Label>
          <CustomFormControl>
            <CustomTextField />
          </CustomFormControl>

          <Label htmlFor="email">CEP</Label>
          <CustomFormControl>
            <CustomTextField />
          </CustomFormControl>

          <Label htmlFor="email">Número</Label>
          <CustomFormControl>
            <CustomTextField />
          </CustomFormControl>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="nome">CPF</Label>
          <CustomFormControl>
            <CustomTextField />
          </CustomFormControl>

          <Label htmlFor="email">Estado</Label>
          <CustomFormControl>
            <CustomTextField />
          </CustomFormControl>

          <Label htmlFor="email">Complemento</Label>
          <CustomFormControl>
            <CustomTextField />
          </CustomFormControl>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="nome">Telefone</Label>
          <CustomFormControl>
            <CustomTextField />
          </CustomFormControl>

          <Label htmlFor="email">Cidade</Label>
          <CustomFormControl>
            <CustomTextField />
          </CustomFormControl>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="nome">E-mail</Label>
          <CustomFormControl>
            <CustomTextField />
          </CustomFormControl>

          <Label htmlFor="email">Bairro</Label>
          <CustomFormControl>
            <CustomTextField />
          </CustomFormControl>
        </FormContainer>

        <CustomFormContainer>
          <FormContainer>
            <CustomLabel htmlFor="nome">Rua</CustomLabel>
            <CustomFormControl>
              <CustomTextField />
            </CustomFormControl>
          </FormContainer>
        </CustomFormContainer>
      </FormControl>
    </div>
  );
};

export default ColumnOne;
