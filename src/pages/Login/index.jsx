import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Header from "../../components/Header";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { api } from "../../services/api";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email inválido")
      .required("Email é obrigatório!"),
    password: yup.string().required("Password é obrigatório!"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&password=${formData.password}`
      );
      data.length === 1 ? navigate("/feed") : alert("Email ou senha inválido!");
    } catch (error) {
      alert("Houve um erro, tente novamente!", error);
    }
  };

  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Já tem cadastro?</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="Endereço de e-mail"
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
              />
              <br />
              <Button title="Entrar" variant="tertiary" type="submit" />
              <br />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha.</EsqueciText>
              <CriarText onClick={() => navigate("/register")}>
                Criar Conta
              </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
