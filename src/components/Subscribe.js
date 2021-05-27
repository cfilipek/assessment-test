import { Formik, Form, Field } from 'formik';
import { CountryDropdown } from 'react-country-region-selector';
import React, { Component } from 'react';

import * as Yup from 'yup';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = { country: '', submitted: false };
  }

  submitForm = () => {
    this.setState({ submitted: true });
  };

  selectCountry = val => {
    this.setState({ country: val });
  };

  render() {
    return (
      <div className="subscribe">
        <div className="subscribe__form">
          <h1 id="subscribe" className="subscribe__title">
            Subscribe
          </h1>
          {!this.state.submitted ? (
            <Formik
              initialValues={{
                email: '',
                country: this.state.country,
                toggle: false,
                checked: [],
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  this.submitForm();
                }, 1000);
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Email is required'),
              })}
            >
              {(formik, isSubmitting) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <Field
                      name="email"
                      className={
                        formik.touched.email && formik.errors.email
                          ? 'form-control is-invalid subscribe__input'
                          : 'form-control subscribe__input'
                      }
                      type="email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="invalid-feedback">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  <CountryDropdown
                    name="country"
                    className="subscribe__country"
                    value={this.state.country}
                    onChange={val => this.selectCountry(val)}
                  />

                  <div
                    id="checkbox-group"
                    className="subscribe__checkbox-title"
                  >
                    Subscribe to emails from
                  </div>
                  <div role="group" aria-labelledby="checkbox-group">
                    <label className="subscribe__checkbox">
                      <Field type="checkbox" name="checked" value="One" />
                      Murda Beatz
                    </label>
                    <label className="subscribe__checkbox">
                      <Field type="checkbox" name="checked" value="Two" />
                      Interscope Records
                    </label>
                    <label className="subscribe__checkbox">
                      <Field type="checkbox" name="checked" value="Three" />
                      Universal Music Group
                    </label>
                  </div>

                  <div className="subscribe__policy">
                    By submitting this form, you agree to the{' '}
                    <span>Universal Music Group Privacy Policy.</span>
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="subscribe__button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Please wait...' : 'Submit'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <h2>Thank you for submitting!</h2>
          )}
          {/* <Formik initialValues={{ country: 'United States', email: '' }}>
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <Field
                name="email"
                type="email"
                placeholder="EMAIL ADDRESS"
                className="subscribe__input"
              />
              <CountryDropdown
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="subscribe__btn-container">
                <button className="subscribe__button" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
        ; */}
        </div>
      </div>
    );
  }
}

export default Subscribe;
