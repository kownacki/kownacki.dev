// @ts-ignore see https://github.com/microsoft/TypeScript/issues/33079
import { noopTag } from 'mk-js-utils';
import { escapeHtml } from '../utils';

const javascript = noopTag;

const codeInput = escapeHtml(`
<input
  type="file"
  accept="image/png, image/jpeg"
>
`.trim());

const codeInputWithId = escapeHtml(`
<input
  id="input"
  type="file"
  accept="image/png, image/jpeg"
>

<button onclick="upload()">
  Upload
</button>
`.trim());

const codeUpload = javascript`
const upload = () => {
  const input = document.getElementById('input');
  input.click();
};
`.trim();

const getInputFile = javascript`
const input = document.getElementById('input');
const file = input.files[0];
`.trim();


export const introduction = `
  So you created a dynamic website which allows your users to add and modify their own content.
  Perhaps they can also upload their own images, for example avatars. You know that people often upload their 
  images straight from their image gallery or camera. These images can be as large as 10+ MB. You thought about 
  sending these images to your backend and then resizing them... but that doesn't seem right, right? What if 
  there was a way to resize them on your user's machine? It turns out there is. We are going to use <input type="file">
  and <canvas>.
`;

// @ts-ignore
window.upload = () => {
  const input = document.getElementById('input');
  input?.click();
}

export const content = `
<h2>Uploading the image</h2>
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
  If you like it, you can leave it, but usually you would use a custom button or other clickable element and trigger
  the real upload input. In that case let's say you have a styled button which is supposed to trigger upload. 
  Make sure you hide <code>${escapeHtml('<input>')}</code> with css <code>display: none;</code>
</p>
<pre><code class="language-markup">${codeInputWithId}</code></pre>
<pre><code class="language-javascript">${codeUpload}</code></pre>
<style>
  .article-test-input {
    display: none;
  }
  .article-test-button {
    background-color: coral;
    border: none;
    color: white;
    padding: 0 32px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
  }
  .article-test-button:hover {
    opacity: 80%;
  }
</style>
<input
  class="article-test-input"
  type="file"
  accept="image/png, image/jpeg"
/>
<button class="article-test-button" onClick="upload()">Upload</button>
<p>
  Then we can access the uploaded file.
</p>
<pre><code class="language-javascript">${getInputFile}</code></pre>
<h2>Resizing the image</h2>
<p>
  Once we have our image loaded in the browser we can start manipulating its parameters. There are two ways to 
  reduce an image's size. First is image quality, the other is resolution (width and height in pixels).
  We will get to both of them, first let's talk about <code>${escapeHtml('<canvas>')}</code> element.
</p>

`;
