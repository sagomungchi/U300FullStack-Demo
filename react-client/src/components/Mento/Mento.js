import React, { Component } from 'react'
import { Link } from "react-router-dom";
import moment from "moment";
import sub_banner1 from '../../static/img/mento1.jpg';
import sub_banner2 from '../../static/img/mento2.jpg';
import sub_banner3 from '../../static/img/mento3.jpeg';
import sub_banner4 from '../../static/img/mento4.jpeg';
import sub_banner5 from '../../static/img/mento5.jpg';
import sub_banner6 from '../../static/img/mento6.jpg';
import sub_banner7 from '../../static/img/mento7.jpg';
import sub_banner8 from '../../static/img/mento8.jpg';

class Mento extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container-fluid">
        <div className="row sort-button-section">
        <div className="btn-group-divided col-md-8 m-auto">
          <button className="btn btn-group">
              <a className="btn btn-dark dropdown-toggle" data-toggle="dropdown" href="#">
                  주 멘토링 분야
                  <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li className="text-center"><a href="#">New</a></li>
                <li className="text-center"><a href="#">Close</a></li>
              </ul>
          </button>
          <button className="btn btn-group">
              <a className="btn btn-dark dropdown-toggle" data-toggle="dropdown" href="#">
                  활동 지역
                  <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Copy</a></li>
                <li><a href="#">Paste</a></li>
                <li><a href="#">Undo</a></li>
              </ul>
          </button>
        </div>
        </div>
          <div className="row">
            <div className="col-md-12 main-project-section">
            <div className="row">
              <div className="col-mb-3">
              <h5 className="main-project-section-text">모든 멘토</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
              <div className="card" style={{width: "240px"}}>
              <img src={ sub_banner1 } class="card-img-top project-card-img-top" alt="..." />
                <div className="card-body project-card-body">
                    <h6 className="card-title">김혜자</h6>
                    <p className="card-text">(주)혜자 대표이사</p>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div className="card" style={{width: "240px"}}>
              <img src={ sub_banner2 } class="card-img-top project-card-img-top" alt="..." />
                <div className="card-body project-card-body">
                    <h6 className="card-title">류승룡</h6>
                    <p className="card-text">(주)승룡 마케팅팀장</p>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div className="card" style={{width: "240px"}}>
              <img src={ sub_banner3 } class="card-img-top project-card-img-top" alt="..." />
                <div className="card-body project-card-body">
                    <h6 className="card-title">최민식</h6>
                    <p className="card-text">(주)민식 개발이사</p>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div className="card" style={{width: "240px"}}>
              <img src={ sub_banner4 } class="card-img-top project-card-img-top" alt="..." />
                <div className="card-body project-card-body">
                    <h6 className="card-title">송강호</h6>
                    <p className="card-text">(주)송강 법무팀장</p>
                </div>
              </div>
              </div>
            </div>
            <br/>
            <div className="row">
            <div className="col-md-3">
              <div className="card" style={{width: "240px"}}>
              <img src={ sub_banner5 } class="card-img-top project-card-img-top" alt="..." />
                <div className="card-body project-card-body">
                    <h6 className="card-title">김고은</h6>
                    <p className="card-text">(주)고은 영업팀장</p>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div className="card" style={{width: "240px"}}>
              <img src={ sub_banner6 } class="card-img-top project-card-img-top" alt="..." />
                <div className="card-body project-card-body">
                    <h6 className="card-title">곽철용</h6>
                    <p className="card-text">(주)묻고더블로가 재무팀장</p>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div className="card" style={{width: "240px"}}>
              <img src={ sub_banner7 } class="card-img-top project-card-img-top" alt="..." />
                <div className="card-body project-card-body">
                    <h6 className="card-title">정마담</h6>
                    <p className="card-text">(주)고니 재무설계괸리자</p>
                </div>
              </div>
              </div>
              <div className="col-md-3">
              <div className="card" style={{width: "240px"}}>
              <img src={ sub_banner8 } class="card-img-top project-card-img-top" alt="..." />
                <div className="card-body project-card-body">
                    <h6 className="card-title">아귀</h6>
                    <p className="card-text">(주)아귀 대표이사</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Mento;