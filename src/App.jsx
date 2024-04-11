import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Window from './components/Window'
import MainBody from './components/MainBody'
import './App.css'

function App() {

  return (
    <>
      <div className="h-[100%] mx-5 mt-7 rounded-3xl">
        <Window />
        <Navbar />

        <div className="horizContent flex">
          <Sidebar />
          <MainBody />
        </div>
      </div>
    </>
  )
}

export default App