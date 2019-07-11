using Microsoft.EntityFrameworkCore;
namespace TaskSharpHTTP.Models
{
    public class tecContext: DbContext
    {
      public tecContext (DbContextOptions<tecContext> options) :
       base(options)
       {

       }
       public DbSet<tecItem> tecItems { get; set; }
       }
       }