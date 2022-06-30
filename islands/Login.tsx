/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Nom d'utilisateur"/>
        <input type="password" placeholder="Mot de passe" />
      </form>
    </div>
  )
}
