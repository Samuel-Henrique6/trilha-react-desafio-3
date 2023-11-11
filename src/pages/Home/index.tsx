import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import banner from "../../assets/banner.png";
import { Container, TextContent, Title, TitleHighLight } from "./styles";
import Button from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };
  
  return (
    <>
      <Header autenticado={false} />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com as melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={banner} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
