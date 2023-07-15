import React from 'react';
import Categorys from '@/components/shared/category';
import TextField from '@mui/material/TextField';
import Button from '@/components/shared/button';
import {styled} from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const CustomTextField = styled(TextField)<{width?:string}>`
  width: ${({width})=>width || '100%'};
  border-radius: 0;
  & label.Mui-focused {
    color: #1FD4AB;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: gray;
    }
  }
`;


const MessageUs = () => {


    const YupValidationSchema = Yup.object({
        firstName: Yup.string().max(15, '15 characters or less').required('Required'),
        lastName: Yup.string().max(20, '20 characters or less').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        validationSchema: YupValidationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
    });


    return (
        <Categorys title="Message us" subTitle="Get in touch">
            <form className='flex flex-col  gap-8 w-[30%] my-12' onSubmit={formik.handleSubmit}>
                <div className='flex justify-between'>
                <CustomTextField
                 error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                 width='49%'
                 label="firstName"
                 variant="outlined" 
                 {...formik.getFieldProps('firstName')}
                 />
                 <CustomTextField
                 error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                 width='49%'
                 id="lastName"
                 label="lastName" 
                 variant="outlined" 
                 {...formik.getFieldProps('lastName')}
                 />
                </div>
                <CustomTextField
                 error={formik.touched.email && Boolean(formik.errors.email)}
                 id="email"
                 label="Email" 
                 variant="outlined" 
                 {...formik.getFieldProps('email')}
                 />
                <CustomTextField
                 error={formik.touched.message && Boolean(formik.errors.message)}
                 id="message"
                 label="messages"
                 multiline
                 rows={4}
                 variant="outlined"
                 defaultValue="message"
                 {...formik.getFieldProps('message')}
                />
                <Button type="submit">
                 send
               </Button>
            </form>
        </Categorys>
    );
};

export default MessageUs;