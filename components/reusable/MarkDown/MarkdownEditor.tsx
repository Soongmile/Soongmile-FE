import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';

const MarkdownEditor = () => {
  const editorRef = useRef<Editor>(null);

  return (
    <Editor
      ref={editorRef}
      // initialValue="hello react editor world!"
      previewStyle="tab"
      height="600px"
      initialEditType="markdown"
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
