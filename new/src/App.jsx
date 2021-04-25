
import './App.scss';
import Header from './components/header'
import Banner from './components/banner'
import Description from './components/description'
import List from './components/list'
import Product from './components/product'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Description></Description>
      <List></List>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
