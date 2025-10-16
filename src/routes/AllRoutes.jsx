import React from "react";

import { Routes, Route } from "react-router-dom";
import { MovieList } from "../pages";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList title="Your Guide to Great Movies"/>} />
        <Route path="/movies/popular" element={<MovieList title="Popular Movies"/>} />
        <Route path="/movies/top-rated" element={<MovieList title="Top Rated Movies"/>} />
        <Route path="/movies/upcoming" element={<MovieList title="Upcoming Movies"/>} />
        
      </Routes>
    </>
  );
};

export default AllRoutes;
