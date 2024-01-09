
import React, { useEffect } from 'react';
import Carrusel from '../Carrusel/Carrusel';
import banner from '../../assets/banner.png';
import CardsContainer from '../CardsContainer/CardsContainer';
import Footer from '../Footer/Footer';
import { useDispatch } from "react-redux";
import { allCategories, allProdCart, allProducts } from '../../Redux/actions';
import styles from './Home.module.css'; // Importa los estilos CSS

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
    dispatch(allCategories());
    dispatch(allProdCart());
  }, [dispatch]);

  return (
    <div className={styles.homeContainer}>
      <CardsContainer />
      <Carrusel />
      <img src={banner} alt="banner" className={styles.bannerImage} />
      <Footer />
    </div>
  );
}

export default Home;