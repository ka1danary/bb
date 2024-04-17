import './reset.sass'
import './App.sass'
import axios from 'axios' import MyLeftNavBar from './components/leftNavBar/MyLeftNavBar';
import { useEffect, useState } from 'react';
import MainPage from './components/pages/mainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import CreateOrder from './components/pages/createOrder/CreateOrder';
import CreateOrder2 from './components/pages/createOrder/CreateOrder2';
import CreateOrder3 from './components/pages/createOrder/CreateOrder3';
import CreateOrder4 from './components/pages/createOrder/CreateOrder4';
import SearchClient from './components/pages/searchClient/SearchClient';
import Footer from './components/footer/Footer';
import SearchClient2 from './components/pages/searchClient/SearchClient2';
import BeeDownload from './components/pages/createOrder/BeeDownload';
import SearchClient3 from './components/pages/searchClient/SearchClient3';
import SearchClient4 from './components/pages/searchClient/SearchClient4';
import Searchclient5 from './components/pages/searchClient/Searchclient5';

function App() {

  const object = [
    {
      id: 1,
      date: Date.now(),
      name: 'Михаил',
      number: '89990000000',
      tg: 'https://t.me/ka1danary',
      category: 'Сантехник',
      geo: 'Владивосток',
      title: 'Сантехник со стажем. Установка стальных смесителей, ремонт керамических поверхностей.'
    },
    {
      id: 2,
      date: Date.now(),
      name: 'Юрий',
      number: '89990000000',
      tg: 'https://t.me/ka1danary',
      category: 'Репетитор по английскому',
      geo: 'Находка',
      title: 'Научу вашего ребенка чистому-Британскому, аристократическому английскому языку'
    },
    {
      id: 1,
      date: Date.now(),
      name: 'Михаил',
      number: '89990000000',
      tg: 'https://t.me/ka1danary',
      category: 'Сантехник',
      geo: 'Владивосток',
      title: 'Сантехник со стажем. Установка стальных смесителей, ремонт керамических поверхностей.'
    },
    {
      id: 2,
      date: Date.now(),
      name: 'Юрий',
      number: '89990000000',
      tg: 'https://t.me/ka1danary',
      category: 'Репетитор по английскому',
      geo: 'Находка',
      title: 'Научу вашего ребенка чистому-Британскому, аристократическому английскому языку'
    },
    {
      id: 1,
      date: Date.now(),
      name: 'Михаил',
      number: '89990000000',
      tg: 'https://t.me/ka1danary',
      category: 'Сантехник',
      geo: 'Владивосток',
      title: 'Сантехник со стажем. Установка стальных смесителей, ремонт керамических поверхностей.'
    },
    {
      id: 2,
      date: Date.now(),
      name: 'Юрий',
      number: '89990000000',
      tg: 'https://t.me/ka1danary',
      category: 'Репетитор по английскому',
      geo: 'Находка',
      title: 'Научу вашего ребенка чистому-Британскому, аристократическому английскому языку'
    },
    {
      id: 1,
      date: Date.now(),
      name: 'Михаил',
      number: '89990000000',
      tg: 'https://t.me/ka1danary',
      category: 'Сантехник',
      geo: 'Владивосток',
      title: 'Сантехник со стажем. Установка стальных смесителей, ремонт керамических поверхностей.'
    },
    {
      id: 2,
      date: Date.now(),
      name: 'Юрий',
      number: '89990000000',
      tg: 'https://t.me/ka1danary',
      category: 'Репетитор',
      geo: 'Находка',
      title: 'Научу вашего ребенка чистому-Британскому, аристократическому английскому языку'
    },
  ]

  const category = [
    'Сантехника',
    'Репетитор',
    'Учитель по вождению'
  ]

  const type = [
    'Заказчик',
    'Исполнитель',
  ]

  const src = 'https://localhost:7193/'

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(src + 'api/Category/GetAll')
    .then((responce) => responce.json())
    .then(responce => setData(responce.category))
  }, [])

  return (
    
    <div className="App">
      {console.log(data)}
      <MyLeftNavBar />
      <Routes>
        <Route path="/"
          element={<MainPage
            data={object}
            category={category}
            type={type}
          />}
        />
        <Route path="/user"
          element={<CreateOrder />}
        />
        <Route path="/order"
          element={<SearchClient />}
        />
        <Route path="/create2"
          element={<CreateOrder2 />}
        >
        </Route>
        <Route path="/create3"
          element={<CreateOrder3 />}
        >
        </Route>
        <Route path="/create4"
          element={<CreateOrder4 />}
        >
        </Route>
        <Route path="/order2"
          element={<SearchClient2 />}
        >
        </Route>
        <Route path="/order3"
          element={<SearchClient3 />}
        >
        </Route>
        <Route path="/order4"
          element={<SearchClient4 />}
        >
        </Route>
        <Route path="/order5"
          element={<Searchclient5 />}
        >
        </Route>
        <Route path="/beeLoad"
          element={<BeeDownload />}
        >
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
