import { clients } from "../constants";
import styles from "../styles";

const Clients = () => (
   <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap space-y-5 sm:space-y-0 w-full`}>
         {clients.map((client) => (
            <div key={client.id} className={`${styles.flexCenter} flex-1 min-w-[120px] sm:min-w-[192px]`}>
               <img src={client.logo} alt="client_logo" className="w-[100px] sm:w-[192px] object-contain"/>
            </div>
         ))}
      </div>
   </section>
);


export default Clients