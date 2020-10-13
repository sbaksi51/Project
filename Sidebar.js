import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <img class="bot_icon" src="/images/bot_icon.png" alt="" />
                <div className="sidebar_headerRight">
                    <p><h1>AdhocBOT</h1>
                    <h4>PUTNAM INVESTMENTS</h4>
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar
