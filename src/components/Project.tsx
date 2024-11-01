import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
     id: 0,
     title: "Todo List",
     desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
     img: "/pic-3.png",
     tags: ["React", "Node", "Css", "Typescript"]
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and TypeScript powered website to track with an interactive countdown feature.",
        img: "/pic-2.png",
        tags: ["Next.Js", "Node", "Css", "Typescript"]
    },
    {
        id: 2,
        title: "Weather Widget",
        desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data.",
        img: "/pic-4.png",
        tags: ["Next.Js", "Node", "Css", "Typescript"]
    },
    {
        id: 3,
        title: "Currency Converter",
        desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
        img: "/pic-6.png",
        tags: ["HTML", "Node", "Css", "Typescript"]
    },
    {
        id: 4,
        title: "Static Interctive Resume",
        desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/pic-1.png",
        tags: ["HTML", "Node", "Css", "Typescript"]
    },
    {
        id: 5,
        title: "Simple Calculator App",
        desc: "A basic HTML and TypeScript calculator for performing essential arithmetic operations.",
        img: "/pic-5.png",
        tags: ["HTML", "Node", "Css", "Typescript"]
    },
]


const Project = () => {
  return (
    <div id='project' className='container pt-32'>
      <Heading  title='My Projects'/>

      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-3 lg-grid-cols-4 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Project
