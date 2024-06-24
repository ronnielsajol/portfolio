import Button from "../Components/Button";
import logo from "/ron.dev.png";

function navbar() {
	return (
		<div className='flex justify-between mx-10 my-8 content-center'>
			<div className='ml-[120px]'>
				<img src={logo} alt='ron.dev' />
			</div>
			<div>
				<ul className='w-[340px] flex justify-between items-center'>
					<li>
						<Button>About</Button>
					</li>
					<li>
						<Button>Experience</Button>
					</li>
					<li>
						<Button primary={true}>Résumé</Button>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default navbar;
