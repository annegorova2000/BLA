using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.UInt64;

namespace DroneDelivery.Models;

[Table("pickup_points", Schema = "drone_delivery")]
public class PickupPoint
{
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity), DisplayName("pickup_points"), Range(0, MaxValue)]
    public ulong Id { init; get; }
}