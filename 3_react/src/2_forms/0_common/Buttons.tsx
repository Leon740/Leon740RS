import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Buttons(): JSX.Element {
  return (
    <Stack direction="horizontal" gap={3} className="justify-content-between">
      <Button variant="success" type="submit">
        Submit
      </Button>
      <Button variant="danger" type="reset">
        Reset
      </Button>
    </Stack>
  );
}
export default Buttons;
