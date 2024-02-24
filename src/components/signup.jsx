import { useState, useEffect, useContext } from 'react';
import IMG from '../assets/signup_img.jpg';
import InputGuide from './inputGuide';
import ErrorMessage from './errorMessage';
import { NavLink } from 'react-router-dom';
import { ErrorContext } from '../errorContext';
import {Signup_component_styles} from '../unioned-styles'

// Regular expression patterns
const regexPatterns = {
    firstName: /^[A-Za-z\s]{1,20}$/,
    lastName: /^[a-zA-Z]{1,15}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
    repeatPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
};

export default function Signup({ updateSession }) {
    const [inputValues, setInputValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    });

    const [activeInputs, setActiveInputs] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    });

    const [validInputs, setValidInputs] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    })

    const [passwordIdenticality, setPasswordIdenticality] = useState(false);

    const [error, setError] = useState({
        errorState: false,
        errorMessage: '',
    })


    useEffect(() => {
        // Check password identity
        const { password, repeatPassword } = inputValues;
        const passwordsMatch = password === repeatPassword && password !== "" && repeatPassword !== "";
        setPasswordIdenticality(passwordsMatch);
    }, [inputValues.password, inputValues.repeatPassword]);

    useEffect(()=>{
        document.addEventListener('keydown',()=>{
            const updaterObject = {
                firstName: false,
                lastName: false,
                email: false,
                password: false,
            }
            setActiveInputs(prevState=>({...prevState,updaterObject}))
        })
    },[])

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

    function submitCheck(e) {
        e.preventDefault();
        const inputsValidatyState = Object.values(validInputs);
        inputsValidatyState.forEach((value) => {
            if (!value) {
                setError(prevState => ({
                    ...prevState,
                    errorState: true,
                    errorMessage: "Check the inputs again.",
                }))
            }
            else {
                if (!passwordIdenticality) {
                    setError(prevState => ({
                        ...prevState,
                        errorState: true,
                        errorMessage: 'Passwords do not match.'
                    }))
                }
                else {
                    setError(prevState => ({
                        ...prevState,
                        errorState: false,
                        errorMessage: ''
                    }))
                }
            }
        })

    }

    return (
        <div className={Signup_component_styles.signup_style}>
            <div className={Signup_component_styles.signupPanel_style}>
                <img className={Signup_component_styles.signupImage_style} src={IMG} alt='signup_image' />
                <form className={Signup_component_styles.signupForm_style}>
                    <h1 className={Signup_component_styles.formTitle_style}>Create an account!</h1>
                    <div className='w-3/4 relative'>
                        <InputGuide visibility={activeInputs.firstName} data={['First name can contain only letters.']} />
                        <input
                            value={inputValues.firstName}
                            className={`${validInputs.firstName ? 'bg-green-200' : ''} p-1 rounded-lg focus:outline-none w-full`}
                            placeholder='First name...'
                            type="text"
                            name='userFName'
                            onChange={(e) => handleInputChange(e, "firstName")}
                            onFocus={() => handleInputFocus("firstName", true)}
                            onBlur={() => handleInputFocus("firstName", false)}
                        />
                    </div>
                    <div className='w-3/4 relative'>
                        <InputGuide visibility={activeInputs.lastName} data={['Last name can contain only letters.']} />
                        <input
                            value={inputValues.lastName}
                            className={`${validInputs.lastName ? 'bg-green-200' : ''} p-1 rounded-lg focus:outline-none w-full`}
                            placeholder='Last name...'
                            type="text"
                            name='userFName'
                            onChange={(e) => handleInputChange(e, "lastName")}
                            onFocus={() => handleInputFocus("lastName", true)}
                            onBlur={() => handleInputFocus("lastName", false)}
                        />
                    </div>
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
                    <input
                        value={inputValues.repeatPassword}
                        className={`${passwordIdenticality ? 'bg-green-200' : ''} p-1 rounded-lg focus:outline-none w-3/4`}
                        placeholder='Repeat password...' type="password" name='repeatPassword'
                        onChange={(e) => handleInputChange(e, "repeatPassword")}
                    />
                    <button onClick={submitCheck} className={Signup_component_styles.signupBtn_style}>Submit</button>
                </form>
            </div>
            <ErrorMessage state={error.errorState} message={error.errorMessage} />
            <div className={Signup_component_styles.accountLinks_style}>
                <div className={Signup_component_styles.homeLink_style} >
                    <NavLink to={'/'}><i class="fa-solid fa-house"></i></NavLink>
                </div>
                <div className={Signup_component_styles.loginLink_style}>
                    <button onClick={() => { updateSession(true) }}><i class="fa-solid fa-arrow-right-to-bracket w-full h-full"></i></button>
                </div>
            </div>
        </div>
    );
}
