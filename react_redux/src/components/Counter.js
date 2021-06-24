import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Increment, Decrement} from '../Redux/actions.js'
class Counter extends PureComponent {
  
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Count is now : {this.props.count}</h1>
                <button onClick={()=>this.props.increment()}>Increment</button>
                <button onClick={()=>this.props.decrement()}>Decrement</button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        increment: () =>dispatch(Increment()),
        decrement: () =>dispatch(Decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)