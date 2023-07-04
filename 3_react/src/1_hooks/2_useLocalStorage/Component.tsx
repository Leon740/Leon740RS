import React, { Dispatch, SetStateAction } from 'react';
import Button from 'react-bootstrap/Button';
import useLocalStorage from './useLocalStorage';

type TItemProps = {
  name: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

function Item({
  name = '',
  value = '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = () => {}
}: TItemProps): JSX.Element {
  return (
    <section>
      <h3>{value}</h3>
      <input
        type="text"
        placeholder={name[0].toUpperCase() + name.substring(1, name.length)}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <Button variant="warning" onClick={() => onChange('')}>
        remove
      </Button>
    </section>
  );
}

function Component(): JSX.Element {
  const [car, setCar] = useLocalStorage('car', '');
  const [job, setJob] = useLocalStorage('job', '');

  return (
    <>
      <Item name="car" value={car} onChange={setCar} />
      <Item name="job" value={job} onChange={setJob} />
    </>
  );
}
export default Component;
