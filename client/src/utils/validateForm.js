export const validate = (values) => {
  const errors = {};
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "favoriteColor",
    "notes",
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const asyncValidate = async (values) => {
  await sleep(1000); // simulate server latency
  if (["foo@foo.com", "bar@bar.com"].includes(values.email)) {
    throw { email: "Email already Exists" };
  }
};
