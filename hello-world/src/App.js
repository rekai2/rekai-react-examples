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
              nrofhits: 8
            }
          }}
          />
        )}
      />
      <Route
        path='intranet'
        element={(
          <Predictions options={{
            overwrite: {
              nrofhits: 2,
              subtree: 'intranat'
            }
          }}
          />
)}
      />
    </Route>
  </Routes>
)

export default App
