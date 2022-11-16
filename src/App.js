import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data from './data';

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="list">
      <Header />
      <section>{cards}</section>
    </div>
  );
}

export default App;
