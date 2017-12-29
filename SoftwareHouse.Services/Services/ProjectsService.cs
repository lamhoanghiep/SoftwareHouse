using SoftwareHouse.Contract.Services;
using System;
using System.Collections.Generic;
using System.Text;
using SoftwareHouse.Contract.DataContracts;
using SoftwareHouse.Contract.Repositories;
using SoftwareHouse.Contract.Common;

namespace SoftwareHouse.Services.Services
{
    public class ProjectsService : IProjecstService
    {
        private readonly IProjectsRepository _projectRepository;

        public ProjectsService(IProjectsRepository projectsRepository)
        {
            this._projectRepository = projectsRepository;
        }

        public List<ProjectDto> GetAll()
        {
            return _projectRepository.GetAll();
        }

        public CommonResult<ProjectDto> GetById(int id)
        {
            var project = _projectRepository.GetById(id);
            if(project == null || project.IsDeleted)
            {
                return CommonResult<ProjectDto>.Failure<ProjectDto>("Problem occured during fetching project with given id");
            }
            else
            {
                return CommonResult<ProjectDto>.Success<ProjectDto>(project);
            }
        }

        public CommonResult Add(AddProjectDto project)
        {
            if (string.IsNullOrEmpty(project.Name))
            {
                return CommonResult.Failure("Cannot create project without name provided");
            }
            if (string.IsNullOrEmpty(project.Description))
            {
                return CommonResult.Failure("Cannot create project without description provided");
            }
            var existingProject = _projectRepository.GetByName(project.Name);
            if(existingProject != null && existingProject.IsDeleted == false && existingProject.Name == project.Name)
            {
                return CommonResult.Failure("Project name already exists");
            }
            _projectRepository.Add(project);
            return CommonResult.Success();
        }
    }
}
