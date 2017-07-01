import React,{Component} from 'react';

class SlideList extends Component{
    render(){
        console.log(this.props.savedPlaces);

         var savedList =this.props.savedPlaces.map(name=>{
               return(                   
                
                    <div key={name} className="well">
                           {name}
                    </div>
               )
            });



        return(
            
              <div> 
                  <h5>Saved Places</h5>
                  {savedList}</div>
               
        );
    }
}
export default SlideList;