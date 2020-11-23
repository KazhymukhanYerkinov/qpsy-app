import React from 'react';
import { connect } from 'react-redux';
import { getTapesThunk } from '../../redux/tape-reducer';
import Tape from './Tape';





class TapeContainer extends React.Component {
    componentDidMount() {
        
        this.props.getTapesThunk();
    }
    render() {
        return <Tape tapes = { this.props.tapes } fetchTapes = { this.props.fetchTapes } level = { this.props.level }/>
    }
}
let mapStateToProps = (state) => ({
    tapes: state.tapePage.tapes,
    fetchTapes: state.tapePage.fetchTapes,
    level: state.authPage.user.level,
})
export default connect(mapStateToProps, { getTapesThunk })(TapeContainer)