import { FaLightbulb } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import { AiTwotoneStar } from "react-icons/ai";
import { WiStars } from "react-icons/wi";
import { GiPistolGun } from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import { GiMonsterGrasp } from "react-icons/gi";
import { BsFillBalloonHeartFill } from "react-icons/bs";

const API_KEY=process.env.API_KEY

export default{
    fetchPopular:{
        logo:<WiStars/>,
        title:'Popular',
        url:`/movie/popular?api_key=${API_KEY}`
    },
    fetchTrending:{
        logo:<HiTrendingUp/>,
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}`
    },
    fetchTopRated:{
        logo:<AiTwotoneStar/>,
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}`
    },
    fetchActionMovies:{
        logo:<GiPistolGun/>,
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies:{
        logo:<MdTheaterComedy/>,
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        logo:<GiMonsterGrasp/>,
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        logo:<BsFillBalloonHeartFill/>,
        title:'Romance',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },

}