# TechDegreeProject2:


Description:

This project demonstrates how filtering and pagination can be implemented dynamically with a lists (of students details)
on a webpage.

All features to be seen:

There is a pagination of 10 students per page out of 54 students.

There are Tag buttons that correspond to which page you wish to view.  Click on a tag button, and you will be taken to a page that corresponds to that tag button.

There is a search form and button - Names can be searched with the search form and button.  Upon clicking the button,
viewer will be automatically taken to the page the student has been listed in.

'Keyup' is also implemented on the search form.

If the name cannot be found, The is a message that reads "There are no results for your search, Sorry."

Technique:

I started by breaking every key feature into functions.
-rendering -> showPage()
-pagination and pagination tag buttons   -> appendPageLinks()

Extra credit functions :
-I also created a search and filtering function   -> performSearch() triggered by a search form and button

-Then I went further to have error handling by creating a dynamic "no results found" html message   -> noResultsDisplay()

-I also had to create a function to clear the message if needed   -> clearNoResultsDisplay().  Achieving this was not easy, but it was done

-Finally, i completed the project by adding a 'keyup' event listener to the search form 

In conclusion

I am attempting an "Exceeds Expectations" grade.
*Please reject if this project does not exceed expectation.*

