import { useState } from "react";
import RegisterPacientes from "../components/pacientes/RegisterPacientes";
import RegisterMedicos from "../components/medicos/RegisterMedicos";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Register = () => {
  const [switchForm, setSwitchForm] = useState(true);
  return (
    <Container>
      <h1>Registro</h1>
      <Button onClick={() => setSwitchForm(true)} variant="primary">
        paciente
      </Button>
      <Button onClick={() => setSwitchForm(false)} variant="primary">
        medico
      </Button>
      {switchForm ? <RegisterPacientes /> : <RegisterMedicos />}
    </Container>
  );
};
export default Register;
