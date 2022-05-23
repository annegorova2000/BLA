using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.UInt64;

namespace DroneDelivery.Models;

[Table("drones", Schema = "drone_delivery")
]
public class Drone
{
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity), DisplayName("id"), Range(0, MaxValue)]
    public ulong Id { init; get; }
}