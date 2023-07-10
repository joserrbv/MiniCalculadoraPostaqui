import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { InputAdornment } from "@mui/material";

const DivTree = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "0 auto",
  padding: "16px",
});

const CustomFormControl = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px",
  marginRight: "40px",
  backgroundColor: "#fff",
});

const CustomControl = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px",
  marginRight: "40px",
});

const Label = styled("label")({
  marginBottom: "1px",
  fontWeight: "bold",
  textAlign: "left",
});

const CustomContainerForm = styled.div`
  display: flex;
  flex-direction: row;
`;

const Diva = styled.div`
  text-align: left;
`;

const ColumnThree = () => {
  return (
    <div className="casa">
      <DivTree>
        <FormContainer>
          <Label htmlFor="nome">Nome</Label>
          <CustomFormControl>
            <TextField id="nome" variant="outlined" />
          </CustomFormControl>

          <Label htmlFor="email">Email</Label>
          <CustomFormControl>
            <TextField id="email" variant="outlined" />
          </CustomFormControl>

          <Label htmlFor="email">Mensagem</Label>
          <CustomFormControl>
            <TextField id="email" variant="outlined" />
          </CustomFormControl>

          <Label htmlFor="nome">Nome</Label>
          <CustomFormControl>
            <TextField id="nome" variant="outlined" />
          </CustomFormControl>
        </FormContainer>

        <FormContainer>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" column>
              <FormControlLabel
                value="top"
                control={<Switch color="primary" />}
                label="Logistica Reversa"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Switch color="primary" />}
                label="Aviso de recebimento"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Switch color="primary" />}
                label="Mãos próprias"
                labelPlacement="top"
              />
            </FormGroup>
          </FormControl>
        </FormContainer>
        <CustomControl>
          <CustomContainerForm>
            <Diva>
              <Label htmlFor="nome" padding="10px">
                Valor da mercadoria
              </Label>
              <CustomFormControl>
                <TextField
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    ),
                  }}
                />
              </CustomFormControl>
            </Diva>
            <Diva>
              <Label htmlFor="email">Quantidade de itens</Label>
              <CustomFormControl>
                <TextField
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="finish">Items</InputAdornment>
                    ),
                  }}
                />
              </CustomFormControl>
            </Diva>
          </CustomContainerForm>

          <Diva>
            <Label htmlFor="email">Descrição</Label>
            <CustomFormControl>
              <TextField variant="outlined" multiline rows={9} fullWidth />
            </CustomFormControl>
            <Label htmlFor="email">Limite de letras 0/1000</Label>
          </Diva>
        </CustomControl>
      </DivTree>
    </div>
  );
};

export default ColumnThree;
