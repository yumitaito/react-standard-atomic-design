import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecandaryButton = ({ children, onClick }) => {
  return (
    <>
      <Sbutton onClick={onClick}>{children}</Sbutton>
    </>
  );
};

const Sbutton = styled(BaseButton)`
  background-color: #11999e;
`;
