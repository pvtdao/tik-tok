import { ChildrenPropsSchema } from '@/schema/common';
import React from 'react';
import Header from '../components/Header';

function HeaderOnly({ children }: ChildrenPropsSchema) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
