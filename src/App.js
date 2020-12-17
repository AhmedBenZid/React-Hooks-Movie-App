import { useState } from 'react'
import './App.css';
import Filter from './Components/Filter';
import NavBar from './Components/NavBar';


function App() {

  const [movieList, setMovieList] = useState([
    { title: 'Ahmed', posterUrl: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg', description: 'bla bla bla bla', rate: "3" },
    { title: 'achref', posterUrl: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2', description: 'bla bla bla bla', rate: "3" }
  ])

  const [newTitle, setNewTitle] = useState("");
  const [newRate, setNewRate] = useState("");

  const handleFilter = (fTitle, fRate) => {
    setNewTitle(fTitle)
    setNewRate(fRate)
  }

  const handleAdd = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  }
  return (
    <div className="container">
      <NavBar handleAdd={handleAdd} handleFilter={handleFilter} />
      <Filter movieList={movieList} newRate={newRate} newTitle={newTitle} />
    </div>
  );
}

export default App;
