import { createBrowserRouter } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
   {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
])
function App() {
  return (
    <div>
    <h1>Hello</h1>
    </div>
  )
}

export default App
