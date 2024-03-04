import React, { ReactNode } from 'react';
import Sidebar from '../sidebar/Sidebar';
import styles from './layout.module.css'; // Assume you have CSS module for styling
import TopBar from '../topBar/TopBar';
// import TopBar from './topBar';
interface LayoutProps {
  children: ReactNode;
}
const Layout1: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
        <div className={styles.topBar}> {/* Top Bar */}
           <TopBar />
        </div>
        <div className={styles.contentArea}> {/* Adjusted for sidebar + main content */}
        <div className={styles.sidebar}>
            <Sidebar />
            </div>
            <main className={styles.mainContent}>
                <div className={styles.mainContentPadding}>
                {children}
                </div>
            </main>
        </div>
    </div>
    );
};

export default Layout1;
