import React from "react"
import MovieRow from "../components/Movie/MovieRow"
import Requests from "./api/Requests"

export const Dashboard = () => {
  return (
    <>
      <MovieRow title="Coming Soon..." fetchURL={Requests.requestUpcoming} />
      <MovieRow title="Popular" fetchURL={Requests.requestPopular} />
      <MovieRow title="Trending" fetchURL={Requests.requestTrending} />
      <MovieRow title="Top Rated" fetchURL={Requests.requestTopRated} />
      <MovieRow title="Now Playing" fetchURL={Requests.requestNowPlaying} />
    </>
  )
}

export default Dashboard
