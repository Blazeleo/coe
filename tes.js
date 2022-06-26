var doneList = [];
  for (let i = 0; i < 6; i++) doneList.push([[],[]]);
var dayList = [{"id":1,"name":"Aigneis","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Orange","morn":0,"aft":0},
{"id":2,"name":"Kylila","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Indigo","morn":0,"aft":0},
{"id":3,"name":"Chaddie","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Puce","morn":0,"aft":0},
{"id":4,"name":"Finn","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Aquamarine","morn":0,"aft":0},
{"id":5,"name":"Tallie","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Teal","morn":0,"aft":0},
{"id":6,"name":"Faunie","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Crimson","morn":0,"aft":0},
{"id":7,"name":"Joyce","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Orange","morn":0,"aft":0},
{"id":8,"name":"Bendix","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Orange","morn":0,"aft":0},
{"id":9,"name":"Melvin","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Pink","morn":0,"aft":0},
{"id":10,"name":"Audrye","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Pink","morn":0,"aft":0},
{"id":11,"name":"Erl","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Crimson","morn":0,"aft":0},
{"id":12,"name":"Reeta","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Violet","morn":0,"aft":0},
{"id":13,"name":"Nichols","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Pink","morn":0,"aft":0},
{"id":14,"name":"Ardyce","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Blue","morn":0,"aft":0},
{"id":15,"name":"Netty","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Orange","morn":0,"aft":0},
{"id":16,"name":"Margarita","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Goldenrod","morn":0,"aft":0},
{"id":17,"name":"Lyda","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Crimson","morn":0,"aft":0},
{"id":18,"name":"Prescott","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Purple","morn":0,"aft":0},
{"id":19,"name":"Cross","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Puce","morn":0,"aft":0},
{"id":20,"name":"Leonhard","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Yellow","morn":0,"aft":0},
{"id":21,"name":"Deck","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Teal","morn":0,"aft":0},
{"id":22,"name":"Katey","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Aquamarine","morn":0,"aft":0},
{"id":23,"name":"Eliza","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Puce","morn":0,"aft":0},
{"id":24,"name":"Had","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Goldenrod","morn":0,"aft":0},
{"id":25,"name":"Barb","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Khaki","morn":0,"aft":0},
{"id":26,"name":"Zed","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Green","morn":0,"aft":0},
{"id":27,"name":"Hew","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Red","morn":0,"aft":0},
{"id":28,"name":"Starlin","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Blue","morn":0,"aft":0},
{"id":29,"name":"Anatollo","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Goldenrod","morn":0,"aft":0},
{"id":30,"name":"Melania","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Mauv","morn":0,"aft":0},
{"id":31,"name":"Lauryn","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Violet","morn":0,"aft":0},
{"id":32,"name":"Pierce","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Teal","morn":0,"aft":0},
{"id":33,"name":"Peter","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Green","morn":0,"aft":0},
{"id":34,"name":"Stephen","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Mauv","morn":0,"aft":0},
{"id":35,"name":"Muire","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Puce","morn":0,"aft":0},
{"id":36,"name":"Antonietta","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Goldenrod","morn":0,"aft":0},
{"id":37,"name":"Craggy","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Fuscia","morn":0,"aft":0},
{"id":38,"name":"Gusta","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Maroon","morn":0,"aft":0},
{"id":39,"name":"Millicent","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Crimson","morn":0,"aft":0},
{"id":40,"name":"Berri","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Crimson","morn":0,"aft":0},
{"id":41,"name":"Guss","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Purple","morn":0,"aft":0},
{"id":42,"name":"Solomon","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Goldenrod","morn":0,"aft":0},
{"id":43,"name":"Kipper","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Goldenrod","morn":0,"aft":0},
{"id":44,"name":"Brenn","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Khaki","morn":0,"aft":0},
{"id":45,"name":"Walden","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Turquoise","morn":0,"aft":0},
{"id":46,"name":"Shaughn","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Indigo","morn":0,"aft":0},
{"id":47,"name":"Jae","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Crimson","morn":0,"aft":0},
{"id":48,"name":"Zaccaria","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Blue","morn":0,"aft":0},
{"id":49,"name":"Barr","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Blue","morn":0,"aft":0},
{"id":50,"name":"Cymbre","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Yellow","morn":0,"aft":0},
{"id":51,"name":"Miquela","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Yellow","morn":0,"aft":0},
{"id":52,"name":"Marmaduke","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Khaki","morn":0,"aft":0},
{"id":53,"name":"Matias","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Crimson","morn":0,"aft":0},
{"id":54,"name":"Francesca","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Aquamarine","morn":0,"aft":0},
{"id":55,"name":"Neely","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Pink","morn":0,"aft":0},
{"id":56,"name":"Alon","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Fuscia","morn":0,"aft":0},
{"id":57,"name":"Hedwig","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Yellow","morn":0,"aft":0},
{"id":58,"name":"Otto","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Purple","morn":0,"aft":0},
{"id":59,"name":"Seumas","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Orange","morn":0,"aft":0},
{"id":60,"name":"Jilly","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Maroon","morn":0,"aft":0},
{"id":61,"name":"Veronica","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Yellow","morn":0,"aft":0},
{"id":62,"name":"Torrey","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Mauv","morn":0,"aft":0},
{"id":63,"name":"Desmund","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Pink","morn":0,"aft":0},
{"id":64,"name":"Simone","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Crimson","morn":0,"aft":0},
{"id":65,"name":"Bria","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Purple","morn":0,"aft":0},
{"id":66,"name":"Kendall","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Indigo","morn":0,"aft":0},
{"id":67,"name":"Shepard","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Indigo","morn":0,"aft":0},
{"id":68,"name":"Ange","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Khaki","morn":0,"aft":0},
{"id":69,"name":"Evangelin","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Goldenrod","morn":0,"aft":0},
{"id":70,"name":"Marcelia","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Mauv","morn":0,"aft":0},
{"id":71,"name":"Suzette","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Turquoise","morn":0,"aft":0},
{"id":72,"name":"Victoria","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Maroon","morn":0,"aft":0},
{"id":73,"name":"Clementine","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Pink","morn":0,"aft":0},
{"id":74,"name":"Vaughan","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Crimson","morn":0,"aft":0},
{"id":75,"name":"Addy","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Maroon","morn":0,"aft":0},
{"id":76,"name":"Sonnnie","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Green","morn":0,"aft":0},
{"id":77,"name":"Amandy","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Pink","morn":0,"aft":0},
{"id":78,"name":"Brose","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Khaki","morn":0,"aft":0},
{"id":79,"name":"Karla","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Crimson","morn":0,"aft":0},
{"id":80,"name":"Perl","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Crimson","morn":0,"aft":0},
{"id":81,"name":"Wendi","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Indigo","morn":0,"aft":0},
{"id":82,"name":"Tanitansy","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Green","morn":0,"aft":0},
{"id":83,"name":"Todd","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Turquoise","morn":0,"aft":0},
{"id":84,"name":"Nicko","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Turquoise","morn":0,"aft":0},
{"id":85,"name":"Alistair","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Pink","morn":0,"aft":0},
{"id":86,"name":"Noble","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Teal","morn":0,"aft":0},
{"id":87,"name":"Reinald","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Puce","morn":0,"aft":0},
{"id":88,"name":"Berrie","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Khaki","morn":0,"aft":0},
{"id":89,"name":"Nat","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Red","morn":0,"aft":0},
{"id":90,"name":"Teodoro","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Purple","morn":0,"aft":0},
{"id":91,"name":"Dore","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Puce","morn":0,"aft":0},
{"id":92,"name":"Gilberta","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Khaki","morn":0,"aft":0},
{"id":93,"name":"Sapphire","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Red","morn":0,"aft":0},
{"id":94,"name":"Teodor","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Maroon","morn":0,"aft":0},
{"id":95,"name":"Clerkclaude","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Red","morn":0,"aft":0},
{"id":96,"name":"Kaila","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Violet","morn":0,"aft":0},
{"id":97,"name":"Freddy","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Orange","morn":0,"aft":0},
{"id":98,"name":"Aurelea","day_session_count":0,"total_count":0,"desig":"Assistant Professor","dept":"Pink","morn":0,"aft":0},
{"id":99,"name":"Noell","day_session_count":0,"total_count":0,"desig":"Associate Professor","dept":"Turquoise","morn":0,"aft":0},
{"id":100,"name":"Ronalda","day_session_count":0,"total_count":0,"desig":"Professor","dept":"Purple","morn":0,"aft":0}];
var date = [21,22,23,24,25,26,27,28,29,20,31,32];
  var studCount = 1200,studRoomCount=32,sessionCount,totDuties,assistCount=0,assocCount=0,profCount=0;

  function eachDay() {
      var v1 = 0,
          v2 = 0,
          v3 = 0;
      for (var x=0; x<dayList.length;x++) {
          if (x.desig === "Associate Professor") v2++; // number of Associate Professors

          else if (x.desig === "Professor") v3++; //number of Professors

          else v1++; // number of Assistant professors
      }

      totDuties = (studCount / studRoomCount * 12); //duties for duration of exam
      assistCount = (Math.ceil(0.6 * totDuties) / v1); //number of duties per assistant professor
      assocCount = (Math.ceil(0.3 * totDuties) / v2); //number of duties per Associate Professor
      profCount = (Math.ceil(0.1 * totDuties) / v3); //number of duties per Professor
      console.log(assistCount, assocCount, profCount);

      date.forEach(daySet);       
  }
  
  function daySet(value,index,array) {
      // console.log('%c%s', 'color: #00e600', index);
      var seshCount = 1;
      // console.log('%c%s', 'color: #00a3cc', seshCount);
      var mornCount = 0;
      var aftCount = 0;
      var mornLim = Math.ceil(totDuties/12);
      var dayLim = totDuties/6 + 1;
      console.log('%c%s', 'color: #aa00ff','daylim:', dayLim);
      
      for(var x in dayList){
          if(seshCount === dayLim)
              break;
          var lim = 0;
          if(dayList[x].desig === "Assistant Professor"){
              lim = assistCount;
          }

          else if(dayList[x].desig === "Associate Professor"){
              lim = assocCount;
          }

          else{
              lim = profCount;
          }

          if((dayList[x].total_count < lim) && (dayList[x].day_session_count < 1)){
              dayList[x].day_session_count++;
              dayList[x].total_count++;
              
             
              if (dayList[x].morn === 0 && seshCount <= mornLim) {
                dayList[x].aft = 0;
                dayList[x].morn = 1;
                let mornObj = {
                  ...dayList[x]
                }
                doneList[index][0].push(mornObj);
                mornCount++;
              } 
              else if (dayList[x].aft === 0 && seshCount <= dayLim){
                dayList[x].morn = 0;
                dayList[x].aft = 1;
                let aftObj = {
                  ...dayList[x]
                }
              doneList[index][1].push(aftObj);
                aftCount++;
              }
              seshCount++;

              console.log(doneList);             
              console.log(dayList[x]);             

              var tempArr = dayList;
              var elem = tempArr.shift();
              tempArr.push(elem);
              dayList = tempArr;             
          }
      }
    for(var u=0; u<dayList.length;u++){
          dayList[u].day_session_count = 0;
      }
  }
eachDay();