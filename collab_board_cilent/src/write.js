import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const Write = () => {
  return (
    <div>
      <h1> 글 작성 </h1>
      <input id='content_title'></input>
      <CKEditor
        editor={ClassicEditor}
        data=""
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
      <button className="submit-button">완료</button>
    </div>
  );
};

export default Write;
