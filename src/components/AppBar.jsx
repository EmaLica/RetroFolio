import React, { useState } from 'react';
import { AppBar, Toolbar, Button, MenuList, MenuListItem, Separator, TextInput } from 'react95';

import logoIMG from '../assets/win95.png';

const CustomAppBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar style={{
            position: 'unset',
            bottom: 0,          // stick to bottom
            left: 0,            // start from left edge
            right: 0,           // go to right edge
            height: '40px',     // or whatever height you like
            zIndex: 9999,
        }}>
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
                                left: 0,
                                bottom: '100%',   // menu grows above the button
                            }}
                            onClick={() => setOpen(false)}
                        >
                            <MenuListItem>👨‍💻 Profile</MenuListItem>
                            <MenuListItem>📁 My Account</MenuListItem>
                            <Separator />
                            <MenuListItem disabled>🔙 Logout</MenuListItem>
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
