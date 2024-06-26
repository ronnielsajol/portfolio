import Button from './Button'
import { FiSend } from 'react-icons/fi'

const Resume = () => {
 return (
  <main
   className="mt-24 flex w-full flex-col items-center justify-center"
   id="Resume"
  >
   <div className="flex flex-col items-center justify-center">
    {' '}
    <h1 className="text-5xl font-bold transition-all duration-300 hover:text-accent">
     CHECK OUT MY RÉSUMÉ!
    </h1>
    <Button
     primary={true}
     style={
      'mt-8 shadow-md shadow-[#4e4d5f] hover:text-accent transition-all duration-300 resume'
     }
    >
     <a href="/SAJOL_RESUME.pdf" target="_blank">
      Grab a copy
     </a>
    </Button>
   </div>
   <div className="group mt-24 flex flex-col items-center justify-center gap-3 rounded-lg border border-transparent p-4 backdrop-blur-md transition-all duration-300 hover:border-white hover:border-opacity-20 hover:bg-primary hover:bg-opacity-40">
    <FiSend className="h-24 w-24 group-hover:text-accent" />
    <h1 className="text-4xl font-medium">GET IN TOUCH!</h1>
    <p className="mt-2 h-24 w-[500px] text-balance text-center text-xl font-light uppercase">
     Whether you have an idea for a project or just want to chat, feel free to
     shoot me an email!
    </p>
    <Button secondary={true} style={'w-[175px] h-[50px] text-lg'}>
     <a href="mailto:sajolronniel28@gmail.com">Say Hello</a>
    </Button>
   </div>
  </main>
 )
}

export default Resume
