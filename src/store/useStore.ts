import create, { GetState, SetState, StoreApi } from "zustand";

import { BearSlice, createBearSlice } from "./createBearSlice";
import createFishSlice, { FishSlice } from "./createFishSlice";

export type MyState = BearSlice & FishSlice;

const useStore = create<MyState>(
  (set, get, api): MyState => ({
    ...createBearSlice(
      (set as unknown) as SetState<MyState>,
      get as GetState<MyState>,
      (api as unknown) as StoreApi<MyState>
    ),
    ...createFishSlice(
      (set as unknown) as SetState<MyState>,
      get as GetState<MyState>,
      (api as unknown) as StoreApi<MyState>
    )
  })
);

export default useStore;
