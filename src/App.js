import './App.css';
import { useRef, useState } from "react";
import DiaryEditor from'./component/DiaryEditor';
import DiaryList from './component/DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: "저자1",
//     content: "내용1",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "저자2",
//     content: "내용2",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "저자3",
//     content: "내용3",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "저자4",
//     content: "내용4",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 5,
//     author: "저자5",
//     content: "내용5",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   }
// ]



function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0)
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data])
  }

  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);

  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList onDelete={onDelete} diaryList={data}></DiaryList>
    </div>
  );
}

export default App;
