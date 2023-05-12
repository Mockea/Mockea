using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace mockea.Api.Models
{
    public class Review
    {
        [Key]
        public int ReviewId {get; set;}
        public required int Rating {get; set;}
        public required string Title {get; set;}
        public string? Text {get; set;}
        public required virtual Product Product {get;set;}
    }
}
