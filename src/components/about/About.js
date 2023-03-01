const About = () => {
  return (
    <div className="container">
      <h1>North Airlines Feature Flags App</h1>
      <h2>How to use this app</h2>
      <h3>Use Login to Change Target</h3>
      <p>
        Use the Login page to change Targets/Identifiers. Different users provide different
        experiences.
      </p>

      <h2>Use Cases</h2>
      <h3>User Entitlement</h3>
      <h4>Perks Based On Airline Status</h4>
      <p>
        Using the <code>airlineStatus</code> Feature Flag, users can be grouped in Target Group
        based on their airline status.
      </p>
      <h5>Free Upgrades for Diamond members</h5>
      <p>
        On the <b>Trips</b> page, Diamond members see the <b>Free Upgrade</b> feature.
      </p>

      <h4>Credit Card Offers and Upsells</h4>
      <p>
        Users see different credit card offers depending on status, using the{" "}
        <code>cardStatus</code> Feature Flag.
      </p>
      <ul>
        <li>Unknown users are offered to apply for the North Nationwide credit card</li>
        <li>
          Nationwide cardholders are offered an upsell to the North Global Traveler credit card
        </li>
        <li>Global Traveler cardholders do not see a credit card upsell</li>
      </ul>

      <h3>Progressive Delivery and Rollback</h3>
      <h4>Meal Selection Feature Rollback</h4>
      <p>
        This app contains a Meal Selection feature under the My Trips <code>/trips</code> page,
        where users can select their meal preference for their upcomming flight.
      </p>
      <p>
        The problem with this feature is that it's broken. When users try to save their meal they
        are greeted with an error.
      </p>
      <p>Instant rollback provides a few benefits:</p>
      <ol>
        <li>
          <b>Immediately remove the bad feature</b>: The broken feature is providing a bad customer
          experience and needs to be removed immediately from the page.
        </li>
        <li>
          <b>Only remove the broken feature</b>: Rolling back the deployment may remove the broken
          feature, but it will also remove other, working feature deployed as part of that release.
          By putting this feature behind a feature flag, the blast radius is reduced.
        </li>
        <li>
          <b>Restore after upstream</b>: In this sample, the problem is not in the UI, but an
          upstream dependency. We can immediately remove the feature from the UI to stop the bad
          customer experience, fix the problem upstream, and turn the feature back on in the UI. All
          without any UI deployments.
        </li>
      </ol>
      <div>
        <div className="row">
          <FeatureBlock
            header="Immediately remove bad features"
            text="The broken feature is providing a bad customer
          experience and needs to be removed immediately from the page."
            icon="fas fa-magic fa-2x"
          />
          <FeatureBlock
            header="Only remove the broken feature"
            text="Rolling back the deployment may remove the broken
          feature, but it will also remove other, working feature deployed as part of that release.
          By putting this feature behind a feature flag, the blast radius is reduced."
            icon="fas fa-magic fa-2x"
          />
          <FeatureBlock
            header="Restore after upstream"
            text="In this sample, the problem is not in the UI, but an
            upstream dependency. We can immediately remove the feature from the UI to stop the bad
            customer experience, fix the problem upstream, and turn the feature back on in the UI. All
            without any UI deployments.."
            icon="fas fa-magic fa-2x"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureBlock = ({ header, icon, text }) => {
  return (
    <div className="featureBlock col">
      <h3>
        <i className={icon} />
      </h3>
      <h5>{header}</h5>
      <p>{text}</p>
    </div>
  );
};

export default About;
