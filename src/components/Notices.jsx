import { useEffect, useState } from 'react'
//import data from './dataNotices'
import dataJSON from './dataNotices.json'
import { Card } from '@tremor/react';


export default function Notices() {
    const [notices, setNotices] = useState([])
    const limit = 6;

    useEffect(() => {
        const fetchData = async () => {
            // let result;
            // try {
            //     // Intenta ejecutar este código
            //     const result = await data();
            //     setNotices(result.data.slice(0, limit));
            // } catch (error) {
            //     // Si hay un error en el bloque try, se ejecuta este código
            //     console.error(error);
            //     if (dataJSON) {
            //         // Si dataJSON existe, entonces usa dataJSON
            //         setNotices(dataJSON.data.slice(0, limit));
            //     } else {
            //         // Si dataJSON no existe, entonces maneja la situación como desees
            //         console.log('No hay datos de respaldo disponibles');
            //     }
            // }
            return setNotices(dataJSON.data.slice(0, limit))
        }
        fetchData()
    }, [])

  return (
    <section id='news'>
        <h3 className='text-center text-4xl font-black uppercase mb-20 mt-10 text-teal-500'>Notices</h3>
        <div className='grid grid-cols-3 gap-5'>
            {notices.map((notice) => (
                <Card key={notice.title} className="flex flex-col gap-6 ">
                    <h3 className="text-center text-indigo-300 font-bold text-xl">{notice.title}</h3>
                    <div className='bg-slate-500 h-56 relative'>
                        <a href={notice.url} rel="noopener noreferrer" target="_blank">
                            <div className='absolute top-0 left-0 h-full w-full hover:bg-teal-700 hover:bg-opacity-35'></div>
                            <img src={notice.thumbnail} alt="" className='h-full w-full' />
                        </a>
                    </div>
                    <p className='text-indigo-100'>{notice.description ? notice.description : 'No hay texto para esta noticia, lo sentimos, pero puede darle click a ella si le llamo la atención.'}</p>
                </Card>
            ))}
        </div>
    </section>
  )
}
