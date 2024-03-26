import { Card, ProgressBar } from '@tremor/react';
import { Icon } from '@iconify/react';
//import dataExchanges from './dataExchanges'
import dataExhangeJSON from './dataExchange.json'
import { useEffect, useState } from 'react';

export default function Exchanges() {
  const [exchanges, setExchanges] = useState([])
  let limit = 8;

  useEffect(() => {
    const fetchData = async () => {
      // const result = await dataExchanges()
      const maxTradeVolume = Math.max(...dataExhangeJSON.map(exchange => exchange.trade_volume_24h_btc));
      const exchangesWithPercentage = dataExhangeJSON.map(exchange => ({
        ...exchange,
        trade_volume_percentage: (exchange.trade_volume_24h_btc / maxTradeVolume) * 100,
      }));
      return setExchanges(exchangesWithPercentage.slice(0, limit))
    }
    fetchData()
  }, [limit])


  return (
    <section id='exchanges'>
        <h3 className='text-center text-teal-500 font-black uppercase text-4xl mt-10 mb-20'>Exchanges</h3>
        <div className='grid grid-cols-4 gap-6'>
          {exchanges.map((exchange) => (
            <Card key={exchange.id} className='text-indigo-200 flex flex-col items-center relative'>
              <h3 className='text-teal-200 font-bold text-xl mb-3'>{exchange.name}</h3>
              <img src={exchange.image} alt="" className='mb-4'/>
              <p className='font-medium'>{exchange.year_established}</p>
              <p className='absolute -top-3 -right-4 z-10 bg-indigo-500 text-indigo-100 px-4 py-2 rounded-full'>Rank {exchange.trust_score_rank}</p>
              <div className='w-full flex flex-col items-center'>
                <p className='font-medium'>Trade volume 24h BTC</p>
                <ProgressBar value={exchange.trade_volume_percentage} color="teal" className="mt-2 mb-1" />
                <p className='text-amber-500 flex gap-1 items-center'>
                  {exchange.trade_volume_24h_btc} 
                  <Icon icon='uil:bitcoin' className='h-7 w-7 text-amber-500'></Icon>
                </p>
              </div>
            </Card>
          ))}
        </div>
    </section>
  )
}
