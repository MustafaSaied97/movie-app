import Image from "next/image";

export  async function generateStaticParams() {
  const res=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const data= await  res.json()
  return data.results.map(movie=>(
    {movie_id: toString(movie.id)}
  ))
}

export default async function MovieDetail({params}) {
  
  const {movie_id} = params
    const res=await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}`)
    const data= await  res.json()
    const {title,release_data,runtime,status,poster_path,overview}=data

  return (
    <div  className=" my-6 mx-9"nnn>
      <h2 className="text-2xl font-bold">{title}</h2>
      <h2 className="text-lg">{release_data}</h2>
      <h2>Runtime: {runtime} minutes</h2>
      <h2 className="bg-green-600 rounded inline-block my-2 py-2 px-4 text-sm">{status}</h2>
      <Image
        className="my-12 mx-auto w-full"
        src={`http://image.tmdb.org/t/p/original${poster_path}`}
        width={1000}
        height={1000}
        alt={title}
      />
      <p><span className=" px-1 bg-gray-700 rounded">overview:</span> {overview}</p>
    </div>

  );
}
