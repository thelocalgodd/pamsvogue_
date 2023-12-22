import HomePage from "./components/HomePage"
import LoadingPage from "./components/LoadingPage"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
    <div className="flex flex-col ">
      <NavBar 
      />
      <HomePage />
    </div>
    </>
  )
}

export default App
