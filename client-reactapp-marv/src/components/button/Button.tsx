import React, { ReactNode, FC } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className = '', onClick, children }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func
};

interface OutlineButtonProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export const OutlineButton: FC<OutlineButtonProps> = ({
  className = '',
  onClick,
  children
}) => {
  return (
    <Button className={`btn-outline ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
};

OutlineButton.propTypes = {
  onClick: PropTypes.func
};

export default Button;
