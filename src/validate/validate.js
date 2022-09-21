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

export function validatePlaceForm(
  categoryId,
  provinceId,
  name,
  wifi,
  parking,
  reserve,
  address,
  setErrorPlace
) {
  if (validator.isEmpty(categoryId)) {
    setErrorPlace((prev) => ({
      ...prev,
      errCategory: "You must choose category of this place",
    }));
  } else {
    setErrorPlace((prev) => ({
      ...prev,
      errCategory: "",
    }));
  }

  if (validator.isEmpty(provinceId)) {
    setErrorPlace((prev) => ({
      ...prev,
      errProvince: "You must choose province of this place",
    }));
  } else {
    setErrorPlace((prev) => ({
      ...prev,
      errProvince: "",
    }));
  }

  if (validator.isEmpty(name)) {
    setErrorPlace((prev) => ({ ...prev, errName: "Name is required" }));
  } else {
    setErrorPlace((prev) => ({
      ...prev,
      errName: "",
    }));
  }

  if (validator.isEmpty(wifi)) {
    setErrorPlace((prev) => ({
      ...prev,
      errWifi: "Wifi is required",
    }));
  } else if (validator.isBoolean(wifi)) {
    setErrorPlace((prev) => ({
      ...prev,
      errWifi: "Wifi can be only true or false",
    }));
  } else {
    setErrorPlace((prev) => ({
      ...prev,
      errWifi: "",
    }));
  }

  if (validator.isEmpty(parking)) {
    setErrorPlace((prev) => ({
      ...prev,
      errParking: "Parking is required",
    }));
  } else if (validator.isBoolean(parking)) {
    setErrorPlace((prev) => ({
      ...prev,
      errParking: "Parking can be only true or false",
    }));
  } else {
    setErrorPlace((prev) => ({
      ...prev,
      errParking: "",
    }));
  }

  if (validator.isEmpty(reserve)) {
    setErrorPlace((prev) => ({
      ...prev,
      errReserve: "Reserve is required",
    }));
  } else if (validator.isBoolean(reserve)) {
    setErrorPlace((prev) => ({
      ...prev,
      errReserve: "Reserve can be only true or false",
    }));
  } else {
    setErrorPlace((prev) => ({
      ...prev,
      errReserve: "",
    }));
  }

  if (validator.isEmpty(address)) {
    setErrorPlace((prev) => ({
      ...prev,
      errAddress: "Address is required",
    }));
  } else {
    setErrorPlace((prev) => ({
      ...prev,
      errAddress: "",
    }));
  }
}
