import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import ShowJobs from './components/ShowJobs';

function App() {
  return (
    <div className='container'>
      <Header />
      <ShowJobs />
      <Footer />
    </div>
  )
}

export default App;
