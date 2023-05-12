using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mockea.Api.Models
{
    public class ProductRequest
    {

        public required string Name {get; set;}
        public required int Price {get; set; }
        public string? Color {get; set;}
        public string? Description {get; set; }
        public string? Material {get; set; }
        public string? Care {get; set; }
        public string? Dimensions {get; set; }
        public required virtual int CategoryId {get; set;}
    }
}
