import _ from 'lodash'
import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

import './MainBody.css';

const MainBody = () => (
  <div class='MainBody'>
    <Container>
       <br/>
       <br/>
       <br/>
       <br/>
       <p>
       <Image size='medium' src='/Logo.png' style={{ marginRight: '1.5em' }} align='center'/>
       </p>
       <br/>
       <br/>
       <div class="Desc">
           WE MAKE CODE<br/>
           WE MAKE GAME<br/>
           WE MAKE FUN<br/>
       </div>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>

       <List horizontal divided link size='small'>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>

    </Container>
  </div>
)

export default MainBody