import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAPI from '../Components/useAPI'
import { useMemo } from "react";




export default function Home() {
    const slides = [
        {
            id: 1,
            image: "https://images.uzum.uz/cvcg2f3vgbkm5ehkika0/main_page_banner.jpg",
            caption: "Welcome to Our Store",
            Link: ''
        },
        {
            id: 2,
            image: "https://images.uzum.uz/d0hes233uvph509ttlq0/main_page_banner.jpg",
            caption: "Big Discounts Available",
            Link: ''
        },
        {
            id: 3,
            image: "https://images.uzum.uz/d0ddtc0n274j5scll7v0/main_page_banner.jpg",
            caption: "Shop Your Favorite Products",
            Link: ''
        },
    ];

    const FeaturedCategories = [
        { id: 1, name: "Milck", Link: '' },
        { id: 2, name: "Meat", Link: '' },
        { id: 3, name: "Coffee", Link: '' },
        { id: 4, name: "Drick", Link: '' },
        { id: 5, name: "Fruit", Link: '' },
    ]

    const FeaturedCategoriesData = [
        { id: 1, name: "Milk", link: '', icon: 'https://img.icons8.com/?size=50&id=OjmyF6047eMG&format=png&color=000000', bgColor: 'bg-red-200' },
        { id: 2, name: "Meat", link: '', icon: 'https://img.icons8.com/?size=50&id=zB72ObMCzAjt&format=png&color=000000', bgColor: 'bg-pink-200' },
        { id: 3, name: "Coffee", link: '', icon: 'https://img.icons8.com/?size=50&id=fZo41yg651Rr&format=png&color=000000', bgColor: 'bg-blue-200' },
        { id: 4, name: "Drinks", link: '', icon: 'https://img.icons8.com/?size=50&id=bcVyoIxvSOFz&format=png&color=000000', bgColor: 'bg-yellow-200' },
        { id: 5, name: "Fruit", link: '', icon: 'https://img.icons8.com/?size=50&id=X6lGagd8NZDN&format=png&color=000000', bgColor: 'bg-green-200' },
        { id: 6, name: "Vegetables", link: '', icon: 'https://img.icons8.com/?size=50&id=OE3M1MWBEtxN&format=png&color=000000', bgColor: 'bg-orange-200' },
        { id: 7, name: "Fast Food", link: '', icon: 'https://img.icons8.com/?size=50&id=5TlaKzAOLS5T&format=png&color=000000', bgColor: 'bg-cyan-200' },
        { id: 8, name: "Snacks", link: '', icon: 'https://img.icons8.com/?size=50&id=mBcgqdvDhbp0&format=png&color=000000', bgColor: 'bg-gray-200' },
    ];

    const rekamCategories = [
        {
            titel: 'Everyday Fresh & Clean with Our Products',
            link: '',
            button: 'Shop Now',
            bgColor: 'bg-blue-100',
            img: 'https://worldpodium.ru/sites/default/files/1_1070.jpg'
        },
        {
            titel: 'Make your Breakfast Healthy and Easy',
            link: '',
            button: 'Shop Now',
            bgColor: 'bg-gray-100',
            img: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D0%BA-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B-%D1%84%D1%80%D1%83%D0%BA%D1%82%D0%BE%D0%B2-%D0%B8-%D0%BE%D0%B2%D0%BE%D1%89%D0%B5%D0%B9-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-205506033.jpg'
        },
        {
            titel: 'The best Organic Products Online',
            link: '',
            button: 'Shop Now',
            bgColor: 'bg-pink-100',
            img: 'https://img.freepik.com/free-photo/organic-food-background_23-2147978077.jpg'
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // har 5 soniyada

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };


    const { data, loading, error } = useAPI("https://dummyjson.com/products");

    if (loading) return <p className="p-4">Loading...</p>;
    if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

    const products = data?.carts?.flatMap(cart => cart.products) || [];


    console.log(products);







    return (
        <>
            <div className="relative m-auto mt-10 rounded-2xl w-[90%] h-[300px] md:h-[500px] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <a href={slide.Link}>
                            <img
                                src={slide.image}
                                alt={slide.caption}
                                className="w-full h-full object-cover"
                            />
                        </a>
                    </div>
                ))}

                {/* Arrow tugmalar */}
                <button
                    onClick={prevSlide}
                    className="z-[100] absolute top-1/2 left-4 transform -translate-y-1/2 bg-black opacity-60 cursor-pointer text-white px-3 py-2 rounded-full hover:bg-opacity-60"
                >
                    <box-icon name="chevron-left" color="white"></box-icon>
                </button>
                <button
                    onClick={nextSlide}
                    className="z-[100] absolute top-1/2 right-4 transform -translate-y-1/2 bg-black opacity-60 text-white px-3 py-2 rounded-full hover:bg-opacity-60"
                >
                    <box-icon name="chevron-right" color="white"></box-icon>
                </button>

                {/* Dots */}
                <div className="absolute z-[100] bottom-4 w-full flex justify-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === current ? "bg-green-500" : "bg-white"
                                }`}
                            onClick={() => setCurrent(index)}
                        ></button>
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-[90%] h-[200px] flex items-center justify-start">
                    <div className="flex felx-1 gap-10 items-center flex-col md:flex-row">
                        <div className="py-4 px-4 bg-green-600 rounded-2xl border-2 border-green-600 hover:bg-white text-white hover:text-green-600 transition-[0.3s] cursor-pointer">
                            <h1 className="text-xl h-full">Featured Categories</h1>
                        </div>
                        <ul className="flex gap-5 h-full items-center">
                            {
                                FeaturedCategories.map((item, index) => {
                                    return (
                                        <li key={index} className="">
                                            <a href={item.Link} className="text-green-600 text-sm transition-[0.3s] hover:text-black" id="a-bo">
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {FeaturedCategoriesData.map((item, index) => (
                            <a href={item.name}>
                                <div
                                    key={index}
                                    className={`${item.bgColor} border border-gray-200 rounded-3xl p-4 flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-md cursor-pointer h-36`}
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-12 h-12 mb-3 object-contain"
                                    />
                                    <h3 className="text-sm md:text-base font-medium text-center text-gray-800">
                                        {item.name}
                                    </h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rekamCategories.map((item, index) => (
                        <a href="">
                            <div
                                key={index}
                                className={`${item.bgColor} group relative rounded-3xl overflow-hidden h-80 hover:shadow-lg transition-all duration-300`}
                            >
                                {/* Background Image */}
                                {item.img && (
                                    <img
                                        src={item.img}
                                        alt={item.titel}
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-10 transition-opacity duration-300"
                                    />
                                )}

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 z-10">
                                        {item.titel}
                                    </h2>
                                    <button className="z-10 bg-white text-gray-800 hover:bg-gray-800 cursor-pointer hover:text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 shadow-md">
                                        {item.button}
                                    </button>
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="py-6 w-[90%] m-auto">
                <h1 className="text-2xl font-bold mb-4">Popular Products</h1>
                <div className="w-full">
                    <div className="py-6 w-full">
                        <h1 className="text-2xl font-bold mb-4">Cart Products</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
                            {products.map((product, index) => (
                                <div key={index} className="rounded-xl shadow-md border border-gray-200 p-4 flex flex-col gap-2 bg-white hover:shadow-lg transition-all">
                                    {/* <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="w-full h-40 object-contain rounded-md"
                                    /> */}
                                    <p className="text-gray-400 text-xs">Meats</p>
                                    <h2 className="text-sm font-semibold leading-5 text-gray-900">
                                        {product.title}
                                    </h2>
                                    <div className="flex items-center gap-1 text-yellow-500 text-xs">
                                        <box-icon name="star" color="gold" size="xs"></box-icon>
                                        {/* <span className="text-gray-500">({product.quantity}.0)</span> */}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        By <span className="text-green-600 font-semibold">NestFood</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div>
                                            {/* <span className="text-lg font-bold text-green-600">${product.price}</span> */}
                                            {/* <span className="line-through text-sm text-gray-400 ml-1">${product.total.toFixed(2)}</span> */}
                                        </div>
                                        <button className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded flex items-center gap-1 hover:bg-green-200 transition">
                                            <box-icon name='basket' color='green' size="xs"></box-icon> Add
                                        </button>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

