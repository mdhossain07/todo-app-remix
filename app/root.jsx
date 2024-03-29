// import { cssBundleHref } from "@remix-run/css-bundle";
import styles from './styles/main.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import MainNavigation from "./components/MainNavigation";

// export const links = () => [
//   ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
// ];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <MainNavigation/>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


export function links () {
  return[{rel: "stylesheet", href: styles}]
}