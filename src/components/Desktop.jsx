import React from 'react';

// Replace these with your own images
const icons = [
    { name: 'My Showcase', src: 'src/assets/showcase.png', onClick: () => alert('Opening Showcase...') },
    { name: 'Wolfenstein', src: 'src/assets/wolfenstein.png', onClick: () => alert('Opening Wolfenstein...') },
    { name: 'Doom', src: 'src/assets/doom.png', onClick: () => alert('Opening Doom...') }
];

const Desktop = () => {
    return (
        <div style={{ padding: '1rem', color: 'white' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column', // vertical stack
                    alignItems: 'flex-start', // align to the left
                    gap: '1.5rem',
                    marginTop: '2rem',
                }}
            >

                {icons.map((icon) => (
                    <div
                        key={icon.name}
                        onClick={icon.onClick}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            cursor: 'pointer',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={icon.src}
                            alt={icon.name}
                            style={{ width: '48px', height: '48px', marginBottom: '0.5rem' }}
                        />
                        <span style={{ fontSize: '0.8rem' }}>{icon.name}</span>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Desktop;
