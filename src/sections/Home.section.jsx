import IntroCube from "../Components/IntroCube.component.jsx";

const HomeSection = () => {
    return (
        <section id='Home'>
            <div className='flex flex-col md:flex-row pt-[18vh] md:pt-[27vh] mx-[5vw] px-[3vw] justify-between gap-10'>
                {/* Left side content */}
                <div className='flex flex-col gap-8 w-full md:w-[50%]'>
                    <p className='text-3xl md:text-4xl font-bold'>Hello, I'm</p>
                    <h1 className='text-[#03e6ff] text-4xl md:text-6xl font-bold'>Ganesh Sudhanagunta</h1>
                    <h1 className='text-3xl md:text-6xl font-bold'>I build & scale full stack web apps.</h1>
                    <p className='text-base md:text-xl'>
                        Web Developer with a passion for creating seamless digital experiences. I enjoy crafting clean,
                        scalable systems that bring ideas to life — from backend logic to interactive frontends.
                    </p>

                    <a href="#Contact" className='w-[180px] hover:cursor-pointer px-8 bg-linear-to-r from-[#71cbff] to-[#8000ff] rounded-xl'>
                        <div className='relative hover:translate-2 transition duration-200 ease-linear px-8 py-2 rounded-xl bottom-2 right-10 bg-white/30 w-[180px] h-full backdrop-blur-[10px] text-black font-semibold'>
                            Let's Connect
                        </div>
                    </a>
                </div>

                {/* Right Side content */}
                <div className='w-full md:w-[45%] h-[50vh] md:h-[70vh] mb-10 md:mb-20'>
                    <IntroCube />
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
