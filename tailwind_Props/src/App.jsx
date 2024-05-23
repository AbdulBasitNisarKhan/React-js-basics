import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {


  return (
    <>

      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Craftify</span> React js and tailwind <br /> through components</h1>

      <Cards username="Handmade Blue Crochet bag" buttontext="buy now" img1="https://i.etsystatic.com/45572820/c/2752/2752/94/85/il/322582/5296632670/il_600x600.5296632670_p398.jpg" />

      <Cards username="Handmade stylish bag" buttontext="buy now" img1="https://i.ebayimg.com/images/g/NUoAAOSwinRi7Sjx/s-l1200.webp" className="mt-4 ml-10" />
    </>
  )
}

export default App
