import React from 'react';
import CowList from './CowList'
import Form from './Form'
import Display from './Display'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      formName: '',
      formDescription: '',
      cow: null
    }
    this.fetch = this.fetch.bind(this);
    this.submit = this.submit.bind(this);
    this.setFormName = this.setFormName.bind(this);
    this.setFormDesc = this.setFormDesc.bind(this);
    this.setCow = this.setCow.bind(this);
  }

  fetch() {
    fetch('http://localhost:3000/api/cows')
    .then(response => response.json())
    .then(data => {
      this.setState({
        cows: data
      })
    });
  }

  setCow(id){
    for (let i in this.state.cows) {
      if (this.state.cows[i].id === id) {
        this.setState({
          cow: this.state.cows[i]
        })
      }
    }
  }

  setFormName(event) {
    this.setState({formName: event.target.value});
  }

  setFormDesc(event) {
    this.setState({formDescription: event.target.value});
  }

  submit() {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: this.state.formName, description: this.state.formDescription})
    }
    fetch('http://localhost:3000/api/cows', options)
    .then(response => {
      this.fetch();
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    let display;
    if (this.state.cow) {
      display = <Display name={this.state.cow.name} desc={this.state.cow.description}/>
    } else {
      display = <div></div>
    }
    return (
      <>
        {display}
        <Form submit={this.submit} setName={this.setFormName} setDesc={this.setFormDesc}/>
        <CowList cows={this.state.cows} setCow={this.setCow}/>
      </>
    )
  }
}

export default App;