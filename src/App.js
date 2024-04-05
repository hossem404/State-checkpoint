import React, { Component } from 'react';

class App extends Component {
  constructor(props)  {
    super(props)
    this.state={
    person: {
      fullName: 'Saïd Kasmi',
      bio: 'Né en 1976, Saïd Kasmi-Mitterrand est l un des trois fils de Frédéric Mitterrand, neveu de l ancien président de la République François Mitterrand.',
      imgSrc: ' https://static1.purepeople.com/articles/0/37/34/60/@/5391497-said-kasmi-mitterrand-lors-de-la-ceremon-1200x0-2.jpg',
      profession: 'producteur et réalisateur'
    },
    shows: true,
    mountedTime:null
  }
}
  click =()=>{
    this.setState({shows:!this.state.shows})
  }
  componentDidMount() {
    this.setState({ mountedTime: new Date() });
    this.interval = setInterval(() => {
      console.log('ok')
    }, 5000);
  }
  
  render() {
    
    return (
      <div>
        <button onClick={this.click}>click here !</button>
       {this.state.shows===true && 
       <h3>Name:{this.state.person.fullName}</h3>
       }
       {this.state.shows===true && 
       <h3>Name:{this.state.person.bio}</h3>
       }
       {this.state.shows===true && 
       <h3>Name:{this.state.person.profession}</h3>
       }
       {this.state.shows===true && 
       <img src={this.state.person.imgSrc} style={{ width: '200px', height: 'auto' }} />
       }
      {/* <p>{Math.floor((new Date() - this.state.mountedTimemountedTime) / 1000)} seconds</p> */}
      </div>
    )
  }
}



export default App