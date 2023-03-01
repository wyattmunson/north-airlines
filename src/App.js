import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Flights from "./components/flights/Flights";
import Trips from "./components/trips/Trips";
import { useEffect, useState } from "react";
import { initialize, Event } from "@harnessio/ff-javascript-client-sdk";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import About from "./components/about/About";

function App() {
  const [featureFlags, setFeatureFlags] = useState({});
  const [identifier, setIdentifier] = useState("anonymous");

  useEffect(() => {
    const cf = initialize("3075056e-7274-4dcd-8dde-477ccc0e2c0c", {
      // identifier: "GregBenish",
      identifier: identifier,
      attributes: {
        lastUpdated: Date(),
        host: window.location.href,
      },
    });

    cf.on(Event.READY, (flags) => {
      setFeatureFlags(flags);
    });

    cf.on(Event.CHANGED, (flagInfo) => {
      if (flagInfo.deleted) {
        setFeatureFlags((currentFeatureFlags) => {
          delete currentFeatureFlags[flagInfo.flag];
          return { ...currentFeatureFlags };
        });
      } else {
        setFeatureFlags((currentFeatureFlags) => ({
          ...currentFeatureFlags,
          [flagInfo.flag]: flagInfo.value,
        }));
      }
    });

    return () => {
      cf.close();
    };
  }, [identifier]);

  const updateIdentifier = (iden) => {
    setIdentifier(iden);
  };

  return (
    <BrowserRouter>
      <Header identifier={identifier} updateIdentifier={updateIdentifier} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/flights" element={<Flights featureFlags={featureFlags} />} />
        <Route path="/trips" element={<Trips featureFlags={featureFlags} />} />
        <Route
          path="/login"
          element={<Login featureFlags={featureFlags} updateIdentifier={updateIdentifier} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
