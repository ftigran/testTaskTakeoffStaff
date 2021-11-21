import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderTextField as TextField } from "./renderTextField";
import {
  required,
  phoneNumber,
  promoNumber,
  email,
  maxLength,
  minLength,
  kirilicName,
  instaUser,
  isTrue,
} from "../TextField/validation";
import { createMuiTheme, Grid } from "@material-ui/core";
import "./regForm.scss";
import { useSelector, useDispatch } from "react-redux";
import { setRegEmailApproveModal } from "../../store/actions";
import { Provider, connect } from "react-redux";
import { store } from "../../store/store";
import { useHistory } from "react-router";
import { RegEmailApproveModal } from "../Modal/RegEmailApproveModal/RegEmailApproveModal";
import Checkbox from "../Checkbox/Checkbox";
import { WherePromocode } from "../Modal/SimpleModal/SimpleModal";
import "./regForm.scss";

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit} className="regForm">
      <Grid spacing={2} container justify="center" className="regFormContainer">
        <Grid sm={6} item className="FormTextFieldContainer">
          <Field
            name="firstName"
            component={TextField}
            type="text"
            label="Имя"
            validate={[
              required,
              maxLength(20, "Имя должно"),
              minLength(2, "Имя должно"),
              kirilicName,
            ]}
          />
          <Field
            name="lastName"
            component={TextField}
            type="text"
            label="Фамилия"
            validate={[
              required,
              maxLength(20, "Фамилия должна"),
              minLength(2, "Фамилия должна"),
              kirilicName,
            ]}
          />
          <Field
            name="instagram"
            component={TextField}
            type="text"
            label="@instagram"
            validate={[required, instaUser]}
          />
        </Grid>
        <Grid sm={6} item className="FormTextFieldContainer">
          <Field
            name="phone"
            component={TextField}
            type="tel"
            label="Телефон"
            validate={[required, phoneNumber]}
          />

          <Field
            name="email"
            component={TextField}
            type="email"
            label="Email"
            validate={[required, email]}
          />
          <Field
            name="promocode"
            component={TextField}
            type="text"
            label="Промокод с листовки"
            validate={[required, promoNumber]}
          />
        </Grid>
      </Grid>
      <Grid container direction="column" className="regFormDown">
        <Grid item className="WherePromocodeWrap">
          <WherePromocode />
        </Grid>
        <Field
          name="rulesCB"
          component={Checkbox}
          type="checkbox"
          label={
            <>
              Я прочитал(а) и согласен(а) с <a href="empty">Правилами акции</a>{" "}
              и <a href="empty">Пользовательским соглашением</a>
            </>
          }
          validate={[isTrue()]}
        />
        <Field
          name="emailPromoCB"
          component={Checkbox}
          label={
            <a href="empty">Я согласен(а) получать Email- и SMS-рассылки</a>
          }
          type="checkbox"
        />
        <div className="regFormApproveWrap">
          <RegEmailApproveModal />
        </div>
      </Grid>
    </form>
  );
};

export default reduxForm({
  form: "regForm", // a unique identifier for this form
})(SimpleForm);
