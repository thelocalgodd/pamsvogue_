import one from '../assets/images/1.jpg'
import two from '../assets/images/2.jpg'
import three from '../assets/images/3.jpg'
import four from '../assets/images/4.jpg'
import five from '../assets/images/5.jpg'
import six from '../assets/images/6.jpg'

const HomePage = () => {
  return (
    <>
      <div className='mx-10 bg-yellow-200 h-auto w-fit rounded-lg p-5'>
        <h1 className='text-2xl font-bold'>Welcome to Pams Vogue</h1>
          <p className='text-xl'>We are a Fashion Design startup located at Ho, Volta Region, Ghana.</p>
          <p className='text-xl'>We design and sew all kinds of clothes for all occasions.</p>
      </div>

      <div className='mx-10 mt-5 bg-yellow-200 h-auto w-auto rounded-lg p-5'>
        <h1 className='text-2xl font-bold'>Location</h1>
          <p className='text-xl'>We are Located at</p>
          <a href="https://www.google.com/maps?q=6.60842561721802,0.468899816274643" className='text-sky-600 text-xl'>Togbe Tawiah Street, Ho</a>
          <p className='text-xl mt-5'>Check out our Catalog below.</p>
      </div>

      <div className='mx-10 mt-5 bg-yellow-200 w-fit h-fit rounded-lg p-5'>
        <h1 className='text-2xl font-bold'>Catalog</h1>
        <div className='flex flex-wrap'>
          <img src={one} alt="photo" 
            className='w-80 rounded-lg mt-5 mr-5'
          />
          <img src={two} alt="photo" 
            className='w-80 rounded-lg mt-5 mr-5'
          />
          <img src={three} alt="photo" 
            className='w-80 rounded-lg mt-5 mr-5'
          />
          <img src={four} alt="photo" 
            className='w-80 rounded-lg mt-5 mr-5'
          />
          <img src={five} alt="photo" 
            className='w-80 rounded-lg mt-5 mr-5'
          />
          <img src={six} alt="photo" 
            className='w-80 rounded-lg mt-5 mr-5'
          />
        </div>
      </div>

      <div className='mx-10 mt-5 bg-yellow-200 h-auto w-auto rounded-lg p-5'>
        <h1 className='text-2xl font-bold text-end text-yellow-950'>Try us out</h1>
          <p className='text-3xl font-semibold mb-3'>Contact Us</p>
          <p className='text-xl'>
            +233 54 733 5597
          </p>
          <p className='text-xl'>
            <a href="https://wa.me/233547335597">WhatsApp 🔗</a>
          </p>
          <p className='text-xl'>
            <a href="https://instagram.com/pamsvogue_">Instagram 🔗</a>
          </p>
          <p className='text-xl'>
            <a href="https://facebook.com/pamsvogue_">Facebook 🔗</a>
          </p>
          
        </div>
        <div className='mx-10 mt-5 bg-white h-auto w-auto rounded-lg p-5'>
          
        </div>
    </>
  )
}

export default HomePage