import postFile from '@/apis/postFile';
import '@toast-ui/editor/dist/toastui-editor.css';
import { HookCallback } from '@toast-ui/editor/types/editor';
import { Editor } from '@toast-ui/react-editor';
import { RefObject, useRef } from 'react';

interface MarkdownEditorProps {
  onChange: (editorRef: RefObject<Editor>) => void;
}

const MarkdownEditor = ({ onChange }: MarkdownEditorProps) => {
  const editorRef = useRef<Editor>(null);

  const onUploadImage = async (blob: Blob, callback: HookCallback) => {
    const url = await postFile(blob);
    callback(url, blob.name);
    return false;
  };

  return (
    <Editor
      ref={editorRef}
      onChange={() => onChange(editorRef)}
      initialValue=""
      previewStyle="tab"
      height="600px"
      initialEditType="markdown"
      language="ko-KR"
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
        ['scrollSync'],
      ]}
      useCommandShortcut
      hooks={{
        addImageBlobHook: onUploadImage,
      }}
    />
  );
};

export default MarkdownEditor;
