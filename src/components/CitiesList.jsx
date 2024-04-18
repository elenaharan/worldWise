import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

function CitiesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city, i) => (
        <CityItem
          city={city}
          key={i}
        />
      ))}
    </ul>
  );
}

export default CitiesList;
