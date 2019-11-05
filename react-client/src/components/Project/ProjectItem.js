import React, { Component } from 'react';
import { Link } from "react-router-dom";
import moment from "moment";
import bgImg from '../../static/img/main_banner.jpg';
import sub_banner1 from '../../static/img/toping-logo.png';
import sub_banner2 from '../../static/img/sub_banner2.jpeg';
import sub_banner3 from '../../static/img/sub_banner3.jpg';
import sub_banner4 from '../../static/img/sub_banner4.jpg';
import sub_banner5 from '../../static/img/sub_banner4.jpg';
import sub_banner6 from '../../static/img/sub_banner2.jpeg';
import sub_banner7 from '../../static/img/sub_banner2.jpeg';
import sub_banner8 from '../../static/img/sub_banner2.jpeg';


class ProjectItem extends Component {
  render() {

    const { project } = this.props;
    const percent     = ((project.money.investedMoney / project.money.goalMoney) * 100).toFixed(2);
    const progressPercent = percent+'%';
    const projectStartDate = moment(project.start_date).format("YYYY-MM-DD");
    const projectEndDate = moment(project.end_date).format("YYYY-MM-DD");
    const diffDate = moment(projectEndDate, "YYYY-MM-DD").diff(projectStartDate, "day") + "일";
    const separator = project.id;

    let sub_banner = "sub_banner"+separator;

    if(sub_banner === 'sub_banner1'){
        sub_banner = sub_banner1;
    } else if(sub_banner === 'sub_banner2'){
        sub_banner = sub_banner2;
    } else if(sub_banner === 'sub_banner3'){
        sub_banner = sub_banner3;
    } else if(sub_banner === 'sub_banner4'){
        sub_banner = sub_banner4;
    } else if(sub_banner === 'sub_banner5'){
        sub_banner = sub_banner5;
    } else if(sub_banner === 'sub_banner6'){
        sub_banner = sub_banner6;
    } else if(sub_banner === 'sub_banner7'){
        sub_banner = sub_banner7;
    } else if(sub_banner === 'sub_banner8'){
        sub_banner = sub_banner8;
    }


    if(project.money.investedMoney == null){
        project.money.investedMoney = "0";
    }

    console.log(progressPercent);
    return (
        <div className="col-md-3">
        <div className="card" style={{width: "240px"}}>
        <Link className="project-card-link" to={`/updateProject/${project.projectIdentifier}`}>
            <img src={ sub_banner } class="card-img-top project-card-img-top" alt="..." />
            <div className="card-body project-card-body">
                <h6 className="card-title">{project.projectName}</h6>
                <p className="card-text">{project.projectIdentifier}</p>
                <div className="progress"
                style={{height:"5px"}}>
                    <div
                    className="progress-bar bg-dark"
                    role="progressbar"
                    style={{ maxWidth: progressPercent }}
                    aria-valuenow={percent}
                    aria-valuemin="0"
                    aria-valuemax="100">
                    <style></style>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        <small className="lead project-card-info-text">{ diffDate } 남음</small>
                    </div>
                    <div className="col">
                        <p class="font-weight-bold project-card-info-text">
                        { project.money.investedMoney }원
                            <small className="lead text-muted project-card-info-text-sub">
                                { progressPercent }
                            </small>
                        </p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        </div>
    )
  }
}

export default ProjectItem;