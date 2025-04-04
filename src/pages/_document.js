import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />      
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, t, h, s, n) {
              if (!w[n]) {
                w.FlodeskObject = n;
                var fn = function() {
                  (w[n].q = w[n].q || []).push(arguments);
                };
                w[n] = w[n] || fn;
                var f = d.getElementsByTagName(t)[0];
                var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
                var sm = d.createElement(t);
                sm.async = true;
                sm.type = 'module';
                sm.src = h + s + '.mjs' + v;
                f.parentNode.insertBefore(sm, f);
                var sn = d.createElement(t);
                sn.async = true;
                sn.noModule = true;
                sn.src = h + s + '.js' + v;
                f.parentNode.insertBefore(sn, f);
              }
            })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
          `
        }}
      />
    </Html>
  );
}
