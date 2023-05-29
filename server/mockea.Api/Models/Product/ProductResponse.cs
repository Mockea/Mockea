using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mockea.Api.Models
{
    public class ProductResponse
    {
        public int ProductId {get; set;}
        public required string Name {get; set;}
        public required int Price {get; set; }
        public required string ImageUrl {get; set;}
        public string? Color {get; set;}
        public string? Description {get; set; }
        public string? Material {get; set; }
        public string? Care {get; set; }
        public string? Dimensions {get; set; }

        public required virtual Category Category {get; set;}
        public virtual List<int>? ReviewIds {get; set; }
    }
}
