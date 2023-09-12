import './index.css'
import { puppyList } from './data.js'
import { useState } from 'react'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find(pup => pup.id === featPupId)
  console.log(featuredPup)

  return (
    <>
      <div>
        {
          puppies.map((pup) => {
            return <p onClick={() => {setFeatPupId(pup.id)}} key={pup.id}>{pup.name}</p>
          })
        }
        {featPupId && <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>{featuredPup.age}</li>
            <li>{featuredPup.email}</li>
          </ul>

          </div>
          }
      </div>
    </>
  )
}

export default App
