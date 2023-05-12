using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mockea.Api.Models
{
    public class Address
    {
        [Key]
        public int AddressId {get; set;}
        public required string StreetName {get; set;}
        public required int StreetNo {get; set;}
        public required int PostalCode {get; set;}
        public required string City {get; set;}
        public required string Country {get; set;}
    }
}
