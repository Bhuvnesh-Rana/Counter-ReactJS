import { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'

// function Counter(){
//     return(
//         <div className="counter">
//             <button onClick={increment}>+1</button>
//             <span className='count'>0</span>
//         </div>
//     );
// }

// function increment(){
//     console.log('increment')
// }

//want to write the counter component fuction and increment function in one body, so use class component instead of function.

//USING CLASS COMPONENT INSTEAD OF FUNCTION. 

class Counter extends Component{
    constructor(){
        super();    //common error
        this.state={
            counter:0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset=this.reset.bind(this)
    }

    render(){
        return(
            <div>
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={20} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className='count'>{this.state.counter}</span>
                <br></br>
                <button className='reset' onClick={this.reset}>Reset</button>
            </div>
            
        );
    }
    increment(by){
        console.log('inc from child.')
        this.setState({
            counter: this.state.counter+by
    })
    }

    decrement(by){
        console.log('dec from child.')
        this.setState({
            counter: this.state.counter-by
    })
    }
    reset(){
        this.setState({
            counter:0
        })
    }
}


class CounterButton extends Component{
    //define initial state in a constructor.
    // state=> conter=0
    constructor(){
        super();    //common error
        this.state={
            counter:0
        }
        this.increment = this.increment.bind(this)      //binding with the increment mtd. OR use arrow function to not use binding.
        this.decrement = this.decrement.bind(this)
    }
    render(){
        return(
            <div className="counter">
             <button onClick={this.increment}>+{this.props.by}</button>    {/*want to call local function use this. */}
             <button onClick={this.decrement}>-{this.props.by}</button>
            {/* <span className='count'>{this.state.counter}</span>  //style as js style={{fontSize="50px",padding="...."}} */}
            </div>
        );
    }

    increment(){    //update state - counter ++         //if don't want to bind instead use increment = () =>{  //arrow function.
        // console.log('increment')
        this.setState({
            counter: this.state.counter + this.props.by       //obj.
        })
        this.props.incrementMethod(this.props.by)        //call parent from child   (moving state from child to parent.)
        }

    decrement(){  
        this.setState({
            counter: this.state.counter - this.props.by       
        })
        this.props.decrementMethod(this.props.by)        
        }
       
}
//constraint tha by should take int in app.js
Counter.prototypes={
    by : PropTypes.number
}

export default Counter