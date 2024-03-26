//import Chart from "./components/Chart"
import TableCoins  from "./components/Table"
import Header from "./components/Header"
import Exchanges from "./components/Exchanges"
import Chart from "./components/Chart"
import Notices from "./components/Notices"
import WelcomeTop from "./components/WelcomeTop"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
    <Header/>
    <div className="flex flex-col gap-20 p-28 mt-10 w-full">
      <WelcomeTop />
      <TableCoins />
      <Chart />
      <Exchanges />
      <Notices />
    </div>
    <Footer/>
    </>
  )
}
