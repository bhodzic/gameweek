
import React from "react";

function HomeTabs({ viewClickHandler, view }) {
  return (
    <div className="home-tabs">
      <div className={`home-tab${view == 'games' ? ' active' : ''}`} onClick={() => { viewClickHandler('games') }}>Games</div>
      <div className={`home-tab${view == 'results' ? ' active' : ''}`} onClick={() => { viewClickHandler('results') }}>Results</div>
      <div className={`home-tab${view == 'account' ? ' active' : ''}`} onClick={() => { viewClickHandler('account') }}>Account</div>
    </div>);
}

export default HomeTabs;