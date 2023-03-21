import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import { globalStore } from '@/store/store';
import Head from 'next/head';

const Layout = ({ children }: any) => {
    const { activeMenu } = globalStore();

    return (
        <>
            <Head>
                <title>TT Money</title>
                <meta name="description" content="TT Money web app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex relative dark:bg-main-dark-bg">
                <div
                    className={
                        activeMenu
                            ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full  '
                            : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2 '
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Nav />
                    </div>
                    {children}
                    <Footer />
                </div>

                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
            </div>
        </>
    );
};

export default Layout;
