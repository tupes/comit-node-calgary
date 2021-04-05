import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({ name: "", password: "" });

  const handleChange = (event) => {
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:3100/api/login",
      formData
    );
    if (response.data && response.data.isSuccess) {
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
                value={formData.name}
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
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </p>
        </section>

        <p>
          <button>Submit</button>
        </p>
      </form>
    </>
  );
}
