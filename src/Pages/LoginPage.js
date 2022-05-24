import { Auth } from "aws-amplify";
import { signUpMail } from "./components/mailAuth";

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginUser}>
        <input name="username"
        />
        <input
          name="password"
        />
        <button>Login</button>
      </form>

      <h1>Auth wiht social media</h1>
      <button onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}>
        Sign In with Facebook
      </button>

      <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
        Sign In with Google
      </button>
    </div>
  );
}

async function handleLoginUser(event) {
  event.preventDefault();
  let form = new FormData(event.target);
  console.log("hadlerlogin: ",form.get('username'), " :",form.get('password') );
  try {
    const { user } = await Auth.signUp({
        username: form.get('username'),
        password: form.get('password'),
    });
    console.log(user);
} catch (error) {
    console.log('error signing up:', error);
}
}

export default LoginPage;
