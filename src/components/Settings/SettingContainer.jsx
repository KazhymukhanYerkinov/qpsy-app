import React from 'react';
import { connect } from 'react-redux';
import { updateEmail } from '../../redux/auth-reducer';
import Settings from './Settings';


class SettingContainer extends React.Component {
    render() {
        return <Settings user = { this.props.user } updateEmail = { this.props.updateEmail }/>
    }
}

let mapStateToProps = (state) => ({
    user: state.authPage.user
})

export default connect(mapStateToProps, { updateEmail })(SettingContainer)