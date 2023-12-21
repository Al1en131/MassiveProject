import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import "./textField.css";

export default function TextField({ label, type }) {
  const [activated, setActivated] = React.useState(false);
  const [value, setValue] = React.useState("");
  const labelRef = React.useRef(null);
  const [coverWidth, setCoverWidth] = React.useState(0);

  React.useEffect(() => {
    setCoverWidth(
      labelRef.current ? labelRef.current.getBoundingClientRect().width + 6 : 0
    );
  }, [labelRef]);

  return (
    <InputGroup
      className="m-3"
      onFocus={() => {
        setActivated(true);
      }}
      onBlur={() => {
        setActivated(Boolean(value));
      }}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <Form.Control className="rounded-end" type={type} />
      <label
        className={`${
          activated
            ? "textfield-label-activated"
            : "textfield-label-unactivated"
        } textfield-label`}
        ref={labelRef}
      >
        {label}
      </label>
      <div
        className={`${
          activated
            ? "textfield-label-cover-activated"
            : "textfield-label-cover-unactivated"
        } textfield-label-cover`}
        style={{ width: coverWidth }}
      />
    </InputGroup>
  );
}
