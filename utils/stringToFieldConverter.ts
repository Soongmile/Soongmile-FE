import { FieldType } from '@/types/question.type';

const stringToFieldConverter = (string: string) => {
  switch (string) {
    case '백엔드':
      return 'BACKEND' as FieldType;
    case '프론트엔드':
      return 'FRONTEND' as FieldType;
    case '디자인':
      return 'DESIGN' as FieldType;
    case '모바일':
      return 'MOBILE' as FieldType;
    case '기획 / PM':
      return 'PRODUCT_MANAGER' as FieldType;
    case '학교 생활':
      return 'SCHOOL' as FieldType;
    default:
      return string;
  }
};

export default stringToFieldConverter;
