import * as React from 'react';
import Project from '../../Models/Project';
import Button from '../../../Shared/Components/Button';
interface ProjectListProps {
    projects: Project[]
}

class ProjectListSummary extends React.Component<ProjectListProps, any>{
    private paths = {
        createProjectUrl: "Projects/Add"
    };
    public render() {
        return (
            <div className="row">
                <div className="ProjectListSummary col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="Projectlist-summaryText">Numer of projects:<strong>{this.props.projects.length}</strong></p>
                        </div>
                        <div className="col-md-6">
                            <Button link={true} href={this.paths.createProjectUrl} extraClassNames={['btn-success','pull-right']}>Start new project</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectListSummary;