using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeeClaimsAPI.App_Data;
using WeeClaimsAPI.Models;
using WeeClaimsAPI.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WeeClaimsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        //// GET: api/<PersonaController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<PersonaController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<PersonaController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<PersonaController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<PersonaController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
        //------------------------------------------------
        //private readonly PersonaRepository _repository;

        //public PersonaController(PersonaRepository repository)
        //{
        //    _repository = repository;
        //}

        //[HttpGet]
        //public IActionResult GetAll()
        //{
        //    return Ok(_repository.GetAll());
        //}

        //[HttpGet("{id}")]
        //public IActionResult GetById(int id)
        //{
        //    var product = _repository.GetById(id);
        //    if (product == null)
        //        return NotFound();
        //    return Ok(product);
        //}

        //[HttpPost]
        //public IActionResult Create(Persona person)
        //{
        //    _repository.Add(person);
        //    return CreatedAtAction(nameof(GetById), new { id = person.Id }, person);
        //}

        //[HttpPut("{id}")]
        //public IActionResult Update(int id, Persona person)
        //{
        //    if (id != person.Id)
        //        return BadRequest();

        //    _repository.Update(person);
        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public IActionResult Delete(int id)
        //{
        //    _repository.Delete(id);
        //    return NoContent();
        //}

        //---------------------------------

        private readonly AppDbContext _context;

        public PersonaController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/persona
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Persona>>> GetPersonas()
        {
            return await _context.Persona.ToListAsync();
        }

        // POST: api/persona
        [HttpPost]
        public async Task<ActionResult<Persona>> PostPersona(Persona person)
        {
            person.Id = 0;
            _context.Persona.Add(person);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersonas), new { id = person.Id }, person);
        }

    }
}
