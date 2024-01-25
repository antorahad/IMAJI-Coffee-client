const HomeNews = () => {
    return (
        <div className="py-10 px-5 max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl lg:text-5xl font-semibold">Latest News</h1>
                <div>
                    <button className="hidden lg:flex btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Explore News</button>
                </div>
            </div>
            <div className="grid grid-cols-1 place-items-center">

            </div>
        </div>
    );
};

export default HomeNews;