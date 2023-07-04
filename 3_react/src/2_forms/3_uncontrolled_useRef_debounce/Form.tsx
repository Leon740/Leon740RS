import React, { useRef, ChangeEvent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Buttons from '../0_common/Buttons';
import { INPUTS, getFormInputsFn } from '../0_common/common';

interface IInput {
  id: string;
  name: string;
  type: string;
  label: string;
}

function FormGroup({
  name = '',
  label = '',
  type = 'text'
}: Omit<IInput, 'id'>): JSX.Element {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={name} />
    </Form.Group>
  );
}

function ExampleForm(): JSX.Element {
  const formDataRf = useRef(getFormInputsFn());

  let timeout: ReturnType<typeof setTimeout> | number = -1;

  function onChangeFn(event: ChangeEvent<HTMLFormElement>): void {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    clearTimeout(timeout);

    // reduce timeout in order to escape the empty inputs
    timeout = setTimeout(() => {
      formDataRf.current = { ...formDataRf.current, [name]: value };
      console.log(formDataRf.current);
    }, 1000);
  }

  function onResetFn(): void {
    formDataRf.current = getFormInputsFn();
  }

  function onSubmitFn(event: ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();

    let formIsValid: boolean = true;
    const formData = formDataRf.current;

    if (formData) {
      Object.values(formData).forEach((value) => {
        console.log(value);

        if (!value) {
          console.error('error');
          formIsValid = false;
        }
      });
    }

    if (formIsValid) {
      alert(JSON.stringify(formData));
      event.target.submit();
      // clean the form fields after submit
      onResetFn();
    }
  }

  return (
    <Container className="mt-5">
      <h1>3_uncontrolled_useRef_debounce</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5} xxl={4}>
          <Form
            onSubmit={(event: ChangeEvent<HTMLFormElement>) =>
              onSubmitFn(event)
            }
            onChange={(event: ChangeEvent<HTMLFormElement>) =>
              onChangeFn(event)
            }
            onReset={() => onResetFn()}
          >
            {INPUTS.map(({ id, name, label, type }) => (
              <FormGroup key={id} name={name} label={label} type={type} />
            ))}
            <Buttons />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ExampleForm;
