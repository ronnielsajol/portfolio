import Button from './Button'
import git from '/github 1.png'

const Hero = () => {
 return (
  <>
   <main className="mx-20 my-28 ml-40 mt-20 flex justify-between" id="About">
    <div>
     <h4 className="text-2xl text-slate-200">Hi! My name is</h4>
     <h1 className="gradient-hero w-fit text-7xl font-bold leading-relaxed text-slate-200">
      Ronniel Sajol.
     </h1>
     <h1 className="w-fit text-7xl font-normal text-slate-200">
      <span className="font-medium">I&apos;m a </span>
      <span className="gradient2 font-bold leading-relaxed">Web Developer</span>
     </h1>
     <p className="w-[490px] text-base font-light leading-8">
      I build dynamic, responsive web applications and create user-friendly
      interfaces. With a passion for clean code and modern design, I aim to
      deliver seamless user experiences.
     </p>
     <div className="mt-5 flex w-96 justify-between">
      <Button
       primary={true}
       style={
        'hero shadow-md shadow-[#4e4d5f] hover:text-accent transition-all duration-300'
       }
      >
       <a href="mailto:sajolronniel28@gmail.com">Hire Me!</a>
      </Button>
      <Button secondary={true} style={'hero '}>
       <a
        className="flex items-center gap-2"
        href="https://github.com/ronnielsajol"
        target="_blank"
       >
        <img src={git} alt="Github Icon" className="h-6 w-6" />
        My Projects
       </a>
      </Button>
     </div>
    </div>
    <div className="relative h-[532px] w-[427.23px] sm:invisible lg:visible">
     <div className="absolute left-[21px] top-0 h-[505px] w-[405px] rounded-bl-[170px] bg-accent blur-[18.40px]"></div>
     <div className="absolute left-0 top-6 h-[505px] w-[405px] rounded-bl-[170px] bg-hero bg-cover bg-center bg-no-repeat"></div>
    </div>
   </main>
  </>
 )
}

export default Hero
