import { Form, FormField, TextInput } from 'grommet';

export default () => (
    <Form>
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
    </Form>
  );