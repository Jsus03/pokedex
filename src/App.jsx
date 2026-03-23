import Header from './components/Header';
import Card from './components/Cards/Card';
import CardHeader from './components/Cards/CardHeader';
import CardBody from './components/Cards/CardBody';
import CardFooter from './components/Cards/CardFooter';
import CardGrid from './components/Cards/CardGrid';

function App() {
  return (
    <>
      <Header />
      <CardGrid
        gridItems={[
          (
            <Card 
              cardHeader = {(
                <CardHeader>
                  <h2>Pokémon 1</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </CardHeader>
              )}
              cardBody = {(
                <CardBody>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </CardBody>
              )}
              cardFooter = {(
                <CardFooter>
                  <button>Click me</button>
                </CardFooter>
              )}
            />
          ),
          (
            <Card 
              cardHeader = {(
                <CardHeader>
                  <h2>Pokémon 2</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </CardHeader>
              )}
              cardBody = {(
                <CardBody>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </CardBody>
              )}
              cardFooter = {(
                <CardFooter>
                  <button>Click me</button>
                </CardFooter>
              )}
            />
          )
        ]} />
    </>
  )
}

export default App