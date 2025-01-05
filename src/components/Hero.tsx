import logo from '../assets/Screenshot (80).png'
import ShimmerButton from './ui/shimmer-button'
import video from '../assets/F1_1.mp4'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import circle from '../assets/icon-gradient-circle.svg'
import triangle from '../assets/icon-gradient-triangle (1).svg'
import square from '../assets/icon-gradient-square.svg'

export default function HomeTest(){
  const navigate =useNavigate()
  const items = [
    { 
        icon: square, 
        title: 'Make Work Easier', 
        description: 'Now you can cut of searching time of GOOD repo',
        buttonText: 'Find Out More'
    },
    { 
        icon: circle,
        title: 'Multi-language Support', 
        description: 'We Currently Support TypeScript, Javascript, C++, Python and Go.',
        buttonText: 'Get Details'
    },
    { 
        icon: triangle,
        title: "Special Feature's", 
        description: 'We Show Repository which is Highly Active ,  1k+ Stars, 500+ forks and much more.  ',
        buttonText: 'Learn more'
    }
];
useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  gsap.fromTo(
    ".video", // Select the video by className
    {
      scale: 1, // Initial scale
    },
    {
      scale: 2, // Final scale when scrolled into view
      scrollTrigger: {
        trigger: ".video-container", // Trigger element (the container)
        start: "top center", // When the top of the video container hits the center of the viewport
        end: "bottom top", // When the bottom of the video container hits the top of the viewport
        scrub: 1, // Smoothens the animation
        markers: false, // Disable markers for debugging
      },
    }
  );
},[])


    return (
        <>
       <div>
  <div className="bg-black min-h-screen w-full flex flex-col items-center">
    {/* Header Section */}
    <div className="w-full flex items-center justify-center gap-1 text-white font-serif text-2xl  -ml-20 py-4">
      <img src={logo} alt="Logo" className="h-10" />
      <h1 className=" sm:-mt-2 ">OpenLang</h1>
    </div>

    <div className="w-full mt-4 sm:mt-8 md:mt-14 text-center text-white py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <h1 className="font-serif -ml-16 mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
        Your Gateway to
      </h1>
      
      {/* Subheading with Flex */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mt-4 sm:mt-6">
        {/* "OPENSOURCE" Heading */}
        <h1 className="font-serif -mt-2 ml-9 mb-2  text-4xl sm:-ml-52 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter">
          OPENSOURCE
        </h1>
        
        {/* Supporting Text */}
        <span className="text-center -ml-12 sm:text-left font-anzo text-xs sm:text-sm leading-relaxed sm:translate-y-4 md:translate-y-7 max-w-xs sm:max-w-sm md:max-w-md">
          Find repositories that are highly active, <br className="hidden sm:inline" /> have <strong>1000+ stars</strong>, and <strong>500+ forks</strong>.
        </span>
      </div>
    </div>

<div className='text-white font-anzo text-lg -ml-7   -mt-24'>
<div className="z-10 flex min-h-64 items-center justify-center">
      <ShimmerButton className="shadow-2xl" onClick={()=>navigate('/projects')}>
        <span className="whitespace-pre-wrap text-center z-20 text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
         Get Started
        </span>
      </ShimmerButton>
    </div>
 </div>
 
</div>
<div className="relative">
      {/* Video Background Section */}
      <div className="video-container relative -mt-[100%] sm:-mt-24 md:-mt-36">
        <video
          src={video}
          autoPlay
          muted
          loop
          className="video w-full object-cover"
        ></video>
      </div>

      <div className="bg-black mt-10 sm:-mt-32 md:-mt-64 text-white min-h-screen z-10 relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className='text-center mb-8 sm:mb-12'>
          <h1 className='font-serif -ml-7 text-2xl sm:text-4xl md:text-5xl text-center capitalize'>
            What makes us unique
          </h1>
        </div>
   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-black bg-opacity-25 flex flex-col justify-center items-center"
            >
              <img src={item.icon} alt="" width={80} height={80} className="mb-4" />
              <h2 className="font-serif text-xl sm:text-2xl mt-4 sm:mt-6">{item.title}</h2>
              <p className="font-anzo font-normal text-xs sm:text-sm mt-2 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

</div>


        </>
    )
}