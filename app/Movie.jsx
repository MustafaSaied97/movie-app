"use client";

import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import { BiHeart } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";

export default  function Movie({id,title,poster_path,release_date}) {
  const [selected,setSelected]=useState(false)

  //after mounting component  keep movies that were chosen by user selected 
  useEffect(() => {
    let favorites=JSON.parse(localStorage.getItem("favorites"))||[]
    favorites.forEach(favorite => {
      if(favorite.id == id ){
        setSelected(true)
      }
    });
  }, []);

  //store moves that were chosen by user in local storage
  function handleFavorite(){
    setSelected(!selected)

    let favorites=JSON.parse(localStorage.getItem("favorites"))||[]
    let isExist=false
    favorites.forEach(favorite => {
      if(favorite.id == id ){
        isExist=true
      }
    });

    if(isExist){
      favorites=favorites.filter((favorite)=> favorite.id!=id)
      localStorage.setItem("favorites",JSON.stringify(favorites))
    }else if(!isExist){
      favorites.push({id:id,title:title,poster_path:poster_path,release_date:release_date})
      localStorage.setItem("favorites",JSON.stringify(favorites))
    }

  }

  
  
  return (
    <div >
        <div className="relative">
          {selected?
           <BsHeartFill className="absolute top-2 right-2 text-2xl cursor-pointer" onClick={handleFavorite}/>
            :
           <BiHeart className="absolute top-2 right-2 text-2xl cursor-pointer  " onClick={handleFavorite}/>
          }
          <Link href={`/${id}`}>
              <Image
                className="rounded-md"
                src={`http://image.tmdb.org/t/p/original${poster_path}`}
                alt={title}
                height={800}
                width={800}
                priority 
              />
          </Link>
        </div>
        <h1 className="truncate font-bold">{title}</h1>
        <h4 className="text-xs"> {release_date}</h4>
     
    </div>
  );
};
