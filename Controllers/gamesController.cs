using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskSharpHTTP.Models;

namespace TaskSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class gamesController: ControllerBase
    {
        private readonly tecContext _context;
        public gamesController(tecContext context)
        {
            _context = context;
            if(_context.gamesItems.Count() == 0)
                {
                _context.gamesItems.Add(new gamesItem { Id = 1, Nombre = "Como crear una NO-IP para Mu Online", Description = "En este tutorial podrás aprender como crear y configurar tu NO-IP, también podrás aprender que es una IP, dos tipos de IP como funciona y de igual manera la NO-IP Espero sea de tu agrado y hayas aprendido, si tienes algún problema no dudes en comentar este vídeo, no olvides suscribirte al canal, dale me gusta al vídeo. Hasta la próxima clase... Puedes contactarnos en nuestras redes sociales:", Precio = 12345});
                _context.gamesItems.Add(new gamesItem { Id = 2, Nombre = "Como abrir puertos firewall en Windows XP/8.1 para Mu Online", Description = "En este tutorial te enseñamos como abrir los puertos en firewall de windows para poder correr tu Mu Online a la perfección. Si tienes dudas no te limites a comentar, comparte este vídeo, dale me gusta y únete a nuestras Redes y a nuestros canal:", Precio = 12345});
                _context.SaveChanges();
                }
                }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<gamesItem>> PostTaskItem(gamesItem item)
        {
            _context.gamesItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Id }, item);
        }
        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, gamesItem item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            //var task = _context.TaskItems.FindAsync(id);

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<gamesItem>>> GetTaskItems()
        {
            return await  _context.gamesItems.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<gamesItem>> GetTaskItem(int id)
        {
            var taskItem = await _context.gamesItems.FindAsync(id);

            if (taskItem == null)
            {
                return NotFound();
            }

            return taskItem;
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItem(int id)
        {
            var TaskItem = await _context.gamesItems.FindAsync(id);

            if (TaskItem == null)
            {
                return NotFound();
            }

            _context.gamesItems.Remove(TaskItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}