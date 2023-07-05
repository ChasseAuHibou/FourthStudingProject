import styles from "./PromoText.module.css";

const PromoText = (props) => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Онлайн магазин японських шин та дисків JDM Store</h2>
      <p>
        JDM Store - це онлайн магазин де ти із задоволенням зможешь взути свій
        японський геній інжинерного задуму
      </p>
      <p>
        В нашому магазині ти зможешь не перейматися за бархатні тягі свого авто
      </p>
    </section>
  );
};

export default PromoText;