import React,{useState,createContext} from 'react'
// import App from './App';

export const MovieContext =createContext()



export default function MovieProvider
(props) {
    const [movies, setMovies] = useState([
        {
          name: "Harry Potter",
          price: "$10",
          id: 1,
        },
        {
          name: "Harry Potter Part 1",
          price: "$12",
          id: 2,
        },
        {
          name: "Harry Potter Part 12",
          price: "$13",
          id: 3,
        },
        {
          name: "Harry Potter Part 13",
          price: "$14",
          id: 4,
        },
      ]);
    return (
        <div>
            <MovieContext.Provider value={"hello"}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}
