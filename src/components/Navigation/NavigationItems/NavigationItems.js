import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const NavigationItems = (props) => (
          <ul className="NavigationItems">
               <NavigationItem link="/" exact>
                    HOME
               </NavigationItem>
               <NavigationItem link="/login">
                    LOGIN
               </NavigationItem>
               <NavigationItem link="/register">
                    REGISTER
               </NavigationItem>
               <NavigationItem link="/create">
                    Create Hall
               </NavigationItem>
          </ul>
     );
export default NavigationItems;