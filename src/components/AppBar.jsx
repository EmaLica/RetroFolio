import React, { useState } from 'react';
import { AppBar, Toolbar, Button, MenuList, MenuListItem, Separator, TextInput } from 'react95';

import logoIMG from '../assets/win95.png';

const CustomAppBar = () => {
    const [open, setOpen] = useState(false);

    return (
        // Fixed wrapper ensures AppBar stays at the viewport bottom even if the library sets top/bottom
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '50px',
            zIndex: 9999,
        }}>
            <AppBar style={{ position: 'relative', height: '100%' }}>
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
        </div>
    );
};

export default CustomAppBar;
