import * as React from "react";
import App from "./App";

export default function MainApp() {
  const [name, setName] = React.useState(null);
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textAlign: "center" }}>
        This is coming from your remote app
      </h2>
      <h3>{name ? <p>Your name is: {name}</p> : null}</h3>
      <App onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
