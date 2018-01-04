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
var Button_1 = require("../../../Shared/Components/Button");
var ProjectListSummary = /** @class */ (function (_super) {
    __extends(ProjectListSummary, _super);
    function ProjectListSummary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paths = {
            createProjectUrl: "Projects/Add"
        };
        return _this;
    }
    ProjectListSummary.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "ProjectListSummary col-md-12" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("p", { className: "Projectlist-summaryText" },
                            "Numer of projects:",
                            React.createElement("strong", null, this.props.projects.length))),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement(Button_1["default"], { link: true, href: this.paths.createProjectUrl, extraClassNames: ['btn-success', 'pull-right'] }, "Start new project"))))));
    };
    return ProjectListSummary;
}(React.Component));
exports["default"] = ProjectListSummary;
