import './App.css'
import Map from './components/Map'

function App() {

  return (
    <div className='bg-[#2F4858] w-full min-w-[886px] h-screen flex flex-col gap-3 items-center justify-center'>
      <h2 className='font-poppins text-slate-100 text-3xl font-medium'>Ransack</h2>
      <h1 className='font-poppins font-bold text-5xl bg-gradient-to-r from-[#F26419] to-[#F6AE2D] bg-clip-text text-transparent'>FIND YOUR NEXT ADVENTURE</h1>
      <p className='text-white font-extralight text-lg'>Use the arrow keys to control Pepper the Dragon to explore the adventures we have available for you!</p>
      <Map />
    </div>
  )
}

export default App
