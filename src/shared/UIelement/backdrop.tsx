import React from 'react';
import ReactDOM from 'react-dom';

interface BackdropProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const Backdrop: React.FunctionComponent<BackdropProps> = ({
  onClick,
  onKeyPress,
}) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-full h-screen z-10 bg-parablack bg-opacity-75 cursor-pointer"
      onClick={onClick}
      onKeyPress={onKeyPress}
      role="button"
      aria-label="close backdrop"
      tabIndex={0}
    />,
    document.getElementById('backdrop-hook') as Element
  );
};

export default Backdrop;
