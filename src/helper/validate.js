/**/

import { toast } from "react-hot-toast";

/*validate login page username */

export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  return errors;
}

/* validate password */

export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

function passwordVerify(errors = [], values) {
  /*
    <li>Password must be 8-12 characters</li>
    <li>At least one alphabet (uppercase or lowercase)</li>
    <li>At least one number present in the password</li>
    <li>At least one special character (-,.,@,$,!,%,+,=,<,>,#,?,&)</li>

    */

  const specialChars = "";

  if (!values.password) {
    errors.password = toast.error("Password required...!");
  } else if (values.username.includes(" ")) {
    errors.password = toast.error("Wrong password...!");
  } else if (values.password.length < 4) {
    errors.password = toast.error(
      "Password Must be more than 4 characters ...!"
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special Characters");
  }

  return errors;
}

/* validate username */
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }

  return error;
}
