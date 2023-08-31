import { useQuery } from "@tanstack/react-query";
import PeopleService from "../service/PeopleService";

const peopleService = new PeopleService();
const id = 1;

const Peapletest = () => {
  /* const getPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/");
    if (!res.ok) throw new Error("Error fetching ");
    const people = await res.json();
    console.log(people.results);
    return people.results;
  }; */

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["people"],
    queryFn: () => peopleService.getAllPeople(),
  });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error.message} </div>;
  return (
    <div>
      {data &&
        data.map((people) => {
          return (
            <div key={people.name}>
              <h2>{people.name}</h2>
              <p>{people.birth_year}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Peapletest;
