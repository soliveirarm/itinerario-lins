import { useState } from "react"
import { itinerario } from "./data/itinerario.json"

import BusLineSchedule from "./components/BusLineSchedule"
import Legend from "./components/Legend"
import Header from "./components/Header"
import Footer from "./components/Footer"
import BottomNavBar from "./components/BottomNavBar"

function App() {
  const [line, setLine] = useState(1)

  const nextLine = () => {
    if (line === 11) setLine(1)
    else setLine((prevLine) => prevLine + 1)
  }

  const previousLine = () => {
    if (line === 1) setLine(11)
    else setLine((prevLine) => prevLine - 1)
  }

  const filteredArray = itinerario.filter((item) => item.linha == line)
  const currentLine = filteredArray[0]

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
      <Header />

      <main className="grow my-10">
        <BusLineSchedule
          nextLine={nextLine}
          previousLine={previousLine}
          {...currentLine}
        />
      </main>

      <Legend />

      <Footer />

      <BottomNavBar
        currentLine={currentLine}
        nextLine={nextLine}
        previousLine={previousLine}
      />
    </div>
  )
}

export default App
