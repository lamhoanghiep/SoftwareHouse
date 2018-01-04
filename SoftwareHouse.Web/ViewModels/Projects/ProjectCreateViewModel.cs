using System.ComponentModel.DataAnnotations;

namespace SoftwareHouse.Web.ViewModels.Projects
{
    public class ProjectCreateViewModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        public string ErrorMessage { get; set; }

    }
}
