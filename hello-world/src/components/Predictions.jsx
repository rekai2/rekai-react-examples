import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Predictions = ({ options = {} }) => {
  const [predictions, setPredictions] = useState([])

  const location = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.__rekai) {
      window.__rekai.predict(options, data => {
        const _predictions = data.predictions
        setPredictions(_predictions)
      })
    }
  }, [location.pathname])

  return (
    <div className='max-w-[1200px] mx-auto mt-20 px-5'>
      <div className='rek-prediction grid grid-cols-4 gap-5'>
        {
          predictions.map((prediction, index) => (
            <div key={index} className='border rounded px-4 py-4 shadow'>
              <h2 className='text-xl font-bold'>{prediction.title}</h2>
              <p>{prediction.url}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Predictions
