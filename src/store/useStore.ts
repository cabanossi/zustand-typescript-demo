import create, { GetState, SetState, State, StoreApi } from "zustand";

import createBearSlice, { BearSlice, BearCommon } from "./createBearSlice";
import createFishSlice, { FishSlice, FishCommon } from "./createFishSlice";

export type SliceStateCreator<
  S extends State,
  C extends State = { BearSlice; FishSlice }, // The common part accessible by the slice
  T extends S = S & C,
  CustomSetState = SetState<T>
> = (set: CustomSetState, get: GetState<T>, api: StoreApi<T>) => S;

//interface ICommon extends BearCommon, FishCommon {}
//interface IStore extends ICommon, BearSlice, FishSlice {}
interface IStore extends BearSlice, FishSlice {}

const useStore = create<IStore>(
  (set, get, api): IStore => ({
    ...createBearSlice(
      (set as unknown) as SetState<BearSlice & BearCommon>,
      (get as unknown) as GetState<BearSlice & BearCommon>,
      (api as unknown) as StoreApi<BearSlice & BearCommon>
    ),
    ...createFishSlice(
      (set as unknown) as SetState<FishSlice & FishCommon>,
      (get as unknown) as GetState<FishSlice & FishCommon>,
      (api as unknown) as StoreApi<FishSlice & FishCommon>
    )
  })
);

export default useStore;
