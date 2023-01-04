import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1.create a separate entry component
//2.Props to replace the hard coded data eg. emoji, name of the emoji, description of the emoji
//3a.Import the emojipedia constant
//3b.Map through the emojipedia array and render Entry components.
function createEntry(props) {
  return (
    <Entry
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      description={props.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}
export default App;
