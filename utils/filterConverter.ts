const filterConverter = (filterName: string) => {
  switch (filterName) {
    case '제목':
      return 'title';
    case '내용':
      return 'content';
    case '제목+내용':
      return 'both';
    default:
      break;
  }
  return 0;
};

export default filterConverter;
