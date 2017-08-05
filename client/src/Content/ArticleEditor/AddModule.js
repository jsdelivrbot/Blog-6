import React from 'react';
import './AddModule.css';

const AddModule = () => {
  const onClick = () => {
    alert('add a module!!');
  }
  return (
    <div className="AddModule">
      <button onClick={() => onClick()}>+</button>
      <div className="actions">
        <ul>
          <li>Header</li>
          <li>Paragraph</li>
          <li>Image</li>
        </ul>
      </div>
    </div>
  )
}

export default AddModule;
