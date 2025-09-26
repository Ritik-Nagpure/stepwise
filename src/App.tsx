import Maintenance from "./Utils/Maintenance"
import Layout from "./Layout/Layout"

const App = () => {
  const isinMaintenance = false
  return (
    <div>
      {
        isinMaintenance ? <Maintenance /> : < Layout />
      }
    </div>
  )
}

export default App
