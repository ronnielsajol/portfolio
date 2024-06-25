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
   <h1 className="text-5xl font-bold transition-all duration-300 hover:text-accent">
    EXPERIENCE
   </h1>
   <p className="mt-3 w-[455px] text-center text-base font-light text-textColor">
    I&apos;ve been doing web development for about a year now, and I&apos;m
    always eager to learn more in this fast paced industry.
   </p>

   <section className="mt-10">
    <p className="text-center text-lg font-medium text-textColor">
     These are the technologies I&apos;ve worked with:
    </p>
    <div className="grid grid-cols-6 gap-4">
     {Object.keys(icons).map((icon, index) => (
      <Icons key={index} src={icons[icon]} />
     ))}
    </div>
   </section>
   <section className="mt-16">
    <p className="text-center text-lg font-medium text-textColor">
     These are the past companies I&apos;ve worked with:
    </p>
    <div className="mt-10 flex w-full gap-6 px-7 md:flex-col lg:flex-row">
     <div className="flex w-2/4 gap-5 md:w-full">
      <img
       src="/fs.png"
       alt="FlowerStore"
       className="grayscale transition-all duration-300 hover:grayscale-0"
      />
      <div className="gap-22 flex flex-col gap-2">
       <h4 className="text-3xl font-medium">FlowerStore Group</h4>
       <div className="flex justify-between">
        <span className="text-base font-semibold">Tech Intern</span>
        <span className="text-base font-semibold">August 2023 - June 2024</span>
       </div>
       <p className="w-full text-base font-light">
        Primarily worked on the frontend and backend of the BI tool for the
        e-commerce platform FlowerStore.ph using Vue.js, Tailwind, and Laravel.
       </p>
      </div>
     </div>
     <div className="flex w-2/4 gap-5 md:w-full">
      <img
       src="/lm.png"
       alt="lexmeet"
       className="grayscale transition-all duration-300 hover:grayscale-0"
      />
      <div className="gap-22 flex flex-col gap-2">
       <h4 className="text-3xl font-medium">FlowerStore Group</h4>
       <div className="flex justify-between">
        <span className="text-base font-semibold">Tech Intern</span>
        <span className="text-base font-semibold">August 2023 - June 2024</span>
       </div>
       <p className="w-full text-base font-light">
        Primarily worked on the frontend and backend of the BI tool for the
        e-commerce platform FlowerStore.ph using Vue.js, Tailwind, and Laravel.
       </p>
      </div>
     </div>
    </div>
   </section>
  </main>
 )
}

export default Experience
