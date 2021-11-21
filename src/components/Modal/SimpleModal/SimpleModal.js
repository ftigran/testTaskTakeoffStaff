import React from "react";
import Modal from "../Modal";

import "./SimpleModal.scss";
export class SimpleModal extends React.Component {
  render() {
    return (
      <Modal
        className={" SimpleModal"}
        title={this.props.title}
        btnText={this.props.btnText}
        childBtnText={"OK"}
        isOpen={this.props.isOpen}
        mainBtnFull={this.props.mainBtnFull}
        btnFull={this.props.btnFull}
        mainBtnVariant="contained"
        mainBtnSize="large"
        btnSize="large"
      >
        <p className={"SimpleModalText"}>{this.props.text}</p>
      </Modal>
    );
  }
}

export const TaskSend = () => {
  const open = useSelector((state) => state.data.instaPostModalOpen);
  const dispatch = useDispatch();
  console.log(open);
  const handleClose = () => {
    dispatch(setInstaPostModal(false));
  };
  return (
    <MatModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={"modal"}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      // disableScrollLock={true}
    >
      <Fade in={open}>
        <div className={"modalWindow LoginModal SimpleModal"}>
          <h3 id="transition-modal-title">Загрузка работы</h3>
          <IconButton
            aria-label="Закрыть окно"
            className={"modalWindowClose"}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <p className={"SimpleModalText"}>
            Спасибо, ссылка принята для проверки.
          </p>
          <p className={"SimpleModalText"}>
            Результат проверки станет доступен в твоем Личном кабинете в течение
            ближайших 3-х рабочих дней.
          </p>
          <Button onClick={handleClose} variant="contained" size="large">
            ОК
          </Button>
        </div>
      </Fade>
    </MatModal>
  );
};
export const WherePromocode = () => {
  return (
    <Modal
      className={"ModalInsta SimpleModal"}
      title={"Где найти промокод?"}
      btnText={"Где найти промокод?"}
      //mainBtnFull={this.props.mainBtnFull}
      //btnFull={this.props.btnFull}
    >
      <p className={"SimpleModalText"}>
        Ваш уникальный промокод расположен на листовке, лежащей внутри
        подарочного набора «100 лет экспертизы Weleda», под QR-кодом.
      </p>
      {/* <img src="./images/wherePromocode.png" width="100%" /> */}
    </Modal>
  );
};
import { Field, reduxForm } from "redux-form";
import { setResetEmailApproveModal } from "../../../store/actions";
export const Sbros = () => {
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(setResetEmailApproveModal(true));
  };

  return (
    <Modal
      className={"ModalInsta SimpleModal"}
      title={"Восстановление пароля?"}
      btnText={"Забыли пароль?"}
      //mainBtnFull={this.props.mainBtnFull}
      //btnFull={this.props.btnFull}
    >
      <p className={"SimpleModalText"}>
        Укажи E-mail, с которым ты зарегистрирован в Акции. Пароль к твоему
        Личqqному кабинету будет отправлен на указанный E-mail.
      </p>
      <SbrosFormWrapped onSubmit={handler} />
    </Modal>
  );
};
import { required, email } from "../../TextField/validation";
import { renderTextField } from "../../regForm/renderTextField";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Backdrop from "@material-ui/core/Backdrop";

const SbrosFrom = (props) => {
  //   const handleSubmit= (e)=>{
  //     console.log(e)
  //     }
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        component={renderTextField}
        type="email"
        label="Email"
        validate={[required, email]}
      />
      <Button type="submit" variant="contained" size="large">
        Восстановить
      </Button>
      <SbrosSendMail />
    </form>
  );
};
const SbrosFormWrapped = reduxForm({
  form: "SbrosForm", // a unique identifier for this form
})(SbrosFrom);

import { Modal as MatModal } from "@material-ui/core";

const SbrosSendMail = () => {
  const open = useSelector((state) => state.data.ResetEmailApproveModalOpen);
  const dispatch = useDispatch();
  console.log(open);
  const handleClose = () => {
    dispatch(setResetEmailApproveModal(false));
  };
  return (
    <MatModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={"modal"}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      // disableScrollLock={true}
    >
      <Fade in={open}>
        <div className={"modalWindow LoginModal SimpleModal"}>
          <h3 id="transition-modal-title">Восстановление пароля?</h3>
          <IconButton
            aria-label="Закрыть окно"
            className={"modalWindowClose"}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          На указанный E-mail отправлен пароль. Для завершения регистрации в
          Акции войди в личный кабинет, указав полученный в письме пароль. Если
          письмо с паролем так и не приходит, обратись в службу поддержки Акции.
          <Button onClick={handleClose} variant="contained" size="large">
            ОК
          </Button>
        </div>
      </Fade>
    </MatModal>
  );
};
import {
  setSelectPrizModal,
  setInstaPostModal,
  setDecrementScore,
  setPrizSuccessModal,
  setAdressModal,
  setPrizRow,
} from "../../../store/actions";

export const SelectPriz = () => {
  const open = useSelector((state) => state.data.selectPrizModalOpen);
  const priz = useSelector((state) => state.data.priz);
  const score = useSelector((state) => state.data.score);
  const name = priz.title;
  const text = () => {
    if (priz.isDigital) {
      return (
        <>
          Спасибо!
          <br />
          Вы выбрали приз {name}.<br />
          Приз появится в вашем личном кабинете в таблице «Призы».
        </>
      );
    } else {
      return (
        <>
          Спасибо!
          <br />
          Вы выбрали приз {name}.<br />
          Для подтверждения приза заполните
          <br />
          Адресную форму.
        </>
      );
    }
  };
  const dispatch = useDispatch();
  console.log(open);
  const handleClose = () => {
    dispatch(setSelectPrizModal(false));
  };
  const submitHandler = () => {
    handleClose();
    if (priz.cost <= score) {
      if (priz.isDigital) {
        dispatch(setPrizSuccessModal(true));
        dispatch(setPrizRow(priz.title, priz.cost));
        dispatch(setDecrementScore(priz.cost));
      } else {
        dispatch(setAdressModal(true));
      }
    }
  };
  return (
    <MatModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={"modal"}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      // disableScrollLock={true}
    >
      <Fade in={open}>
        <div className={"modalWindow LoginModal SimpleModal"}>
          <h3 id="transition-modal-title">Выбор приза</h3>
          <IconButton
            aria-label="Закрыть окно"
            className={"modalWindowClose"}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          {text()}
          <Button onClick={submitHandler} variant="contained" size="large">
            Подтвердить
          </Button>
        </div>
      </Fade>
    </MatModal>
  );
};
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import TextField from "@material-ui/core/TextField";

const adressFrom = (props) => {
  //   const handleSubmit= (e)=>{
  //     console.log(e)
  //     }
  const [address, setAddress] = React.useState();
  const [error, setError] = React.useState();
  const [str, setStr] = React.useState();

  const { handleSubmit, pristine, reset, submitting } = props;
  const token = "50af94962e7d986c060a7e79e512b90550b87c77";

  const sub = (e) => {
    e.preventDefault();
    if (address) {
      if (!address.data.city && !address.data.settlement) {
        setError("Укажите населённый пункт");
      } else if (!address.data.settlement && !address.data.street) {
        setError("Укажите улицу");
      } else if (!address.data.house) {
        setError("Укажите дом");
      } else {
        handleSubmit(e);
      }
    } else {
      setError("Введите адрес");
    }
  };
  return (
    <form
      onSubmit={sub}
      className="adressForm"
      style={{ width: "100%", margin: "10px auto 20px" }}
    >
      <p style={{ marginBottom: "60px" }}>
        Пожалуйста, введите информацию для доставки приза ниже:
      </p>

      <AddressSuggestions
        token={token}
        value={address}
        onChange={(e) => {
          setError();
          setAddress(e);
        }}
        customInput={(props) => (
          <TextField
            onChange={setStr}
            label="Адрес"
            variant="outlined"
            error={error}
            helperText={error}
            fullWidth
            {...props}
          />
        )}
      />
      <Button type="submit" variant="contained" size="large">
        Подтвердить
      </Button>
    </form>
  );
};
const AdressFrom = reduxForm({
  form: "AdressFrom", // a unique identifier for this form
})(adressFrom);
export const AdressModal = () => {
  const open = useSelector((state) => state.data.adressModalOpen);
  const priz = useSelector((state) => state.data.priz);
  const score = useSelector((state) => state.data.score);
  const dispatch = useDispatch();
  console.log(open);
  const handleClose = () => {
    dispatch(setAdressModal(false));
  };
  const submitHandler = () => {
    dispatch(setPrizSuccessModal(true));
    dispatch(setPrizRow(priz.title, priz.cost));
    dispatch(setDecrementScore(priz.cost));
    dispatch(setAdressModal(false));
  };
  return (
    <MatModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={"modal"}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      // disableScrollLock={true}
    >
      <Fade in={open}>
        <div className={"modalWindow LoginModal SimpleModal"}>
          <h3 id="transition-modal-title">Выбор приза</h3>
          <IconButton
            aria-label="Закрыть окно"
            className={"modalWindowClose"}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <AdressFrom onSubmit={submitHandler} />
        </div>
      </Fade>
    </MatModal>
  );
};
export const PrizSuccess = () => {
  const open = useSelector((state) => state.data.prizSuccessModalOpen);

  const dispatch = useDispatch();
  console.log(open);
  const handleClose = () => {
    dispatch(setPrizSuccessModal(false));
  };
  const submitHandler = () => {
    if (true) {
    }
  };
  return (
    <MatModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={"modal"}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      // disableScrollLock={true}
    >
      <Fade in={open}>
        <div className={"modalWindow LoginModal SimpleModal"}>
          <h3 id="transition-modal-title">Выбор приза</h3>
          <IconButton
            aria-label="Закрыть окно"
            className={"modalWindowClose"}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          Спасибо!
          <br />
          Информация о заказе была отправлена на ваш email.
          <Button onClick={handleClose} variant="contained" size="large">
            ОК
          </Button>
        </div>
      </Fade>
    </MatModal>
  );
};

export const verify = (
  <SimpleModal
    title={"Подтверждение данных"}
    text={"Пароль к твоему Личному кабинету отправлен на указанный e-mail."}
    btnText={"ОК"}
  />
);

export const regCheck = (
  <SimpleModal
    title={"Регистрация чека"}
    text={
      "Спасибо, чек принят для проверки. Результат проверки станет доступен в твоем Личном кабинете в течение ближайших 3-х рабочих дней."
    }
    btnText={"3"}
  />
);

export const question = (
  <SimpleModal
    title={"Ваш вопрос отправлен"}
    text={"Ответ поступин в ближайшее время на указанную почту"}
    btnText={"Задать вопрос"}
    mainBtnFull={true}
  />
);

export class UserError extends React.Component {
  render() {
    console.log("this");
    console.log(this.props);
    console.log(this.props.error);
    return (
      <SimpleModal
        title={"Пользователь не найден"}
        text={"Проверьте поля"}
        isOpen={this.props.error}
      />
    );
  }
}
