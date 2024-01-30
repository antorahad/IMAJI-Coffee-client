import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

const HomeNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])
    return (
        <div className="py-10 px-5 max-w-7xl mx-auto">
            <div className="flex items-start justify-between">
                <div className="space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-semibold">Latest News</h1>
                    <p className="text-lg leading-relaxed w-full lg:w-[350px]">Get the latest updates and deeper coffee experience from IMAJI Coffee.</p>
                </div>
                <div>
                    <button className="hidden lg:flex btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Explore News</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center my-10">
                {
                    news.slice(0, 2).map(item => <NewsItem key={item.id} item={item}></NewsItem>)
                }
            </div>
            <div className="flex items-center justify-center lg:hidden">
                <button className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Explore Menu</button>
            </div>
        </div>
    );
};

export default HomeNews;