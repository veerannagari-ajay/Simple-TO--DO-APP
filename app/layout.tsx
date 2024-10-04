import React from 'react';
import './globals.css'; 

export const metadata = {
    title: 'to do app',
    description: 'to do app',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav className="navbar">
                        <h1 className="navbar-title">WELCOME MY FRD</h1> 
                    </nav>
                </header>
                <main>{children}</main>
                <footer>
                </footer>
            </body>
        </html>
    );
};

export default Layout;
