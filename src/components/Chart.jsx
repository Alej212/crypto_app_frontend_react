import { useEffect, useState } from 'react'
import { AreaChart } from '@tremor/react';
import data from './dataChart.js'

export default function Chart() {
  const [datacoin, setDatacoin] = useState([])
  const [ultimoPrecio, setUltimoPrecio] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  const [date, setDate] = useState('5y')
  const [uuid, setUuid] = useState('Qwsogvtv82FCd')

  useEffect(() => {
    const fetchData = async () => {
      const result = await data(date, uuid)
      let maxPrice = 0;
      const newData = result.data.history.map(item => {
        const price = parseFloat(item.price);
        if (price > maxPrice) {
          maxPrice = price;
        }
        return {
          date: new Date(item.timestamp * 1000).toLocaleDateString("en-US"),
          price: item.price
        };
      }).reverse();
      setDatacoin(newData)
      setUltimoPrecio(parseFloat(result.data.history[0].price).toFixed(3))
      setMaxValue(maxPrice);
    }

    fetchData();
  }, [date, uuid])

  return (
    <section id='graphics' className='flex justify-center'>
        <div className='flex flex-col gap-10 w-full bg-slate-950 p-10 rounded-lg mt-20'>
          <div>
            <h3 className="text-indigo-200 text-xl font-medium mb-3">Price {date}</h3>
            <p className="font-semibold text-4xl text-indigo-50">$ {ultimoPrecio}</p>
          </div>
        <form action="" className='flex items-end justify-center gap-10 text-white'>
          <label htmlFor="" className='font-medium'>Date<br />
            <select value={date} className='bg-slate-800 border-spacing-1 border-indigo-700 rounded-lg mt-2' onChange={(e) => setDate(e.target.value)}>
              <option value="3h">3 hours</option>
              <option value="24h">24 hours</option>
              <option value="7d">7 days</option>
              <option value="30d">30 days</option>
              <option value="3m">3 months</option>
              <option value="1y">1 years</option>
              <option value="3y">3 years</option>
              <option value="5y">5 years</option>
            </select>
          </label>
          <label htmlFor="" className='font-medium'>uuid<br />
          <input value={uuid} onChange={(e) => setUuid(e.target.value)} className='bg-slate-800 border-spacing-1 border-indigo-700 rounded-lg mt-2'/>
          </label>
        </form>
        <AreaChart
            className="mt-4 h-96"
            data={datacoin}
            index="date"
            categories={['price']}
            colors={['indigo']}
            maxValue={maxValue}
        />
        </div>
    </section>
  );
}
