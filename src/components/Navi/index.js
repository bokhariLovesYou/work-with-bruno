import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap';

class Navi extends React.Component {

 state = {
    header: [
      {
        modalClass: "not-active"
      },
    ],
  }

  toggleMenu = () => {
    if (this.state.header[0].modalClass === "not-active") {
      this.setState(prevState => ({
        modalClass: (prevState.header[0].modalClass = "active"),
      }))
    } else if (this.state.header[0].modalClass === "active") {
      this.setState(prevState => ({
        modalClass: (prevState.header[0].modalClass = "not-active"),
      }))
    }
  }

  render() {
    const { location, title } = this.props
    return (
      <header className={this.props.color + ' ' + this.state.header[0].modalClass}>
      	<Container>
	        <div className="headerWrapper">
	        	<div className="custom-col col-left">
	        		<div className="logo-box">
	        			<Link to={__dirname}><div className="logo"><span>Ö</span></div></Link>
	        		</div>
	        	</div>
	        	<div className="desktop-nav">
	        		<ul>
	        			<Link to={__dirname + '/why-bruno'}><li>Why Bruno</li></Link>
	        			<Link to={__dirname + '/how-it-works'}><li>How it works</li></Link>
	        			<Link to={__dirname + '/features'}><li>Features</li></Link>
	        			<Link to={__dirname + '/blog'}><li>Blog</li></Link>
	        		</ul>
	        	</div>
	        	<div className="cta-wrapper">
	        		<ul>
	        			<li className="default-button">Log in</li>
	        			<li className="default-button silver-button">Sign up</li>
	        		</ul>
	        	</div>
	        	<div className="custom-col col-right hamburger-parent">
	        		<div className="hamburger-toggler">
						<svg width="22" height="22" onClick={this.toggleMenu}>
					        <path className="path first-path" d="M 0 6 C 0 5.448 0.448 5 1 5 L 21 5 C 21.552 5 22 5.448 22 6 L 22 6 C 22 6.552 21.552 7 21 7 L 1 7 C 0.448 7 0 6.552 0 6 Z" fill="hsl(0, 0%, 0%)"></path>
					        <path className="path second-path" d="M 0 16 C 0 15.448 0.448 15 1 15 L 21 15 C 21.552 15 22 15.448 22 16 L 22 16 C 22 16.552 21.552 17 21 17 L 1 17 C 0.448 17 0 16.552 0 16 Z" fill="hsl(0, 0%, 0%)"></path>
					     </svg>
	        		</div>
	        	</div>
			<div className="nav-sub">
			    
			    <ul>
			      <li>
			        <p className="small">The Questions</p>
			      </li>
			      <li>
			        <Link to={__dirname + '/why-bruno'}>
			          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
			            <path d="M 9.744 -1.163 C 9.867 -1.344 10.133 -1.344 10.256 -1.163 L 11.05 0 L 8.95 -0 Z M 14.568 5.154 C 15.022 5.82 15.449 6.505 15.848 7.207 L 17.306 9.777 C 17.761 10.579 18 11.485 18 12.406 C 18 16.6 14.6 20 10.406 20 L 9.594 20 C 5.4 20 2 16.6 2 12.406 C 2 11.485 2.239 10.579 2.694 9.777 L 4.152 7.207 C 4.551 6.505 4.978 5.82 5.432 5.154 L 8.847 0.151 C 8.927 0.154 9 0.218 9 0.309 L 9 7.812 C 9 8.781 8.404 9.651 7.5 10 L 7.764 10 C 7.289 10.531 7 11.232 7 12 C 7 13.657 8.343 15 10 15 C 11.657 15 13 13.657 13 12 C 13 11.232 12.711 10.531 12.236 10 L 12.5 10 C 11.596 9.651 11 8.781 11 7.812 L 11 0.309 C 11 0.218 11.073 0.154 11.153 0.151 Z" fill="rgba(51, 51, 51, 1.00)"></path>
			          </svg>Why Bruno
			        </Link>
			      </li>
			      <li>
			        <Link to={__dirname + '/how-it-works'}>
			          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
			            <path d="M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 7.615 12 C 7.828 12 8 12.172 8 12.385 L 8 14.571 C 8 14.914 8.414 15.086 8.657 14.843 L 14.843 8.657 C 15.086 8.414 14.914 8 14.571 8 L 12.385 8 C 12.172 8 12 7.828 12 7.615 L 12 5.429 C 12 5.086 11.586 4.914 11.343 5.157 L 5.157 11.343 C 4.914 11.586 5.086 12 5.429 12 Z" fill="rgba(51, 51, 51, 1.00)"></path>
			          </svg>How it works
			        </Link>
			      </li>
			    </ul>

			    
			    <ul>
			      <li>
			        <p className="small">Resources</p>
			      </li>
			      <li>
			        <Link to={__dirname + '/features'}>
			          <svg width="20" height="22">
			            <path d="M 18.83 14.181 C 19.398 14.579 19.398 15.421 18.83 15.819 L 10.86 21.398 C 10.344 21.759 9.656 21.759 9.14 21.398 L 1.17 15.819 C 0.602 15.421 0.602 14.579 1.17 14.181 L 4.254 12.022 L 8.862 15.212 C 9.546 15.686 10.454 15.686 11.138 15.212 L 15.746 12.022 Z M 9.14 0.602 C 9.656 0.241 10.344 0.241 10.86 0.602 L 18.83 6.181 C 19.398 6.579 19.398 7.421 18.83 7.819 L 10.86 13.398 C 10.344 13.759 9.656 13.759 9.14 13.398 L 1.17 7.819 C 0.602 7.421 0.602 6.579 1.17 6.181 Z" fill="#333"></path>
			          </svg>Features
			        </Link>
			      </li>
			      <li>
			        <Link to={__dirname + '/blog'}>
			          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
			            <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 17 0 C 18.657 0 20 1.343 20 3 L 20 17 C 20 18.657 18.657 20 17 20 L 3 20 C 1.343 20 0 18.657 0 17 Z M 5 7 C 5 7.552 5.448 8 6 8 L 14 8 C 14.552 8 15 7.552 15 7 C 15 6.448 14.552 6 14 6 L 6 6 C 5.448 6 5 6.448 5 7 Z M 5 13 C 5 13.552 5.448 14 6 14 L 10 14 C 10.552 14 11 13.552 11 13 C 11 12.448 10.552 12 10 12 L 6 12 C 5.448 12 5 12.448 5 13 Z" fill="rgb(51,51,51)"></path>
			          </svg>Blog
			        </Link>
			      </li>
			      <li>
			        <a className="download-cta" href="/download">
			          <svg width="20" height="20">
			            <path d="M 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 Z M 10.707 15.708 L 14.707 11.708 C 15.098 11.318 15.098 10.684 14.708 10.293 C 14.317 9.903 13.684 9.903 13.293 10.293 L 11 12.586 L 11 5 C 11 4.448 10.552 4 10 4 C 9.448 4 9 4.448 9 5 L 9 12.586 L 6.707 10.293 C 6.315 9.914 5.691 9.919 5.305 10.305 C 4.919 10.691 4.914 11.315 5.293 11.707 L 9.243 15.657 C 9.369 15.801 9.534 15.906 9.718 15.96 C 10.069 16.067 10.45 15.97 10.707 15.708 Z" fill="#05f"></path>
			          </svg>Try Bruno for Free
			        </a>
			      </li>
			    </ul>
			    
			  </div>
	        </div>
        </Container>
      </header>
    )
  }
}

export default Navi
