import { ButtonContainer } from "./styles.js";
import { IButton } from "./types.js";

const Button = ({ title, variant = "primary", disabled, onClick }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} disabled={disabled}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
