import Html from '/Html 5.png'
import Css from '/CSS3.png'
import JS from '/JavaScript.png'
import php from '/PHP.png'
import React from '/React.png'
import Vue from '/Vue Js.png'
import Python from '/Python.png'
import Tailwind from '/Tailwind CSS.png'
import Typescript from '/TypeScript.png'
import Laravel from '/Laravel.png'
import Java from '/Java.png'
import Git from '/Git.png'
import Icons from './Icons'

const Experience = () => {
 const icons = {
  Html,
  Css,
  JS,
  php,
  React,
  Vue,
  Python,
  Tailwind,
  Typescript,
  Laravel,
  Java,
  Git,
 }

 return (
  <main
   className="flex w-full flex-col items-center justify-center"
   id="Experience"
  >
   <h1 className="text-[8vw] font-bold transition-all duration-300 hover:text-accent lg:text-5xl">
    EXPERIENCE
   </h1>
   <p className="mt-3 text-balance p-1 text-center text-[3vw] font-light text-textColor md:w-[455px] md:text-base">
    I&apos;ve been doing web development for about a year now, and I&apos;m
    always eager to learn more in this fast paced industry.
   </p>

   <section className="mt-5 md:mt-10">
    <p className="p-5 text-center text-[4vw] font-medium text-textColor md:text-lg">
     These are the technologies I&apos;ve worked with:
    </p>
    <div className="grid grid-cols-3 place-items-center gap-1 md:grid-cols-6 md:gap-4">
     {Object.keys(icons).map((icon, index) => (
      <Icons key={index} src={icons[icon]} />
     ))}
    </div>
   </section>
   <section className="mt-10 md:mt-16">
    <p className="p-5 text-center text-[4vw] font-medium text-textColor md:text-lg">
     These are the past companies I&apos;ve worked with:
    </p>
    <div className="mt-5 flex w-full flex-col gap-6 px-7 md:mt-10 lg:flex-row">
     <div className="group flex flex-col items-center justify-center gap-5 md:w-full md:flex-row lg:w-full">
      <img
       src="/fs.jpg"
       alt="FlowerStore"
       className="h-40 w-40 rounded-full border-4 border-accent grayscale transition-all duration-300 group-hover:grayscale-0"
      />

      <div className="card">
       <h4 className="text-center text-3xl font-medium md:text-start">
        FlowerStore Group
       </h4>
       <div className="flex justify-between">
        <span className="text-[3vw] font-semibold md:text-base">
         Tech Intern
        </span>
        <span className="text-right text-[3vw] font-medium md:text-start md:text-base md:font-semibold">
         August 2023 - June 2024
        </span>
       </div>
       <p className="w-full cursor-default text-balance text-[3vw] font-extralight md:text-base md:font-light">
        Primarily worked on the frontend and backend of the BI tool for the
        e-commerce platform FlowerStore.ph using Vue.js, Tailwind, and Laravel.
       </p>
      </div>
     </div>
     <div className="md:full group flex flex-col items-center justify-center gap-5 md:flex-row lg:w-full">
      <img
       src="/lm.jpg"
       alt="lexmeet"
       className="h-40 w-40 rounded-full border-4 border-accent grayscale transition-all duration-300 group-hover:grayscale-0"
      />
      <div className="card">
       <h4 className="text-center text-3xl font-medium md:text-start">
        LexMeet
       </h4>
       <div className="flex justify-between">
        <span className="text-[3vw] font-semibold md:text-base">
         Front-End Developer Intern
        </span>
        <span className="text-right text-[3vw] font-medium md:text-start md:text-base md:font-semibold">
         April 2023 - July 2023
        </span>
       </div>
       <p className="w-full cursor-default text-balance text-[3vw] font-extralight md:text-base md:font-light">
        Translated Figma designs into functional websites using React. Conducted
        quality checks on each webpage to ensure accuracy and functionality.
       </p>
      </div>
     </div>
    </div>
   </section>
  </main>
 )
}

export default Experience
