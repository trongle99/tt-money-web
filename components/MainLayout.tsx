import React from 'react';
import Sidebar from './Sidebar';

const MainLayout = ({ children }: any) => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1 w-full">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
