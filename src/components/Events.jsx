import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Events = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center py-10 px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto ">
                <div className='flex flex-col gap-5'>
                    <h1 className="font-semibold text-5xl leading-relaxed w-full lg:w-[550px]">We Grow Together With Our Customer</h1>
                    <p className='text-lg leading-relaxed'>We Believe that we are big not because of us but because of them.They are the one who motivate us to continue to innovate to provide a quality coffee taste and comfortable space that is getting better every day.</p>
                    <div>
                        <button className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Explore Event</button>
                    </div>
                </div>
                <div>
                    <Carousel responsive={responsive} showDots={true}>
                        <div className='relative mx-2 border shadow-sm'>
                            <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg&uid=R86799529&ga=GA1.1.459985010.1704129856&semt=ais" alt="Workplace Image" />
                            <div className='bg-white absolute bottom-0 left-0 p-3'>
                                <h1 className='text-xl font-bold'>Night Bloom</h1>
                                <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                            </div>
                        </div>
                        <div className='relative mx-2 border shadow-sm'>
                            <img src="https://img.freepik.com/free-photo/cafe-bar-hotel-loft-style_1150-10724.jpg?w=996&t=st=1706118503~exp=1706119103~hmac=942b5787b6984e3ae4e820dfe7beea935f716d1cd01ba40deb90f18a84357021" alt="Workplace Image" />
                            <div className='bg-white absolute bottom-0 left-0 p-3'>
                                <h1 className='text-xl font-bold'>Bricky Base</h1>
                                <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                            </div>
                        </div>
                        <div className='relative mx-2 border shadow-sm'>
                            <img src="https://img.freepik.com/free-photo/cafe-living-room-loft-style_1150-10725.jpg?w=996&t=st=1706119284~exp=1706119884~hmac=2b7257722f271bba6a324f6a0f6129585e3aff76dbf79e4c0c699661bf2aeeb9" alt="Workplace Image" />
                            <div className='bg-white absolute bottom-0 left-0 p-3'>
                                <h1 className='text-xl font-bold'>Day Light</h1>
                                <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                            </div>
                        </div>
                        <div className='relative mx-2 border shadow-sm'>
                            <img src="https://img.freepik.com/free-photo/empty-cafe-street-terrace-with-chairs-tables-guests_501050-570.jpg?w=996&t=st=1706119390~exp=1706119990~hmac=80f34e5cda6456f24e2179bcd55903eaef6b3950f74e15952db8262273d842d8" alt="Workplace Image" />
                            <div className='bg-white absolute bottom-0 left-0 p-3'>
                                <h1 className='text-xl font-bold'>Out Door</h1>
                                <p className='text-sm font-medium mt-2 text-red-500'>Workspace</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Events;