import { Editor } from "@tinymce/tinymce-react";
// import DOMPurify from "dompurify";
import { FC } from "react";

// const createMarkup = (html) => {
//   return {
//     __html: DOMPurify.sanitize(html),
//   };
// };

const plugins = [
  "advlist",
  "autolink",
  "lists",
  "link",
  "image",
  "charmap",
  "preview",
  "anchor",
  "searchreplace",
  "visualblocks",
  "code",
  "fullscreen",
  "insertdatetime",
  "media",
  "table",
  "code",
  "wordcount",
  "help",
];

const API_KEY = "5xseznzfpmp62othl0rzgmxyk726vaiki19olt3tyuajbukw";

const toolbar =
  "undo redo | blocks | " +
  "bold italic forecolor backcolor blockquote | alignleft aligncenter " +
  "alignright alignjustify | link image media | bullist numlist outdent indent | " +
  "removeformat";

interface TextEditorProps {
  onChange: (value: string) => void;
}

const TextEditor: FC<TextEditorProps> = ({ onChange }) => {
  return (
    <>
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(content)}
      ></div> */}
      <Editor
        apiKey={API_KEY}
        onChange={(e) => onChange(e.target.getContent())}
        init={{
          height: 200,
          menubar: true,
          branding: false,
          plugins: plugins,
          toolbar: toolbar,
        }}
      />
    </>
  );
};

export default TextEditor;
