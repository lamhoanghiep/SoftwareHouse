// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SoftwareHouse.Contract.Services;

namespace SoftwareHouse.Web.Controllers.Api
{
    [Route("api/[controller]")]
    [Authorize]
    public class ProjectsController : Controller
    {
        private IProjectsService _projectsService;

        public ProjectsController(IProjectsService projectsService)
        {
            this._projectsService = projectsService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Json(_projectsService.GetAll());
        }
    }
}
