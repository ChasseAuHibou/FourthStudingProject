import styles from "./TireList.module.css";
import Card from "../UI/Card";
import TireItem from "./TireItem/TireItem";

const DUMMY_TIERS = [
  {
    id: "m1",
    name: "Toyo Proxes CF2",
    description: "205/60 R16 92V",
    price: 4199.99,
  },
  {
    id: "m2",
    name: "Yokohama BlueEarth E70",
    description: "225/55 R18 98H",
    price: 4799.99,
  },
  {
    id: "m3",
    name: "Toyo NanoEnergy Van",
    description: "225/70 R15C 112/110S",
    price: 5499.99,
  },
  {
    id: "m4",
    name: "Bridgestone Alenza 001",
    description: "225/60 R18 100H",
    price: 5199.99,
  },
];

const TireList = () => {
  const tireList = DUMMY_TIERS.map((tire) => (
    <TireItem
      key={tire.id}
      id={tire.id}
      name={tire.name}
      description={tire.description}
      price={tire.price}
    />
  ));

  return (
    <section className={styles.tires}>
      <Card>
        <ul>{tireList}</ul>
      </Card>
    </section>
  );
};

export default TireList;