// @ts-ignore see https://github.com/microsoft/TypeScript/issues/33079
import { noopTag } from 'mk-js-utils';
import { escapeHtml } from '../utils';

const javascript = noopTag;

const codeInput = escapeHtml(`<input
  type="file"
  accept="image/png, image/jpeg"
>
`);

const codeInputWithId = escapeHtml(`<input
  id="input"
  type="file"
  accept="image/png, image/jpeg"
>

<button onclick="upload()">
  Upload
</button>
`);

const codeUpload = javascript`const upload = () => {
  const input = document.getElementById('input');
  input.click();
};`;

export const introduction = `
  So you created a dynamic website which allows your users to add and modify their own content.
  Perhaps they can also upload their own images, for example avatars. You know that people often upload their 
  images straight from their image gallery or camera. These images can be as large as 10+ MB. You thought about 
  sending these images to your backend and then resizing them... but that doesn't seem right, right? What if 
  there was a way to resize them on your user's machine? It turns out there is. We are going to use <input type="file">
  and <canvas>.
`;

export const content = `
<h2>Upload image</h2>
<p>
  To upload an image we need to create an input.
</p>
<pre><code class="language-markup">${codeInput}</code></pre>
<p>
  Which is going to render like this:
</p>
<input
  type="file"
  accept="image/png, image/jpeg"
>
<p>
  If you like it, you can leave it, but usually you would use a custom button or other clickable element and trigger.
  In that case let's say you have a styled button which is supposed to trigger upload. Make sure you hide 
  <code>${escapeHtml(`<input>`)}</code> with
  css <code>display: none;</code>
</p>
<pre><code class="language-markup">${codeInputWithId}</code></pre>
<pre><code class="language-javascript">${codeUpload}</code></pre>
`;
