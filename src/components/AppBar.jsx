import React, { useState } from 'react';
import { AppBar, Toolbar, Button, MenuList, MenuListItem, Separator, TextInput } from 'react95';

import logoIMG from '../assets/react.svg';

const CustomAppBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        {/* START BUTTON + MENU */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={logoIMG}
              alt='logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <MenuList
              style={{
                position: 'absolute',
                left: '0',
                top: '100%',
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem>
                <span role='img' aria-label='👨‍💻'>👨‍💻</span>
                Profile
              </MenuListItem>
              <MenuListItem>
                <span role='img' aria-label='📁'>📁</span>
                My Account
              </MenuListItem>
              <Separator />
              <MenuListItem disabled>
                <span role='img' aria-label='🔙'>🔙</span>
                Logout
              </MenuListItem>
            </MenuList>
          )}
        </div>

        {/* Right side (clock or search box) */}
        <TextInput placeholder='Search...' width={150} />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
