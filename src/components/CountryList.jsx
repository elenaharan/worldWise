import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add the first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, currCity) => {
    if (!arr.map((country) => country.country).includes(currCity.country))
      return [...arr, { country: currCity.country, emoji: currCity.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem
          country={country}
          key={country.country}
        />
      ))}
    </ul>
  );
}

export default CountryList;
