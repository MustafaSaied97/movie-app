import Movie from "./Movie"
import SideBar from "./SideBar"
import requests from "@/utils/requests";
import Head from 'next/head';

export default async function Home({searchParams}) {
  const res= searchParams.search?
  await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchParams.search}`,  {cache:'no-store'})
  :
  await fetch(`https://api.themoviedb.org/3${requests[searchParams.genres]?.url || requests['fetchPopular']?.url}`,  {cache:'no-store'})

  const data= await  res.json()

  
  return (

    <main className="grid place-content-center">

      <div className="fixed hidden lg:flex flex-col  justify-center items-center  w-64 ml-2 px-2 py-2 bg-gray-800 rounded-lg h-5/6 ">
        <SideBar/>
      </div>

      {/*this section for displaying search results and categories */}
      <section className="my-6 mx-9 lg:ml-72">

        <h1 className="font-extrabold text-2xl mb-5">
          {searchParams.search?
            <>
              <span className="mr-2 text-base text-sky-200 ">Results for</span>{searchParams.search}
            </>
            :
            <>
              <span className="mr-2 inline-block">{requests[searchParams.genres]?.logo || requests['fetchPopular']?.logo }</span>
              {requests[searchParams.genres]?.title || requests['fetchPopular']?.title }
            </>
          }
        </h1>

        <div className="grid grid-cols-fluid gap-8  ">
          {data.results.map(movie=>(
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            ))
          }
        </div>
      </section>
    </main>

  )
}

