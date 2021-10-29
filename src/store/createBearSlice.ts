import { SliceStateCreator } from "./useStore";

export interface BearCommon {
  fishes: number;
}

export type TAppetite = "hungry" | "sated";

export interface BearSlice {
  appetite: TAppetite;
  eatOneFish: () => void;
  eatTwoFish: () => void;
}

const createBearSlice: SliceStateCreator<BearSlice, BearCommon> = (
  set,
  get,
  api
): BearSlice => ({
  appetite: "hungry",
  eatOneFish: () => {
    set((prev) => ({ fishes: prev.fishes > 1 ? prev.fishes - 1 : 0 }));
    if (get().fishes === 0) {
      set({ appetite: "sated" });
    }
  },
  eatTwoFish: () => {
    set((prev) => ({ fishes: prev.fishes > 2 ? prev.fishes - 2 : 0 }));
    if (get().fishes === 0) {
      set({ appetite: "sated" });
    }
  }
});

export default createBearSlice;
