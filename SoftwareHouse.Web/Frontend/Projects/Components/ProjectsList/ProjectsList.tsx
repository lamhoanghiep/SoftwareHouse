// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import './ProjectList.scss';
import '../../../Shared/Styles/helpers.scss';
import Project from '../../Models/Project';
import ProjectListSummary from '../ProjectListSummary/ProjectListSummary';
import ProjectListItem from '../ProjectListItem/ProjectListItem';
interface ProjectListProps {
    projects: Project[]
}
class ProjectList extends React.Component<ProjectListProps, any>{
    public render() {
        return (
            <section className="ProjectList row">
                <div className="col-md-8 col-md-push-2">
                    <ProjectListSummary projects={this.props.projects}></ProjectListSummary>
                    {
                        this.props.projects.map(project => {
                            return <ProjectListItem project={project} key={project.Id}/>
                        })
                    }
                </div>
            </section>
        );
    }
}
export default ProjectList;