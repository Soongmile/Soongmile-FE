import { FieldType, QuestionWriteRequest } from '@/types/question.type';
import { RefObject, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';

const useQuestionWrite = () => {
  const [writeForm, setWriteForm] = useState<QuestionWriteRequest>({
    title: '',
    content: '',
    field: [],
    fileIds: [],
    tag: [],
  });

  const handleTitle = (value: string) => {
    setWriteForm({ ...writeForm, title: value });
  };

  const handleContent = (editorRef: RefObject<Editor>) => {
    const data = editorRef?.current?.getInstance().getMarkdown();
    setWriteForm({ ...writeForm, content: data as string });
  };

  const handleField = (value: FieldType[]) => {
    setWriteForm({ ...writeForm, field: [...value] });
  };

  const handleTag = (value: string[]) => {
    setWriteForm({ ...writeForm, tag: value });
  };

  return {
    writeForm,
    handleTitle,
    handleContent,
    handleField,
    handleTag,
  };
};

export default useQuestionWrite;
