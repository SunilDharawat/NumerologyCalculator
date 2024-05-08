import React, { useState } from "react";
import Content from "./Content";


const Container = (props) => {
  const [input, Setinput] = useState();
  const [output, setOutput] = useState([]);
  const click = (e) => {
    Setinput(e.target.value);
  };
  function isVowel(letter) {
    return (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    );
  }
  const addEvent = () => {
    const numbers = {
      a: 1,
      i: 1,
      j: 1,
      q: 1,
      y: 1,
      b: 2,
      k: 2,
      r: 2,
      c: 3,
      g: 3,
      l: 3,
      s: 3,
      d: 4,
      m: 4,
      t: 4,
      e: 5,
      h: 5,
      n: 5,
      x: 5,
      u: 6,
      v: 6,
      w: 6,
      o: 7,
      z: 7,
      f: 8,
      p: 8,
    };
    
    let str = input.toString().toLowerCase();
    let compound_num = [...str]
      .map((c) => numbers[c] || 0)
      .reduce((a, b) => a + b, 0 )
    let outputArray = [];
    for (let char of str) {
           outputArray.push(
        <p key={char}>
         [{numbers[char] || 0}]
        </p>
      ); 
    }
    setOutput(outputArray);
  
    // console.log(compound_num);

     let destiny_num = 0;
     let value = compound_num;
     while (value) {
       destiny_num += value % 10;
       value = Math.floor(value / 10);
     }
    //  console.log(destiny_num);

     var consonants = [];
     var vowels = [];

     for (var letter of input) {
       if (isVowel(letter)) {
         vowels.push(letter);
       } else {
         consonants.push(letter);
       }
     }
     let vowel_str = vowels.toString().toLowerCase();
     let soul_num = [...vowel_str]
       .map((c) => numbers[c] || 0)
       .reduce((a, b) => a + b, 0);
      // console.log(soul_num);

     let const_str = consonants.toString().toLowerCase();
     let const_str1 = [...const_str]
       .map((c) => numbers[c] || 0)
      .reduce((a, b) => a + b, 0);


    let dream_num = 0;
    let value1 = const_str1;
     while (value1) {
       dream_num += value1 % 10;
       value1 = Math.floor(value1 / 10);

     }

    //  console.log(dream_num);

     props.data1({
       compound_num: compound_num,
       destiny_num: destiny_num,
       soul_num: soul_num,
       dream_num: dream_num,
       input: input,
       outputArray: outputArray
     });
     <Content/>
  };
    
    
    
  return (
    <>
      <div className="container">
        <h2>Name Number Numerology Calculator </h2>
        <label className="label1">Enter your name : </label>
        <input
          type="text"
          placeholder="Enter your name here"
          onChange={click}
          value={input}
        />
        <br />
        <button
          className="btn"
          onClick={addEvent}
        >Calculate</button>
      </div>
    </>
  );

};
export default Container;