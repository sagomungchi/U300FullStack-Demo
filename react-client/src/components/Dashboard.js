import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import Mento from './Mento/Mento';
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";
import main_banner from '../static/img/main_banner.png';
import main_banner2 from '../static/img/main_banner2.jpg';
import main_banner3 from '../static/img/main_banner3.jpg';


class Dashboard extends Component {

  //life cycle hook
  componentDidMount(){
    this.props.getProjects();
  }


  render() {

    const { projects } = this.props.project;

    return (
      <div className="projects">
        <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 slide">
            <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={ main_banner } class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h1 className="text-left text-justify"><strong>매년 겨울 찾게 될 소재 좋은 목도리</strong></h1>
                    <p className="text-left banner-subtitle"><strong>니트 전문가들이 짜임과 재료를 고민하며 만들었습니다.</strong></p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={ main_banner2 } class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                  <h1 className="text-left text-justify"><strong>두 마리도 한 번에 이동할 수 있어요</strong></h1>
                  <p className="text-left banner-subtitle"><strong>끈 길이 조절로 두 마리 편안한 이동장 '로켓팻 캐리어'</strong></p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={ main_banner3 } class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                  <h1 className="text-left text-justify"><strong>매년 겨울 찾게 될 소재 좋은 목도리</strong></h1>
                  <p className="text-left banner-subtitle"><strong>니트 전문가들이 짜임과 재료를 고민하며 만들었습니다.</strong></p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
            </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 main-project-section">
                    <div className="row">
                      <div className="col-mb-3">
                      <h5 className="main-project-section-text">현재 인기있는 프로젝트</h5>
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

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  project:state.project

})

export default connect(mapStateToProps, {getProjects})(Dashboard);