import logo from "../../assets/logo-dio.png";
import Button from "../Button";
import {
  BuscasInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

import perfil from "../../assets/perfil.png";
import { useNavigate } from "react-router-dom";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscasInputContainer>
                <Input placeholder="Buscar..." />
              </BuscasInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src={perfil} />
          ) : (
            <>
              <MenuRight onClick={() => navigate("/")}>Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate("/login")} />
              <Button title="Cadastrar" onClick={() => navigate("/register")} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
