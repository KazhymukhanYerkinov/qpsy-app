import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormControlAutoSelect, FormControlTextField } from '../../commons/FormControl/FormControl';
import cls from './SettingContent.module.css';
import EmailEdit from './EmailEdit/EmailEdit';
import EditImage from './EditImage/EditImage';


const SettingForm = (props) => {
    
    

    return (
        <form onSubmit={props.handleSubmit}>


            <div className={`container ${cls.content}`}>
                <div className='row flex-column-reverse flex-md-row'>

                    <div className='col-md-5 align-self-end'>
                        <div>
                            <Field name={'name'} label={'Имя'} disabled={true} defaultValue = {props.user.first_name} component={FormControlTextField} />
                        </div>
                    </div>

                    <div className='col-md-1'></div>

                    <div className='col-md-6 text-center mb-5'>
                        <EditImage />
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-5 mt-5">
                        <div>
                            <Field name={'surname'} label={'Фамилия'} disabled={true} defaultValue = {props.user.last_name} component={FormControlTextField} />
                        </div>
                    </div>
                    <div className="col-md-1"></div>

                    <div className="col-md-6 mt-5">
                        <div>
                            <Field name={'city'} label={'Город'} disabled={true}  object={props.user.city_name} component={FormControlAutoSelect} />
                            
                        </div>
                    </div>


                    <div className="col-md-5 mt-5">
                        <EmailEdit updateEmail = { props.updateEmail } email = { props.user.email }/>
                    </div>
                    <div className="col-md-1"></div>

                    <div className="col-md-6 mt-5">
                        <div>
                            <Field name={'school'} label={'Школа'} disabled={true} object={props.user.school_name} component={FormControlAutoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
]

const SettingReduxForm = reduxForm({ form: 'settings' })(SettingForm)

const SettingContent = (props) => {

    
    return (
        <div>
            <SettingReduxForm updateEmail = { props.updateEmail } user = {props.user}/>
        </div>
    )
}


export default SettingContent;