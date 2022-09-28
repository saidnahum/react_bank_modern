import { stats } from "../constants";
import styles from "../styles";

const Stats = () => (
   <section className={`${styles.flexCenter} flex flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
         <div key={stat.id} className={`flex-1 flex flex-row m-3 justify-center sm:justify-start items-center`}>
            <h4 className="text-white font-poppins font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px]">{stat.value}</h4>
            <p className="text-gradient uppercase ml-3 font-poppins font-normal text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px]">{stat.title}</p>
         </div>
      ))}
   </section>
);

export default Stats