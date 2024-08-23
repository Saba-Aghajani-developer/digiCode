import './index.css'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

export default function App() {
    return (
     <main className='w-full '>
      <Header/>
      <Content/>
      <Footer/>
     </main>
    )
  }