import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='container mx-auto flex justify-between py-5'>
        <div>
            <h1 className='font-bold text-lg'>MR<span className='text-[rgb(171,57,206)]'>studio</span></h1>
        </div>
        <div className='flex gap-7 font-semibold'>
            <Link to='#'>Home</Link>
            <Link to='#'>About</Link>
            <Link to='#'>Type of house</Link>
            <Link to='#'>Contact</Link>
            <Link to='#' className='ml-10 px-5 bg-[rgb(171,57,206)] text-white rounded-md'>Login</Link>
        </div>
    </nav>
  )
}

export default Nav