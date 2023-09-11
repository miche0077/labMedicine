import React from 'react';
import './Toolbar.css'

const Toolbar = ({ pageTitle, userName, userImage }) => {
  return (
    <div className="toolbar">
      <h1>{pageTitle}</h1>
      <div className="user-info">
        <span>{userName}</span>
        <img src={userImage} alt="User Avatar" className="user-avatar" />
      </div>
    </div>
  );
}

export default Toolbar;