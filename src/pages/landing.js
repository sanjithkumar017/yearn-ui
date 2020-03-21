import React from 'react';
import { Icon } from 'semantic-ui-react'

import SignOn from '../components/sign-on';

const Landing = () => {
    return (<div className='app-landing-container'>

        <div className='app-landing-content'>
            <div className='app-menu'>
                <div className='app-icon'>
                    yearn
                </div>
                <div className='right-container'>
                    <div className='right-menu-icon'>
                        <Icon name='align right' size='large' />
                    </div>
                    <div className='menu'>
                        chat
                    </div>
                    <div className='menu'>
                        blog
                    </div>
                    <div className='menu'>
                        contact
                    </div>
                </div>
            </div>
            <div className='app-signon-container smaller-res'>
                <SignOn />
            </div>
            <div className='app-landing'>
                <div className='app-description'>
                    one day at a time. together.

                    <div className='app-inner-description'>
                        collaboration for working class made easy.
                    </div>
                </div>
            </div>

        </div>
        <div className='app-signon-container bigger-res'>
            <SignOn />
        </div>

    </div>)
}

export default Landing
