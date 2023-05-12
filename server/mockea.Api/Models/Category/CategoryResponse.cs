using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mockea.Api.Models
{
    public class CategoryResponse
    {
        public int CategoryId {get; set;}
        public required string Name {get; set;}
        public virtual List<int>? ProductIds {get; set; }
    }
}
