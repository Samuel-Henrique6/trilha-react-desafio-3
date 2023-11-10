// import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import userImage from "../../assets/perfil.png";

import { Container, Column, Title, TitleHighLight } from "./styles";
const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card image={userImage}/>
          <Card image={userImage}/>
          <Card image={userImage}/>
          <Card image={userImage}/>
          <Card image={userImage}/>
        </Column>
        <Column flex={1}>
          <TitleHighLight># Ranking 5 Top da Semana</TitleHighLight>
          <UserInfo image={userImage} name={"Samuel Henrique"} percentage={85} />
          <UserInfo image={userImage} name={"Samuel Henrique"} percentage={70} />
          <UserInfo image={userImage} name={"Samuel Henrique"} percentage={65} />
          <UserInfo image={userImage} name={"Samuel Henrique"} percentage={45} />
          <UserInfo image={userImage} name={"Samuel Henrique"} percentage={35} />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
