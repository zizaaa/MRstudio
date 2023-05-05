import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin,BsPinterest } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className="container mx-auto flex flex-col items-center">
            <div className="w-1/2 flex flex-col items-center pt-20 mb-20">
                <h1 className="font-semibold text-5xl mb-3">Get better work</h1>
                <p className="font-thin pb-3">See why millions of people across 195 countries us Dash</p>
                <div className="w-full flex items-center justify-center gap-3">
                    <input className="w-1/2 px-1 py-2 rounded-md border-slate-300 border-[1px] border-solid" type="text" placeholder="Enter your Email"/>
                    <button className="py-2 px-4 text-white bg-[rgb(79,6,100)] rounded-md shadow-[3px_3px_5px_3px_rgba(79,6,100,0.2)]" type="submit" name="submit">Try now</button>
                </div>
            </div>
            <div className="flex items-center justify-evenly w-full">
                <div className='flex flex-col gap-3'>
                    <h3 className="font-semibold text-md">MR<span className="text-[rgb(185,105,207)]">studio</span></h3>
                    <p className='mb-3'>Eiusmod adipisicing quis duis mollit mollit ullamco ut culpa.</p>
                    <div className='flex gap-3 text-[rgb(185,105,207)]'>
                        <BsFacebook/>
                        <BsInstagram/>
                        <BsTwitter/>
                        <BsLinkedin/>
                        <BsPinterest/>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className="font-semibold text-md">Support</h3>
                    <p>FAQ</p>
                    <p>How it</p>
                    <p>Features</p>
                    <p>Contact</p>
                    <p>Reporting</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className="font-semibold text-md">Contact Us</h3>
                    <p>+123-456-789</p>
                    <p>Mrstudio@gmail.com</p>
                    <p>Thank you!</p>
                </div>
            </div>
            <div className="flex w-full justify-between mt-10">
                <p>Copyright & Design by MRstudio</p>
                <p>Terms of use | Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer