import { GetState, SetState, StoreApi } from "zustand";
import { MyState } from "./useStore";

export interface BearSlice {
  eatFish: () => void;
}

export const createBearSlice = (
  set: SetState<MyState>,
  get: GetState<MyState>,
  api: StoreApi<MyState>
): BearSlice => ({
  eatFish: () => {
    set((prev) => ({ fishes: prev.fishes > 1 ? prev.fishes - 1 : 0 }));
  }
});

//export default createBearSlice;
