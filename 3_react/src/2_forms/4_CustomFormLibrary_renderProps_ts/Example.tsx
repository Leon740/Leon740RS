import React, { useRef } from 'react';

import { object, string, array } from 'yup';

import { SiMaildotru } from 'react-icons/si';

import Form from './Form';
import Debug from './Debug';
import InputWrapper from './Input/InputWrapper';
import CheckboxWrapper from './Checkbox/CheckboxWrapper';
import CheckboxGroup from './Checkbox/CheckboxGroup';
import RadioGroup from './Radio/RadioGroup';
import ButtonWrapper from './Button/ButtonWrapper';

import { getErrorMsgFn } from './utils';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  message: 'Default message',
  sex: 'male',
  terms: 'off',
  // hobbies: ''
  hobbies: 'driving, reading, surfing'
};

function Example() {
  const emailRf = useRef<HTMLInputElement>(null);
  const passwordRf = useRef<HTMLInputElement>(null);
  const confirmPasswordRf = useRef<HTMLInputElement>(null);
  const messageRf = useRef<HTMLInputElement>(null);
  const sexRf = useRef<HTMLInputElement>(null);
  const termsRf = useRef<HTMLInputElement>(null);
  const hobbiesRf = useRef<HTMLInputElement>(null);

  const refs = {
    email: emailRf,
    password: passwordRf,
    confirmPassword: confirmPasswordRf,
    message: messageRf,
    sex: sexRf,
    terms: termsRf,
    hobbies: hobbiesRf
  };

  const onSubmitFn = (formData: object) => {
    alert('onSubmitFn');
    alert(formData);
  };

  const onResetFn = () => {
    alert('onResetFn');
  };

  return (
    <div className="container mx-auto px-4">
      <Form
        initialValues={initialValues}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        validationSchema={object().shape({
          email: string().email(getErrorMsgFn('email')).required(getErrorMsgFn('required')),
          password: string()
            .min(8, getErrorMsgFn('minLength', 8))
            .required(getErrorMsgFn('required')),
          confirmPassword: string().when('password', () => {
            if (passwordRf.current?.value) {
              // console.log('if');
              return string().oneOf([passwordRf.current?.value], getErrorMsgFn('confirmPassword'));
            }

            // console.log('else');
            return string().required(getErrorMsgFn('required'));
          }),
          message: string()
            .min(15, getErrorMsgFn('minLength', 15))
            .required(getErrorMsgFn('required')),
          sex: string().required(getErrorMsgFn('required')),
          terms: string().oneOf(['on'], getErrorMsgFn('required')),
          // hobbies: array().of(string()).min(1, getErrorMsgFn('required'))
          hobbies: string().required(getErrorMsgFn('required'))
        })}
        handleSubmitFn={onSubmitFn}
        handleResetFn={onResetFn}
        renderForm={({ values, touched, errors, onChangeFn }) => {
          return (
            <div>
              <div className="flex">
                <Debug name="values" object={values} />
                <Debug name="touched" object={touched} />
                <Debug name="errors" object={errors} />
              </div>

              <InputWrapper
                ref={refs.email}
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                ariaLabel="email input"
                isAsterisk
                description="Type in your email (min 8)"
                icon={<SiMaildotru />}
                touched={touched.email}
                error={errors.email}
                value={values.email}
                onChangeFn={onChangeFn}
              />
              <InputWrapper
                ref={refs.password}
                name="password"
                label={<>Password</>}
                type="password"
                placeholder="Enter your password"
                ariaLabel="password input"
                isAsterisk
                description="Type in your password (min 8)"
                touched={touched.password}
                error={errors.password}
                value={values.password}
                onChangeFn={onChangeFn}
              />
              {values.password.length > 1 && !errors.password && (
                <InputWrapper
                  ref={refs.confirmPassword}
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                  ariaLabel="confirm password input"
                  isAsterisk
                  description="Type in your password (min 8)"
                  touched={touched.confirmPassword}
                  error={errors.confirmPassword}
                  value={values.confirmPassword}
                  onChangeFn={onChangeFn}
                />
              )}
              <InputWrapper
                ref={refs.message}
                name="message"
                label={<>Message</>}
                type="textarea"
                placeholder="Enter your message"
                ariaLabel="message textarea"
                isAsterisk
                description="Type in your message (min 8)"
                touched={touched.message}
                error={errors.message}
                value={values.message}
                onChangeFn={onChangeFn}
              />
              <RadioGroup
                ref={refs.sex}
                name="sex"
                label="Sex"
                isAsterisk
                description="Select your sex"
                options={['male', 'female']}
                touched={touched.sex}
                error={errors.sex}
                value={values.sex}
                onChangeFn={onChangeFn}
              />
              <div className="my-8">
                <CheckboxWrapper
                  ref={refs.terms}
                  id="terms"
                  name="terms"
                  label="I accept Terms & Conditions"
                  ariaLabel="terms checkbox"
                  isAsterisk
                  description={
                    <a href="/" className="underline">
                      Read Terms & Conditions
                    </a>
                  }
                  touched={touched.terms}
                  error={errors.terms}
                  value={values.terms}
                  onChangeFn={onChangeFn}
                />
              </div>
              <CheckboxGroup
                ref={refs.hobbies}
                name="hobbies"
                label="Hobbies"
                isAsterisk
                description="Select your hobbies"
                options={['coding', 'driving', 'reading', 'surfing']}
                touched={touched.hobbies}
                error={errors.hobbies}
                value={values.hobbies}
                onChangeFn={onChangeFn}
              />

              <div className="flex justify-between">
                <ButtonWrapper type="submit" className="bg-green-500">
                  Sign In
                </ButtonWrapper>
                <ButtonWrapper type="reset" className="bg-rose-500">
                  Reset
                </ButtonWrapper>
              </div>

              <div className="flex -mx-4 mt-8">
                {Object.entries(refs).map(([name, ref]) => {
                  return ref.current ? (
                    <ButtonWrapper
                      key={`button__${name}`}
                      type="button"
                      className="bg-yellow-500 mx-4"
                      onClick={() => ref.current?.focus()}
                    >
                      focus on {name}
                    </ButtonWrapper>
                  ) : null;
                })}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}
export default Example;
