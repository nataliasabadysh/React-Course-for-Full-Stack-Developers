import { PostContainer } from "../../component/PostContainer/PostContainer";
import { ContainerStyled } from "./styles";
import { useSelector } from "react-redux";

export const NewsPage = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ContainerStyled theme={theme}>
      <PostContainer />
    </ContainerStyled>
  );
};
