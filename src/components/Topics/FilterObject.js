import React, {Component} from 'react';

const ducks = [{breed: 'Grass duck', color: 'brown'}, {breed: 'aylesbury duck', color: 'white'}]

class FilterObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: ducks,
            userInput: '',
            filteredArray: []
        }
        this.getInput = this.getInput.bind(this);
        this.filteredObject = this.filteredObject.bind(this);
    }
    getInput(event) {
        this.setState({userInput: event.target.value}); 
    }
    filterObject(event){
        const input = this.state.userInput;
        const ducks = this.state.unFilteredArray;
        var filteredDucks = [];
        ducks.forEach((element) =>{
            if(element.hasOwnProperty(input)){
                filteredDucks.push(element);
            }
        })
        this.setState({filteredArray: filteredDucks})
        console.log(this.state.filteredArray);
       
    }
    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(ducks)}</span>
                <input className="inputLine" onChange={this.getInput}></input>
                <button className="confirmationButton" onClick={this.filterObject}></button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )   
    }     
};