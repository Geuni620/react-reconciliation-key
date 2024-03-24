import { useState } from 'react';

export const App = () => {
  return (
    <div>
      <h3>ComponentWithoutKey</h3>
      <ComponentWithoutKey />

      <br />

      <h3>ComponentWithKey</h3>
      <ComponentWithKey />
    </div>
  );
};

const shuffle = <T,>(arr: T[]): T[] => {
  const arrWithRand: [T, number][] = arr.map((x) => [x, Math.random()]);
  arrWithRand.sort((a, b) => a[1] - b[1]);

  return arrWithRand.map((x) => x[0]);
};

const Counter = ({ init }: Item) => {
  const [count, setCount] = useState(init);
  return (
    <div>
      (state: {count} <button onClick={() => setCount((c) => c + 1)}>+1</button>
      ) (init: {init})
    </div>
  );
};

type Item = { init: number };

const ComponentWithoutKey = () => {
  const [arr, setArr] = useState<Item[]>([
    { init: 1 },
    { init: 2 },
    { init: 3 },
  ]);
  return (
    <div>
      <button onClick={() => setArr(shuffle)}>shuffle</button>
      <hr />
      {arr.map((item, idx) => (
        <Counter key={idx} init={item.init} />
      ))}
    </div>
  );
};
const ComponentWithKey = () => {
  const [arr, setArr] = useState<Item[]>([
    { init: 1 },
    { init: 2 },
    { init: 3 },
  ]);
  return (
    <div>
      <button onClick={() => setArr(shuffle)}>shuffle</button>
      <hr />
      {arr.map((item) => (
        <Counter key={item.init} init={item.init} />
      ))}
    </div>
  );
};
