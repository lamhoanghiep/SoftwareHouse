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
var moment = require("moment");
require("./ProjectListItem.scss");
var ProjectListItem = /** @class */ (function (_super) {
    __extends(ProjectListItem, _super);
    function ProjectListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectListItem.prototype.render = function () {
        return (React.createElement("a", { href: '/Projects/Details/{this.props.project.Id}' },
            React.createElement("div", { className: "ProjectListItem row" },
                React.createElement("div", { className: "col-md-12" },
                    React.createElement("div", { className: "ProjectListItem-summary row" },
                        React.createElement("div", { className: "col-md-6 padding-none" },
                            React.createElement("span", { className: "ProjectListItem-name" }, this.props.project.Name)),
                        React.createElement("div", { className: "col-md-6 padding-none" },
                            React.createElement("span", { className: "pull-right" },
                                React.createElement("span", { className: "glyphicon glyphicon-calendar" }),
                                moment(this.props.project.CreationDate).format("DD-MM-YYYY")))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-12 padding-none" },
                            React.createElement("span", { className: "ProjectListItem-description" }, this.props.project.Description)))))));
    };
    return ProjectListItem;
}(React.Component));
exports["default"] = ProjectListItem;
