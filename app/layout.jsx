import './globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from "./NavBar"

const montserrat = Montserrat({
    weight:["400","700"],
    subsets: ['latin'],
    variable:"--font-montserrat" 
  })

export const metadata = {
  title: 'Movie App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      
      <html lang="en">
        <head>
          <title>Movie App</title>
          <meta name="author" content="movies" />
          <meta name="description" content="movie app for displaying a variety of movies" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel='icon' href='./favicon.ico'/>
        </head>
      <body className={`${montserrat.className} `}>
        <NavBar/>
        {children}
      </body>

      </html>
    </>

  )
}
