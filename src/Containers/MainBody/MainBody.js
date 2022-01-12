import _ from 'lodash'
import React from 'react'
import {
  Container,
  Label,
  Image,
} from 'semantic-ui-react'

import './MainBody.css';
import sbService from "../../Services/StringBundleService";

const MainBody = () => (
  <div>
    <div className='MainNav'>
      <Container>
        <Image size='large' src='/LogoWhite.png' style={{ marginRight: '1.5em' }} align='center'/>
      </Container>
    </div>
    <Container className='MainBody'>
      <div className='Body'>
        <div className='Block'>
          <Image src="/t_games.png" className="HeadingImage"/>
          <div>
            <a href="https://twh.concode.co">
              <Image size='medium' src='/TheWayHome.png' style={{ marginRight: '1.5em' }} align='center'/>
            </a>
            <div className='GameTitle'>
              <a href="https://twh.concode.co">
                The Way Home: Pixel Roguelike
              </a>
            </div>
          </div>
        </div>
        <div className="Block">
          <Image src="/t_aboutus.png" className="HeadingImage"/>
          <div>
            <ul>
              <li>{sbService.get('about.1')}</li>
              <li>{sbService.get('about.2')}</li>
              <li>{sbService.get('about.3')}</li>
            </ul>
          </div>
        </div>
        <div className="Block">
          <Image src="/t_contact.png" className="HeadingImage"/>
          <div>
            <a href="mailto:dev@concode.co">
              <img src="/email.png" className="IconFollow"/>
            </a>
            <a href="https://twitter.com/concodestudio">
              <img src="/twitter.png" className="IconFollow"/>
            </a>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

export default MainBody