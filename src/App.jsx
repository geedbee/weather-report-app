import './App.css'
import Forecast from './components/Forecast'
import SearchForm from './components/SearchForm'
import forecastData from './data/data.js'

function App() {
  return (
    <>
      <header>
        <h1>Weather Report</h1>
      </header>
      <SearchForm />
      <Forecast forecastData={forecastData}/>
    </>
  )
}

export default App
