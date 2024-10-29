import React, { useState } from 'react';
import './Status.css';
import './Dropdown.css';
import optionsimg from './options.png';
import dropdownimg from './dropdown.png';

function Dropdown({ setGroupingValue, setOrderingValue }) {
  const [selectedGrouping, setSelectedGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [selectedOrdering, setSelectedOrdering] = useState(localStorage.getItem('order') || 'Priority');

  const handleGroupingChange = (event) => {
    const value = event.target.value;
    setSelectedGrouping(value);
    setGroupingValue(value);
    localStorage.setItem('grouping', value);
  };

  const handleOrderingChange = (event) => {
    const value = event.target.value;
    setSelectedOrdering(value);
    setOrderingValue(value);
    localStorage.setItem('order', value);
  };

  return (
    <div className='dropdown'>
      <ul>
        Grouping 
        <div>
          <select name="grouping" value={selectedGrouping} onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
            <option value="user">User</option>
          </select>
        </div>
      </ul>
      <ul>
        Ordering
        <div>
          <select name="ordering" value={selectedOrdering} onChange={handleOrderingChange}>
            <option value="Priority">Priority</option>
            <option value="Title">Title</option>
          </select>
        </div>
      </ul>
    </div>
  );
}

export default Dropdown;
