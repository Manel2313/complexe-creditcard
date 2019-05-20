import React, { Component } from 'react'
import './components/card.css'
import puce from './components/images/puce.png'
import visa from './components/images/visa.png'
import master from './components/images/master-card.png'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      number: '',
      name: '',
      expiry: '',
      month: '',
      year: ''
    })
  }

  addNumber = (e) => {
    if (isNaN(e.target.value)) {
      alert('Please enter a number')
    }
    else {
      this.setState({
        number: e.target.value
      });
    }
  }

  addName = (e) => {
    let X = /^[A-Z a-z]+$/;
    if (e.target.value.match(X)) {
      this.setState({
        name: e.target.value
      });
    } else { alert('The name must be a string') }
  }

  addExpiry = (e) => {
    if (isNaN(e.target.value)) {
      alert('Please enter a number')
    }
    else {
      this.setState({
        expiry: e.target.value
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="cardy">
          <div>
            <h1 className="title">CREDIT CARD</h1>
            <img className="image-puce" src={puce} alt="puce" />
            <div className="card-info">
              <div className="numbers">
                <div className="n-card">
                  <p>{this.state.number.padEnd(16, '*').split('').map((x, i) => { return i % 4 === 0 ? " " + x : x }).join('')}</p>
                </div>
                <div className="num-et-date">
                  <p className="num-4-chiffre"></p>
                  <div className="validite">
                    <div className="thru">
                      <p className='val'>VALID <br />THRU </p>
                      <i className="fas fa-caret-right"></i>
                    </div>
                    <div>
                      <p className='val val-margin'>MONTH/YEAR</p>
                      <p>{this.state.expiry.padEnd(4, '*').split('').map((x, i) => { return i % 2 === 0 ? "/" + x : x }).join('')}</p>
                    </div>
                  </div>
                </div>
                <p className="cardholder">{this.state.name.padEnd(6, 'HOLDER')}</p>
              </div>
              <div className="cards">
                <div className="logo-cards">
                  <img className="image-master" src={master} alt="masterCard" />
                  <img className="image-visa" src={visa} alt="visaCard" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saisie">
          <input type="text" onChange={this.addNumber} placeholder="CreditCard Number" pattern="[\d| ]{16}" />
          <input type="text" onChange={this.addName} placeholder="Cardholder" />
          <input type="text" onChange={this.addExpiry} placeholder="Valid Thru - (11/11)" pattern="\d\d/\d\d" />
        </div>
      </div>
    );
  }
}

export default App;