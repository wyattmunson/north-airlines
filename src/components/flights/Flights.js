// replace these values with FF
const cardStatus = "nationwide";
const airlineStatus = "diamond";

const Flights = ({ featureFlags }) => {
  const { airlineStatus, mealSelection, cardStatus } = featureFlags;
  return (
    <div className="container">
      <br />
      <h2>Flights from San Francisco to Vienna</h2>
      <StatusLevel airlineStatus={airlineStatus} />
      <SpecialOffer cardStatus={cardStatus} />
      <HeaderRow />
      {flightList.map((i) => (
        <FlightRow details={i} airlineStatus={airlineStatus} />
      ))}
    </div>
  );
};

const StatusLevel = ({ airlineStatus }) => {
  if (airlineStatus === "diamond") {
    return (
      <h5>
        Status: <i className="far fa-gem" /> Diamond
      </h5>
    );
  } else if (airlineStatus === "gold") {
    return (
      <h5>
        Status: <i className="fas fa-coins" /> Gold
      </h5>
    );
  } else if (airlineStatus === "silver") {
    return (
      <h5>
        Status: <i className="far fa-star" /> Silver
      </h5>
    );
  }
  return (
    <>
      <h5>
        Status: <i className="far fa-circle" /> Basic
      </h5>
    </>
  );
};

const SpecialOffer = ({ cardStatus }) => {
  if (cardStatus == "none") {
    return (
      <OfferBlock
        title="Apply for the North Nationwide Traveler Card"
        text="Start earning points with the North Card"
      />
    );
  } else if (cardStatus == "nationwide") {
    return (
      <OfferBlock
        title="Upgrade to the North Global Traveler Card"
        text="Earn triple points and get lounge access with the North Global Traveler Card"
      />
    );
  }
  return null;
};

const OfferBlock = ({ title, text, image }) => {
  return (
    <div className="row offerBlock">
      <div className="col">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="col">
        <button className="btn btn-outline-primary">See Offer</button>
      </div>
    </div>
  );
};

const flightList = [
  {
    departureAirport: "SFO",
    arrivalAirport: "VIE",
    time: "12:20 PM → 2:00PM",
    leg1: "SFO - DFW • NA 928 • Boeing 737",
    leg2: "DFW - LHR • NA 12 • Boeing 767",
    leg3: "LHR - VIE • NA 64 • Airbus A380",
    duration: "17h 40m",
    stops: 2,
    priceBasic: "1003",
    priceEconomy: "1354",
    priceBusiness: "2647",
    priceFirst: "11245",
    restrictEconomy: true,
    restrictBusiness: false,
  },
  {
    departureAirport: "SFO",
    arrivalAirport: "VIE",
    time: "6:40 PM → 2:00PM",
    leg2: "SFO - LHR • NA 121 • Boeing 777",
    leg3: "LHR - VIE • NA 64 • Airbus A380",
    duration: "17h 40m",
    stops: 1,
    priceBasic: "1164",
    priceEconomy: "1632",
    priceBusiness: "4847",
    priceFirst: "8425",
    restrictEconomy: false,
    restrictBusiness: true,
  },
  {
    departureAirport: "SFO",
    arrivalAirport: "VIE",
    time: "8:45AM → 12:16AM",
    leg2: "SFO - VIE • NA 5 • Boeing 787",
    duration: "17h 40m",
    stops: "NO",
    priceBasic: "1354",
    priceEconomy: "1974",
    priceBusiness: "6281",
    priceFirst: "12419",
    restrictEconomy: false,
    restrictBusiness: true,
  },
];

const HeaderRow = () => {
  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col">Basic Economy</div>
      <div className="col">Cattle Class</div>
      <div className="col">Medium Class</div>
      <div className="col">North Business</div>
    </div>
  );
};

const FlightRow = ({ details, airlineStatus }) => {
  return (
    <div className="row">
      <div className="col-4 flightInfoBox">
        <h6>
          {details.departureAirport} - {details.arrivalAirport}
        </h6>
        <h4>{details.time}</h4>
        <small>{details.stops} STOPS</small>
        <br />
        <span>{details.leg1}</span>
        <br />
        <span>{details.leg2}</span>
        <br />
        <span>{details.leg3}</span>
      </div>
      <PriceCell
        price={details.priceBasic}
        restrict={details.restrictEconomy}
        airlineStatus={airlineStatus}
      />
      <PriceCell price={details.priceEconomy} />
      <PriceCell
        price={details.priceBusiness}
        restrict={details.restrictBusiness}
        airlineStatus={airlineStatus}
      />
      <PriceCell price={details.priceFirst} />
    </div>
  );
};

const PriceCell = ({ price, restrict, airlineStatus }) => {
  if (restrict && airlineStatus !== "diamond") {
    return (
      <div className="col priceBlockDisabled">
        <p>Not available</p>
      </div>
    );
  }
  return (
    <div className="col priceBlock">
      <span>Roundtrip </span>
      <p>{formatCurrency.format(price)}</p>
    </div>
  );
};

const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default Flights;
