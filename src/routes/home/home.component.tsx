import React, { JSX } from 'react';

import { Outlet } from 'react-router-dom';
import { Directory } from '../../components/directory/directory.component';




export const Home=(): JSX.Element=> {
  return (
    <div>
        <Directory />
        <Outlet />
    </div>
  );
}


