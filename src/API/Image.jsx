import React, { useEffect, useState } from 'react'

const Image = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=50')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.log('Error fetching images: ', error))
  }, [])

  return (
    <div>
      <h1>Images</h1>
      {images.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {images.map((i) => (
            <li key={i.id}>
              <img src={i.download_url} alt={i.author} width="400" height="300" />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Image