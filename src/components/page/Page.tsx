import { FC, ReactNode } from 'react';

import s from './Page.module.scss';

export interface IProps {
  title: string;
  /*
   * HTML content
   */
  children: ReactNode;
}

export const Page: FC<IProps> = ({ title, children }) => (
  <article className={s.base}>
    <header>
      <h1>{title}</h1>
    </header>
    {children}
  </article>
);
