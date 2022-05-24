import { Auth } from 'aws-amplify';

async function signUpMail(props) {
    try {
        const { user } = await Auth.signUp({
            username: props.username,
            password: props.password,
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}