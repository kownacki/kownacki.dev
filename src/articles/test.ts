const code = `onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'Facebook',
  };
};`

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
    To upload an image we need to create
    <pre><code class="language-javascript">${code}</code></pre>
  </p>
`;
