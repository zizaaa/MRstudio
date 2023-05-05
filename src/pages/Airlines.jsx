import plane from '../assets/plane.svg'

const Airlines = () => {
  return (
    <section className="w-full bg-[rgb(250,216,255)] py-10">
        <div className='container bg-slate-50 mx-auto flex items-center justify-around rounded-lg p-10'>
            <div>
                <h1 className='font-semibold text-4xl mb-5'>Search for the Top Airlines</h1>
                <div className='flex items-start gap-10'>
                    <div>
                        <span className='flex items-center text-lg font-semibold'>
                            <img className='w-11 h-11' src="https://media.istockphoto.com/id/1137971264/vector/airplane-fly-out-logo-plane-taking-off-stylized-sign.jpg?s=612x612&w=0&k=20&c=TH1vDs4wmGnfWapq_e1XYxqzQV_qxaF4_aJWoDJyKNI=" alt="A1"/>
                            <p>Airline 1</p>
                        </span>
                        <span className='flex items-center text-lg font-semibold'>
                            <img className='w-11 h-11' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClEWWT7xvYg9iGJpTHl7KOJWFONBSX3bVtsCL6rIj9CL02DooggFmVoSrFIt_OYVv_BA&usqp=CAU" alt=""/>
                            <p>Airline 2</p>
                        </span>
                        <span className='flex items-center text-lg font-semibold'>
                            <img className='w-11 h-11' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbBWy5jDdrFWtUlChjpaQ4yiWepX6HNPMIsPn-F5N_Q2yvYQgvuI7tmu5t7PZ43d6__w&usqp=CAU" alt=""/>
                            <p>Airline 3</p>
                        </span>
                    </div>
                    <div>
                        <span className='flex items-center text-lg font-semibold'>
                            <img className='w-11 h-11' src="https://media.istockphoto.com/id/1258141375/vector/plane-travel-icon-air-travel-around-the-world-flying-around-the-world-travel-agency-logo.jpg?s=612x612&w=0&k=20&c=QaZk5NDYsdfKd_7iUNAe3CImkcwlzyaibpMuYIteeWY=" alt=""/>
                            <p>Airline 4</p>
                        </span>
                        <span className='flex items-center text-lg font-semibold'>
                            <img className='w-11 h-11' src="https://t3.ftcdn.net/jpg/02/15/51/76/360_F_215517687_MLMCHbyaOb5z8OBffOUw6ASwXDTfjV5v.jpg" alt=""/>
                            <p>Airline 5</p>
                        </span>
                        <span className='flex items-center text-lg font-semibold'>
                            <img className='w-11 h-11' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4SsS_d5QLYKmXDbP1xpSdoAmsnGVJazLHByt6Y3BLYsygo-b89JiCapPoSY4HqWYVRg&usqp=CAU" alt=""/>
                            <p>Airline 6</p>
                        </span>
                    </div>
                </div>
            </div>
            <img className='w-96' src={plane} alt="airline"/>
        </div>
    </section>
  )
}

export default Airlines