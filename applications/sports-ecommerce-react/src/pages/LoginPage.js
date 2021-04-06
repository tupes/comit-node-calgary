import React from "react";

export default function LoginPage() {
  return (
    <>
      <div></div>
      <form action="login" method="POST">
        <section>
          <p>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Password
              <input
                type="password"
                name="password"
                required
                minlength="4"
                maxlength="12"
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
