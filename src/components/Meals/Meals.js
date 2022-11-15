import React from 'react';

// Components
import AvailableMeals from './AvailableMeals.js';
import MealsSummary from './MealsSummary.js';

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
