import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';

const Toolbar =(props) =>(
        <header className="header">
              <div>
                    Logo
              </div>
              <div>
                <nav>
                    <NavigationItems />
                </nav>
              </div>
        </header>
);



export default Toolbar;