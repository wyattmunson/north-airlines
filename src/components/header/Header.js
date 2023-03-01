import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import { FormInput } from "../shared/sharedComponents";

const Header = ({ identifier, updateIdentifier }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "black",
    },
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const setUser = (user) => {
    console.log(user);
    updateIdentifier(user);
  };
  const [harnessIdentifier, setHarnessIdentifier] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-light navColor">
      <div className="container">
        <Link to="/" className="nav-link">
          NORTH AIRLINES
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/trips" className="nav-link">
                My Trips
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
          {/* RIGHT SIZE */}
          <span class="navbar-text userName">
            {/* <Link to="/login" className="nav-link">
              {identifier}
            </Link> */}
            <button className="btn btn-outline-secondary" onClick={openModal}>
              {identifier}
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2>Login</h2>
              <p>Select a user to simulate different expierences.</p>
              <h4>Choose a user to login as:</h4>
              <div className="d-grid gap-2">
                <Button text="Anonymous" click={() => setUser("anonymous")} />
                <Button text="Troy Barnes" click={() => setUser("TroyBarnes")} />
                <Button text="Greg Benish" click={() => setUser("GregBenish")} />
                <Button text="Liz Lemon" click={() => setUser("LizLemon")} />
                <h4>Or enter an Identifier:</h4>
                <FormInput
                  label="Identifier"
                  onChange={(e) => setHarnessIdentifier(e.target.value)}
                />
                <Button text="Set Identifier" click={() => setUser(harnessIdentifier)} />
              </div>
            </Modal>
          </span>
        </div>
      </div>
    </nav>
  );
};

const Button = ({ text, click }) => {
  return (
    <button className="btn btn-outline-primary" onClick={() => click()}>
      {text}
    </button>
  );
};

export default Header;
