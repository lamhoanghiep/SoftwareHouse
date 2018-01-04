import * as React from 'react';
import * as moment from 'moment';
import './ProjectListItem.scss';
import Project from '../../Models/Project';

interface ProjectListItemProps {
    key: number,
    project: Project
}

class ProjectListItem extends React.Component<ProjectListItemProps, any>{
    public render() {
        return (
            <a href={'/Projects/Details/{this.props.project.Id}'}>
                <div className="ProjectListItem row">
                    <div className="col-md-12">
                        <div className="ProjectListItem-summary row">
                            <div className="col-md-6 padding-none">
                                <span className="ProjectListItem-name">{this.props.project.Name}</span>
                            </div>
                            <div className="col-md-6 padding-none">
                                <span className="pull-right">
                                    <span className="glyphicon glyphicon-calendar"></span>{moment(this.props.project.CreationDate).format("DD-MM-YYYY")}
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 padding-none">
                                <span className="ProjectListItem-description">{this.props.project.Description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>   
        )
    }
}
export default ProjectListItem;