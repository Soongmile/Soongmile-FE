import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { RefObject, useRef } from 'react';

interface MarkdownEditorProps {
  onChange: (editorRef: RefObject<Editor>) => void;
}

const MarkdownEditor = ({ onChange }: MarkdownEditorProps) => {
  const editorRef = useRef<Editor>(null);

  return (
    <Editor
      ref={editorRef}
      onChange={() => onChange(editorRef)}
      // initialValue="hello react editor world!"
      previewStyle="tab"
      height="600px"
      initialEditType="markdown"
      language="ko-KR"
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'link'],
        ['code', 'codeblock'],
        ['scrollSync'],
      ]}
      useCommandShortcut
    />
  );
};

export default MarkdownEditor;
