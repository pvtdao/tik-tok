import { ChildrenPropsSchema } from '@/schema/common';
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

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
