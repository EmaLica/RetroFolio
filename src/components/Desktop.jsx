import React from 'react';

// Replace these with your own images
const icons = [
    { name: 'My Computer', src: 'https://i.imgur.com/8Km9tLL.png', onClick: () => alert('Opening My Computer...') },
    { name: 'Documents', src: 'https://i.imgur.com/J5LVHEL.png', onClick: () => alert('Opening Documents...') },
    { name: 'My Showcase', src: 'src/assets/showcase.png', onClick: () => alert('Opening Browser...') },
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
