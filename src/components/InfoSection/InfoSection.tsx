import { ReactNode } from "react";

import { InfoContainer, InfoWrapper, InfoTitle } from "./styles";

type Props = {
  id: string;
  lightTheme: boolean;
  title: string;
  children?: ReactNode;
}

const InfoSection = ({ id, lightTheme, title, children }: Props) => {
  return (
    <InfoContainer id={id} lightTheme={lightTheme}>
      <InfoWrapper>
        <InfoTitle>{title}</InfoTitle>
        {children}
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
