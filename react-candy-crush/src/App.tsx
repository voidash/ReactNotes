import { useState, useEffect } from "react"
import Draggable from 'react-draggable';


const width = 8;
const candyColors = [
  'blue',
  'red',
  'green',
  'yellow',
  'orange',
  'purple'
]

function App() {

  const [board, setBoard] = useState([]! as string[]);
  const [dragged,setDragged] = useState(document.createElement("img"));
  const [replaced, setReplaced] = useState(document.createElement("img"));


  const dragStart = (e: any | Event) => {
    setDragged(e.target);
  }

  const dragDrop = (e: any) => {
    setReplaced(e.target);
  }

  const dragEnd = (e: any) => {
    const replacedId = parseInt(replaced.getAttribute('data-id')! as string);
    const draggedId = parseInt(dragged.getAttribute('data-id')! as string);
    const validMoves = [
      draggedId - 1,
      draggedId + 1,
      draggedId + width,
      draggedId - width,
    ];

    if (validMoves.includes(replacedId)) {
      let buffer = board[replacedId];
      board[replacedId] = board[draggedId];
      board[draggedId] = buffer;
    }

  }

  const moveIntoSquareBelow = () => {
    for (let index = 0; index < 64-width; index++) {
      const firstRow = [0,1,2,3,4,5,6,7];
      const isFirtsRow = firstRow.includes(index);
      if (isFirtsRow && board[index] === '') {
        board[index] = candyColors[Math.floor( Math.random() * candyColors.length)];
      }

      if (board[index + width] === '') {
        board[index + width] = board[index];
        board[index] = '';
      }
    }
  }

  const checkForRowOfFour = () => {
    for (let i = 0; i < 64; i++) {

      const rowOfFour = [i, i+1,i+2,i+3];
      const decidedColor = board[i];

      const notValid = [6,7,14,15,22,23,30,31,38,39,46,47,54,55,63,64];
      if (notValid.includes(i)) continue;
      if(rowOfFour.every(square => board[square] === decidedColor)) {
        rowOfFour.forEach(square => board[square] = '')
        return true;
      }
    }
  }
  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i+1,i+2];
      const decidedColor = board[i];
      const notValid = [5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55,62,63,64];
      if (notValid.includes(i)) continue;
      if(rowOfThree.every(square => board[square] === decidedColor)) {
        rowOfThree.forEach(square => board[square] = '')
        return true;


      }
    }
  }

  const checkForColumnOfFour = () => {
    for (let i = 0; i < 39; i++) {
      const columnOfFour = [i, i+width, i +width*2, i+width*3];
      const decidedColor = board[i];

      if(columnOfFour.every(square => board[square] === decidedColor)) {
        columnOfFour.forEach(square => board[square] = '')
        return true;
      }
    }
  }

  const checkForColumnOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i+width, i +width*2];
      const decidedColor = board[i];

      if(columnOfThree.every(square => board[square] === decidedColor)) {
        columnOfThree.forEach(square => board[square] = '')
        return true;
      }
    }
  }

  let generateRandomBoard = () => {
    let myBoard = [];
    for (let index = 0; index < width* width; index++) {
      let randomValue = Math.floor(Math.random() * candyColors.length);
      myBoard.push(candyColors[randomValue]);
    }
    setBoard(myBoard);
  }


  //when component mounts
  useEffect(() => {
    generateRandomBoard()
  }, [])


  useEffect(() => {
     const timer = setInterval(() => {
      checkForColumnOfThree();
      checkForColumnOfFour();
      checkForRowOfFour();
      checkForRowOfThree();
      moveIntoSquareBelow();
      setBoard([...board]);
     }, 100);

     return () => clearInterval(timer)
  }, [board,dragged,checkForColumnOfThree,checkForColumnOfFour,checkForRowOfThree,checkForRowOfFour])


  return (
    <div className="app">
      <div className="game">
          {board.map((color, index)=> {
            return (
              <img className="img" key={index} 
              style={{backgroundColor: color}}
              alt={color}
              data-id={index}
              draggable={true}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDrop={(e) => dragDrop(e) }
              onDragEnd ={(e) => dragEnd(e) }
              onDragStart ={(e) => dragStart(e) }
              />
            );
          })}

      </div>
    </div>
  )
}

export default App
