import { createBrowserRouter } from "react-router";
import { AccountPicker } from "./components/AccountPicker";
import { SignIn } from "./components/SignIn";
import { EnterPassword } from "./components/EnterPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AccountPicker,
  },
  {
    path: "/sign-in",
    Component: SignIn,
  },
  {
    path: "/password",
    Component: EnterPassword,
  },
]);
