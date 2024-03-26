import './shadow.css'

export default function Footer() {
  return (
    <footer className="h-96 w-full bg-slate-900 text-teal-300 text-right pr-16 pt-10 relative">
        <h3 className='font-black text-indigo-500 text-3xl'>Footer</h3>
        <img src="/loot_boxes.svg" alt="" className="svg2 absolute -top-4 left-5 z-10"/>
    </footer>
  )
}
