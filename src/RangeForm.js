import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/** RangeForm
 *
 * props:
 *      min, max values for range
 *      title
 *
 * state: formData
 *
 * Editor --> RangeForm
 */

function RangeForm({min, max, title, submit}) {
  const [formData, setFormData] = useState({ value: min});
  console.log("formData.value=", formData.value);

  /** Update form input. */
  function handleChange(evt) {
      const input = evt.target;
      setFormData(formData => ({
          ...formData,
          [input.name]: input.value,
      }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
      evt.preventDefault();
      submit(formData);
      setFormData({value: min});
  }

  return (
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Label>{title}</Form.Label>
              <Form.Range
                  name="value"
                  type="range"
                  step="1"
                  min={min}
                  max={max}
                  value={formData.value}
                  onChange={handleChange}
              />
            <button onSubmit={submit}>{title}</button>
      </Form>
  )
}

export default RangeForm;