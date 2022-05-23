using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using static System.Double;

namespace DroneDelivery.Models;

[Table("books", Schema = "drone_delivery"), 
 Index(nameof(Name)), 
 Index(nameof(Author))
]
public class Book
{
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity), DisplayName("id"), Range(0, UInt64.MaxValue)]
    public ulong Id { init; get; }
    [StringLength(150), DisplayName("name")]
    public string Name { set; get; }
    [StringLength(100), DisplayName("author")]
    public string Author { set; get; }
    [Range(Epsilon, MaxValue), DisplayName("weight")]
    public decimal Weight { set; get; }
    [DataType(DataType.DateTime), DisplayName("publish_date")]
    public DateTime PublishDate { set; get; }
    [Range(Epsilon, MaxValue), DisplayName("price")]
    public decimal Price { set; get; }
}