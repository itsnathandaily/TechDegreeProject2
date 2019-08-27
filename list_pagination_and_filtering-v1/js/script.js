document.addEventListener('DOMContentLoaded', () => {
   /******************************************
   Treehouse Techdegree:
   FSJS project 2 - List Filter and Pagination
   ******************************************/

   // Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

   ;
   /*** 
      Add your global variables that store the DOM elements you will 
      need to reference and/or manipulate. 
      
      But be mindful of which variables should be global and which 
      should be locally scoped to one of the two main functions you're 
      going to create. A good general rule of thumb is if the variable 
      will only be used inside of a function, then it can be locally 
      scoped to that function.
   ***/
   const pageDiv = document.querySelector('.page');
   let studentList = document.getElementsByClassName('student-item cf');
   console.log(studentList);
   console.log(studentList.length);
   const maxPerPage = 10;

   const ul = document.createElement('ul');
   /* let students = [
      {
         firstname: 'iboya',
         lastname: 'vat',
         email: 'iboya.vat@example.com',
         joined: '07/15/15',
         image: ''
      },
      {
         firstname: 'aapo',
         lastname: 'niskanen',
         email: 'aapo.niskanen@example.com',
         joined: '06/15/12'
      }
   ] */


   /*** 
      Create the `showPage` function to hide all of the items in the 
      list except for the ten you want to show.
   
      Pro Tips: 
        - Keep in mind that with a list of 54 students, the last page 
          will only display four.
        - Remember that the first student has an index of 0.
        - Remember that a function `parameter` goes in the parens when 
          you initially define the function, and it acts as a variable 
          or a placeholder to represent the actual function `argument` 
          that will be passed into the parens later when you call or 
          "invoke" the function 
   ***/

   const showPage = (list, page) => {
      const startIndex = (page * 10) - 10;
      const endIndex = (page * 10) - 1;
      for (let i = 0; i < list.length; i++) {
         if (i >= startIndex && i <= endIndex) {
            list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
         }
      }
   };


   /*** 
      Create the `appendPageLinks function` to generate, append, and add 
      functionality to the pagination buttons.
   ***/

   let appendPageLinks = () => {
      //console.log("hello");
      //console.log(studentList.length);
      const numberOfPagination = Math.ceil(studentList.length / maxPerPage);
      //console.log(numberOfPagination);
      const div = document.createElement('div');
      div.className = "pagination";
      pageDiv.appendChild(div);
      const ul = document.createElement('ul');
      div.appendChild(ul);
      let buttons = [];
      for (let i = 0; i < numberOfPagination; i++) {
         const li = document.createElement('li');
         let button = 'a' + i;
         console.log(button);

         this[button] = document.createElement('a');
         console.log(this[button]);
         this[button].textContent = i + 1;
         //buttons.push(this[button].textContent);
         buttons.push(this[button]);
         console.log(buttons);
         //this[button].classList.remove('active');
         //eval(li.appendChild(button));
         li.appendChild(this[button]);
         ul.appendChild(li);

         this[button].addEventListener('click', (event) => {
            console.log(`button ${event.target.textContent} is clicked`);
            showPage(studentList, event.target.textContent);
            event.target.classList.add('active');
            //console.log[buttons];

            buttons.forEach(item => {
               if (item.textContent !== event.target.textContent) {
                  item.classList.remove('active');
               }
            })

         });

         buttons.forEach(item => {
            //if(item)
         });
      }





   }
   showPage(studentList,1);
   appendPageLinks();

   // Remember to delete the comments that came with this file, and replace them with your own code comments.
});