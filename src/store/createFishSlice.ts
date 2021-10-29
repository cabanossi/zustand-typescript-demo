import { TAppetite } from "./createBearSlice";
import { SliceStateCreator } from "./useStore";

export interface FishCommon {
  appetite: TAppetite;
}

export interface FishSlice {
  fishes: number;
  repopulate: () => void;
}

const maxFishes = 10;

const createFishSlice: SliceStateCreator<FishSlice, FishCommon> = (
  set,
  get,
  api
): FishSlice => ({
  fishes: maxFishes,
  repopulate: () => {
    if (get().appetite === "sated") {
      set((prev) => ({ fishes: maxFishes }));
    } else {
      set((prev) => ({ fishes: prev.fishes + 5 }));
    }
    set({ appetite: "hungry" });
  }
});

export default createFishSlice;
