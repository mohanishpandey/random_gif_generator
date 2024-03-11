import React,  { useEffect, useState } from 'react'
import axios from 'axios';
export const Random = () => {
    const [gif, setGif] = useState('');
    const API_KEY=" "

    async function fetchdata (){
        const url=`https://api.giphy.com/v1/gifs/random?api_key={API_KEY}`;
        const {data} = await axios.get(url);
        const imageSource = await data.data.images.downsized_large.url;
        setGif(imageSource);
    }

    useEffect( () => {
        fetchdata();
    },[]);

    function clickHandler() {
        fetchdata();
    }
  return (
    <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-xl underline uppercase font-bold'>Random Gif</h1>
        <img src={gif} width="450" />
        <button onClick={clickHandler} className='w-9/12 bg-yellow-500 text-lg py-2 rounded-lg '>Generate </button>
    </div>
  )
}