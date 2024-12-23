
        // Manipulating DOM using different getElement methods

        // 1. Change the text content of the paragraph with ID 'quote' to your favourite quote

        document.getElementById('quote').textContent = "It always seems impossible until it's done — Nelson Mandela";

        // 2. Change background color of all 'info-box' class divs

        const infoBoxes = document.getElementsByClassName('info-box');
        for (let i = 0; i < infoBoxes.length; i++) {
            infoBoxes[i].style.backgroundColor = 'rgb(227, 227, 23) '; 
        }

        // 3. Update the third list item in the task list to a different text
 
        const taskList = document.getElementsByTagName('li');
        taskList[2].textContent = "Task 3 -Completed";

        // 4. Append the message -"Have a great day" to the footer span using querySelector

        const footerSpan = document.querySelector('footer span');
        footerSpan.textContent += " - Have a great day"; 


