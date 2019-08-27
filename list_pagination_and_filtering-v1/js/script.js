document.addEventListener('DOMContentLoaded', () => {
   /******************************************
   Treehouse Techdegree:
   FSJS project 2 - List Filter and Pagination
   ******************************************/

   /*** 
     pageDive is the main div of the page
     studentList is a list of all the students in index.html 
     studentsPerPage is the maximum number of students that can be rendered on a page.
      These variables are needed throughout the script , so they are declared globally
      here.
   ***/
   const pageDiv = document.querySelector('.page');
   let studentList = document.getElementsByClassName('student-item cf');
   const studentsPerPage = 10;


   /*** 
          `showPage ` is the rendering function
          It accepts a list and a pagenumber.  The showPage function, when invoked
          will show all students on the page indicated by pagenumber.
          There can only be 10 students per page as maximum
   ***/

   const showPage = (list, pageNumber) => {
      const startIndex = (pageNumber * studentsPerPage) - studentsPerPage;
      const endIndex = (pageNumber * studentsPerPage) - 1;
      for (let i = 0; i < list.length; i++) {
         if (i >= startIndex && i <= endIndex) {
            list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
         }
      }
   };


   /*** 
      
      In the `appendPageLinks function`, numberOfPagination is used to determine how 
      many tag buttons will be created.
      Each tag button is stored in the buttons array.
      li and a tags are created for each pagination and appended to the page
   ***/

   let appendPageLinks = () => {

      const numberOfPagination = Math.ceil(studentList.length / studentsPerPage);
      const div = document.createElement('div');
      div.className = "pagination";
      pageDiv.appendChild(div);
      const ul = document.createElement('ul');
      div.appendChild(ul);
      let buttons = [];

      //tag li and a tag buttons are created
      // the buttons are dynamically created
      //for each pagination (in our case , its 6 for index.html)
      for (let i = 0; i < numberOfPagination; i++) {
         const li = document.createElement('li');
         let button = 'a' + i;

         this[button] = document.createElement('a');
         //each button is labeled, starting from 1 as the 1st button, not 0
         this[button].textContent = i + 1;
         // and stored in the buttons array
         buttons.push(this[button]);
         li.appendChild(this[button]);
         ul.appendChild(li);

         //Here is the clicking event for any button
         //upon clicking any button, showPage function is called with the studentList and 
         //textContent -> indicating which button has been clicked
         //when a button is click, it is classed as 'active' and highlighted
         this[button].addEventListener('click', (event) => {
            //console.log(`button ${event.target.textContent} is clicked`);
            showPage(studentList, event.target.textContent);
            event.target.classList.add('active');
            //other buttons not click get classed as non-active
            buttons.forEach(item => {
               if (item.textContent !== event.target.textContent) {
                  item.classList.remove('active');
               }
            });

         });


      }


   }
   // the page loads by default the first list from 1 - 10, so showPage is
   //invoked with studentList and the number 1
   showPage(studentList, 1);
   //appendPageLinks is invoked to calculate pagination and show all the buttons needed
   appendPageLinks();

});