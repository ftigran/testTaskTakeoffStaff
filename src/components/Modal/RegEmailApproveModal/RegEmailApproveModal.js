import React from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import "./RegEmailApproveModal.scss";
import "../SimpleModal/SimpleModal.scss";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { setRegEmailApproveModal } from "../../../store/actions";
export const RegEmailApproveModal = () => {
  const open = useSelector((state) => state.data.RegEmailApproveModalOpen);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setRegEmailApproveModal(false));
  };
  return (
    <div className="modalContainer">
      <Button type="submit" variant="contained" size="large">
        Зарегистрироваться
      </Button>
      <Modal
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
          <div className={"modalWindow SimpleModal"}>
            <h3 id="transition-modal-title">Подтверждение данных</h3>
            <IconButton
              aria-label="Закрыть окно"
              className={"modalWindowClose"}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <p className="RegEmailApproveModalText">
              На указанный E-mail отправлен пароль. <br />
              Для завершения регистрации в Акции войди в Личный кабинет, указав
              полученный в письме пароль.
            </p>
            <p className="RegEmailApproveModalText RegEmailApproveModalText-bottom">
              Если письмо с паролем так и не приходит, обратись в службу
              поддержки Акции.
            </p>
            <Button
              className={"modalBtn"}
              color="secondaty"
              onClick={handleClose}
              variant={"contained"}
              fullWidth
              size="large"
            >
              ОК
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
