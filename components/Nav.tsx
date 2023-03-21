import { globalStore } from '@/store/store';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../data/avatar.jpg';

const Nav = () => {
    const { activeMenu, setActiveMenu, screenSize, setScreenSize } = globalStore();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);
    return (
        <div className="flex justify-between p-2 relative">
            <button
                type="button"
                onClick={() => handleActiveMenu()}
                className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            >
                <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
                <AiOutlineMenu />
            </button>

            <div className="flex">
                <div
                    className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                    // onClick={() => handleClick('userProfile')}
                >
                    <Image className="rounded-full w-8 h-8" src={avatar} alt="user-profile" />
                    <p>
                        <span className="text-gray-400 text-14">Hi,</span>{' '}
                        <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
                    </p>
                    <MdKeyboardArrowDown className="text-gray-400 text-14" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
