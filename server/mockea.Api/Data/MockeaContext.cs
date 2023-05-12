using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using mockea.Api.Models;

    public class MockeaContext : DbContext
    {
        public MockeaContext (DbContextOptions<MockeaContext> options)
            : base(options)
        {
        }

        public DbSet<mockea.Api.Models.Product> Products { get; set; } = default!;

        public DbSet<mockea.Api.Models.Category> Categories { get; set; } = default!;

        public DbSet<mockea.Api.Models.User> Users { get; set; } = default!;

        public DbSet<mockea.Api.Models.Address> Addresses { get; set; } = default!;

        public DbSet<mockea.Api.Models.Review> Review { get; set; } = default!;
    }
