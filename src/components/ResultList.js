import React,{Component} from 'react';

class ResultList extends Component{
    render(){
        if(this.props.resultPlaces.results !== undefined){

            var placeList =this.props.resultPlaces.results.map(name=>{
               return(
                   
                <div key={name.id} className="panel panel-primary">
                    <div  className="panel-heading">{name.name}</div>
                        <div className="row panel-body">
                            <div className="col-md-4">
                                 <img src={name.icon} alt={name.name} />
                            </div>
                           <div className="col-md-4">
                                <h6>Address :</h6>
                                 <p>{name.formatted_address}</p>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn default" onClick={()=>this.props.saveList(name.name)}>Save Place</button>
                            </div>
                         </div>
                </div>


               )
            });
        }
        return(
             <ul>
                 {placeList}
                 
             </ul>
        );
    }
}
export default ResultList;