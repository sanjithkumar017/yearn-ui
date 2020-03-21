import React, { useState } from 'react';

import { Segment } from 'semantic-ui-react';
import { Button, Form } from 'semantic-ui-react'

const SignOn = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const changeToSignUp = () => {
        setIsSignUp(true);
    }

    const changeToSignIn = () => {
        setIsSignUp(false);
    }

    const toggleSignOn = () => {
        setIsSignUp(!isSignUp);
    }

    return (
        <Segment raised className='sign-on-segment'>
            <div className='sign-on-options-container'>
                <Button primary className={`${isSignUp ? 'active' : ''}`}
                    onClick={changeToSignUp}>Sign up</Button>
                <Button primary className={`${!isSignUp ? 'active' : ''}`}
                    onClick={changeToSignIn}>Sign in</Button>
            </div>
            <Form>
                <Form.Field>
                    <label>E-Mail</label>
                    <input className='yui-form-field' placeholder='Your email address' />
                </Form.Field>

                {isSignUp && <Form.Field>
                    <label>Username</label>
                    <input className='yui-form-field' placeholder='Your username' />
                </Form.Field>}

                <Form.Field>
                    <label>Password</label>
                    <input type='password' className='yui-form-field' placeholder='Your password' />
                </Form.Field>
                <Button primary type='submit'>{isSignUp ? 'SIGN UP' : 'SIGN IN'}</Button>
            </Form>

            {isSignUp ? <a href='#' className='primary-link' onClick={toggleSignOn}>Already a member? Sign in.</a> : <a href='#' className='primary-link' onClick={toggleSignOn}>New here? Sign up.</a>}
        </Segment>
    )
}

export default SignOn;