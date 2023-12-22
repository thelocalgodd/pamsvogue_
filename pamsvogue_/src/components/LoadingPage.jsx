import pamsvoguelogo from '../../public/pamsvogue.jpg'
import { motion } from 'framer-motion'

const LoadingPage = () => {
  return (
    <div className='flex justify-center items-center h-100 w-100 bg-yellow-100 '>
    <motion.div 
        animate={{ 
            translateY: [0, -20, 0],
         }}

        transition={{
            duration: 0.5,
            repeat: Infinity,
        }}
    >
        <PamsVogueLogo />
    </motion.div>
    </div>
  )
}

export default LoadingPage

function PamsVogueLogo() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img
                src={pamsvoguelogo}
                alt="pamsvogue"
                className='h-96 w-96 flex justify-center items-center rounded-full' />
        </div>
    )
}
