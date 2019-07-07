import { Link } from 'gatsby'
import React from 'react'
import './style.scss'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = props => (
  <footer className={props.customClass}> 
	  <Container className="text-center">
	  	<h6 className="smallest silver mb-0">Copyright © 2019 Bruno Speaks.</h6>
	  	<h6 className="smallest silver mb-0">Bruno Speaks is a child company of Design with Bruno</h6>
	  </Container>
  </footer>
)

export default Footer
