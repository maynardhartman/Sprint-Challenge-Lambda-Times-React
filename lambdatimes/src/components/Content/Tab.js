import React from 'react';

const Tab = props => {
  if ( props.tab === "selectedTab") 
    props.className = "tab active-tab"
    else { props.className = "tab"}

  const selectTabHandler = (tab) => {
    return (
      <div >
        className={props.className}
        {props.tab.toUpperCase()}
          <div>{tab}</div>
      </div>
    ); 
  }  
  
};

// Make sure you include PropTypes on your props.

export default Tab;
