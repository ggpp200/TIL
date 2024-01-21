const DiaryItem = ({
  onDelete,
  id,
  author,
  content,
  emotion,
  created_date}

) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자: {author}| 감정 : {emotion}</span>
        <div className="date">작성시간 : {new Date(created_date).toLocaleString()}
        </div>
      </div>
      <div className="content">일기 : {content}</div>
      <button
        onClick={() => {
          console.log(id)
          if(window.confirm(`${id}번째 일기를 정말 삭제하겠습니까?`)) {onDelete(id)};
          }}>삭제하기
          
      </button>
      <br />
    </div>
  );
}

export default DiaryItem;