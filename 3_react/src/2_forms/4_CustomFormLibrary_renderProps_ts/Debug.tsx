import React from 'react';

interface DebugPropsI {
  name: string;
  object: object;
  className?: string;
}

function Debug({ name = '', object = {}, className = 'w-1/3' }: DebugPropsI): JSX.Element {
  return (
    <section className={className}>
      <h2 className="text-lg font-bold">{name}</h2>
      <ul>
        {Object.entries(object).map(([key, value]) => (
          <li key={key}>{`${key} : ${value}`}</li>
        ))}
      </ul>
    </section>
  );
}
export default Debug;
