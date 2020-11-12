import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUserThunk } from '../redux/auth-reducer';

const Layout = (props) => {
    useEffect( () => {
        const fetchData = async () => {
            try {
                props.loadUserThunk();
            } catch (err) {
                console.log("LAYOUT PAGE ERROR")
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {props.children}
        </>
    )
}

export default connect(null, { loadUserThunk })(Layout);