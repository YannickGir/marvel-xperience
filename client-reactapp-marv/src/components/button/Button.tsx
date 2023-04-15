import React, { ReactNode, FC } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  label?: string;
  disabled?: boolean;
  active?: boolean;
  text?: string;
}

const Button: FC<ButtonProps> = ({ className = '', onClick, children, label, disabled }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} disabled={disabled}>
      {label || children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func
};

interface OutlineButtonProps extends ButtonProps {
}

export const OutlineButton: FC<OutlineButtonProps> = ({
  className = '',
  onClick,
  label,
  disabled,
  children
}) => {
  return (
    <Button className={`btn-outline ${className}`} onClick={onClick} label={label} disabled={disabled}>
      {children}
    </Button>
  );
};

OutlineButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
