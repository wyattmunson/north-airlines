import { useState } from "react";

const cardStatus = "nationwide";
const airlineStatus = "diamond";

const Trips = ({ featureFlags }) => {
  const { airlineStatus, mealSelection, upstreamError } = featureFlags;
  return (
    <div className="container">
      <br />
      <h2>Trip: San Francisco to Sydney</h2>
      <h5>
        Confirmation Code: <b>AE8G1F</b>
      </h5>
      <FreeUpgrade airlineStatus={airlineStatus} />
      <LoungeAccess airlineStatus={airlineStatus} />
      <br />
      <h6>Itinerary:</h6>
      {flightList.map((i) => (
        <FlightRow details={i} />
      ))}
      {mealSelection && <MealSelection upstreamError={upstreamError} />}
    </div>
  );
};

const flightList = [
  {
    departureAirport: "SFO",
    arrivalAirport: "NRT",
    dTime: "05:00 AM",
    aTime: "7:32 PM",
    dDate: "2023-12-27",
    aDate: "2023-12-27",
    dCity: "San Francisco",
    aCity: "Tokyo, JP",
    miles: 1823,
    duration: "10h 43m",
    seat: "5A",
    fare: "North First",
    meal: "Dinner",
  },
  {
    departureAirport: "NRT",
    arrivalAirport: "SYD",
    dTime: "05:00 AM",
    aTime: "7:32 PM",
    dDate: "2023-12-27",
    aDate: "2023-12-27",
    dCity: "Tokyo, JP",
    aCity: "Sydney",
    miles: 1047,
    duration: "9h 52m",
    seat: "10C",
    fare: "North Business",
    meal: "Breakfast",
  },
];

const FlightRow = ({ details }) => {
  return (
    <div className="flightRowBox">
      <div className="row">
        <div className="col">
          <h4>{details.dCity}</h4>
          <p>{details.departureAirport}</p>
          <p>{details.dTime}</p>
          <p>{details.dDate}</p>
        </div>
        <div className="col">
          <h4>{details.aCity}</h4>
          <p>{details.arrivalAirport}</p>
          <p>{details.aTime}</p>
          <p>{details.aDate}</p>
        </div>
        <div className="col">
          <p>Seat: {details.seat}</p>
          <p>Miles: {details.miles}</p>
          <p>Duration: {details.duration}</p>
          <p>Meal: {details.meal}</p>
        </div>
      </div>
    </div>
  );
};

const MealSelection = ({ upstreamError }) => {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setSaved(true);
      setLoading(false);
    }, 1000);
  };

  if (loading)
    return (
      <div className="mealSelection qCenter">
        <h2>Saving Meal</h2>
        <div className="lds-dual-ring" />
      </div>
    );
  if (saved && upstreamError)
    return (
      <div className="mealSelection qCenter">
        <i className="fas fa-bomb fa-4x qRed" />
        <h2>Error Saving Meal</h2>
      </div>
    );
  if (saved)
    return (
      <div className="mealSelection qCenter">
        <i className="far fa-check-circle fa-4x qGreen" />
        <h2>Meal Selection Saved</h2>
      </div>
    );

  return (
    <div className="mealSelection">
      <h4>In-flight dining options</h4>
      <p>Select a meal for your upcoming flight</p>
      <FormRadio text="Chicken Katsu" />
      <FormRadio text="Mushroom Bolognese" />
      <FormRadio text="Kombu Poached Mahi Mahi" />
      <FormRadio text="Strict Vegan" />
      <div className="d-grid gap-2">
        <button className="btn btn-outline-primary" onClick={() => handleClick()}>
          Save Meal
        </button>
      </div>
    </div>
  );
};

const CalloutBox = ({ header, icon, text, button }) => {
  return (
    <div className="calloutBox">
      <div className="row">
        <div className="col-1 autoWidth qCenter iconCol">
          <i className={`${icon} fa-2x`} />
        </div>
        <div className="col-8">
          <h4>{header}</h4>
          <p>{text}</p>
        </div>
        <div className="col buttonCenter">
          <div className="d-grid gap-2">
            <button className="btn btn-outline-primary">{button}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FreeUpgrade = ({ airlineStatus }) => {
  if (airlineStatus === "diamond")
    return (
      <CalloutBox
        header="Free Upgrade Requested"
        text="Diamond member stadby for free upgrades automatically"
        button="Choose Seat Preference"
        icon="far fa-arrow-alt-circle-up"
      />
    );
  return null;
};

const LoungeAccess = ({ airlineStatus }) => {
  if (airlineStatus === "diamond")
    return (
      <CalloutBox
        header="Enjoy Swashbuckler Club access"
        text="As a Diamond member, enjoy access to the premium Swashbuckler Lounge."
        button="Book Showers"
        icon="fas fa-crown"
      />
    );
  if (airlineStatus === "gold")
    return (
      <CalloutBox
        header="Enjoy Ambassador Lounge access"
        text="As a gold member, enjoy complimentary lounge access"
        button="Upgrade to Swashbuckler Lounge"
        icon="far fa-compass"
      />
    );
  return null;
};

const FormRadio = ({ text }) => {
  return (
    <div class="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label className="form-check-label" for="flexRadioDefault1">
        {text}
      </label>
    </div>
  );
};

export default Trips;
