import { Form, Formik } from "formik";
import Input from "../FormField/Input";
import Button from "../FormField/Button";

import { initialValues } from "./initialValues";
import { Schema } from "./schema";

const LoginForm = ({ submit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={submit}
        render={({
          handleChange,
          values,
          errors,
          touched,
          handleReset,
          handleSubmit,
        }) => (
          <Form>
            <Input
              required={true}
              id="email"
              name="email"
              value={values.email}
              error={errors.email}
              touched={touched.email}
              label="Email"
            />
            <Input
              required={true}
              id="password"
              name="password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              label="Password"
            />

            <div className="control">
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="basic" onClick={handleReset}>
                Clear
              </Button>
            </div>
          </Form>
        )}
      />
    </>
  );
};
export default LoginForm;
