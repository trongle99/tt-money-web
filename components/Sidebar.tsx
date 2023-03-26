import { menu } from '@/constants/menu';
import { globalStore } from '@/store/store';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = globalStore();
    const router = useRouter();

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
            setActiveMenu(false);
        }
    };

    const activeLink =
        'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-gray-500';
    const normalLink =
        'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className="h-screen">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link
                            href="/"
                            onClick={handleCloseSideBar}
                            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                        >
                            <SiShopware /> <span>Shoppy</span>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setActiveMenu(!activeMenu)}
                            // style={{ color: currentColor }}
                            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                        >
                            <MdOutlineCancel />
                        </button>
                    </div>
                    <div className="mt-10">
                        <ul>
                            {menu.map((menu, index) => (
                                <li key={index}>
                                    <Link
                                        href={menu.link}
                                        className={
                                            router.pathname === menu.link
                                                ? activeLink
                                                : normalLink
                                        }
                                    >
                                        {menu.icon}
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
