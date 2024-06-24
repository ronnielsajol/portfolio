import hero from "/hero.jpg";
import Button from "./Button";
import git from "/github.svg";

const Hero = () => {
	return (
		<>
			<div className='ml-[160px] my-[110px]'>
				<div className=''>
					<p className='text-slate-200 text-2xl'>Hi! My name is</p>
					<h1 className='w-fit text-slate-200 text-7xl font-bold leading-relaxed gradient-hero'>Ronniel Sajol.</h1>
					<h1 className='w-fit text-slate-200 text-7xl '>
						<span className='font-medium'>I&apos;m a </span>
						<span className='font-bold leading-relaxed gradient2'>Web Developer</span>
					</h1>
					<p className='w-[490px] leading-8 text-base'>
						I build dynamic, responsive web applications and create user-friendly interfaces. With a passion for clean code and
						modern design, I aim to deliver seamless user experiences.
					</p>
					<div className='mt-5 flex justify-between w-96'>
						<Button primary={true} style={"hero"}>
							Hire Me!
						</Button>
						<Button secondary={true} style={"hero"}>
							<div className='flex items-center justify-evenly'>
								<img src={git} alt='Git Icon' className='w-6 h-6 text-primary' />
								My Projects
							</div>
						</Button>
					</div>
				</div>
				<div>{/* <img src={hero} alt='Hero' className='w-[405px] h-[505px] rounded-bl-[169px]' /> */}</div>
			</div>
		</>
	);
};

export default Hero;
