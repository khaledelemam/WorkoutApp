import React from 'react';
import {MenuItems} from "./MenuItems"
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Tabs extends React.Component {
  state = {clicked: false}

  render() {
    return (
      // <div>
      <nav className ="TabItems">
        <h1 className="tab-logo">Workout</h1>
        <div className="menu-icon" ></div>
        <div id="tab">
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a  href={item.url}>
                  {item.title}
                  </a>  
                </li>
              )
            })}
          </ul>
        </div>
        <div id="icon">
          <FontAwesomeIcon icon={['far', 'user-circle']} />
        </div>
      </nav>    
    )
  }
}

export default Tabs
