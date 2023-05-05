import { TbSwimming, TbAirConditioning  } from 'react-icons/tb'
import { BiWifi } from 'react-icons/bi'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { MdOutlineDinnerDining } from 'react-icons/md'
import { FaPencilAlt } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import '../index.css'
import heroImage_1 from '../assets/heroImg_1.svg'
const Hero = () => {
  return (
    <section className="hero container mx-auto flex items-center h-[75vh] rounded-md relative">
        <div className="custom-shape-divider-top-1683209196">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>

        <div className='ml-6 text-white'>
          <h1 className='text-4xl font-semibold'>Enjoy Your</h1>
          <h1 className='text-4xl font-semibold pb-5'>Dream Vacation</h1>
          <p className='pb-5'>Elit aliqua qui labore ex nostrud.Aliquip consequat aliquip deserunt velit consectetur duis excepteur esse occaecat dolore dolore ut sit minim.</p>
          <Link to='#' className='text-green-400 ml-10'>Warwick Hotels & Resorts</Link>
        </div>
        <img className='w-2/5' src={heroImage_1} alt='house finding'/>
        
        <div className="overlay_container bg-white absolute flex items-center justify-around -bottom-16 left-10 right-10 rounded-md shadow-[3px_1px_15px_10px_rgba(0,0,0,0.2)] h-40">
            <div className="facilities flex flex-col">
                <div className='flex items-center justify-between mb-5'>
                    <h2 className='font-semibold text-2xl'>Facilities</h2>
                    <p className='text-sm text-orange-500'>See More</p>
                </div>
                        <div className='flex gap-10'>
                            <span className='flex flex-col items-center'>
                              <TbSwimming className='border-solid border-[1px] border-slate-500 text-3xl rounded-sm text-sky-500'/>
                              <p className='font-semibold'>Swimming</p>
                            </span>
                            <span className='flex flex-col items-center'>
                              <BiWifi className='border-solid border-[1px] border-slate-500 text-3xl rounded-sm text-red-500'/>
                              <p className='font-semibold'>Wi-Fi</p>
                            </span>
                            <span className='flex flex-col items-center'>
                              <TbAirConditioning className='border-solid border-[1px] border-slate-500 text-3xl rounded-sm text-green-500'/>
                              <p className='font-semibold'>AC</p>
                            </span>
                            <span className='flex flex-col items-center'>
                              <MdOutlineDinnerDining className='border-solid border-[1px] border-slate-500 text-3xl rounded-sm text-orange-500'/>
                              <p className='font-semibold'>Dinner</p>
                            </span>
                        </div>
            </div>
              <div>
                <h1 className='font-semibold text-1xl pb-3'>Hotels For You</h1>
                <p className='text-gray-400 text-sm pb-3'>5 days 6 Nights</p>
                <span className='flex items-center text-sm'><BsFillPatchCheckFill className='text-blue-800 mr-2'/> USD $500.00</span>
              </div>
              <div>
                <div className='flex items-center justify-around mb-5'>
                  <p className='text-lg font-semibold text-gray-400'>150 Results</p> 
                  <FaPencilAlt className='text-2xl text-gray-400'/>
                  <CiSearch className='text-2xl text-gray-400'/>
                </div>
                <div className='flex items-center gap-5'>
                  <img className='w-11 h-11 rounded-full' src='https://images.unsplash.com/photo-1676089775605-9de96f8e02f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='image'/>
                  <img className='w-11 h-11 rounded-full' src='https://images.unsplash.com/photo-1607570413857-d83fc84b4f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='image'/>
                  <img className='w-11 h-11 rounded-full' src='https://images.unsplash.com/photo-1544124499-58912cbddaad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='image'/>
                  <img className='w-11 h-11 rounded-full' src='https://images.unsplash.com/photo-1667592848357-d5f0dd86dc30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='image'/>
                  <img className='w-11 h-11 rounded-full' src='https://images.unsplash.com/photo-1614620371233-e4f517277b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='image'/>
                </div>
              </div>
        </div>
    </section>
  )
}

export default Hero