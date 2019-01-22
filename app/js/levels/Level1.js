class Level1 {
  constructor(){
    this.map = [
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 1 , 2 , 3 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 4 , 5 , 6 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 7 , 8 , 9 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 13, 0 , 13, 0 , 0 , 0 , 0 , 10, 11, 12, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 13, 0 , 13, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 14, 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
      [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
    ];
    this.tiles = [
      { j: 0, i: 0, walk: true }, //0 - grass
      //tree 1
      { j: 1, i: 0, walk: true }, //1 - left top tree 1
      { j: 2, i: 0, walk: true }, //2 - middle top tree 1
      { j: 3, i: 0, walk: true }, //3 - right top tree 1
      { j: 1, i: 1, walk: true }, //4 - left bottom tree 1
      { j: 2, i: 1, walk: false }, //5 - middle bottom tree 1
      { j: 3, i: 1, walk: true }, //6 - right bottom tree 1
      //tree 2
      { j: 4, i: 0, walk: true }, //7 - left top tree 2
      { j: 5, i: 0, walk: true }, //8 - middle top tree 2
      { j: 6, i: 0, walk: true }, //9 - right top tree 2
      { j: 4, i: 1, walk: true }, //10 - left bottom tree 2
      { j: 5, i: 1, walk: false }, //11 - middle bottom tree 2
      { j: 6, i: 1, walk: true }, //12 - right bottom tree 2
      //water
      { j: 0, i: 1, walk: false }, //13 - water

      { j: 8, i: 2, walk: true }, //14 - finish
      { j: 5, i: 1, walk: true }, //15 - plant2
      { j: 6, i: 1, walk: true }, //16 - stairs
      { j: 7, i: 1, walk: true }, //17 - sand in grass b-r
      { j: 8, i: 1, walk: true }, //18 - sand in grass b
      { j: 9, i: 1, walk: true }, //19 - sand in grass b-l
      { j: 0, i: 0, walk: false }, //20 - left-top water
    //   { j: 1, i: 2, walk: false }, //21 - top water
    //   { j: 2, i: 2, walk: false }, //22 - right-top water
    //   { j: 3, i: 2, walk: true }, //23 - bottom left tree height
    //   { j: 4, i: 2, walk: true }, //24 - bottom right tree height
    //   { j: 5, i: 2, walk: true }, //25 - plant3
    //   { j: 6, i: 2, walk: true }, //26 - zero
    //   { j: 7, i: 2, walk: true }, //27 - zero
    //   { j: 8, i: 2, walk: true }, //28 - bridge
    //   { j: 0, i: 3, walk: true }, //29 - bottom-left water
    //   { j: 1, i: 3, walk: true }, //30 - bottom-left water
    //   { j: 2, i: 3, walk: true } //31 - bottom-right water
    ];
    // this.overflowBG = [
    //   { j: 1, i: 0, walk: true }, //1 - left top tree 1
    //   { j: 2, i: 0, walk: true }, //2 - middle top tree 1
    //   { j: 3, i: 0, walk: true }, //3 - right top tree 1
    //   { j: 1, i: 1, walk: true }, //4 - left bottom tree 1
    //   { j: 2, i: 1, walk: false }, //5 - middle bottom tree 1
    //   { j: 3, i: 1, walk: true }, //6 - right bottom tree 1
    //   //tree 2
    //   { j: 4, i: 0, walk: true }, //7 - left top tree 2
    //   { j: 5, i: 0, walk: true }, //8 - middle top tree 2
    //   { j: 6, i: 0, walk: true }, //9 - right top tree 2
    //   { j: 4, i: 1, walk: true }, //10 - left bottom tree 2
    //   { j: 6, i: 1, walk: true }, //12 - right bottom tree 2
    // ];
  }
}

export default Level1;