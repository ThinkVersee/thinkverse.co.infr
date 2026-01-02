'use client';

import React from 'react';

const Works = () => {
    const projects = [
        {
            title: 'UI/UX Design',
            description: 'We design intuitive and engaging interfaces by deeply understanding users and business goals.',
            large: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/modern-silver-laptop-blank-white-screen-centrally-placed-vibrant-green-mossy-surface-revealing-layers-rich-brown-397245033.jpg' // Perfect match: laptop on natural rock/moss with plants
        },
        {
            title: 'UI/UX Design',
            description: '',
            large: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/minimal-mockup-laptop-plants-white-background-clean-featuring-green-arranged-right-side-perfect-template-389196873.jpg' // Clean laptop with plants
        },
        {
            title: 'UI/UX Design',
            description: '',
            large: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/laptop-white-blank-screen-mockup-standing-rock-mountains-river-flows-background-freelancer-work-nature-park-portable-360493752.jpg' // Laptop on rock in natural setting
        }
    ];

    const Card = ({ project, isLarge }) => {
        const [isHovered, setIsHovered] = React.useState(false);

        return (
            <div
                style={{
                    width: isLarge ? '738px' : '521px',
                    height: isLarge ? '896px' : '438px',
                    background: isLarge ? 'linear-gradient(135deg, #e0d5c2 0%, #d0c0a8 100%)' : '#14B5720D',
                    borderRadius: '22px',
                    padding: '24px',
                    border: isLarge ? '1px solid #C9C9C980' : 'none',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
                    boxShadow: isHovered 
                        ? '0 30px 60px rgba(0,0,0,0.15)' 
                        : '0 8px 25px rgba(0,0,0,0.08)'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Arrow Button - matches your second style */}
                <div style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    width: '48px',
                    height: '48px',
                    background: isHovered ? '#ffffff' : 'transparent',
                    border: '2px solid #ffffff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: isHovered ? '0 6px 20px rgba(0,0,0,0.12)' : 'none'
                }}>
                    <span style={{
                        fontSize: '24px',
                        color: '#aaaaaa',
                        fontWeight: '300'
                    }}>
                        ↑
                    </span>
                </div>

                {/* Real image - perfectly fitted */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px 0'
                }}>
                    <img 
                        src={project.imageUrl}
                        alt="Project Mockup"
                        style={{
                            maxWidth: '92%',
                            maxHeight: '92%',
                            objectFit: 'contain',
                            borderRadius: '12px',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.18)'
                        }}
                    />
                </div>

                {/* Text Box */}
                <div style={{
                    background: '#ffffff',
                    padding: '28px',
                    borderRadius: '16px',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        margin: '0 0 12px 0'
                    }}>
                        {project.title}
                    </h3>
                    {project.description && (
                        <p style={{
                            fontSize: '14px',
                            color: '#666666',
                            lineHeight: '1.6',
                            margin: 0
                        }}>
                            {project.description}
                        </p>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div style={{
            background: '#ffffff',
            padding: '120px 0'
        }}>
            <div style={{ 
                width: '1279px', 
                margin: '0 auto'
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '10px 28px',
                        background: '#ffffff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '40px',
                        fontSize: '15px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: '#888'
                    }}>
                        • RECENT WORKS
                    </div>
                    <h1 style={{
                        fontSize: '54px',
                        fontWeight: 500,
                        color: '#1a1a1a',
                        lineHeight: '1.1',
                        margin: '40px auto 50px',
                        width: '607px'
                    }}>
                        We design intuitive and engaging interfaces
                    </h1>
                     {/* Multi-color Underline (Yellow + Green) */}
          <div className="flex justify-center gap-1 mb-12">
            <div style={{ width: '315px', height: '5px', backgroundColor: '#F7D046', borderRadius: '3px' }}></div>
            <div style={{ width: '80px', height: '5px', backgroundColor: '#10B981', borderRadius: '3px' }}></div>
          </div>
                </div>

                {/* Cards Layout */}
                <div style={{
                    display: 'flex',
                    gap: '42px',
                    alignItems: 'flex-start'
                }}>
                    <Card project={projects[0]} isLarge={true} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <Card project={projects[1]} isLarge={false} />
                        <Card project={projects[2]} isLarge={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;