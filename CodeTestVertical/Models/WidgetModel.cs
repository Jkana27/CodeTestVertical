using System;
using System.ComponentModel.DataAnnotations;

namespace CodeTestVertical.Models
{
    public class WidgetModel
    {
        [Required]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Minimum length is {2}")]
        [Display(Name = "Widget Name")]
        public string WidgetName { get; set; }
        [Required]
        [Display(Name = "Widget Type")]
        public string WidgetType { get; set; }
        [Required]
        [Display(Name = "Widget Creation Date and Time")]
        public DateTime WidgetCreation { get; set; }
        [Required]
        [Display(Name = "Widget Sub-Type")]
        public string WidgetSubType { get; set; }


    }
}
