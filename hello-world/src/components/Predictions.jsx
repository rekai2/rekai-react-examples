import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

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
      <div className='rek-prediction grid grid-cols-4 gap-5'>
        {
          // Map over the predictions and render each one
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
