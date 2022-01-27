import React from 'react';
import { Row, Col} from 'react-bootstrap'
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiFillGithub,
    AiFillInstagram,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

  import { MdContacts } from "react-icons/md";
import './SocialMediaIcons.css';

function SocialMediaIcons() {
  return <div>
      {/* <Row>
          <Col md="4" className="footer-body"> */}
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/killerkc12"
                target="blank"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/killerkc12_"
                target="blank"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/killerkc12"
                target="blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/killerkc12"
                target="blank"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        {/* </Col>
    </Row> */}
  </div>;
}

export default SocialMediaIcons;
