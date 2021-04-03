import './App.scss';
import Nav from './components/Nav/Nav';
import Videos from './components/Videos/videoData/Videos';
import './styles/global.scss';

function App() {
  return (
    <>
    <header>
    <Nav />
    </header>
    <main>
      <Videos />
    </main>
    </>
  );
}

export default App;

