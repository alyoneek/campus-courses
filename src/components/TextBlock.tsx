import DOMPurify from "dompurify";
import { FC } from "react";

interface TextBlockProps {
  text: string;
}

const TextBlock: FC<TextBlockProps> = ({ text }) => {
  const createMarkup = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return <div dangerouslySetInnerHTML={createMarkup(text)}></div>;
};

export default TextBlock;
