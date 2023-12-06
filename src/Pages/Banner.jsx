import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Swap Style, Share Book House!</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Join our community for a fantastic clothing swap event where you can exchange your garments, refresh your style, and embrace sustainable fashion together. Let's trade and redefine our wardrobes!</p>
                        <Link to="/service">
                            <a href="#" class="btn inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg capitalize">
                                See More
                                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </Link>
                    </div>
                    <div class=" pt-5 md:pt-0 lg:pt-0 lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://i.ibb.co/tQYmyjS/149982-yznbeazhfe-1604155999.jpg" alt="mockup" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;