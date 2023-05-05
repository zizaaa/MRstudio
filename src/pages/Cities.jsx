import { FaPen } from 'react-icons/fa'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import '../index.css'

const Cities = () => {
  return (
    <section className="container flex flex-col items-center mx-auto mt-28 mb-28 px-10">
        <h1 className="text-4xl font-bold mb-10">Entire city of choice</h1>
        <div className='flex relative w-full justify-between'>
            <div className='relative w-72 rounded-md shadow-lg z-10 bg-slate-50'>
                <img className="w-72 h-40 pb-5 rounded-t-md" src="https://images.unsplash.com/photo-1524234599372-a5bd0194758d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="resort and hotel image"/>
                <div className='flex items-center justify-between absolute top-2 left-2 right-2'>
                    <p className='text-white'>Hotel & Resorts</p>
                    <FaPen className='text-white'/>
                </div>
                <div className='ml-4 pb-4 text-sm'>
                    <p className='text-red-500 font-semibold'>$600.00</p>
                    <p className='font-semibold'>Booking ID:543745</p>
                </div>
            </div>

            <div className='relative w-72 rounded-md shadow-lg z-10 bg-slate-50'>
                <img className="w-72 h-40 pb-5 rounded-t-md" src="https://images.unsplash.com/photo-1658591049748-4937f0a9051a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzJTIwYW5kJTIwcmVzb3J0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="resort and hotel image"/>
                <div className='flex items-center justify-between absolute top-2 left-2 right-2'>
                    <p className='text-white'>Hotel & Resorts</p>
                    <FaPen className='text-white'/>
                </div>
                <div className='ml-4 pb-4 text-sm'>
                    <p className='text-red-500 font-semibold'>$600.00</p>
                    <p className='font-semibold'>Booking ID:543745</p>
                </div>
            </div>

            <div className='relative w-72 rounded-md shadow-lg z-10 bg-slate-50'>
                <img className="w-72 h-40 pb-5 rounded-t-md" src="https://images.unsplash.com/photo-1454388683759-ee76c15fee26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="resort and hotel image"/>
                <div className='flex items-center justify-between absolute top-2 left-2 right-2'>
                    <p className='text-white'>Hotel & Resorts</p>
                    <FaPen className='text-white'/>
                </div>
                <div className='ml-4 pb-4 text-sm'>
                    <p className='text-red-500 font-semibold'>$600.00</p>
                    <p className='font-semibold'>Booking ID:543745</p>
                </div>
            </div>
            <div className='relative w-72 rounded-md shadow-lg z-10 bg-slate-50'>
                <img className="w-72 h-40 pb-5 rounded-t-md" src="https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="resort and hotel image"/>
                <div className='flex items-center justify-between absolute top-2 left-2 right-2'>
                    <p className='text-white'>Hotel & Resorts</p>
                    <FaPen className='text-white'/>
                </div>
                <div className='ml-4 pb-4 text-sm'>
                    <p className='text-red-500 font-semibold'>$600.00</p>
                    <p className='font-semibold'>Booking ID:543745</p>
                </div>
            </div>
            <span className='h-40 bg-[rgb(250,216,255)] absolute -left-10 -right-10 -bottom-10 rounded-2xl'>
                <IoIosArrowDropdownCircle className='text-[rgb(128,93,134)] absolute -bottom-3 left-[49%] text-3xl'/>
            </span>
        </div>
    </section>
  )
}

export default Cities