import React from 'react';

import { Segment } from 'semantic-ui-react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

function App() {
  return (
    <div className='app-container'>
      <div className='app-landing-container'>

        <div className='app-landing-content'>
          <div className='app-menu'>
            <div className='app-icon'>
              yearn
        </div>
            <div className='right-container'>
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
            <Segment raised>
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
            </Segment>
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
          <Segment raised>
            <div className='sign-on-step'>
              <Button primary>Primary</Button>
              <Button secondary>Secondary</Button>
            </div>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>
        </div>

      </div>
    </div>
  );
}

export default App;
