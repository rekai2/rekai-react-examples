import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LinkIcon } from '@heroicons/react/24/solid'

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
      <div className='rek-prediction'>
        {
          predictions.map((prediction, index) => (
            <div className='inline-block' key={`prediction-${index}`}>
              <Link to={prediction.url} className='border rounded-full hover:bg-gray-200 transition-all px-4 py-3 mx-2 my-2 shadow items-center flex w-auto overflow-hidden'>
                <LinkIcon className='w-6 h-6 mr-2' />
                <span className='whitespace-nowrap w-5/6'>{prediction.title}</span>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Predictions
