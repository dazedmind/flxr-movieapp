import { FaSearch } from 'react-icons/fa'
import { MdLocalPlay } from 'react-icons/md'
import { TiThMenu } from 'react-icons/ti'
import Card from './components/Card'

import menu from './img/themenu.jpg'
import plane from './img/plane.jpg'
import hrise from './img/high-rise.png'


function App() {
  return (
    <div>
      <nav className="flex justify-between items-center p-8 bg-slate-900 text-white px-14 font-jost">
        <div className='flex items-center gap-2'>
          <MdLocalPlay className='text-4xl' />
          <h2 className=" text-4xl font-bold"> FLXR</h2>
        </div>

        <TiThMenu className="md:hidden text-white text-4xl"/>
        <div className='hidden md:block'>
          <ul className="flex gap-10 text-xl items-center">
            <li className='flex items-center'>
              <input type="text" placeholder="Films" className=" rounded-full bg-gray-800 px-3 p-2 outline-none mx-2" /> 
              <button className='rounded-full bg-slate-200 p-2'><FaSearch className='text-black'/> </button>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Genre</a>
            </li>
            <li>
              <a href="/">Movies</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className=" flex flex-col h-auto font-jost bg-gradient-to-t from-slate-900 to-black">
        <div className="flex flex-col">
          <p className="text-3xl lg:text-5xl text-center text-white font-bold p-2 mt-64">See the latest films at the comfort of your home.</p>
          
          <form action="/" className="mx-auto mt-5">
            <input type="text" placeholder="Search Movies" className=" rounded-md px-4 py-2 mx-2 outline-none bg-gray-900 text-white"/>
            <input type="button" value="Search" className=" font-bold cursor-pointer px-4 py-2 lg:px-6 bg-gradient-to-tr from-slate-700 to-cyan-600 rounded-md" />
          </form>
        </div>

        <div className='flex flex-col md:flex-wrap md:justify-center xl:flex-row mt-24 mb-12 mx-auto'>
          <Card title="High Rise" date={2015} rating={7} img={hrise}/>
          <Card title="Plane" date={2023} rating={8} img={plane}/>
          <Card title="The Menu" date={2023} rating={6.5} img={menu}/>
        </div>
        <span className='flex mb-72'>
            <button className='px-8 py-4 bg-gradient-to-br from-cyan-600 via-cyan-800 to-slate-800 mx-auto rounded-full text-black text-2xl transition-all ease-in-out delay-150 hover:bg-gradient-to-bl hover:scale-110'>Browse More</button>
        </span>
      </section>

      <footer className=' bg-slate-800 flex flex-col xl:flex-row text-gray-400 text-center p-10 justify-between font-jost px-4 xl:px-96 gap-12'>
        <div className='text-left'>
          <h2 className='text-5xl font-bold text-white'>FLXR</h2>
          <p className='text-md'>FLXR is the best free streaming website for watching movies online without having to register. With a large database and numerous features, we are confident that FLXR is the best free movies online website in the space that you should not overlook!</p>
        </div>

        <div className='flex gap-10'>
          <ul className='text-left'>
            <li className=' hover:text-cyan-500'>
              <a href="/">Movies</a>
            </li>
            <li className=' hover:text-cyan-500'>
              <a href="/">TV Shows</a>
            </li>
            <li className=' hover:text-cyan-500'>
              <a href="/">Most Watched</a>
            </li>
            <li className=' hover:text-cyan-500'>
              <a href="/">Top ImdB</a>
            </li>
          </ul>

          <ul className=' text-left'>
            <li className=' hover:text-cyan-500'>
              <a href="/">Action</a>
            </li>
            <li className=' hover:text-cyan-500'>
              <a href="/">Thriller</a>
            </li>
            <li className=' hover:text-cyan-500'>
              <a href="/">Horror</a>
            </li>
            <li className=' hover:text-cyan-500'>
              <a href="/">Romance</a>
            </li>
            <li className=' hover:text-cyan-500'>
              <a href="/">Comedy</a>
            </li>
          </ul>
        </div>

      </footer>
    </div>
  )
}

export default App
