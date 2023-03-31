import React from "react";

import { CuteValidityNotification } from "@common/index";

function CuteValidityNotificationExample() {
  const [coffeeGood, setCoffeeGood] = React.useState(true);

  return (
    <>
      <div className="flex justify-center items-center mt-16 px-8 md:px-32 lg:px-64 xl:px-96">
        <button
          className="mr-8 border-gray-500 border-1 px-4 py-2"
          onClick={() => setCoffeeGood(!coffeeGood)}
        >
          {coffeeGood ? "Drop the Coffee" : "Brew new coffeee"}
        </button>
        <CuteValidityNotification
          type={coffeeGood ? "fine" : "error"}
          position="left"
          title={coffeeGood ? "Coffee safe" : "Coffee wasted"}
          body={
            coffeeGood
              ? "The coffee is hot and tasty"
              : "The fuck is wrong with you bro"
          }
          size="large"
        />
      </div>
    </>
  );
}

export default CuteValidityNotificationExample;
