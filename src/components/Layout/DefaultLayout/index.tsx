import { ChildrenPropsSchema } from '@/schema/common';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }: ChildrenPropsSchema) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />

        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
