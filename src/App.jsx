import { useState } from 'react'
import './App.css'
import Page1 from '../pages/Page1/Page1'
import Page2 from '../pages/Page2/Page2'
import Footer from '../components/Footer/Footer'

function App() {
  const [hints, setHints] = useState(false);

  const toggleHints = () => {
    setHints(prevHints => !prevHints);
  };

  const [page, setPage] = useState(1);
 
  const nextPage = () => {
    if (page < 2)
    setPage(prevPage => prevPage + 1);
  }
  
  const prevPage = () => {
    if (page > 1){
      setPage(prevPage => prevPage - 1);
    }
  }

  const handlePageChange = (event) => {
    const newPage = parseInt(event.target.value);
    setPage(newPage);
  };

  return (
    <div className="App">
      {page === 1 && <Page1 />}
      {page === 2 && <Page2 hints={hints} toggleHints={toggleHints} />}
      <Footer hints={hints} page={page} nextPage={nextPage} prevPage={prevPage} handlePageChange={handlePageChange}/>
    </div>
  )
}

export default App
