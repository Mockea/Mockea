using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mockea.Api.Models
{
    public class ReviewResponse
    {
        public int ReviewId {get; set;}
        public required int Rating {get; set;}
        public required string Title {get; set;}
        public string? Text {get; set;}
        public required virtual int ProductId {get; set; }
    }
}
