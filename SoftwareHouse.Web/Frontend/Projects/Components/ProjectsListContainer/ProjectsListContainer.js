"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var EmptyListWarning_1 = require("../EmptyListWarning/EmptyListWarning");
var ProjectsList_1 = require("../ProjectsList/ProjectsList");
var ProjectsListContainer = /** @class */ (function (_super) {
    __extends(ProjectsListContainer, _super);
    function ProjectsListContainer(props) {
        var _this = 
        //https://github.com/DefinitelyTyped/DefinitelyTyped/pull/20987#issuecomment-339216734
        _super.call(this, props) || this;
        _this.paths = {
            fetchAllProjects: '/Api/Projects'
        };
        _this.state = {
            loadingData: true,
            projects: []
        };
        return _this;
    }
    ProjectsListContainer.prototype.render = function () {
        var hasProjects = this.state.projects.length > 0;
        return (this.state.loadingData ?
            React.createElement("p", { className: "text-center" }, "Loading data...") :
            hasProjects ? React.createElement(ProjectsList_1["default"], { projects: this.state.projects }) : React.createElement(EmptyListWarning_1["default"], null));
    };
    ProjectsListContainer.prototype.componentDidMount = function () {
        var _this = this;
        fetch(this.paths.fetchAllProjects, { credentials: 'include' })
            .then(function (response) {
            return response.text();
        }).then(function (data) {
            _this.setState({
                projects: JSON.parse(data),
                loadingData: false
            });
        });
    };
    return ProjectsListContainer;
}(React.Component));
exports["default"] = ProjectsListContainer;
