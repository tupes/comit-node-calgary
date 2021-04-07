import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function LoginPage(props) {
  const { handleUpdateToken } = props;

  const history = useHistory();
  const [formValues, setFormValues] = useState({ name: "", password: "" });

  const handleChange = (event) => {
    console.log(event.target.name);
    const updatedValues = {
      ...formValues,
      [event.target.name]: event.target.value,
    };
    setFormValues(updatedValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      "http://localhost:3100/api/login",
      formValues
    );
    console.log(response);

    if (response && response.data && response.data.isSuccess) {
      handleUpdateToken(response.data.token);
      history.push("/");
    }
  };

  return (
    <>
      <div></div>
      <form onSubmit={handleSubmit}>
        <section>
          <p>
            <label>
              Name
              <input
                type="text"
                name="name"
                required
                value={formValues.name}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Password
              <input
                type="password"
                name="password"
                required
                minLength="4"
                maxLength="12"
                value={formValues.password}
                onChange={handleChange}
              />
            </label>
          </p>
        </section>

        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </>
  );
}
