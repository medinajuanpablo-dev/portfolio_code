import React from "react";

import { CuteModal } from "@common/index";
import { useObjectState } from "@static/react";

function ModalBoxExample() {
  const universe = useObjectState({
    selectedUniverse: null, //This is the inside-modal data and although it could normally be used to control the display visibility, we won't use it with the CuteModal.
    visible: false, //We use a separated state instead. This will change when opening/closing, and the selectedUniverse will change only when opening.
    enabled: true, //This is just to show an use of the 'finished' param of the onClose prop.
  });

  function showUniverseList(universeKey) {
    if (!universe.get.enabled) return;

    universe.merge({ visible: true, selectedUniverse: universeKey });
  }

  function closeUniverseList(finished) {
    //Only the `visible` state changes. The `selectedUniverse` is kept saved, so it can still be shown while the Modal is in closing animation.

    if (!finished) universe.merge({ visible: false, enabled: false });
    else setTimeout(() => universe.merge({ enabled: true }), 2000);
  }

  return (
    <>
      <div className="text-center mt-16">
        <div className="flex flex-col md:flex-row justify-around">
          <button
            disabled={!universe.get.enabled}
            onClick={() => showUniverseList("animal")}
            className={
              "mt-8 mb-8 text-xl px-8 py-2 rounded-md border-1 text-slate-700 border-orange-500 hover:bg-orange-500 hover:text-gray-100"
            }
          >
            View Animal Universes
          </button>

          <button
            disabled={!universe.get.enabled}
            onClick={() => showUniverseList("vegetal")}
            className={
              "mt-8 mb-8 text-xl px-8 py-2 rounded-md border-1 text-slate-700 border-orange-500 hover:bg-orange-500 hover:text-gray-100"
            }
          >
            View Vegetal Universes
          </button>
        </div>
        <p className="text-slate-500 text-light">
          {universe.get.enabled
            ? "List enabled"
            : "List disabled, wait a moment..."}
        </p>
      </div>
      {Array(5)
        .fill(0)
        .map((x, i) => (
          <div key={i} className="h-64"></div>
        ))}

      {/* This is the only part with a StylesObject just for example. */}

      <CuteModal
        visible={universe.get.visible}
        onClose={closeUniverseList}
        customDirSty={STYLES.listModal}
        fadeSpeed="slow"
      >
        <UniversesList selectedUniverse={universe.get.selectedUniverse} />
      </CuteModal>
    </>
  );
}

const STYLES = {
  listModal: {
    ct: "border-blue-500",
  },

  title: "text-center text-xl text-slate-700 mb-4",

  universe: "my-3",
  universeName: "text-purple-500",
  universeDescription: "text-slate-700 text-light",
};

const UNIVERSES = {
  animal: [
    { name: "Alpha Universe", description: "This universe commands the rest." },
    { name: "Bees Universe", description: "This universe is full of bees." },
    {
      name: "Octopus Universe",
      description: "This universe is full of octopuses.",
    },
  ],
  vegetal: [
    { name: "Alpha Universe", description: "This universe commands the rest." },
    { name: "Tree Universe", description: "This universe is full of trees." },
    {
      name: "Orange Universe",
      description:
        "This universe is full of oranges, or is it just orange? orange oranges.",
    },
  ],
};

function UniversesList({ selectedUniverse }) {
  return (
    <>
      <p className={STYLES.title}>List of Universes</p>
      {UNIVERSES[selectedUniverse].map((u) => (
        <div key={u.name} className={STYLES.universe}>
          <p className={STYLES.universeName}>{u.name}</p>
          <p className={STYLES.universeDescription}>{u.description}</p>
        </div>
      ))}
    </>
  );
}

export default ModalBoxExample;
