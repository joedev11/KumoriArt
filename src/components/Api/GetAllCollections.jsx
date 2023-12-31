import React, { useState } from 'react';
import axios from 'axios';

const GetAllCollections = () => {
    const [collections, setCollections] = useState([]);

        const fetchCollections = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/collections', {
                    params: {
                        client_id: 'BbjIXeTs0E3IY1J7mgDQgYdOWK6rY0nM3yRhUKmz7-c',
                        per_page: 12,
                    }
                })
                setCollections(response.data);
                console.log(response.data);
            } catch (error) {
                console.log('Error fetching Collections:', error);
            }
        }
        fetchCollections();

  return (
    <div className='mx-7 lg:mx-[150px] my-9'>
        <div className='lg:mx-24 mb-9'>
            <h1 className='text-4xl font-medium lg:text-6xl'>Collections</h1>
            <p className='mt-1 text-lg lg:text-xl'>Explore collections from authors around the world.</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5'>
            {collections.map((item) => (
                <div key={item.id} className="">
                    <div className="flex lg:w-[450px] w-[320px] h-[210px] lg:h-[300px]">
                        <img src={item.preview_photos[0].urls.small} alt="" className="h-full w-[65%] object-fill"/>
                        <div>
                            <img src={item.preview_photos[1].urls.small_s3} alt="" className='h-[50%] w-full object-none'/>
                            <img src={item.preview_photos[2].urls.small_s3} alt="" className='object-none w-full h-[50%]'/>
                        </div>
                    </div>
                    <h2 className='mt-2 text-lg font-medium'>{item.title}</h2>
                    <div className='flex'>
                        <h3 className=''>{item.total_photos} photos</h3>
                        <span className='mx-2'>·</span>
                        <h3>Curated by {item.user.name}</h3>
                    </div>
                    <div className='flex gap-2 mt-1'>
                        <div className='p-1 capitalize border rounded-md bg-zinc-200'>{item.tags[0].title}</div>
                        <div className='p-1 capitalize border rounded-md bg-zinc-200'>{item.tags[1].title}</div>
                        <div className='p-1 capitalize border rounded-md bg-zinc-200'>{item.tags[2].title}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default GetAllCollections