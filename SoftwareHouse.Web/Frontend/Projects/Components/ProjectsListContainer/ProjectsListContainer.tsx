import * as React from 'react';
import Project from '../../Models/Project';
import EmptyListWarning from '../EmptyListWarning/EmptyListWarning';
import ProjectList from '../ProjectsList/ProjectsList';

interface ProjectsListContainerState {
    loadingData: boolean,
    projects: Project[]
}
class ProjectsListContainer extends React.Component<any, ProjectsListContainerState> {

    private paths = {
        fetchAllProjects: '/Api/Projects'
    };

    constructor(props?: ProjectsListContainerState) {
        //https://github.com/DefinitelyTyped/DefinitelyTyped/pull/20987#issuecomment-339216734
        super(props);
        this.state = {
            loadingData: true,
            projects: []
        };
    }
    public render() {
        const hasProjects = this.state.projects.length > 0;
        return (
            this.state.loadingData ?
                <p className="text-center">Loading data...</p> :
                hasProjects ? <ProjectList projects={this.state.projects}/> : <EmptyListWarning/>
        )
    }

    public componentDidMount() {
        fetch(this.paths.fetchAllProjects, { credentials: 'include' })
            .then((response) => {
                return response.text();
            }).then((data) => {
                this.setState({
                    projects: JSON.parse(data),
                    loadingData:false
                });
            });
    }
}
export default ProjectsListContainer;