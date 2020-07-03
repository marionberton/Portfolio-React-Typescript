import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './backdrop';
import { Card } from './Card';

interface ModalOverlayProps {
  className?: string;
  imageClass?: string;
  contentClass?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  header?: Element;
}

interface ModalProps {
  onCancel: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  show: boolean;
}

const ModalOverlay: React.FunctionComponent<ModalOverlayProps> = ({
  className,
  style,
  children,
  contentClass,
  header,
}) => {
  const content = (
    <Card className={`modal ${className}`} style={style}>
      <div className={`m-8 ${contentClass}`}>{children}</div>
    </Card>
  );
  const elm = document.getElementById('modal-hook') as HTMLElement;
  return ReactDOM.createPortal(content, elm);
};

const Modal: React.FunctionComponent<ModalProps & ModalOverlayProps> = ({
  onCancel,
  show,
  children,
  header,
  onKeyPress,
}) => {
  return (
    <>
      {show && <Backdrop onClick={onCancel} onKeyPress={onKeyPress} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...{ children }} {...{ header }} />
      </CSSTransition>
    </>
  );
};

export default Modal;
