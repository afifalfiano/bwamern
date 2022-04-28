import './App.css';
import 'assets/scss/styles.scss';
import { Route, Routes} from 'react-router-dom'
import LandingPage from 'pages/LandingPage';


function App() {

  const location = path =>  {
    return {
      pathname: path
    }
  }

  return (
    <>
    <Routes>
      <Route path='/' exact element={<LandingPage location={location('/')} />}>
      </Route>
    </Routes>
    </>
  );
}

export default App;
