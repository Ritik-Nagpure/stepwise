import Maintenance from "./Utils/Maintenance"
import Layout from "./Layout/Layout"

const App = () => {
  const isinMaintenance = true
  return (
    <div className="h-screen w-screen">
      {
        isinMaintenance ? <Maintenance /> : < Layout />
      }
    </div>
  )
}

export default App
