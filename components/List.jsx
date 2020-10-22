import React, { Component } from 'react';

let style = {
    maxwidth: '700rem',
};

let btn = {
    cursor: 'pointer'
}

const List = (props) => (
    <ul className="siimple-list">
        <li className="siimple-list-item siimple--bg-white" style={style}>Guest Name 1 <span className="siimple-tag siimple-tag--error siimple-hover" style={btn}>Delete</span></li>
        <li className="siimple-list-item siimple--bg-white" style={style}>Guest Name 2 <span className="siimple-tag siimple-tag--error siimple-hover" style={btn}>Delete</span></li>
        <li className="siimple-list-item siimple--bg-white" style={style}>Guest Name 3 <span className="siimple-tag siimple-tag--error siimple-hover" style={btn}>Delete</span></li>
    </ul>
);

export default List;