import React from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack
} from '@chakra-ui/react';
import * as Yup from 'yup';
import FullScreenSection from './FullScreenSection';
import { useAlertContext } from '../context/alertContext';
import Resources from '../Resources';
import { Styles } from '../Styles';
import useSubmit from "../hooks/useSubmit";
import { useEffect } from 'react';



const ContactMeProps = {
  container: {
    ...Styles.contactMeSection.container,
  },
  formContainer: {
    ...Styles.contactMeSection.formContainer,
  },
  heading: {
    ...Styles.contactMeSection.heading,
    children: Resources.contactMeSection.text.heading,
  },
  form: {
    ...Styles.contactMeSection.form,
  },
  formControl: {
    ...Styles.contactMeSection.formControl,
  },
  formLabel: {
    name: {
      htmlFor: Resources.contactMeSection.ids.firstName,
      children: Resources.contactMeSection.text.nameLabel,
    },
    email: {
      htmlFor: Resources.contactMeSection.ids.email,
      children: Resources.contactMeSection.text.emailLabel,
    },
    type: {
      htmlFor: Resources.contactMeSection.ids.type,
      children: Resources.contactMeSection.text.typeLabel,
    },
    comment: {
      htmlFor: Resources.contactMeSection.ids.comment,
      children: Resources.contactMeSection.text.messageLabel,
    },
  },
  input: {
    name: {
      id: Resources.contactMeSection.ids.firstName,
      name: Resources.contactMeSection.ids.firstName,
    },
    email: {
      id: Resources.contactMeSection.ids.email,
      name: Resources.contactMeSection.ids.email,
      type: Resources.contactMeSection.ids.email,
    },
    type: {
      id: Resources.contactMeSection.ids.type,
      name: Resources.contactMeSection.ids.type,
    },
    comment: {
      id: Resources.contactMeSection.ids.comment,
      name: Resources.contactMeSection.ids.comment,
      height: Styles.contactMeSection.input.height,
    }
  },
  button: {
    ...Styles.contactMeSection.button,
    children: Resources.contactMeSection.text.submitButton,
  },
  options: {
    hireMe: Resources.contactMeSection.options.hireMe,
    openSource: Resources.contactMeSection.options.openSource,
    other: Resources.contactMeSection.options.other,
  },
};


const ContactMeSection = () => {

  const { onOpen } = useAlertContext();
  const { isLoading, response, submit } = useSubmit();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    onSubmit: async (values, actions) => {

      await submit("", values); // Use submit directly 
      actions.setSubmitting(false);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(Resources.contactMeSection.text.firstNameRequired),
      email: Yup.string().email(Resources.contactMeSection.text.invalidEmail).required(Resources.contactMeSection.text.emailRequired),
      type: Yup.string().required(Resources.contactMeSection.text.typeRequired),
      comment: Yup.string().required(Resources.contactMeSection.text.commentRequired),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.type === 'success') {
        formik.resetForm();
      }
      onOpen(response.type, response.message);
    }
  }, [response  ]);

  return (
    <FullScreenSection {...ContactMeProps.container} isDarkBackground >
      <VStack {...ContactMeProps.formContainer} id='contactme-section'  >
        <Heading {...ContactMeProps.heading} />
        <Box {...ContactMeProps.form}>
          <form onSubmit={formik.handleSubmit}>
            <VStack {...ContactMeProps.formControl} >
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel {...ContactMeProps.formLabel.name} />
                <Input {...ContactMeProps.input.name} {...formik.getFieldProps(Resources.contactMeSection.ids.firstName)} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel {...ContactMeProps.formLabel.email} />
                <Input {...ContactMeProps.input.email} {...formik.getFieldProps(Resources.contactMeSection.ids.email)} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && !!formik.errors.type}>
                <FormLabel {...ContactMeProps.formLabel.type} />

                <Select {...ContactMeProps.input.type} {...formik.getFieldProps(Resources.contactMeSection.ids.type)}
                  sx={{
                    bg: Styles.contactMeSection.container.backgroundColor,
                    option: {
                      bg: Styles.contactMeSection.container.backgroundColor, // Background color for the options
                      _hover: {
                        bg: Styles.contactMeSection.container.backgroundColor, // Background color on hover
                      },
                    },
                  }} >
                  <option value={"none"}>{""}</option>
                  <option value={Resources.contactMeSection.ids.hireMe}>{ContactMeProps.options.hireMe}</option>
                  <option value={Resources.contactMeSection.ids.openSource} >{ContactMeProps.options.openSource}</option>
                  <option value={Resources.contactMeSection.ids.other}>{ContactMeProps.options.other}</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel {...ContactMeProps.formLabel.comment} />
                <Textarea {...ContactMeProps.input.comment} {...formik.getFieldProps(Resources.contactMeSection.ids.comment)} />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button {...ContactMeProps.button} isLoading={formik.isSubmitting} />
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
