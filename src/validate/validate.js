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

export function validateLogin(emailorPhone, password, setErrLogin) {
  if (validator.isEmpty(emailorPhone)) {
    setErrLogin((prev) => ({
      ...prev,
      errEmailorPhone: "email or phone is required",
    }));
  } else if (
    !(validator.isEmail(emailorPhone) || validator.isMobilePhone(emailorPhone))
  ) {
    setErrLogin((prev) => ({
      ...prev,
      errEmailorPhone: "email or phone invalid format",
    }));
  } else {
    setErrLogin((prev) => ({
      ...prev,
      errEmailorPhone: "",
    }));
  }

  if (validator.isEmpty(password)) {
    setErrLogin((prev) => ({
      ...prev,
      errPassword: "password is required",
    }));
  } else if (password.length <= 8) {
    setErrLogin((prev) => ({
      ...prev,
      errPassword: "password must be greater than 8 characters",
    }));
  } else if (!validator.isAlphanumeric(password)) {
    setErrLogin((prev) => ({
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
      setErrLogin((prev) => ({
        ...prev,
        errPassword:
          "password must be contain upperletter, loweletter and number",
      }));
    } else if (!number.length) {
      setErrLogin((prev) => ({
        ...prev,
        errPassword:
          "password must be contain upperletter, loweletter and number",
      }));
    } else {
      setErrLogin((prev) => ({
        ...prev,
        errPassword: "",
      }));
    }
  }
}

export function validateForgot(email, setErrEmail) {
  if (validator.isEmpty(email)) {
    setErrEmail((prev) => ({
      ...prev,
      errEmail: "email is required",
    }));
  } else if (!(validator.isEmail(email) || validator.isMobilePhone(email))) {
    setErrEmail((prev) => ({
      ...prev,
      errEmail: "email is invalid format",
    }));
  } else {
    setErrEmail((prev) => ({
      ...prev,
      errEmail: "",
    }));
  }
}

export function validateReset(newPassword, confirmPassword, setErrorReset) {
  if (validator.isEmpty(newPassword)) {
    setErrorReset((prev) => ({
      ...prev,
      errNewPassword: "password is required",
    }));
  } else if (newPassword.length <= 8) {
    setErrorReset((prev) => ({
      ...prev,
      errNewPassword: "password must be greater than 8 characters",
    }));
  } else if (!validator.isAlphanumeric(newPassword)) {
    setErrorReset((prev) => ({
      ...prev,
      errNewPassword:
        "password must be contain upperletter, loweletter and number",
    }));
  } else {
    let text = [];
    let number = [];
    for (let ch of newPassword) {
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
      setErrorReset((prev) => ({
        ...prev,
        errNewPassword:
          "password must be contain upperletter, loweletter and number",
      }));
    } else if (!number.length) {
      setErrorReset((prev) => ({
        ...prev,
        errNewPassword:
          "password must be contain upperletter, loweletter and number",
      }));
    } else {
      setErrorReset((prev) => ({
        ...prev,
        errNewPassword: "",
      }));
    }
  }

  if (validator.isEmpty(confirmPassword)) {
    setErrorReset((prev) => ({
      ...prev,
      errConfirmPassword: "confirm password is required",
    }));
  } else if (newPassword !== confirmPassword) {
    setErrorReset((prev) => ({
      ...prev,
      errConfirmPassword: "password not match",
    }));
  } else {
    setErrorReset((prev) => ({
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
  placePic,
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

  if (wifi === undefined) {
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

  if (parking === undefined) {
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

  if (reserve === undefined) {
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

  if (placePic.length === 0) {
    setErrorPlace((prev) => ({
      ...prev,
      errPic: "Picture is required",
    }));
  } else {
    setErrorPlace((prev) => ({
      ...prev,
      errPic: "",
    }));
  }
}

export function validateReviewForm(title, content, star, setErrReview) {
  if (validator.isEmpty(title)) {
    setErrReview((prev) => ({ ...prev, errTitle: "title is require" }));
  } else {
    setErrReview((prev) => ({
      ...prev,
      errTitle: "",
    }));
  }

  if (validator.isEmpty(content)) {
    setErrReview((prev) => ({ ...prev, errContent: "content is require" }));
  } else {
    setErrReview((prev) => ({
      ...prev,
      errContent: "",
    }));
  }

  if (star === 0) {
    setErrReview((prev) => ({ ...prev, errStar: "score is require" }));
  } else {
    setErrReview((prev) => ({
      ...prev,
      errStar: "",
    }));
  }
}

export function validateMenuForm(title, picture, setErrMenu) {
  if (picture === null || picture === "") {
    setErrMenu((prev) => ({ ...prev, errPic: "picture is require" }));
  } else {
    setErrMenu((prev) => ({
      ...prev,
      errPic: "",
    }));
  }

  if (validator.isEmpty(title)) {
    setErrMenu((prev) => ({ ...prev, errTitle: "title is require" }));
  } else {
    setErrMenu((prev) => ({
      ...prev,
      errTitle: "",
    }));
  }
}

export function validateBlogForm(
  category,
  province,
  content,
  coverPic,
  title,
  setErrorBlog,
  placeLength
) {
  if (validator.isEmpty(category)) {
    setErrorBlog((prev) => ({ ...prev, errCategory: "category is require" }));
  } else {
    setErrorBlog((prev) => ({
      ...prev,
      errCategory: "",
    }));
  }

  if (validator.isEmpty(province)) {
    setErrorBlog((prev) => ({ ...prev, errProvince: "province is require" }));
  } else {
    setErrorBlog((prev) => ({
      ...prev,
      errProvince: "",
    }));
  }

  if (validator.isEmpty(content)) {
    setErrorBlog((prev) => ({ ...prev, errContent: "content is require" }));
  } else {
    setErrorBlog((prev) => ({
      ...prev,
      errContent: "",
    }));
  }

  if (validator.isEmpty(title)) {
    setErrorBlog((prev) => ({ ...prev, errTitle: "title is require" }));
  } else {
    setErrorBlog((prev) => ({
      ...prev,
      errTitle: "",
    }));
  }

  if (coverPic === null || coverPic === "") {
    setErrorBlog((prev) => ({
      ...prev,
      errcoverPic: "cover picture is require",
    }));
  } else {
    setErrorBlog((prev) => ({
      ...prev,
      errcoverPic: "",
    }));
  }

  if (placeLength < 1) {
    setErrorBlog((prev) => ({
      ...prev,
      errPlaceLength: "places in this blog is require",
    }));
  } else {
    setErrorBlog((prev) => ({
      ...prev,
      errPlaceLength: "",
    }));
  }
}
