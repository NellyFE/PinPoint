import './App.css'
import { BrowserRouter,RouterProvider } from 'react-router-dom'
import { Mappage } from './Pages/MapPage'
import { Welcomepage } from './Pages/welcomepage'
const router = BrowserRouter([
  {
path: "/",
element: <Welcomepage/>
  },

  {
    path: "/app",
    element: <Mappage/>
  }
])



function App() {

  return (
    <>
    <div>
      <RouterProvider router={router} />
    </div>
   
    </>
  )
}

export default App
