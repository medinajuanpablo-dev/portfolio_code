import React from "react";

import { stringsToKeys as functionExample } from "@static/functions/general/_dev/examples"; //Change the exampling function here.
import { UseLoadState as ReactToolExample } from "@static/react/general/_dev/Examples"; //Change the exampling react tool here.
import TailwindTool from "@static/tailwind/_dev/useTwAnimation/Example"; //Change the exampling tailwind tool here.
import { PageContainer as ComponentExample } from "@common/general/_dev/Examples"; //Change the exampling component here.

//Top Manager.
function App() {
  const [titleClicked, setTitleClicked] = React.useState();

  React.useEffect(() => {
    //Initial and whole-app context processes.
    // functionExample();
  }, []);

  titleClicked !== undefined &&
    console.log(
      titleClicked ? "You clicked the title! :D" : "You unclicked the title :("
    );

  return (
    <div className="container mx-auto pt-8 | md:pt-16">
      <h1
        onClick={() =>
          setTitleClicked(titleClicked === undefined ? true : !titleClicked)
        }
        className="text-3xl text-indigo-600 text-center px-2 pt-12 pb-6 mb-12 title border-b-2 border-indigo-600"
      >
        Tooled Project Template <br />
      </h1>

      {/* <ComponentExample /> */}
      <ReactToolExample />
      {/* <TailwindTool /> */}
    </div>
  );
}

export default App;
