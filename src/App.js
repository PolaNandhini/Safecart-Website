import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app.router';
import { ProductsPage } from './components/productspage/productspage.component';
import { FlashSale } from './components/flashsale/flshsale';
import { Top } from './components/header1/top.component';
import { Header } from './components/header2/header.component';
import { MainNav } from './components/mainnav3/mainnav.component';
import store from './services/reduxstore.service';
import { useEffect, useState } from 'react';
import { UserContextVariable } from './services/userContext';
import { Footer } from './components/footer14/footer.component';
function App() {

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    checkUserLoggedIn();
  }, [])

  function checkUserLoggedIn() {
    store.subscribe(() => {
      let user = store.getState()?.user  //user is type in redux store.js
      if (user) {
        setUserDetails(true);
      }
      else {
        setUserDetails(null);
      }
    })

  }
  return (
    <div>
      <UserContextVariable.Provider value={userDetails}>
        <BrowserRouter>
          <Top></Top>
          <Header></Header>
          <MainNav></MainNav>
          <AppRouter></AppRouter>
          <Footer></Footer>
        </BrowserRouter>
      </UserContextVariable.Provider>
    </div>
  );
}

export default App;