const SimpleDateTimeFormat = (date: Date, pattern: string) => {
  const dateString = pattern.replace(/(yyyy|MM|dd|HH|mm|ss|SSS)/g, (match) => {
    let matchString = '';
    switch (match) {
      case 'yyyy':
        matchString = String(date.getFullYear());
        break;
      case 'MM':
        matchString = String(date.getMonth() + 1);
        break;
      case 'dd':
        matchString = String(date.getDate());
        break;
      case 'HH':
        matchString = String(date.getHours());
        break;
      case 'mm':
        matchString = String(date.getMinutes());
        break;
      case 'ss':
        matchString = String(date.getSeconds());
        break;
      case 'SSS':
        matchString = String(date.getMilliseconds());
        break;
      default:
        matchString = match;
        break;
    }
    if (match == 'SSS') {
      if (Number(matchString) < 10) {
        matchString = `00${matchString}`;
      } else if (Number(matchString) < 100) {
        matchString = `0${matchString}`;
      }
    } else if (typeof matchString === 'number' && matchString < 10) {
      matchString = `0${matchString}`;
    }
    return matchString;
  });

  return dateString;
};

const dateConvertor = (date: string) => {
  const writeDate = new Date(date);

  // 초 (밀리초)
  const seconds = 1;
  // 분
  const minute = seconds * 60;
  // 시
  const hour = minute * 60;
  // 일
  const day = hour * 24;

  const today = new Date();
  const elapsedTime = Math.trunc((today.getTime() - writeDate.getTime()) / 1000);

  let elapsedText = '';
  if (elapsedTime < seconds) {
    elapsedText = '방금 전';
  } else if (elapsedTime < minute) {
    elapsedText = `${elapsedTime}초 전`;
  } else if (elapsedTime < hour) {
    elapsedText = `${Math.trunc(elapsedTime / minute)}분 전`;
  } else if (elapsedTime < day) {
    elapsedText = `${Math.trunc(elapsedTime / hour)}시간 전`;
  } else if (elapsedTime < day * 15) {
    elapsedText = `${Math.trunc(elapsedTime / day)}일 전`;
  } else {
    elapsedText = SimpleDateTimeFormat(writeDate, 'yyyy.M.d');
  }

  return elapsedText;
};

export default dateConvertor;
