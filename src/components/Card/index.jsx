import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = ({ image }) => {
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
        <UserInfo>
          <UserPicture src={image} />
          <div>
            <h4>Samuel Henrique</h4>
            <p>Há 5 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HMTL e CSS</h4>
          <p>
            Projeto feito o curso de html e css no bootcamp dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>10</p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export default Card;
