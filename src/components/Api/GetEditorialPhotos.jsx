import React, { useState, useEffect } from "react";
import axios from "axios";

const GetPhotos = ({ query }) => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get("https://api.unsplash.com/photos", {
          params: {
            client_id: "BbjIXeTs0E3IY1J7mgDQgYdOWK6rY0nM3yRhUKmz7-c",
            page: 1,
            per_page: 12,
            order_by: "popular",
          },
        });
        setPhotos(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPhoto();
  }, [query]);

  const fetchPhotoData = async (id) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/${id}`,
        {
          params: {
            client_id: "BbjIXeTs0E3IY1J7mgDQgYdOWK6rY0nM3yRhUKmz7-c",
          },
        }
      );
      setSelectedPhoto(response.data);
      console.log('selectedPhoto: ', response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const closeZoomedPhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="mx-auto w-[80%]">
      <div className="mx-24 my-9">
        <h1 className="text-6xl font-medium">Popular Today</h1>
        <p className="mt-1 text-xl">
          Unveiling the Top Picks: Today's Most Trending and Visually Stunning
          Images.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {photos.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.urls.small}
              alt={item.alt_description}
              className="object-cover w-full h-full cursor-pointer"
              onClick={() => fetchPhotoData(item.id)}
            />
            {selectedPhoto && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-700/10">
                <div className="flex flex-col w-full h-[90%] max-w-screen-xl p-4 bg-white rounded-md scroll-auto">
                  <div className="flex items-center mb-1">
                    <img
                      src={selectedPhoto.user.profile_image.small}
                      alt=""
                      className="mr-2 rounded-full w-9 h-9"
                    />
                    <p className="font-medium">{selectedPhoto.user.name}</p>
                  </div>
                  <img
                    src="./Images/x.png"
                    alt="x"
                    onClick={closeZoomedPhoto}
                    className="absolute right-[335px] top-[68px] h-9 cursor-pointer"
                  />
                  <img
                    src={selectedPhoto.urls.full}
                    alt="Zoomed"
                    className="object-contain h-[90%] w-full"
                  />
                  <div className="flex mt-1">
                    <div className="flex gap-20 mr-auto">
                        <div className="flex flex-col">
                            <p>Views</p>
                            <p className="font-medium">{selectedPhoto.views}</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Downloads</p>
                            <p className="font-medium">{selectedPhoto.downloads}</p>
                        </div>
                    </div>
                    <p className="">{selectedPhoto.location.name}</p>
                  </div>
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
