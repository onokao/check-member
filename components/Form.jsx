import React, { Component } from 'react';

const Form = (props) => (
  <form className="siimple-form">
    <div className="siimple-form-field">
      <label className="siimple-label siimple--color-white">Your Guset List:</label>
      <input name="title" type="text" className="siimple-input"/>　<input type="submit" value="Add" className="siimple-btn siimple-btn--teal"/>
    </div>
  </form>
);

export default Form;