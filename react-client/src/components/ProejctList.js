import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import Mento from './Mento/Mento';
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";
import main_banner from '../static/img/main_banner.png';
import main_banner2 from '../static/img/main_banner2.jpg';
import main_banner3 from '../static/img/main_banner3.jpg';


class ProjectList extends Component {

  //life cycle hook
  componentDidMount(){
    this.props.getProjects();
  }


  render() {

    const { projects } = this.props.project;

    return (
      <div className="projects">
        <div className="container-fluid">
        <div className="row sort-button-section">
        <div className="btn-group-divided col-md-8 m-auto">
          <button className="btn btn-group">
              <a className="btn btn-dark dropdown-toggle" data-toggle="dropdown" href="#">
                  카테고리
                  <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li className="text-center"><a href="#">New</a></li>
                <li className="text-center"><a href="#">Close</a></li>
              </ul>
          </button>
          <button className="btn btn-group">
              <a className="btn btn-dark dropdown-toggle" data-toggle="dropdown" href="#">
                  사업화 트랙 단계
                  <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li className="text-center"><a href="#">시작 전</a></li>
                <li className="text-center"><a href="#">1~2단계 진행중</a></li>
                <li className="text-center"><a href="#">3~4단계 진행중</a></li>
                <li className="text-center"><a href="#">5단계 진행중</a></li>
              </ul>
          </button>
          <button className="btn btn-group">
            <a className="btn btn-dark dropdown-toggle" data-toggle="dropdown" href="#">
                달성률
                <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li className="text-center"><a href="#">50%이하</a></li>
              <li className="text-center"><a href="#">50%~75%이하</a></li>
              <li className="text-center"><a href="#">75%~100%이하</a></li>
              <li className="text-center"><a href="#">100%초과</a></li>
            </ul>
          </button>
          <button className="btn btn-group">
          <a className="btn btn-dark dropdown-toggle" data-toggle="dropdown" href="#">
              모인 금액
              <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li className="text-center"><a href="#">500만원 이하</a></li>
            <li className="text-center"><a href="#">500만원 ~ 1000만원 이하</a></li>
            <li className="text-center"><a href="#">1000만원 이상</a></li>
          </ul>
          </button>
        </div>
        </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 main-project-section">
                    <div className="row">
                      <div className="col-mb-3">
                      <h5 className="main-project-section-text">모든 프로젝트</h5>
                      </div>
                    </div>
                    <br/>
                    <div className="row">
                    {projects.map(project=>(
                      <ProjectItem key={project.id} project={project}/>
                    ))
                    }
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    )
  }
}

ProjectList.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  project:state.project

})

export default connect(mapStateToProps, {getProjects})(ProjectList);