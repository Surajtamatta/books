import { Html, Head, Main, NextScript } from "next/document";
import PrelineScript from "./preline";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <PrelineScript/>
      </body>
    </Html>
  );
}
