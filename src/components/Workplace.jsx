import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Workplace = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className='max-w-7xl mx-auto py-10 px-5'>
            <div className='flex flex-col items-center gap-5 mb-10'>
                <h1 className="text-4xl lg:text-5xl font-semibold">8 Comfy Workspace</h1>
                <p className='w-full lg:w-[550px] text-center text-lg leading-relaxed'>We Provide many attractive and unique workspaces so you will have no trouble finding the workspace you want.</p>
            </div>
            <Carousel responsive={responsive} showDots={true}>
                <div className='relative mx-2 border shadow-sm'>
                    <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg&uid=R86799529&ga=GA1.1.459985010.1704129856&semt=ais" alt="Workplace Image" className='h-[300px] w-full object-cover'/>
                    <div className='bg-white absolute top-0 left-0 p-3'>
                        <h1 className='text-xl font-bold'>Night Bloom</h1>
                        <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                    </div>
                </div>
                <div className='relative mx-2 border shadow-sm'>
                    <img src="https://img.freepik.com/free-photo/cafe-bar-hotel-loft-style_1150-10724.jpg?w=996&t=st=1706293185~exp=1706293785~hmac=e6528f1459dc3f75b8b0f242e2a297d7a2c7d05dba5a5b614f966b17c113ea57" alt="Workplace Image" className='h-[300px] w-full object-cover'/>
                    <div className='bg-white absolute top-0 left-0 p-3'>
                        <h1 className='text-xl font-bold'>Bricky Base</h1>
                        <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                    </div>
                </div>
                <div className='relative mx-2 border shadow-sm'>
                    <img src="https://img.freepik.com/free-photo/cafe-living-room-loft-style_1150-10725.jpg?w=996&t=st=1706293112~exp=1706293712~hmac=9413c012468119f419ebf6346ce8a52c17ad7085a10798a0a0e1a853ca148030" alt="Workplace Image" className='h-[300px] w-full object-cover'/>
                    <div className='bg-white absolute top-0 left-0 p-3'>
                        <h1 className='text-xl font-bold'>Day Light</h1>
                        <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                    </div>
                </div>
                <div className='relative mx-2 border shadow-sm'>
                    <img src="https://img.freepik.com/free-photo/pub-interior-with-motorcycle-installation_1262-3608.jpg?w=996&t=st=1706293245~exp=1706293845~hmac=d73ce4821f3feb5810f1f999eaa83b314819aea717b28e98362ffe63c6bc83b9" alt="Workplace Image" className='h-[300px] w-full object-cover'/>
                    <div className='bg-white absolute top-0 left-0 p-3'>
                        <h1 className='text-xl font-bold'>Out Door</h1>
                        <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                    </div>
                </div>
                <div className='relative mx-2 border shadow-sm'>
                    <img src="https://img.freepik.com/free-photo/empty-living-room-decorated-fun-gathering-with-friends-having-alcoholic-drinks-snacks-nobody-apartment-with-modern-board-games-chess-enjoy-home-meeting-entertainment_482257-42170.jpg?w=1060&t=st=1706294026~exp=1706294626~hmac=3a11dc754fb0f68b4a3d65f5a1bc3321f0343ddcf8c03c03f575c399372c4170" alt="Workplace Image" className='h-[300px] w-full object-cover'/>
                    <div className='bg-white absolute top-0 left-0 p-3'>
                        <h1 className='text-xl font-bold'>Coffee Gossip</h1>
                        <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                    </div>
                </div>
                <div className='relative mx-2 border shadow-sm'>
                    <img src="https://img.freepik.com/free-photo/restaurant-setting-with-wooden-chairs-tables-beautiful-view_181624-9887.jpg?w=1060&t=st=1706295120~exp=1706295720~hmac=764dd5b963a7f859efca19291aac34eedf519301e1ae16ebe1b38da33ce92d49" alt="Workplace Image" className='h-[300px] w-full object-cover'/>
                    <div className='bg-white absolute top-0 left-0 p-3'>
                        <h1 className='text-xl font-bold'>Vintage Dine</h1>
                        <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                    </div>
                </div>
                <div className='relative mx-2 border shadow-sm'>
                    <img src="https://img.freepik.com/free-photo/glass-cocktail-book-cellphone-digital-tablet-wooden-table-restaurant_23-2147936117.jpg?w=996&t=st=1706295199~exp=1706295799~hmac=61560b3a7802926942ac8f1825acf2c4309114a5588d607bcadc3a9692a2829e" alt="Workplace Image" className='h-[300px] w-full object-cover'/>
                    <div className='bg-white absolute top-0 left-0 p-3'>
                        <h1 className='text-xl font-bold'>Peace Garden</h1>
                        <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                    </div>
                </div>
                <div className='relative mx-2 border shadow-sm'>
                    <img src="https://img.freepik.com/free-photo/coffee-diary-spectacles-wooden-desk_23-2147892884.jpg?w=996&t=st=1706295499~exp=1706296099~hmac=de4501579fc520df194f4605a1e0ae95b17f563e6e9c0b26c6fa6189de776e95" alt="Workplace Image" className='h-[300px] w-full object-cover'/>
                    <div className='bg-white absolute top-0 left-0 p-3'>
                        <h1 className='text-xl font-bold'>Coffee Library</h1>
                        <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Workplace;