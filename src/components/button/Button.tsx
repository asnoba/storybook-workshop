import classnames from 'classnames';
import { FC, ReactNode } from 'react';
import s from './Button.module.scss';

export interface IProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  children: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<IProps> = ({
  primary = false,
  size,
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <button
      className={classnames(s.base, s[size], primary ? s.primary : s.secondary)}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
