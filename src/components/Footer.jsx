import './shadow.css'
import { Icon } from '@iconify/react'

export default function Footer() {
  const styleIcon = `h-7 w-7 text-indigo-500  hover:text-indigo-300`
  const styleA = `flex gap-3 items-center text-indigo-500  hover:text-indigo-300`

  return (
    <footer className="hidden lg:flex justify-center items-center gap-10 w-full bg-slate-900 text-teal-300 text-right pr-16 py-10 relative">
        <p className='text-indigo-500  hover:text-indigo-300'>Cookies</p>
        <p className='text-indigo-500  hover:text-indigo-300'>Privacy</p>
        <div className='flex gap-10 items-center'>
          <ul className='flex gap-5'>
            <li>
              <a href="https://github.com/Alej212/crypto_app_frontend_react" className={styleA} target='_blank'>
                Code of Project
                <Icon  icon='bi:github' className={styleIcon}/>
              </a>
            </li>
            <li>
              <a href="https://github.com/Alej212/crypto_app_frontend_react" className={styleA} target='_blank'>
                Creator Page
                <Icon  icon='ph:code-fill' className={styleIcon}/>
              </a>
            </li>
          </ul>
          <div className='flex items-center gap-5'>
            <p className='text-lg text-indigo-500  hover:text-indigo-300'>Social Networks</p>
            <ul className='flex justify-center gap-3'>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Icon icon='mdi:facebook' className={styleIcon}></Icon>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Icon icon='bi:instagram' className={styleIcon}></Icon>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Icon icon='bi:telegram' className={styleIcon}></Icon>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Icon icon='bi:whatsapp' className={styleIcon}></Icon>
                </a>
              </li>   
            </ul>
          </div>
        </div>
        {/* <img src="/loot_boxes.svg" alt="" className="svg2 absolute -top-4 left-5 z-10"/> */}
    </footer>
  )
}
