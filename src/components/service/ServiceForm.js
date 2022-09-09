import { useState } from "react";

import Input from "../form/Input.js";
import SubmitButton from "../form/SubmitButton";
import styles from "../project/ProjectForm.module.css";

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Service's name"
        name="name"
        placeholder="Enter the service's name"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Cost of service"
        name="cost"
        placeholder="Enter the total value"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Service description"
        name="description"
        placeholder="describe the service"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
