import { Container, NameText, Progress, UserPicture } from "./styles";

const UserInfo = ({ name, image, percentage }) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{name}</NameText>
        <Progress percentage={percentage} />
      </div>
    </Container>
  );
};

export default UserInfo;
