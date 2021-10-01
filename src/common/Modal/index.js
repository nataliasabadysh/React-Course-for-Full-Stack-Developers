import { Backdrop, Content } from "./ModalStyle";
import { Button } from "../Button";

export const Modal = ({ children, closeModal }) => {
  const modalJSX = (
    <Backdrop>
      <Content>
        {children}
        <Button onClickButton={closeModal} label="Close" />
      </Content>
    </Backdrop>
  );
  return <>{modalJSX}</>;
};
