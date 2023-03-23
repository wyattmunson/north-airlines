import { Link } from "react-router-dom";
import { FormInput } from "../shared/sharedComponents";
import coastPic from "./coast.png";

const Home = () => {
  return (
    <div>
      <img src={coastPic} className="homePic" />
      <div className="container">
        <ReservationBox />
        <Link to="/login" className="btn btn-outline-primary buttonTime">
          Login
        </Link>
      </div>
    </div>
  );
};

const ReservationBox = () => {
  let departDate = setDate(3);
  let arriveDate = setDate(10);

  return (
    <div className="searchBox">
      <h3>Where are you going?</h3>
      <div>
        <div className="row">
          <div className="col">
            <FormInput label="From" value="San Francisco (SFO)" />
          </div>
          <div className="col">
            <FormInput label="To" value="Vienna (VIE)" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormInput label="Depart" type="date" value={departDate} />
          </div>
          <div className="col">
            <FormInput label="Return" type="date" value={arriveDate} />
          </div>
        </div>
        <br />
        <Link to="/flights">
          <div className="d-grid gap-2">
            <FormButton text="Find Flights" className="blink" />
          </div>
        </Link>
      </div>
    </div>
  );
};

// const FormInput = ({ label, placeholder, type }) => {
//   return (
//     <div className="form-group">
//       <label for="exampleInputEmail1">{label}</label>
//       <input
//         type={type ? type : "text"}
//         className="form-control"
//         id="exampleInputEmail1"
//         aria-describedby="emailHelp"
//         placeholder={placeholder}
//       />
//     </div>
//   );
// };

const FormButton = ({ text, click, className }) => {
  return <button className={`btn btn-primary ${className}`}>{text}</button>;
};

const setDate = (days) => {
  let result = new Date();
  result.setDate(result.getDate() + days);
  let month = ("0" + result.getMonth()).slice(-2);
  return `${result.getFullYear()}-${month}-${result.getDate()}`;
};

export default Home;
