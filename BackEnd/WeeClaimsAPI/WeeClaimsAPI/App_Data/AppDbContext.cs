using Microsoft.EntityFrameworkCore;
using WeeClaimsAPI.Models;

namespace WeeClaimsAPI.App_Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Persona> Persona { get; set; }
    }
}
