"use server";
async function Action(state: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(formData);
  return { text: "", message: "Email has been sent..!!" };
}

export default Action;
