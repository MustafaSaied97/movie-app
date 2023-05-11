"use client";
import { useState,useEffect } from "react";
import Movie from "../Movie"

export default function FavoriteData() {
    const [favorites,setaFvorites]=useState([])
    useEffect(() => {
      let fav=JSON.parse(localStorage.getItem("favorites"))||[]
      setaFvorites([...fav])
      console.log(favorites)
    }, []);
  return (
    <main className="grid place-content-center">

      <section className="my-6 mx-9 ">
        <h1 className="font-extrabold text-2xl mb-5">
            favorites
        </h1>

        <div className="grid grid-cols-fluid gap-8  ">
          {favorites.map(favorite=>(
              <Movie
                key={favorite.id}
                id={favorite.id}
                title={favorite.title}
                poster_path={favorite.poster_path}
                release_date={favorite.release_date}
              />
            ))
          }
        </div>
      </section>
    </main>
  )
}

{/* <Movie
key={movie.id||447365}
id={movie.id||447365}
title={movie.title||'Guardians of the Galaxy Volume 3'}
poster_path={movie.poster_path||'/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg'}
release_date={movie.release_date||'2023-05-03'}
/> */}