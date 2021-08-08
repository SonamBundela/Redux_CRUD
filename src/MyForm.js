import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";

const renderField = ({ input, label, type }) => (
  <div>

    <label>{label}</label>
    <div>
      <input {...input}
        type={type} />
    </div>

  </div>
);

const renderData = ({ fields }) => (
  <div>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add More
      </button>

    </li>

    {fields.map((input, index) => (
      <div key={index}><br></br><br></br>

        <button type="button" onClick={() => fields.remove(index)}>
          Remove
        </button><br></br>

        <Field
          name={`${input}.myName`}
          type="text"
          component={renderField}
          label="Name"
        />
        <Field
          name={`${input}.myAge`}
          type="number"
          component={renderField}
          label="Age"
        />
      </div>
    ))}

  </div>
);

const MyForm = props => {
  const { handleSubmit } = props;

  return (

    <form onSubmit={handleSubmit}>
      <FieldArray name="data" component={renderData} /><br></br>

      <div>
        <li>
          <button type="submit">
            Submit
          </button>
        </li>

      </div>

    </form>
  );
};

export default reduxForm({
  form: "MyForm"
})(MyForm);