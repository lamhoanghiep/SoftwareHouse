using SoftwareHouse.Contract.Common;
using SoftwareHouse.Contract.DataContracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace SoftwareHouse.Contract.Services
{
    public interface IProjecstService
    {
        List<ProjectDto> GetAll();
        CommonResult<ProjectDto> GetById(int id);
        CommonResult Add(AddProjectDto project);
    }
}
