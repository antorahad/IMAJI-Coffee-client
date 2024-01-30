const Events = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-10 px-5 bg-[#FAEAB1] bg-opacity-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto ">
                <div className='flex flex-col  justify-center gap-5'>
                    <h1 className="font-semibold text-5xl leading-relaxed w-full lg:w-[550px]">We Grow Together With Our Customer</h1>
                    <p className='text-lg leading-relaxed'>We Believe that we are big not because of us but because of them.They are the one who motivate us to continue to innovate to provide a quality coffee taste and comfortable space that is getting better every day.</p>
                    <div>
                        <button className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Explore Event</button>
                    </div>
                </div>
                <div>
                    <div className='relative mx-2 border'>
                        <img src="https://img.freepik.com/free-photo/closeup-male-barista-pouring-ground-coffee-making-pouron_176420-7889.jpg?size=626&ext=jpg&uid=R86799529&ga=GA1.1.459985010.1704129856&semt=sph" alt="Workplace Image" />
                        <div className='bg-white absolute bottom-0 left-0 p-3'>
                            <h1 className='text-xl font-bold'>International Coffee Day</h1>
                            <p className='text-sm font-medium mt-2 text-red-500'>30 JAN 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;