import houseImage from "../public/Screenshot from 2026-07-24 12-41-02.png";

function Body() {
  return (
    <div className="body">
      <div className="wrapper">
        <div className="card1">
          <img src={houseImage} width='100%' height='100%'  alt="" />
        </div>
        <div className="card2">
          <img src={houseImage} width='100%' height='100%' alt="" />
        </div>
        <div className="card3">
          <img src={houseImage} width='100%' height='100%'  alt="" />
        </div>
        <div className="card4">
          <img src={houseImage} width='100%' height='100%'  alt="" />
        </div>
      </div>
    </div>
  );
}

export default Body;
