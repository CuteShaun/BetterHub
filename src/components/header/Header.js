import React from 'react';
import './Header.scss';

export const Header = ({onClick = () => {}}) => (
    <header className="header">
      <div className="header__box">
        <h1 className="header__title">
          <div className="header__logo" onClick={onClick}>
            <span></span>Better<span className="header__title--red">Hub.</span>
          </div>
        </h1>
      </div>
    </header>
  );
