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

const MainBody = ({onClickPrivacy, onClickTerms}) => (
  <div className='MainBody'>
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
       <div className="Desc">
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
          <List.Item>
            <span onClick={onClickTerms}>Terms and Conditions</span>
          </List.Item>
          <List.Item>
            <span onClick={onClickPrivacy}>Privacy Policy</span>
          </List.Item>
        </List>

    </Container>
  </div>
)

export default MainBody