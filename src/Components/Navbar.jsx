import Button from "../Components/Button";
import logo from "/ron.dev.png";

function navbar() {
	return (
		<nav className='flex justify-between mx-20 ml-40  my-8 content-center'>
			<div>
				<img src={logo} alt='ron.dev' />
			</div>
			<div>
				<ul className='w-[340px] flex justify-between items-center'>
					<li>
						<Button>
							<a href='#About'>About</a>
						</Button>
					</li>
					<li>
						<Button>
							<a href='#Experience'>Experience</a>
						</Button>
					</li>
					<li>
						<Button primary={true}>
							<a href='/SAJOL_RESUME.pdf' target='_blank'>
								Résumé
							</a>
						</Button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default navbar;
