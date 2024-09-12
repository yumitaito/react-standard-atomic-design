import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const SecandaryButton = ({ children }) => {
  return (
    <>
      <Sbutton>{children}</Sbutton>
    </>
  );
};

const Sbutton = styled(BaseButton)`
background-color:#11999e;
`;
