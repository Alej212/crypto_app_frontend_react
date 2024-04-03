import './shadow.css'

export default function WelcomeTop() {
  return (
    <div className="flex justify-center xl:justify-between">
      <h2 className="text-3xl text-center lg:text-6xl w-full xl:w-6/12 font-black uppercase text-indigo-300 py-10 xl:py-32">Welcome to the world of <span className='text-amber-400'>cryptocurrencies</span> and <span className='text-amber-400'>blockchain</span></h2>
        <img src="/on_chain.svg" alt="" className="svg top-28 right-3 absolute hidden xl:block"/>
    </div>
  )
}
