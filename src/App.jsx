import styles from './App.module.css'
import logo from "../images/logo.svg"
import Day from './component/day';

function App() {
  const heights = [50, 100, 150, 89, 67, 124, 73];
  const divStyle =heights.map ((high)=>{
    return {height: `${high}px`}
  })
  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' }).toLocaleLowerCase();

  console.log(dayName); // e.g., "Saturday"
  return (
    <>
    <div className={styles.upper}>
      <div className={styles.balanceDiv}>
        <p className={styles.balancePara}>
          My balance
        </p>
        <p className={styles.balanceNum}>
          $921.48
        </p>
      </div>
      <img src={logo} className={styles.logo} alt="" />
    </div>
    <div className={styles.lower}>
      <p className={styles.headline}>
        Spending - Last 7 days
      </p>
      <div className={styles.stats}>
        <Day 
          amount = {17.45}
          divStyle = {divStyle[0]}
          day = "mon"
          todayName = {dayName}
        />
        <Day 
          amount = {34.90}
          divStyle = {divStyle[1]}
          day = "tue"
          todayName = {dayName}
        />
        <Day 
          amount = {52.36}
          divStyle = {divStyle[2]}
          day = "wed"
          todayName = {dayName}
        />
        <Day 
          amount = {31.07}
          divStyle = {divStyle[3]}
          day = "thu"
          todayName = {dayName}
        />
        <Day 
          amount = {23.39}
          divStyle = {divStyle[4]}
          day = "fri"
          todayName = {dayName}
        />
        <Day 
          amount = {43.28}
          divStyle = {divStyle[5]}
          day = "sat"
          todayName = {dayName}
        />
        <Day 
          amount = {25.48}
          divStyle = {divStyle[6]}
          day = "sun"
          todayName = {dayName}
        />
      </div>
      <p className={styles.totalPara}>
        Total this month
      </p>
      <div className={styles.totalFrom}>
        <p className={styles.totalBal}>
          $478.33
        </p>
        <div className={styles.rightEnd}>
          <p className={styles.p}>
            +2.4%
          </p>
          <p className={styles.fromPara}>
            from last month
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App