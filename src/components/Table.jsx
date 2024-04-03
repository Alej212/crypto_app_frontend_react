import { useState, useEffect } from 'react';
import { Button } from '@tremor/react';
import { TextInput } from '@tremor/react';
import data from './dataTable';
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';


export default function TableCoins() {
  const [coins, setCoins] = useState([])
  const [numCripto, setNumCripto] = useState(15)

  useEffect(() => {
    const fetchData = async () => {
      const result = await data(numCripto);
      setCoins(result.data.coins);
    };

    fetchData();
  }, [numCripto])

  const handleSubmit = (event) => {
    event.preventDefault();
    setNumCripto(event.target.elements.numCripto.value);
  }
  return (
    <div id='popular' className="w-full">
      <Card className='mt-20'>
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-3xl text-center mt-10 mb-16">List of the most popular Cryptocurrencies</h3>
      <form onSubmit={handleSubmit} className='flex gap-5 flex-wrap items-end'>
          <label className='flex flex-col gap-2 text-indigo-50 font-medium'>
            Number of Cryptocurrencies :
            <TextInput type="number" placeholder='100 Max' name="numCripto" min="1" max="100" />
          </label>
          <Button type="submit" className='h-fit'>Submit</Button>
      </form>
      <Table className="mt-20">
        <TableHead>
          <TableRow>
            <TableHeaderCell>UUID</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>RANK</TableHeaderCell>
            <TableHeaderCell>SYMBOL</TableHeaderCell>
            <TableHeaderCell>MARKETCAP</TableHeaderCell>
            <TableHeaderCell>24h VOLUME</TableHeaderCell>
            <TableHeaderCell>TODAY PRICE</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin) => (
            <TableRow key={coin.uuid} className='font-semibold'>
              <TableCell>{coin.uuid}</TableCell>
              <TableCell className='flex items-center gap-2'><img src={coin.iconUrl} alt="" className='h-6 w-6' />{coin.name}</TableCell>
              <TableCell>{coin.rank}</TableCell>
              <TableCell>{coin.symbol}</TableCell>
              <TableCell>{coin.marketCap}</TableCell>
              <TableCell>{coin["24hVolume"]}</TableCell>
              <TableCell><Badge color="emerald">{coin.price} $</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
    </div>
  );
}