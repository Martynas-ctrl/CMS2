import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AllProducts from './components/Allproducts';
import UserInfo from './components/UserInfo';
import User from './components/User';
import Nutrition from './components/Nutrition';
import AddNutrition from './components/AddNutrition';
import NutritionInfo from './components/NutritionInfo';
import Navbar from './components/Navbar';

function App() {
  return (
      <div>
        <Header />
        <AllProducts /> 
        <Footer />
        <User />
        <AddNutrition />
        <Nutrition />
      </div>
  );
}
export default App;