using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
    public class tecItem
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("nombre")]
        public string Nombre { get; set; }
        [JsonProperty("descripcion")]
        public string Description { get; set; }
        [JsonProperty("precioventa")]
        public int Precioventa { get; set; }
        }
        }