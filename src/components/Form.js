import { Form, FormField, TextInput } from 'grommet';
import './Header.css';

export default () => (
    <Form>
        <h2 id="sign">Sign Up</h2>
        <FormField label='First Name'>
            <TextInput />
        </FormField>
        <FormField label='Last Name'>
            <TextInput />
        </FormField>
        <FormField label='Age'>
            <TextInput />
        </FormField>
        <FormField label='Email'>
            <TextInput />
        </FormField>
        <FormField label='Interests'>
            <TextInput />
        </FormField>
        <FormField label='Languages'>
            <TextInput />
        </FormField>
    </Form>
  );