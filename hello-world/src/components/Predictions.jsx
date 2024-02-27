import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LinkIcon } from '@heroicons/react/24/solid'

const Predictions = ({ options = {} }) => {
  // Initialize state for predictions
  const [predictions, setPredictions] = useState([])

  // Get the current location object from the router
  const location = useLocation()

  // Use the useEffect hook to run code when the component mounts or updates
  useEffect(() => {

    // Check if the window object and the __rekai object exist
    if (typeof window !== 'undefined' && window.__rekai) {

      // Call the predict method on the __rekai object
      window.__rekai.predict(options, data => {

        // Get the predictions from the data
        const _predictions = data.predictions

        // Update the state with the new predictions
        setPredictions(_predictions)

      })
    }
  }, [location.pathname]) // Run the effect when the pathname changes

  return (
    <div className='max-w-[1200px] mx-auto mt-20 px-5'>
      <div className='rek-prediction'>
        {
          // Map over the predictions and render each one
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
