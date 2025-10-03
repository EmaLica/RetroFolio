import React from 'react';
import { MenuList, MenuListItem, Separator } from 'react95';

const App = () => (
  <div style={{ padding: '2rem' }}>
    <MenuList>
      <MenuListItem>🎤 Sing</MenuListItem>
      <MenuListItem>💃🏻 Dance</MenuListItem>
      <Separator />
      <MenuListItem disabled>😴 Sleep</MenuListItem>
    </MenuList>
  </div>
);

export default App;
