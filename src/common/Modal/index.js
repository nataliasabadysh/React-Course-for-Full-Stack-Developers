import { Backdrop, Content } from "./ModalStyle";
import { Button } from "../Button";

export const Modal = ({ children, closeModal }) => {
  // const keyDownHandler = e => {
  //   if (e.code !== 'Escape') {
  //     return;
  //   }
  //   closeModal();
  // };

  // useEffect(() => {
  //   window.addEventListener('keydown', keyDownHandler);

  //   return () => {
  //     window.removeEventListener('keydown', keyDownHandler);
  //   };
  // }, []);

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
