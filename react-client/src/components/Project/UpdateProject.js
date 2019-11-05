/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { getProject, createProject } from "../../actions/projectActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import bgImg from '../../static/img/images.jpg';
import mento from '../../static/img/mento1.jpg';

class UpdateProject extends Component {

  constructor(){
    super()

    this.state = {
      id: "",
      money: {
          id: "",
          investedMoney: "",
          goalMoney: ""
      },
      projectName: "",
      projectIdentifier: "",
      description: "",
      goalMoney: "",
      start_date: "",
      end_date: "",
    };
  }

  componentWillReceiveProps(nextProps){
    const {
      id,
      money,
      projectName,
      projectIdentifier,
      description,
      goalMoney,
      start_date,
      end_date
    } = nextProps.project

    this.setState({
      id,
      money,
      projectName,
      projectIdentifier,
      description,
      goalMoney,
      start_date,
      end_date
    })
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    const percent     = ((this.state.money.investedMoney / this.state.money.goalMoney) * 100).toFixed(2);
    const progressPercent = percent+'%';
    const projectStartDate = moment(this.state.start_date).format("YYYY-MM-DD");
    const projectEndDate = moment(this.state.end_date).format("YYYY-MM-DD");
    const diffDate = moment(projectEndDate, "YYYY-MM-DD").diff(projectStartDate, "day") + "일";

    return (
      <div className="project">
        <div className="row">
          <div className="col-md-12 m-auto">
          <div className="header-bg">
          <div className="content">
            <small className="lead text-muted">카테고리</small>
            <h1 className="text-center">{this.state.projectName}</h1>
          </div>
          <div className="img-cover"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="info-wrap">
          <div className="row">
              <div className="col-md-4 m-auto">
                <iframe width="512" height="315" src="https://www.youtube.com/embed/zhIScvlFn2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="col-md-4 m-auto">
              <div className="mb-4">
                <small className="lead">{ diffDate } 남음</small>
              </div>
                <div className="progress"
                                 style={{height:"10px"}}>
                    <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{ maxWidth: progressPercent }}
                        aria-valuenow={percent}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        <style></style>
                        <span className="title"></span>
                    </div>
                </div>
                <br />
                <p class="font-weight-bold">{ progressPercent } <small className="lead text-muted">달성</small></p>
                <p class="font-weight-bold">{ this.state.money.investedMoney } <small className="lead text-muted">원 펀딩</small></p>
                <p><small className="lead text-muted">{ this.state.money.cnt }명의 후원자</small></p>
                <button type="button" class="btn btn-dark">펀딩하기</button>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-5 m-auto">
            <div className="form-group">
                  <input
                      type="text"
                      placeholder="Project Name"
                      className="form-control form-control-lg "
                      name="projectName"
                      value={this.state.projectName}
                      />
              </div>
              <div className="form-group">
                  <label for="projectIdentifier">프로젝트 고유 아이디</label>
                  <input
                      type="text"
                      placeholder="Unique Project ID"
                      className="form-control form-control-lg "
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      disabled
                      />
              </div>
              <div className="form-group">
                  <label for="projectIdentifier">프로젝트 내용</label>
                  <textarea
                  placeholder="Project Description"
                  className="form-control form-control-lg "
                  name="description"
                  value={this.state.description}
                  ></textarea>
              </div>
              <div className="form-group">
                  <label for="projectIdentifier">프로젝트 목표 금액</label>
                  <input
                      type="text"
                      placeholder="프로젝트 목표 금액"
                      className="form-control form-control-lg "
                      name="goalMoney"
                      value={this.state.money.goalMoney}
                      />
              </div>
              <div className="form-group">
              <label for="projectIdentifier">프로젝트 마감 기한</label>
                  <input
                      type="text"
                      placeholder="프로젝트 마감 기한"
                      className="form-control form-control-lg "
                      value={ diffDate }
                      />
              </div>
              <div className="form-group">
                  <label for="projectIdentifier">프로젝트 달성 금액</label>
                  <input
                      type="text"
                      placeholder="프로젝트 달성 금액"
                      className="form-control form-control-lg "
                      name="investedMoney"
                      value={this.state.money.investedMoney}
                      />
                      <div className="progress"
                            style={{height:"10px"}}>
                      <div
                          className="progress-bar bg-dark"
                          role="progressbar"
                          style={{ maxWidth: progressPercent }}
                          aria-valuenow={percent}
                          aria-valuemin="0"
                          aria-valuemax="100">
                          <style></style>
                          <span className="title"></span>
                      </div>
                </div>
              </div>
              <h6>펀딩 시작 날짜</h6>
              <div className="form-group">
                  <input type="date"
                        className="form-control form-control-lg"
                        name="start_date"
                        value={this.state.start_date}
                        />
              </div>
              <h6>펀딩 마감 날짜</h6>
              <div className="form-group">
                  <input type="date"
                        className="form-control form-control-lg"
                        name="end_date"
                        value={this.state.end_date}
                        />
              </div>
            </div>
            <div className="col-md-4 m-auto">
              <p><small className="lead text-muted">프로젝트 담당멘토</small></p>
              <hr/>
              <figure class="fir-image-figure">
                <a class="fir-imageover" rel="noopener" target="_blank" href="#">
                  <img class="fir-author-image fir-clickcircle" src={ mento } />
                <div class="fir-imageover-color"></div>
              </a>
              <figcaption>
                <div class="fig-author-figure-title">김혜자</div>
                <div class="fig-author-figure-title">(주)혜자 대표이사</div>
                <div class="fig-author-figure-title">사업화 트랙 1단계 지원 중에 있음</div>
              </figcaption>
              </figure>
              <p><small className="lead text-muted">진행 중인 사업화 트랙 단계</small></p>
              <hr/>
                <div class="step-state step1">
                <ul>
                    <li><p>1단계</p></li>
                    <li><p>2단계<span>(1천만원)</span></p></li>
                    <li><p>3단계<span>(5천만원)</span></p></li>
                    <li><p>4단계<span>(3천만원)</span></p></li>
                    <li><p>5단계<span>(1천만원)</span></p></li>
                </ul>
                </div>
              <p><small className="lead text-muted">프로젝트 리워드</small></p>
              <hr/>
              <div class="card" style={{width: "100%"}, {marginBottom : "10px"}}>
                <div class="card-body">
                  <h5 class="card-title">3,000,000원 펀딩</h5>
                  <h6 class="card-subtitle mb-2 text-muted">[슈퍼얼리버드] 펀딩 쿠폰 50만원 상당</h6>
                  <p class="card-text">토핑펀딩쿠폰 50만원+메인배너광고 1달</p>
                  <a href="#" class="card-link">해당 리워드로 펀딩</a>
                </div>
              </div>
              <div class="card" style={{width: "100%"}, {marginBottom : "10px"}}>
                <div class="card-body">
                  <h5 class="card-title">1,800,000원 펀딩</h5>
                  <h6 class="card-subtitle mb-2 text-muted">[슈퍼얼리버드] 펀딩 쿠폰 30만원 상당</h6>
                  <p class="card-text">토핑펀딩쿠폰 30만원+메인배너광고 2주</p>
                  <a href="#" class="card-link">해당 리워드로 펀딩</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


UpdateProject.propTypes = {
  getProject : PropTypes.func.isRequired,
  createProject : PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  project:state.project.project
})

export default connect(
  mapStateToProps,
  { getProject, createProject }
)(UpdateProject);