using System.Text.Json;
using WeeClaimsAPI.Models;

namespace WeeClaimsAPI.Repositories
{
    public class PersonaRepository
    {

        private readonly string filePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data", "personas.txt");


        public List<Persona> GetAll()
        {
            if (!File.Exists(filePath))
                return new List<Persona>();

            var json = File.ReadAllText(filePath);
            return JsonSerializer.Deserialize<List<Persona>>(json) ?? new List<Persona>();
        }

        public void Add(Persona person)
        {
            var all_people = GetAll();
            person.Id = all_people.Any() ? all_people.Max(p => p.Id) + 1 : 1;
            all_people.Add(person);
            File.WriteAllText(filePath, JsonSerializer.Serialize(person));
        }

        public Persona GetById(int id)
        {
            var person = GetAll();
            return person.FirstOrDefault(p => p.Id == id);
        }

        public void Update(Persona person)
        {
            var all_people = GetAll();
            var index = all_people.FindIndex(p => p.Id == person.Id);
            if (index != -1)
            {
                all_people[index] = person;
                File.WriteAllText(filePath, JsonSerializer.Serialize(person));
            }
        }

        public void Delete(int id)
        {
            var all_people = GetAll();
            all_people.RemoveAll(p => p.Id == id);
            File.WriteAllText(filePath, JsonSerializer.Serialize(all_people));
        }
    


    }
}
