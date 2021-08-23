async function fetchMoviesJSON() {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const nameList = await response.json();
    
  
    let listofName = nameList.results;

    // console.log(listofName)
    console.log(listofName[0].phone)

    function dropDownMenu(){
        const body = document.querySelector('body')
        const container = document.querySelector('#container');
        const dropDiv = document.createElement('div');
        const dropDownBtn = document.createElement('button');
        const personInfo = document.createElement('div')

        dropDownBtn.textContent = 'Click Here';
        
  
        for (let i = 0; i<listofName.length; i++){
            let text = listofName[i].name.title + ' ' + listofName[i].name.first + ' ' + listofName[i].name.last;
            let phoneNum = listofName[i].phone;
            let personEmail = listofName[i].email;
            let li = document.createElement('li')
            dropDiv.appendChild(li).classList.add("list")
            li.textContent = text;
            li.addEventListener('click', function(){
                personInfo.innerHTML = text + '.<br />' + phoneNum +'.<br />' + personEmail;
            })

        }
        dropDiv.setAttribute('id','dropDiv');
        dropDownBtn.classList.add('dropDownBtn');
        dropDiv.classList.add('dropDivContent');
        personInfo.setAttribute('id','personInfo')
        
  
        container.appendChild(dropDownBtn);
        container.appendChild(dropDiv);
        body.appendChild(personInfo)
  
        dropDownBtn.addEventListener('click', function(){
          
          dropDiv.classList.toggle("show");
            
        })
    }

    dropDownMenu();
  }
  fetchMoviesJSON();
  
  
//   function dropDownMenu(){
//       const container = document.querySelector('#container');
//       const dropDiv = document.createElement('div');
//       const dropDownBtn = document.createElement('button');

//       for (let i = 0; i<listofName.length; i++){
//          dropDiv.appendChild(document.createElement('li')).classList.add("list")
//       }
//       dropDiv.setAttribute('id','dropDiv');
//       dropDownBtn.classList.add('dropDownBtn');
//       dropDiv.classList.add('dropDivContent');

//       container.appendChild(dropDownBtn);
//       container.appendChild(dropDiv);

//       dropDownBtn.addEventListener('click', function(){
        
//         dropDiv.classList.toggle("show");
          
//       })
//   }
//   dropDownMenu();
  
  // function test (){
  //   let nameList;
  //   function fetchRequest(){
  //   fetch('https://randomuser.me/api/?results=5')
  //     .then(response => response.json())
  //     .then(data => {console.log(data.results[0].name)
  //       nameList = data.results;
  //       console.log('inside fetch request: ', nameList)
  //   });
  // }
  //   fetchRequest();
  //   console.log('outside fetch request',nameList);
  
  // }
  // test();
  // /*
  // 1. create a drop down menu that lists all the people's names as options
  // 2. once u click a name, it will render that person's name, number, and email
  // */