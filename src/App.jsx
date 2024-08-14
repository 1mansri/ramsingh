import whatsapp from '../src/assets/whatsapp.svg'
import image from './assets/image.jpg'
function App() {


  return (
    <div className='w-full bg-black flex flex-col  items-center h-full'
    >
      <div className='text-white w-3/5 border-gray-300 border-solid border-2 mt-12 mb-6'>
        <img src={image} alt="" className='h-fit w-fit' />
      </div>
      <div className='text-white w-3/5 border-gray-300 border-solid border-2 mb-6'>
        <div className='flex flex-col items-center'>
          <h2 className='flex text-7xl font-bold ml-6 mr-6 mt-8'>MOST</h2>
          <h3 className='flex text-3xl font-bold mb-4 mt-2 text-yellow-600'>SAFE, TRUSTED & SECURE</h3>
        </div>
        <div className='flex items-center justify-center'>
          <button className='flex mt-6 bg-green-500 px-6 py-4 rounded-full mb-12'>
            <img src={whatsapp} alt="" className='h-8 w-8 inline-block mr-1 pt-1' />
            <h2 className='inline-block font-bold text-white text-2xl'><a href='https://wa.me/919024497804'>Get Online Account</a></h2>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
