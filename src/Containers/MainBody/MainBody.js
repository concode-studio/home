import _ from 'lodash'
import React from 'react'
import {
  Container,
  Label,
  Image,
  ImageGroup,
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
        <div className="Block">
          <Image src="/t_aboutus.png" className="HeadingImage"/>
          <div>
            {sbService.get('about.us')}
          </div>
        </div>
        <div className='Block'>
          <Image src="/t_games.png" className="HeadingImage"/>
          <ImageGroup size='medium'>
            <Image size='medium' src='/graytail.jpg' style={{ marginRight: '1.5em' }} align='center' as='a' href='https://graytail.concode.co'/>
            <Image size='medium' src='/thw.jpg' style={{ marginRight: '1.5em' }} align='center' as='a' href='https://twh.concode.co'/>
          </ImageGroup>
        </div>
        <div className='Block'>
          <Image src="/t_blog.png" className="HeadingImage"/>
          <div>
            {sbService.get('blog.desc')}
            <div className='GameTitle'>
              <a href="https://slashpage.com/concode">
                Team Blog
              </a>
            </div>
          </div>
        </div>
        <div className="Block">
          <Image src="/t_contact.png" className="HeadingImage"/>
          <div>
            <a href="https://goo.gl/maps/6dvqSrYaZjr8xmdLA">
              <img src="/map.png" className="IconFollow"/>
            </a>
            <a href="mailto:dev@concode.co">
              <img src="/email.png" className="IconFollow"/>
            </a>
            <a href="https://twitter.com/teamconcode">
              <img src="/twitter.png" className="IconFollow"/>
            </a>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

export default MainBody