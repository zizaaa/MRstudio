import { TbSwimming } from 'react-icons/tb'
import { GiIsland } from 'react-icons/gi'
import { FaUmbrellaBeach } from 'react-icons/fa'
import { WiSunrise } from 'react-icons/wi'

const ResortSuprises = () => {
  return (
    <section className="container mx-auto mb-52">
        <div className='flex w-full items-center justify-around'>
            <div className='flex-1'>
                <h1 className='text-3xl font-semibold mb-5'>Resort Surprises</h1>
                <p className='text-xl mb-6'>Fugiat dolor culpa exercitation cupidatat aliquip amet elit voluptate tempor.Ea in dolor velit ea elit sit laboris non ex.</p>
                <span className='flex items-center text-2xl mb-5 gap-5'><TbSwimming className='text-[rgb(196,103,210)]'/><p>Infinity Pool</p></span>
                <span className='flex items-center text-2xl mb-5 gap-5'><FaUmbrellaBeach className='text-[rgb(196,103,210)]'/><p>The Beach</p></span>
                <span className='flex items-center text-2xl mb-5 gap-5'><GiIsland className='text-[rgb(196,103,210)]'/><p>Beach Surprise</p></span>
                <span className='flex items-center text-2xl mb-5 gap-5'><WiSunrise className='text-[rgb(196,103,210)]'/><p>Beach Activities</p></span>
            </div>
            <div className='w-1/2 flex flex-col items-center relative'>
                <img className='w-94 h-80 z-10 rounded-md shadow-[2px_2px_3px_3px_rgba(0,0,0,0.2)]' src='https://images.unsplash.com/photo-1676089775678-f81f7253103e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='resort'/>
                <span className='bg-[rgb(250,216,255)] top-[50%] -bottom-24 left-0 right-0 rounded-xl absolute flex items-end justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex gap-7 items-center pb-8'>
                            <img className='w-8 h-8 rounded-full opacity-[0.4] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]' src='https://images.unsplash.com/photo-1580223530509-849e0ad583ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='img'/>

                            <img className='w-10 h-10 rounded-full opacity-[0.6] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]' src='https://plus.unsplash.com/premium_photo-1675039871139-06cc792da9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='img'/>

                            <img className='w-11 h-11 rounded-full shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]' src='https://images.unsplash.com/photo-1676089775678-f81f7253103e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='img'/>

                            <img className='w-10 h-10 rounded-full opacity-[0.6] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]' src='https://plus.unsplash.com/premium_photo-1681922761181-ee59fa91edc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY4fHxob3RlbHMlMjBhbmQlMjByZXNvcnRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='img'/>

                            <img className='w-8 h-8 rounded-full opacity-[0.4] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]' src='https://images.unsplash.com/photo-1607185057194-52f3cd1b91ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg2fHxob3RlbHMlMjBhbmQlMjByZXNvcnRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='img'/>
                        </div>
                    </div>

                        <div className="custom-shape-divider-bottom-1683209291">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                            </svg>
                        </div>
                </span>
            </div>
        </div>
    </section>
  )
}

export default ResortSuprises