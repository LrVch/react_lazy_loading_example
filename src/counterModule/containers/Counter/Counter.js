import React from 'react';
import { connect } from 'react-redux'
import {
    increment,
    decrement
} from '../../redux/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = ({ counter, increment, deccrement }) => {
    return (
        <div>
            <CounterOutput value={counter} />
            <CounterControl label="Increment" clicked={() => increment()} />
            <CounterControl label="Decrement" clicked={() => deccrement()} />
            <CounterControl label="Add 5" clicked={() => increment(5)} />
            <CounterControl label="Subtract 5" clicked={() => deccrement(5)} />
        </div>
    )
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    increment: (payload = 1) => dispatch(increment(payload)),
    deccrement: (payload = 1) => dispatch(decrement(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);