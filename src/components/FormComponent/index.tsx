import { useForm } from '../../hooks';
import {
    FormContainer,
    FormLabel,
    FormRow,
    StyledButton,
    StyledContainer,
    StyledInput,
} from '../../styles';

const initialForm = {
    name: 'Andy Montalvo',
    age: 30,
    email: 'andy@mail.com',
};

const FormComponent = () => {
    const [formValues, handleInputChange, reset] = useForm(initialForm);
    const { name, email, age } = formValues as any;

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(JSON.stringify(formValues, null, 4));
    };

    return (
        <StyledContainer>
            <form onSubmit={handleSubmit}>
                <FormContainer>
                    <FormRow>
                        <FormLabel htmlFor="name">Name:</FormLabel>
                        <StyledInput
                            className="input"
                            name="name"
                            type="text"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={name}
                        />
                    </FormRow>
                    <FormRow>
                        <FormLabel htmlFor="name">Email:</FormLabel>
                        <StyledInput
                            className="input"
                            name="email"
                            type="email"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={email}
                        />
                    </FormRow>
                    <FormRow>
                        <FormLabel htmlFor="name">Age:</FormLabel>
                        <StyledInput
                            className="input"
                            name="age"
                            type="number"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={age}
                        />
                    </FormRow>
                </FormContainer>
                <StyledButton className="btn" type="submit">
                    Submit
                </StyledButton>
                <StyledButton type="button" className="btn" onClick={reset}>
                    Reset
                </StyledButton>
            </form>
        </StyledContainer>
    );
};

export default FormComponent;
