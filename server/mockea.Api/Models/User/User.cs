using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mockea.Api.Models
{
    public class User
    {
        [Key]
        public int UserId {get; set;}
        public required string Username {get; set;}
        public required string Email {get; set;}
        public virtual Address? Address {get; set;}
    }
}

