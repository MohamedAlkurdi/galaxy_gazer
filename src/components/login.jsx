import { useState, useEffect } from 'react';
import IMG from '../assets/login_img.jpg';
import InputGuide from './inputGuide';
import ErrorMessage from './errorMessage';
import { NavLink } from 'react-router-dom';
import {login_component_styles} from '../unioned-styles'

export default function Login({ updateSession }) {

    const [error, setError] = useState({
        errorState: false,
        errorMessage: '',
    })

    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });

    const [activeInputs, setActiveInputs] = useState({
        email: false,
        password: false,
    });

    const [validInputs, setValidInputs] = useState({
        email: false,
        password: false,
    })


    const regexPatterns = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
    };

    const handleInputChange = (e, inputName) => {
        const value = e.target.value;
        setInputValues(prevState => ({
            ...prevState,
            [inputName]: value
        }));
        validateInput(inputName, value);
    };

    const handleInputFocus = (inputName, isActive) => {
        setActiveInputs(prevState => ({
            ...prevState,
            [inputName]: isActive
        }));
    };

    const validateInput = (inputName, value) => {
        const regEx = regexPatterns[inputName];
        const validation = regEx.test(value);
        setValidInputs(prevState => ({
            ...prevState,
            [inputName]: validation,
        }))
    };

    return (
        <div className={login_component_styles.login_style}>
            <div className={login_component_styles.login_panel_style}>
                <img className={login_component_styles.loginImage_style} src={IMG} alt='signup_image' />
                <form className={login_component_styles.loginForm_style}>
                    <h1 className={login_component_styles.loginPanelTitle_style}>Welcome back!</h1>
                    <div className='w-3/4 relative'>
                        <InputGuide visibility={activeInputs.email} data={['Email format: user_name@provider']} />
                        <input
                            value={inputValues.email}
                            className={`${validInputs.email ? 'bg-green-200' : ''} p-1 rounded-lg focus:outline-none w-full`}
                            placeholder='Email...'
                            type="email"
                            name='userFName'
                            onChange={(e) => handleInputChange(e, "email")}
                            onFocus={() => handleInputFocus("email", true)}
                            onBlur={() => handleInputFocus("email", false)}
                        />
                    </div>

                    <div className='w-3/4 relative'>
                        <InputGuide visibility={activeInputs.password} data={['Min lower case letters', 'Min upper case letters', 'Min 2 numbers', 'Min 2 symbols (!@#$%^&*)']} />
                        <input
                            value={inputValues.password}
                            className={`${validInputs.password ? 'bg-green-200' : ''} p-1 rounded-lg focus:outline-none w-full`}
                            placeholder='Password...'
                            type="password"
                            name='userFName'
                            onChange={(e) => handleInputChange(e, "password")}
                            onFocus={() => handleInputFocus("password", true)}
                            onBlur={() => handleInputFocus("password", false)}
                        />
                    </div>

                    <button className={login_component_styles.loginBtn_style}>Login</button>
                </form>
            </div>
            <ErrorMessage state={error.errorState} message={error.errorMessage} />
            <div className={login_component_styles.accountLinks_style}>
                <div className={login_component_styles.homeLink_style} >
                    <NavLink to={'/'}><i class="fa-solid fa-house"></i></NavLink>
                </div>
                <div className={login_component_styles.signupLink_style}>
                    <button onClick={() => { updateSession(false) }}><i class="fa-solid fa-user-plus"></i></button>
                </div>
            </div>
        </div>
    );
}