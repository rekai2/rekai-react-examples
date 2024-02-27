import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
  }, [options, location.pathname]) // Run the effect when the pathname changes

  return (
    <div className='max-w-[1200px] mx-auto mt-20 px-5'>
      <div className='rek-prediction grid grid-cols-3 gap-8'>
        {
          // Map over the predictions and render each one
          predictions.map((prediction, index) => {
            const jsonLdData = prediction.ldjson.find(ld => ld['@type'] === 'Product')

            if (!jsonLdData) return null

            return (
              <Link
                to={prediction.url}
                className='border rounded-xl hover:bg-gray-100 transition-all shadow overflow-hidden'
              >
                <img src={jsonLdData.image} alt={jsonLdData.name} className='w-full h-60 object-cover' />
                <div className='px-4 pt-2 pb-4'>
                  <h4 className='font-bold'>{jsonLdData.name}</h4>
                  <span>{jsonLdData.location}</span>
                  <div className='flex justify-between mt-10'>
                    {jsonLdData.offers?.price && jsonLdData.offers?.priceCurrency && (<span>{jsonLdData.offers.price} {jsonLdData.offers.priceCurrency}</span>)}
                    {jsonLdData.description2 && <span>{jsonLdData.description2}</span>}
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Predictions
