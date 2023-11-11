import { Container, NameText, Progress, UserPicture } from "./styles";
import { IUserInfo } from "./types";

const UserInfo = ({ name, image, percentage }: IUserInfo) => {
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
