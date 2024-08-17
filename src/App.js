
import './App.css';
import Nav from './components/nav';
import Header from "./Layouts/Header"
import Section from './Layouts/Section';
import Card from './components/Card';

function App() {
    return (
      <div className="home-container lg:px-16 lg:py-12 lg:bg-gray-200">
        <div className="inner-layer bg-white rounded-[25px]">
          <Header>
            <Nav />
          </Header>
          <Section>
            <Card />
          </Section>
        </div>
      </div>
    )
}

export default App;
