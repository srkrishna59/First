import React, { ReactNode } from 'react';
import ClientSideBar from "../clientSideBar/ClientSideBar"
import styles from './clientLayout.module.css'; // Assume you have CSS module for styling
interface LayoutProps {
  children: ReactNode;
}
const ClientLayout: React.FC<LayoutProps> = ({ children }) => {
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

export default ClientLayout;
