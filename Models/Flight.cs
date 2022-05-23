using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DroneDelivery.Models;

[Table("flights", Schema = "drone_delivery")]
public class Flight
{
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity), DisplayName("id"), Range(0, UInt64.MaxValue)]
    public ulong Id { init; get; }
    [DataType(DataType.DateTime), DisplayName("start_date")]
    public DateTime StartDate { set; get; } = DateTime.Now;
    [Range(Double.Epsilon, 100.0), DisplayName("weather_probability")]
    public double WeatherProbability { set; get; }
    
    public Drone Drone { init; get; }
    public Client Client { init; get; }
    public Book Book { init; get; }
    public PickupPoint PickupPoint { init; get; }
}