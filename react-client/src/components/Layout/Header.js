import React, { Component } from 'react'
import logo from '../../static/img/toping-logo.png';
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container">

              <div className="collapse navbar-collapse" id="mobile-nav">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <a className="nav-link" href="/mento">
                              멘토
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/projectList">
                              프로젝트 톺아보기
                          </a>
                      </li>
                  </ul>

                  <ul className="navbar-nav mc-auto">
                      <li className="nav-item">
                        <a className="navbar-brand" href="/Dashboard">
                            Toping
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon" />
                        </button>
                      </li>
                  </ul>


                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <a className="nav-link " href="register.html">
                              사고뭉치 님
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Header;