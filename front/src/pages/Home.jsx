import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from "react-query";
import CatDetail from '../components/CatDetail';
import CatList from '../components/CatList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';

const getKittens = async () => {
  const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/kittens`)
  return data
}

const Home = () => {
  const {data, status} = useQuery('kittens', getKittens, false)
  const [kat, setKat] = useState(null)

  return (
    <div id="page" className=''>
      <Header />

      <Loading status={status} />

      {status === 'success' && (
        <div className='p-4'>
          <h2 className='text-2xl font-bold pb-6'>Meet {data.length} Kittens</h2>
          <div className='flex flex-row gap-4 justify-between'>
            <CatList setKat={setKat} data={data} kat={kat} />
            <CatDetail kat={kat} />
          </div>

        </div>
      )}

      <Footer />

    </div>
  )
}

export default Home