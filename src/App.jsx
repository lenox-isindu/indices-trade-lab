// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import { AnimatePresence } from 'framer-motion';
import Home from "./components/Home/Home";
import PrivateRoute from "./action/PrivateRoute";

import About from './components/About/About';
import Plans from './components/Plans/Plans';
import FAQs from './components/FAQs/Faqs';
import Support from './components/Support/Support';
import Signup from "./components/AuthPage/Signup";
import Login from './components/AuthPage/Login';

import Withdrawals from "./components/Services/Services";
import Deposits from "./components/Dashboard/Deposit/Deposit";
import Livetrading from "./components/Dashboard/Livetrading/Livetrading";
import Connect from "./components/Connects/Connect";
import Dashboard from "./components/Dashboard/Dashboard";

import Profile from "./components/Dashboard/Profile/Profile";
import Security from "./components/Dashboard/Security/Security";
import Settings from "./components/Dashboard/Settings/Settings";
import Withdraw from "./components/Dashboard/Withdraw/Withdraw";
import YourDeposits from "./components/Dashboard/YourDeposits/YourDeposits"

import { ToastContainer } from 'react-toastify';
import ToTopButton from "./components/ToTopButton";
import Companies from "./components/Companies/Companies";

function App() {

  return (
    <AnimatePresence wait>
      <Navbar />
      <ToastContainer theme='colored' />
      <ToTopButton />
      <div>
        {/* <Navbar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Companies />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/withdrawals"
              element={
                <PrivateRoute>
                  <Withdrawals />
                </PrivateRoute>
              }
            />
            <Route
              path="/deposits"
              element={
                <PrivateRoute>
                  <Deposits />
                </PrivateRoute>
              }
            />
            <Route
              path="/livetrading"
              element={
                <PrivateRoute>
                  <Livetrading />
                </PrivateRoute>
              }
            />
            <Route
              path="/connect"
              element={
                <PrivateRoute>
                  <Connect />
                </PrivateRoute>
              }
            />


            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/security"
              element={
                <PrivateRoute>
                  <Security />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="/withdraw"
              element={
                <PrivateRoute>
                  <Withdraw />
                </PrivateRoute>
              }
            />
            <Route
              path="/yourdeposits"
              element={
                <PrivateRoute>
                  <YourDeposits />
                </PrivateRoute>
              }
            />


          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App;
