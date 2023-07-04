interface IInput {
  id: string;
  name: string;
  type: string;
  label: string;
}

export const INPUTS: IInput[] = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'name'
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'email'
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'password'
  }
];

type TField = {
  [key: string]: string;
};

export function getFormInputsFn(): TField {
  const formInputs: TField = {};

  INPUTS.forEach(({ name }) => {
    formInputs[name] = '';
  });

  return formInputs;
}
