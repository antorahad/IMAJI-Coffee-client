import image1 from "../assets/2.jpg";
import image2 from "../assets/1.jpg";
const Banner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAEAB1] bg-opacity-50">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center max-w-7xl mx-auto px-5 py-10">
                <div className="space-y-6">
                    <h1 className="w-[350px] font-semibold text-5xl leading-relaxed">Choose Your Coffee & Space</h1>
                    <p className="text-lg leading-relaxed">IMAJI Coffee has been serving 20,000+ cups of coffee and providing a comfortable place for our customers to work since 2010.</p>
                    <img src={image2} alt="Banner Image"/>
                </div>
                <div>
                    <img src={image1} alt="Banner Image"/>
                </div>
           </div>
        </div>
    );
};

export default Banner;