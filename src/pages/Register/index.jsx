import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Header from "../../components/Header";
import {
  Column,
  Container,
  LoginText,
  Row,
  SubtitleLogin,
  TenhoText,
  TermoText,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { api } from "../../services/api";

const schema = yup
  .object({
    name: yup.string().required("Name é obrigatório"),
    email: yup
      .string()
      .email("Email inválido")
      .required("Email é obrigatório!"),
    password: yup
      .string()
      .min(5, "Np minimo 5 caracteres")
      .required("Password é obrigatório!"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async ({ name, email, password }) => {
    try {
      const newUser = {
        name,
        email,
        password,
      };

      await api.post("users", newUser);
      alert(`Usuário ${name} cadastrado com sucesso!`);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      alert("Houve um erro, tente novamente!", error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                errorMessage={errors?.name?.message}
                control={control}
                placeholder="Nome completo"
              />
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
              <Button
                title="Criar minha conta"
                variant="tertiary"
                type="submit"
              />
              <br />
            </form>
            <TermoText>
              Ao clicar "em criar minha conta grátis", declaro que aceito as{" "}
              <a href="https://www.dio.me/policies">Políticas de Privacidade</a>{" "}
              e os <a href="https://www.dio.me/terms">Termos de Uso</a> da DIO.
            </TermoText>
            <Row>
              <TenhoText>Já tenho conta.</TenhoText>
              <LoginText onClick={() => navigate("/login")}>
                Fazer login.
              </LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Register;
