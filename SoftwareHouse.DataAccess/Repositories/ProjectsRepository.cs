using SoftwareHouse.Contract.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using SoftwareHouse.Contract.DataContracts;
using System.Linq;
using SoftwareHouse.DataAccess.Models;

namespace SoftwareHouse.DataAccess.Repositories
{
    public class ProjectsRepository : IProjectsRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ProjectsRepository(ApplicationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public void Add(AddProjectDto project)
        {
            _dbContext.Projects.Add(new Project {
                Name = project.Name,
                Description = project.Description,
                IsDeleted = false,
                CreationDate = DateTime.Now
            });
            _dbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var project = _dbContext.Projects.First(x => x.Id == id);
            if(project != null && project.IsDeleted == false)
            {
                project.IsDeleted = true;
                _dbContext.SaveChanges();
            }
        }

        public List<ProjectDto> GetAll()
        {
            return _dbContext.Projects.Where(x => x.IsDeleted == false).Select(x => new ProjectDto { Id = x.Id, Name = x.Name, Description = x.Description, CreationDate = x.CreationDate }).ToList();
        }

        public ProjectDto GetById(int id)
        {
            var project = _dbContext.Projects.FirstOrDefault(x => x.Id == id);
            if(project != null)
            {
                return new ProjectDto { Id = project.Id, Name = project.Name, Description = project.Description, CreationDate = project.CreationDate };
            }
            return null;
        }

        public ProjectDto GetByName(string projectName)
        {
            var existingProject = _dbContext.Projects.FirstOrDefault(x => x.Name.ToLower() == projectName.ToLower());
            if(existingProject != null)
            {
                return new ProjectDto
                {
                    Id = existingProject.Id,
                    Name = existingProject.Name,
                    Description = existingProject.Description,
                    CreationDate = existingProject.CreationDate
                };
            }
            return null;
        }
    }
}
