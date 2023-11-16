import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetPhotos = ({ query }) => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            client_id: 'BbjIXeTs0E3IY1J7mgDQgYdOWK6rY0nM3yRhUKmz7-c',
            query: query,
            per_page: 20,
            order_by: 'relevant',
          },
        });
        setPhotos(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPhoto(); // Trigger the data fetching when the component mounts
  }, [query]); // Empty dependency array ensures the effect runs once when the component mounts

  const fetchPhotoData = async (id) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
        params: {
          client_id: 'BbjIXeTs0E3IY1J7mgDQgYdOWK6rY0nM3yRhUKmz7-c',
        }
      });
      setSelectedPhoto(response.data.urls.full);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const closeZoomedPhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      {/* Render or use the fetched images within the component */}
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {photos.map((item) => (
          <div key={item.id} className="relative">
            {/* Adjust this based on the structure of the Unsplash API response */}
            <img
              src={item.urls.small}
              alt={item.alt_description}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => fetchPhotoData(item.id)} // Pass the photo ID to fetchPhotoData
            />
            {/* Show the zoomed image in a modal or overlay */}
            {selectedPhoto && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200/25">
                <div className="max-w-screen-xl overflow-hidden">
                  <img src="./Images/x.png" alt="x" onClick={closeZoomedPhoto} className="absolute left-[140px] top-[80px] h-12" />
                  <img src={selectedPhoto} alt="Zoomed" className="w-full h-full object-contain" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetPhotos;
