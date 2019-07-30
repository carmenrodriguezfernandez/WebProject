using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
    public class gamesItem
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("nombre")]
        public string Nombre { get; set; }
        [JsonProperty("descripcion")]
        public string Description { get; set; }
        [JsonProperty("precio")]
        public int Precio { get; set; }
        }
        }