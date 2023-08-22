export default function Validation(userDetails) {
  const errors = {};

  const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (userDetails.firstName === "") {
    errors.firstName = "First Name is Required";
  }

  if (userDetails.lastName === "") {
    errors.lastName = "Last Name is Required";
  }

  if (userDetails.dob === "") {
    errors.dob = "dob is Required";
  }

  if (userDetails.mobileNumber === "") {
    errors.mobileNumber = "Mobile Number is Required";
  }

  if (userDetails.email === "") {
    errors.email = "Email is Required";
  } else if (!email_pattern.test(userDetails.email)) {
    errors.email = "Email is not correct";
  }

  return errors;
}
