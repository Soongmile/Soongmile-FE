import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

interface MarkdownViewerProps {
  content?: string;
}

const MarkdownViewer = ({ content }: MarkdownViewerProps) => {
  return <Viewer initialValue={content} />;
};

export default MarkdownViewer;
