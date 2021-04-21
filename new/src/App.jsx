
import './App.css';
import Header from './components/header'
import Banner from './components/banner'
import Description from './components/description'
import List from './components/list'
import Product from './components/product'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Description></Description>
      <List></List>
      <Product></Product>
    </div>
  );
}

export default App;
