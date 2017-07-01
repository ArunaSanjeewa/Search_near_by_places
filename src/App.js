import React, { Component } from 'react';
import Search from './components/Search';
import ResultList from './components/ResultList';
import SlideList from './components/SlideList';


import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      results:{},
      saved:[]
    }
  }

  updateState(newPlaces){
    console.log(newPlaces);
    this.setState({
      results:newPlaces
    })
  }
  saveListUpdate(placeName){
     console.log("place name for save:",placeName);
     const placesArray = this.state.saved.concat([placeName]);
    this.setState({
      saved:placesArray
    })
  }

  render() {
    return (
    
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Search 
                      callUpdate={this.updateState.bind(this)}
                     
                      
                      />
              <ResultList 
                      resultPlaces={this.state.results}
                       saveList={this.saveListUpdate.bind(this)}
              
               />
          </div>
            <div className="col-md-4">
            <SlideList savedPlaces={this.state.saved}/>
            </div>
         </div>
      </div>
     
      
    );
  }
}

export default App;
