import { FieldType } from '@/types/question.type';

const fieldConverter = (field: FieldType) => {
  switch (field) {
    case 'BACKEND':
      return '백엔드';
    case 'FRONTEND':
      return '프론트엔드';
    case 'DESIGN':
      return '디자인';
    case 'MOBILE':
      return '모바일';
    case 'PRODUCT_MANAGER':
      return '기획 / PM';
    case 'SCHOOL':
      return '학교 생활';
    default:
      return field;
  }
};

export default fieldConverter;
