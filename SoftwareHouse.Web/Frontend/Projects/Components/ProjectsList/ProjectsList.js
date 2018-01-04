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
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require("react");
require("./ProjectList.scss");
require("../../../Shared/Styles/helpers.scss");
var ProjectListSummary_1 = require("../ProjectListSummary/ProjectListSummary");
var ProjectListItem_1 = require("../ProjectListItem/ProjectListItem");
var ProjectList = /** @class */ (function (_super) {
    __extends(ProjectList, _super);
    function ProjectList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectList.prototype.render = function () {
        return (React.createElement("section", { className: "ProjectList row" },
            React.createElement("div", { className: "col-md-8 col-md-push-2" },
                React.createElement(ProjectListSummary_1["default"], { projects: this.props.projects }),
                this.props.projects.map(function (project) {
                    return React.createElement(ProjectListItem_1["default"], { project: project, key: project.Id });
                }))));
    };
    return ProjectList;
}(React.Component));
exports["default"] = ProjectList;
