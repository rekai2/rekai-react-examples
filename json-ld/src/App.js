import './App.css'
import { Route, Routes } from 'react-router-dom'
import Predictions from './components/Predictions'
import Layout from './components/base/Layout'

const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route
        index
        element={(
          <Predictions options={{
            overwrite: {
              addcontent: true // Retrieve content
            }
          }}
          />
        )}
      />
      <Route
        path='limited'
        element={(
          <Predictions options={{
            overwrite: {
              addcontent: true,
              nrofhits: 4 // Only retrieve the 4 most relevant hits, default is 10
            }
          }}
          />
        )}
      />
    </Route>
  </Routes>
)

export default App
