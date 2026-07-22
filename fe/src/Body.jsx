import reactsvg from "./assets/react.svg";

function Body() {
  return (
    <div className="body">
      <div className="wrapper">
        <div className="card1">
          <img src={reactsvg} alt="" />
        </div>
        <div className="card2">
          <img src={reactsvg} alt="" />
        </div>
        <div className="card3">
          <img src={reactsvg} alt="" />
        </div>
        <div className="card4">
          <img src={reactsvg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Body;
