import React, { ReactNode } from 'react';
import ClientSideBar from "../userSideBar/userSideBar"
import styles from './userLayout.module.css'; // Assume you have CSS module for styling
interface LayoutProps {
  children: ReactNode;
}
const userLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
      
        <div className={styles.container}>
     
        <div className={styles.contentArea}> {/* Adjusted for sidebar + main content */}
            <ClientSideBar />
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    </div>
    );
};

export default userLayout;
