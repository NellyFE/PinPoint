import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Mappage } from './Pages/MapPage'
import  {Welcomepage} from './Pages/welcomepage'

const router = createBrowserRouter([
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
