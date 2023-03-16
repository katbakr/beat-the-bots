import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Battle from './pages/Battle/Battle';
import {FaGitHub} from "react-icons/fa"

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Dashboard') {
          return <Dashboard />;
        }
        if (currentPage === 'Login') {
          return <Login />;
        }
        if (currentPage === 'Signup') {
          return <Signup />;
        }
        if (currentPage === 'Battle') {
            return <Battle />;
          }
        return <Bye />;
      };   

      const handlePageChange = (page) => setCurrentPage(page)

return (
    <div id='page'>
      {/* <img ></img> */}
      {/* <h1 id='header'>Hello World!</h1> */}
      {/* <h2 style={styles.h2}>I'm Katrina Baker</h2> */}
      <main>
        {/* <div id='navbar'>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div> */}
        <div >
          {renderPage()}
        </div>
      </main>
      <footer id='footer'>
        <ul>
          <a href='https://github.com/katbakr/beat-the-bots42254/' target='blank'>
            <li> <FaGitHub /> </li>
          </a>
        </ul>
     
      </footer>
    </div>
  );
}