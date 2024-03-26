export default function Header() {
  const a = "hover:bg-teal-100 hover:text-slate-800 px-3 py-2 rounded-full cursor-default transition-all duration-500"

  return (
    <nav className="flex justify-between items-center pl-20 pr-20 bg-slate-900 bg-opacity-90 h-24 font-bold border-b-4 border-teal-400 fixed top-0 w-full z-20">
      <ul className="flex gap-10 text-teal-400">
        <li className={a}><a href="/">Home</a></li>
        <li className={a}><a href="#popular">Popular</a></li>
        <li className={a}><a href="#graphics">Graphics</a></li>
        <li className={a}><a href="#news">News</a></li>
        <li className={a}><a href="#exchanges">Exchanges</a></li>
      </ul>
      <button className="text-teal-700 p-3 rounded-xl border border-spacing-2 border-teal-300 hover:bg-teal-300 hover:bg-opacity-15 hover:text-teal-300 cursor-default">
        <p>Contact Me </p>
      </button>
    </nav>
  )
}
