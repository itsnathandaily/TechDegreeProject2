document.addEventListener('DOMContentLoaded', () => {
   /******************************************
   Treehouse Techdegree:
   FSJS project 2 - List Filter and Pagination
   ******************************************/

   /*** 
     pageDive is the main div of the page
     studentList is a list of all the students in index.html 
     studentsPerPage is the maximum number of students that can be rendered on a page.
     The created div(searchDiv) has a search input (called searchForm) and 
     submit button (searchButton) appended to it.
      These variables are needed throughout the script , so they are declared globally
      here.
   ***/

   const pageDiv = document.querySelector('.page');
   const studentList = document.getElementsByClassName('student-item cf');
   const pageHeaderDiv = document.getElementsByClassName('page-header cf')[0];
   //const pageHeaderDiv = document.querySelector('.page-header cf');
   const searchDiv = document.createElement('div');
   searchDiv.className = "student-search";
   const searchForm = document.createElement('input');
   searchForm.placeholder = "Search for students...";
   const searchButton = document.createElement('button');
   searchButton.textContent = 'Search';
   searchDiv.appendChild(searchForm);
   searchDiv.appendChild(searchButton);
   pageHeaderDiv.appendChild(searchDiv);
   const studentsPerPage = 10;
   const innerPaginationDiv = document.createElement('div');
   let buttons = [];
   let searchResults = [];
   let results = 0;
   const mainUl = document.querySelector('.student-list');
   let noResultsLi;
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
      activatePaginationButton(pageNumber - 1);
   };


   /***    
      In the `appendPageLinks function`, numberOfPagination is used to determine how 
      many tag buttons will be created.
      Each tag button is stored in the buttons array.
      li and a tags are created for each pagination and appended to the page
   ***/

   let appendPageLinks = () => {
      const numberOfPagination = Math.ceil(studentList.length / studentsPerPage);
      innerPaginationDiv.className = "pagination";
      pageDiv.appendChild(innerPaginationDiv);
      const ul = document.createElement('ul');
      innerPaginationDiv.appendChild(ul);


      /* tag li and a tag buttons (lets call them pagination button) are created
         the a tag/pagination buttons are dynamically created,
         for each page of 10 students (in our case (index.html), its a total 6 pagination buttons */
      for (let i = 0; i < numberOfPagination; i++) {
         const li = document.createElement('li');
         /* The actual button elements are a1,a2...a6 */
         let button = 'a' + i;
         this[button] = document.createElement('a');
         /*  each tag/ pagination button is labeled, starting from 1 as the 1st button, not 0 */
         this[button].textContent = i + 1;
         /*   and stored in the buttons array */
         buttons.push(this[button]);
         li.appendChild(this[button]);
         ul.appendChild(li);

         /*  Here is the clicking event for any button
          upon clicking any button, showPage function is called with the studentList and 
          textContent -> indicating which button has been clicked
          when a pagination button is click, it is classed as 'active' and highlighted */
         this[button].addEventListener('click', (event) => {
            results = 0;
            clearNoResultsDisplay();
            showPage(studentList, event.target.textContent);
         });
      }

   }

   /* TODO COMMENTS */
   let performSearch = (list) => {
      if (searchForm.value.length !== 0) {
         for (let i = 0; i < list.length; i++) {
            const fullName = list[i].querySelector('h3');
            if (fullName.textContent.toLowerCase().includes(searchForm.value.toLowerCase())) {
               list[i].style.display = 'block';
               searchResults.push(list[i]);
               results++;
               console.log(`list[i].style.display = 'block' results found is ${results}`);
               const pageButton = Math.floor(i / studentsPerPage);
               activatePaginationButton(pageButton);
            } else {
               list[i].style.display = 'none';
               if (i === list.length - 1 && results === 0) {
                  console.log(`list[i].style.display = 'none' results found is ${results}`);
                  displayNoResults();
               }
            }
         }
      } else if (searchForm.value.length === 0) {
         showPage(studentList, 1);
      }

   };

   /* TODO  COMMENTS   */
   const activatePaginationButton = (buttonIndex) => {
      buttons.forEach(item => {
         if (buttons.indexOf(item) === buttonIndex) {
            item.classList.add('active');
         } else {
            item.classList.remove('active');
         }
      })

   }


   /* TODO COMMENTS */
   const displayNoResults = () => {
      console.log(`displayNoResult results found is ${results}`);
      noResultsLi = document.createElement('LI');
      noResultsLi.className = "noresultsli";
      const noResultsDiv = document.createElement('div');
      const noResultsH3 = document.createElement('h3');
      noResultsH3.textContent = "There are no results for your search. Sorry.";
      noResultsDiv.appendChild(noResultsH3);
      noResultsLi.appendChild(noResultsDiv);
      mainUl.appendChild(noResultsLi);
   }



   /* The `clearNoResultsDisplay() function when invoked removes the 
   "dynamic" no result message - (this message is 
      just a div appended a list, appended to mainUL).
      It checks that one exist first and if it does,
      it removes it.
   */
   const clearNoResultsDisplay = () => {
      if (document.body.contains(noResultsLi)) {
         mainUl.removeChild(noResultsLi);
      }
   };

   /* EVENT LISTENERS
   The Search button and the Search form clears the 
   dynamic no result message(if one exists) and activates the `performSearch function` */
   searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      results = 0;
      clearNoResultsDisplay();
      performSearch(studentList);
   });

   searchForm.addEventListener('keyup', () => {
      results = 0;
      clearNoResultsDisplay();
      performSearch(studentList);
   });


   /*    MAIN
   THE SCRIPT BEGINS WITH THE 3 FUNCTIONS BELOW
   When the page initially loads by default: 
   it invokes `showPage(studentList,1)`; 

   `showPage(studentList,1)`  performs the first pagination (1),
    - which shows the first 10 students on page 1.  */

   /*  appendPageLinks is also invoked to calculate pagination and create
  all the pagination buttons needed */

   /* By default `activatePaginationButton(0) is also invoked because
  the first pagination button should be highlighted to indicate
  that we are on page 1 */
   showPage(studentList, 1);
   appendPageLinks();
   activatePaginationButton(0);

});
