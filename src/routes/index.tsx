import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UsageBasedPlan from '../pages/UsageBasedPlan';
import BudgetBasedPlan from '../pages/BudgetBasedPlan';
import MvnoComparison from '../pages/MvnoComparison';
import PlanDetails from '../pages/PlanDetails';
import Favorites from '../pages/Favorites';
import Reviews from '../pages/Reviews';
import ContractGuide from '../pages/ContractGuide';
import PlanComparison from '../pages/PlanComparison';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usage-based" element={<UsageBasedPlan />} />
      <Route path="/budget-based" element={<BudgetBasedPlan />} />
      <Route path="/mvno-comparison" element={<MvnoComparison />} />
      <Route path="/plan-details" element={<PlanDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/guide" element={<ContractGuide />} />
      <Route path="/compare" element={<PlanComparison />} />
    </Routes>
  );
};

export default AppRoutes;