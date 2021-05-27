import classnames from 'classnames';
import { FC } from 'react';
import s from './Avatar.module.scss';

import { IUser } from '../../interfaces';

export interface IProps {
  size: 'small' | 'medium' | 'large';
  user: IUser;
}

const getInitials = (fullName: string): string => {
  return fullName
    .split(' ')
    .map((namePart) => namePart.charAt(0))
    .join('');
};

/**
 * Primary UI component for representing a user (It shows a user uploaded photo if available. Otherwise it fallbacks to the user's initials)
 */
export const Avatar: FC<IProps> = ({ size, user }) => {
  return (
    <div
      className={classnames(s.base, s[size])}
      style={{ backgroundImage: `url(${user.photoUrl}` }}
    >
      {user.photoUrl ? (
        <img src={user.photoUrl} className={s.photo} alt={user.fullName} />
      ) : (
        getInitials(user.fullName)
      )}
    </div>
  );
};
