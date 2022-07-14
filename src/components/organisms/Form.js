import { Formik } from "formik";
import Modal from "styled-react-modal";
import { useState } from "react";
import styled from "styled-components";
import Input from "../atoms/input";
import Button from "../atoms/Button";
import Textarea from "../atoms/Textarea";

const StyledForm = styled.form`
  margin-top: 2rem;
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-direction: center;
  align-items: center;
  width: 90%;
`;

const StyledModal = Modal.styled`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textColor};
  flex-direction: column;
  gap: 15px;
  background-color: ${({ theme }) => theme.contentBackground};
  box-shadow: 0 1rem 3rem -1rem hsla(0, 0%, 0%, 0.8);
  border-radius: 2rem;
  text-align: center;
`;

const StyledModalText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = (e) => setIsOpen(!isOpen);
  return (
    <Formik
      initialValues={{ name: "", email: "", textarea: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Adres e-mail jest wymagany!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Błąd w adresie e-mail!";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        fetch("https://formsubmit.co/ajax/rafalfuz@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.textarea,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));

        setTimeout(() => {
          resetForm();
          toggleModal();
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
          >
            <StyledModalText>Twoja wiadomość została wysłana</StyledModalText>
            <StyledModalText>Dziękujemy</StyledModalText>
            <div onClick={toggleModal}>
              <Button>Zamknij!</Button>
            </div>
          </StyledModal>
          <StyledItem>
            <Input
              name="name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <label>Imię</label>
            {errors.name && touched.name && errors.name}
          </StyledItem>
          <StyledItem>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label>Adres e-mail</label>
            {errors.email && touched.email && errors.email}
          </StyledItem>
          <StyledItem>
            <Textarea
              type="textarea"
              name="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.textarea}
              height="200px"
              fontSize="14px"
              width="520px"
            />
            <label>Wiadomość</label>
          </StyledItem>
          <Button type="submit" disabled={isSubmitting}>
            Wyślij
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
