import './App.css'
import { Navbar } from './components/Navbar'
import PageContainer from './components/PageContainer'

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <PageContainer />
      </main>
    </>
  )
}

export default App;
