import "./portofolio.css";

const Portofolio = ({img, link, desc }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle-1"></div>
        <div className="p-circle-2"></div>
        <div className="p-circle-3"></div>
        <div></div>
      </div>
      <a href={link} target="blank" rel="norefferer">
        <img src={img} alt="" className="p-img" />
        <div className="middle">
            <div className="text">{desc}</div>
        </div>
      </a>
    </div>
  );
}

export default Portofolio;
