import { useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import ShowJobs from './components/ShowJobs';

function App() {
  const [sortByType, setSortByType] = useState({
    nameSort: "",
    sortBy: "",
  })

  return (
    <div className='container'>
      <Header sortByType={sortByType} setSortByType={setSortByType} />
      <ShowJobs sortByType={sortByType} />
      <Footer />
    </div>
  )
}

export default App;
