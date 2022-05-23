using DroneDelivery.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DroneDelivery.Data;

public class ApplicationDbContext : IdentityDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    { }
    
    public DbSet<Book> Books { set; get; }
    public DbSet<Client> Clients { set; get; }
    public DbSet<Drone> Drones { set; get; }
    public DbSet<PickupPoint> PickupPoints { set; get; }
    public DbSet<Flight> Flights { set; get; }
}