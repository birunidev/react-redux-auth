import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "redux/actions/auth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authError = useSelector((state) => state.auth.errorMessage);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, action) => {
      dispatch(
        setAuth(values, (success) => {
          action.setSubmitting(false);
          if (success) {
            history.push("/");
          }
        })
      );
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Please input a valid email").required(),
      password: Yup.string()
        .min(4, "Password must have at least 4 chars")
        .required(),
    }),
  });

  return (
    <div className="w-1/2 mx-auto bg-white mt-12 py-6 rounded-xl">
      <div className="mt-12 logo text-center">
        <img src="/assets/logo.svg" className="w-64 inline-block" alt="" />
      </div>
      <div className="flex justify-center w-full mx-auto">
        <form onSubmit={formik.handleSubmit} className="w-3/4 pb-12">
          <div className="mt-12 mb-4">
            <label htmlFor="" className="text-indigo-900">
              Email
            </label>
            <input
              className={[
                "email-input block px-5 py-3 border w-full my-3 rounded-lg text-gray-400",
                formik.errors.email && "border-red-400 text-red-400",
                formik.touched.email &&
                  !formik.errors.email &&
                  "border-green-400 text-green-400",
              ].join(" ")}
              type="text"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Enter your email address"
            />
            <span
              data-testid="error-email-input"
              className=" block text-xs text-red-400"
            >
              {formik.errors.email}
            </span>
          </div>
          <div>
            <label htmlFor="" className="text-indigo-900">
              Password
            </label>
            <input
              className={[
                "password-input block px-5 py-3 border w-full my-3 rounded-lg text-gray-400",
                formik.errors.password && "border-red-400 text-red-400",
                formik.touched.password &&
                  !formik.errors.password &&
                  "border-green-400 text-green-400",
              ].join(" ")}
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              placeholder="************"
            />
            <span
              data-testid="error-password-input"
              className="block text-xs text-red-400"
            >
              {formik.errors.password}
            </span>
          </div>
          <div className="text-center mt-12">
            <button
              type="submit"
              className="bg-indigo-400 hover:bg-indigo-500 text-white block w-full py-4 rounded-lg"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Loading.." : "Sign in to my account"}
            </button>
            {authError && <p className="text-red-400 mt-4">{authError}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
