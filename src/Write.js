import React from 'react';
import { CKEditor, ClassicEditor } from '@ckeditor/ckeditor5-react';

export const Write = () => {
  return (
    <div>
      <h1> 글 작성 </h1>
      <div className="form-wrapper">
        <input className="title-input" type="text" placeholder="제목" />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor5!<p>"
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        ></CKEditor>
      </div>
      <button className="submit-button">완료</button>
    </div>
  );
};

export default Write;
