import { useState } from 'react';

const Layout = ({ children }: any) => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Navbar */}
            <nav className="flex items-center justify-between bg-gray-900 px-4 py-3 w-full">
                <div className="text-white font-bold">Logo</div>
                <div className="text-white">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </div>
            </nav>

            {/* Sidebar */}
            <div className={`${showSidebar ? 'block' : 'hidden'} bg-gray-200 w-64 px-4 py-6`}>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="text-gray-800 font-medium">
                            Sidebar Item 1
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-800 font-medium">
                            Sidebar Item 2
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-800 font-medium">
                            Sidebar Item 3
                        </a>
                    </li>
                </ul>
            </div>
            <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="lg:hidden absolute top-4 right-4 text-gray-700 focus:outline-none"
            >
                {showSidebar ? (
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M6.707 19.707l-1.414-1.414L16.586 2.293l1.414 1.414L6.707 19.707zM19.707 6.707l-1.414-1.414L9.586 15.293l1.414 1.414L19.707 6.707z" />
                    </svg>
                ) : (
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </svg>
                )}
            </button>

            {/* Main content */}
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
};

export default Layout;
