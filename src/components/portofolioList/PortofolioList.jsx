import Portofolio from "../portofolio/Portofolio";
import "./portofolioList.css";
import { portofolio } from "../../data";

const PortofolioList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1>Portofolio</h1>
        <br />
      </div>
      <div className="pl-list">
        {portofolio.map((item) => (
          <>
            <Portofolio key={item.id} img={item.img} link={item.link} desc={item.desc} />
          </>
        ))}
      </div>
    </div>
  );
};

export default PortofolioList;
