import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const PraimaryButton = ({ children }) => {
  return (
    <>
      <Sbutton>{children}</Sbutton>
    </>
  );
};

const Sbutton = styled(BaseButton)`
background-color:#40519e;
`;
