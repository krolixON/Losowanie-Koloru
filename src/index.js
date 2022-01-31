import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let tablica = [];
let index=-1;
let kolor;

class Kolory extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {kolor: null};

    this.losowanie = this.losowanie.bind(this);
    this.cofanie = this.cofanie.bind(this);
  }

  losowanie() 
  {
    index++;
    const colorHex = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    tablica[index] = colorHex;
    const box = document.querySelector('.box');
    box.setAttribute('style', `background-color: ${tablica[index]}; border: 1px solid`);
    this.setState({kolor: tablica[index]});
  }
  cofanie() 
  {
    if(index > 0)
    {
      index--;
      const box = document.querySelector('.box');
      box.setAttribute('style', `background-color: ${tablica[index]}; border: 1px solid`);
      this.setState({kolor: tablica[index]});
    }
  }

  render() {
    return (
      <div>
        <div className="box"> </div>
        <button onClick={this.losowanie}>
          Losuj
        </button>
        <button onClick={this.cofanie}>
          Cofnij
        </button>
        <h2>Kolor: {this.state.kolor}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Kolory />,
  document.getElementById('root')
);

reportWebVitals();
