function LoadUsers(){
    let arrUsers = [];

    for(let i = 0; i < localStorage.length; i++) {
        var value = localStorage.getItem('User0' + i)

        if (value != null){
            arrUsers.push(value.toUpperCase());
        }
    }

    // Create Table from JSON object array
    let col = [];
    for (let i = 0; i < arrUsers.length; i++)
    {        
        var jsonParsedArray = JSON.parse(arrUsers[i]);

        if (i == 1)
        {
            for (key in jsonParsedArray)
            {
                if (jsonParsedArray.hasOwnProperty(key)) {
                    col.push(key);
                }
            }
        }
    }

    // Create Table
    const table = document.createElement("table");

    // Create table header row using the extracted headers above
    let tr = table.insertRow(-1); // table row

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
  
      // add json data to the table as rows.
    for (let i = 0; i < arrUsers.length; i++) {
  
        tr = table.insertRow(-1);

        var jsonParsedArray = JSON.parse(arrUsers[i]);

        for (key in jsonParsedArray)
        {
            if (jsonParsedArray.hasOwnProperty(key)) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = jsonParsedArray[key];
            }
        }
    }
  
    // Now, add the newly created table with json data, to a container.
    const divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}

function LoadProjects(){
    let arrProjects = [];

    for(let i = 0; i < localStorage.length; i++) {
        var value = localStorage.getItem('PRJ0' + i)

        if (value != null){
            arrProjects.push(value);
        }
    }

    // Create Table from JSON object array
    let col = [];
    col.push('ID');
    col.push('NAME');

    // Create Table
    const table = document.createElement("table");

    // Create table header row using the extracted headers above
    let tr = table.insertRow(-1); // table row

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
  
      // add json data to the table as rows.
    for (let i = 0; i < arrProjects.length; i++) {
        tr = table.insertRow(-1);
        
        let tabCell1 = tr.insertCell(-1);
        tabCell1.innerHTML = 'PRJ0' + (i + 1);

        let tabCell2 = tr.insertCell(-1);
        tabCell2.innerHTML = arrProjects[i];
    }
  
    // Now, add the newly created table with json data, to a container.
    const divShowData = document.getElementById('showProjects');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}

window.onload = function(){ // Ensures the page is loaded before functions are executed.
    LoadUsers();
    LoadProjects();
    LoadBugs();

    var form = document.getElementById("bugForm");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    // MARKDOWN CODE - NOT WORKING YET, JS GIVING ISSUES!
    md_content = "Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it."
    html_content = markdown.toHTML( md_content );

    const divShowData = document.getElementById('TestMD');
    divShowData.innerHTML = "";
    divShowData.appendChild(html_content);
}