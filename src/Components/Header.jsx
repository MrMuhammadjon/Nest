import React, { useState } from 'react';
import headImg from '../assets/logo.svg.png';
import 'boxicons';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const discount = [
        { id: 1, name: "10% Off Your First Order" },
        { id: 2, name: "Free Shipping on Orders Over $50" },
        { id: 3, name: "30% Off Selected Items" }
    ];

    const headElements = [
        { id: 1, name: "About Us", link: "/" },
        { id: 2, name: "My Account", link: "/account" },
        { id: 3, name: "Wishlist", link: "/wishlist" },
        { id: 4, name: "Order Tracking", link: "/tracking" }
    ];

    const headbtns = [
        { id: 1, name: "user", link: "/login" },
        { id: 2, name: "heart", link: "/wishlist" },
        { id: 3, name: "cart", link: "/cart" },
        { id: 4, name: "repost", link: "/register" }
    ];

    const headdetalis = [
        { id: 1, name: "Deals", link: "/" },
        { id: 2, name: "Home", link: "/home" },
        { id: 3, name: "About", link: "/about" },
        { id: 4, name: "Shop", link: "/shop" },
        { id: 5, name: "Vendors", link: "/vendors" },
        { id: 6, name: "Megamenu", link: "/mega-menu" },
        { id: 7, name: "Blog", link: "/blog" },
        { id: 8, name: "Pages", link: "/pages" },
        { id: 9, name: "Contact", link: "/contact" }
    ];

    return (
        <>
            <div className="w-full bg-green-600 text-white text-center text-sm">
                <div className="hidden md:flex justify-between w-[90%] mx-auto py-2 text-sm text-white">
                    <ul className="flex gap-4">
                        {headElements.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} className="hover:text-yellow-200 transition">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div>
                        Need help? Call us: <a href="tel:1900888" className="text-gray-600 font-semibold">1900-888</a>
                    </div>
                </div>
            </div>
            <header className="w-full flex flex-col bg-white shadow-md top-0 sticky z-[1000]">

                <div className="md:hidden bg-green-600 text-white text-center py-2 text-sm">
                    {discount[1].name}
                </div>

                <div className="w-[90%] mx-auto py-4 flex items-center justify-between gap-4">
                    <a href="/" className="flex-shrink-0">
                        <img src={headImg} alt="Logo" className="w-32 h-auto" />
                    </a>

                    <div className="hidden lg:flex flex-1 max-w-3xl border border-green-600 rounded-[10px] overflow-hidden">
                        <select className="px-4 py-2 border-r border-gray-300 bg-white text-sm">
                            <option>Kategoriya tanlang</option>
                            <option>Mevalar</option>
                            <option>Sabzavotlar</option>
                            <option>Sut mahsulotlari</option>
                        </select>
                        <input type="text" placeholder="Search for items..." className="flex-1 px-4 py-2 outline-none text-sm" />
                        <button className="h-[40px] w-auto flex items-center justify-center bg-green-600 text-white px-4">
                            <box-icon name='search' color='white' className='h-full'></box-icon>
                        </button>
                    </div>

                    <ul className="flex items-center gap-4">
                        {headbtns.map((item) => (
                            <li key={item.id} className="relative">
                                <a href={item.link} className="relative flex items-center justify-center w-10 h-10 rounded-full hover:scale-105 transition">
                                    <box-icon name={item.name} color="gray"></box-icon>
                                    <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                {menuOpen && (
                    <div className="md:hidden w-[90%] mx-auto pb-4">
                        <ul className="flex flex-col gap-2 text-sm text-gray-700 pt-2">
                            {headdetalis.map((item) => (
                                <li key={item.id}>
                                    <a href={item.link} className="block py-1 hover:text-green-600">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
            <div className="w-full border-t border-gray-200 bg-white">
                <div className="w-[90%] mx-auto flex items-center justify-between py-3 gap-10 md:gap-0">
                    <button className="bg-green-600 hover:bg-green-500 transition-[0.3s] text-white w-[220px] py-2 rounded flex items-center justify-center gap-2 cursor-pointer">
                        <box-icon name='category-alt' color='#ffffff' ></box-icon> Browse All Categories
                    </button>
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <box-icon name='menu' color='gray'></box-icon>
                    </button>

                    <nav className="hidden md:flex overflow-auto gap-6 text-sm text-gray-700">
                        {headdetalis.map(item => (
                            <a key={item.id} href={item.link} className="hover:text-green-600 transition">
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:flex flex-col text-right text-sm">
                        <span className="text-green-600 font-semibold">1900 - 888</span>
                        <span className="text-gray-500 text-xs">24/7 Support Center</span>
                    </div>
                </div>
            </div>
        </>
    );
}
