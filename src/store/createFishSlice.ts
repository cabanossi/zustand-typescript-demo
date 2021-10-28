import { StateCreator, StoreApi } from "zustand";
//import { MyState } from "./useStore";

export interface FishSlice {
  fishes: number;
  repopulate: () => void;
}

type StateSlice<T extends object> = StateCreator<T> | StoreApi<T>;

const maxFishes = 10;

const createFishSlice: StateSlice<FishSlice> = (set, get, api): FishSlice => ({
  fishes: maxFishes,
  repopulate: () => {
    set((prev) => ({ fishes: maxFishes }));
  }
});

export default createFishSlice;
