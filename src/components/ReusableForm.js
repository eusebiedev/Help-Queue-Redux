import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names' required
          placeholder={props.ticketNames} />
        <input
          type='text'
          name='location' required
          placeholder={props.ticketLocation} />
        <textarea
          name='issue' required
          placeholder={props.ticketIssue} />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;