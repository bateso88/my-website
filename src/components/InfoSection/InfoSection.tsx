import { InfoContainer, InfoWrapper, InfoTitle } from "./styles";

type Props = {
  id: string;
  lightTheme: boolean;
  title: string;
}

const InfoSection = ({ id, lightTheme, title }: Props) => {
  return (
    <InfoContainer id={id} lightTheme={lightTheme}>
      <InfoWrapper>
        <InfoTitle>{title}</InfoTitle>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
