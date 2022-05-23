using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using static System.UInt64;

namespace DroneDelivery.Models;

[Table("clients", Schema = "drone_delivery"), 
 Index(nameof(Name)),
 Index(nameof(PhoneNumber))
]
public class Client
{
    [Key, StringLength(60), DisplayName("id"), Range(0, MaxValue)]
    public string Id { init; get; } = Guid.NewGuid().ToString();
    [StringLength(100), DisplayName("name")]
    public string Name { set; get; }
    [DataType(DataType.PhoneNumber), Phone, StringLength(15), DisplayName("phone_number")]
    public string PhoneNumber { set; get; }
}