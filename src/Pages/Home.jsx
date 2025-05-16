import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAPI from '../Components/useAPI'
import { useMemo } from "react";



export default function Home() {
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

    const { data, loading, error } = useAPI('https://dummyjson.com/carts');
    console.log(data);




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
                    className="z-[100] absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-3 py-2 rounded-full hover:bg-opacity-60"
                >
                    <box-icon name="chevron-left" color="white"></box-icon>
                </button>
                <button
                    onClick={nextSlide}
                    className="z-[100] absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-3 py-2 rounded-full hover:bg-opacity-60"
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
                    <div className="flex felx-1 gap-10 items-center">
                        <div className="py-4 px-4 bg-green-600 rounded-2xl border-2 border-green-600 hover:bg-white text-white hover:text-green-600 transition-[0.3s] cursor-pointer">
                            <h1 className="text-3xl h-full">Featured Categories</h1>
                        </div>
                        <ul className="flex gap-5 h-full items-center">
                            {
                                FeaturedCategories.map((item, index) => {
                                    return (
                                        <li key={index} className="">
                                            <a href={item.Link} className="text-green-600 text-2xl transition-[0.3s] hover:text-black" id="a-bo">
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-10 md:grid-cols-6 w-[90%] m-auto gap-4">
                    
                </div>
            </div>
        </>
    );
}









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