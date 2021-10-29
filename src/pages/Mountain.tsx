import useStore from "../store/useStore";

export default function Mountain() {
  const fishes = useStore((state) => state.fishes);
  const eatOneFish = useStore((state) => state.eatOneFish);
  const eatTwoFish = useStore((state) => state.eatTwoFish);
  const repopulate = useStore((state) => state.repopulate);
  const appetite = useStore((state) => state.appetite);

  return (
    <div className="Mountain">
      <p>The bear is {appetite}</p>
      <p>Fishes : {fishes}</p>
      <p>
        <button onClick={eatOneFish}>Eat one</button>
      </p>
      <p>
        <button onClick={eatTwoFish}>Eat two</button>
      </p>
      <p>
        <button onClick={repopulate}>Repopulate</button>
      </p>
    </div>
  );
}
