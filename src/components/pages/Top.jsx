import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SecandaryButton } from "../atoms/button/SecandaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/userProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const navigate = useNavigate();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecandaryButton onClick={onClickAdmin}>管理者ユーザー</SecandaryButton>
      <br />
      <br />
      <SecandaryButton onClick={onClickGeneral}>一般ユーザー</SecandaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
