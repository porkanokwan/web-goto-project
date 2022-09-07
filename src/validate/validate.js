import validator from "validator";

export function validate({
  name,
  emailorPhone,
  password,
  confirmPassword,
  setErrorValidate,
}) {
  if (validator.isEmpty(name)) {
    setErrorValidate((prev) => ({ ...prev, errName: "Name is required" }));
  } else {
    setErrorValidate((prev) => ({
      ...prev,
      errName: "",
    }));
  }

  if (validator.isEmpty(emailorPhone)) {
    setErrorValidate((prev) => ({
      ...prev,
      errEmailorPhone: "email or phone is required",
    }));
  } else if (
    !(validator.isEmail(emailorPhone) || validator.isMobilePhone(emailorPhone))
  ) {
    setErrorValidate((prev) => ({
      ...prev,
      errEmailorPhone: "email or phone invalid format",
    }));
  } else {
    setErrorValidate((prev) => ({
      ...prev,
      errEmailorPhone: "",
    }));
  }

  if (validator.isEmpty(password)) {
    setErrorValidate((prev) => ({
      ...prev,
      errPassword: "password is required",
    }));
  } else if (password.length <= 8) {
    setErrorValidate((prev) => ({
      ...prev,
      errPassword: "password must be greater than 8 characters",
    }));
  } else if (!validator.isAlphanumeric(password)) {
    setErrorValidate((prev) => ({
      ...prev,
      errPassword:
        "password must be contain upperletter, loweletter and number",
    }));
  } else {
    let text = [];
    let number = [];
    for (let ch of password) {
      if (validator.isAlpha(ch)) {
        if (validator.isUppercase(ch)) {
          text.push(true);
        }
      }
      if (validator.isNumeric(ch)) {
        number.push(ch);
      }
    }

    if (!text.includes(true)) {
      setErrorValidate((prev) => ({
        ...prev,
        errPassword:
          "password must be contain upperletter, loweletter and number",
      }));
    } else if (!number.length) {
      setErrorValidate((prev) => ({
        ...prev,
        errPassword:
          "password must be contain upperletter, loweletter and number",
      }));
    } else {
      setErrorValidate((prev) => ({
        ...prev,
        errPassword: "",
      }));
    }
  }

  if (validator.isEmpty(confirmPassword)) {
    setErrorValidate((prev) => ({
      ...prev,
      errConfirmPassword: "confirm password is required",
    }));
  } else if (password !== confirmPassword) {
    setErrorValidate((prev) => ({
      ...prev,
      errConfirmPassword: "password not match",
    }));
  } else {
    setErrorValidate((prev) => ({
      ...prev,
      errConfirmPassword: "",
    }));
  }
}
