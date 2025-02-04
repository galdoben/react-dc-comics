import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import comics from './data/comics';


const links = [
  { href: '#characters', text: 'characters' },
  { href: '#comics', text: 'comics' },
  { href: '#movies', text: 'movies' },
  { href: '#tv', text: 'tv' },
  { href: '#games', text: 'games' },
  { href: '#collectibles', text: 'collectibles' },
  { href: '#videos', text: 'videos' },
  { href: '#fans', text: 'fans' },
  { href: '#news', text: 'news' },
  { href: '#shop', text: 'shop' },
]

function App() {
  const comicsCard = [...comics]
  return (
    <>
      <Header links={links} />
      <Main comics={comicsCard} />
      <Footer />
    </>
  )
}

export default App
