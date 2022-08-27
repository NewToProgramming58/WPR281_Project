let bugTableID = -1;
function AddBug(edit){
    //Get values for new bug
    var issueName = document.getElementById('IssueName').value;
    var issuePriority = document.getElementById('IssuePriority').value;
    var issueStatus = document.getElementById('IssueStatus').value;
    var issueDescription = document.getElementById('IssueDescp').value;
    var identifier = document.getElementById('Identifier').value;
    var targetCompletionDate = document.getElementById('TargetCompDate').value;
    var dateIdentified = document.getElementById('DateIdentified').value;
    var actualCompletionDate = document.getElementById('ActualCompDate').value;
    var assignedTo = document.getElementById('AssignedTo').value;
    var project = document.getElementById('projects').value;
    
    if (issueName === '' || issuePriority === '' || issueStatus === '' || issueDescription === '' || identifier === ''
    || targetCompletionDate === '' || dateIdentified === '') {
        alert('Please enter all fields');
    } else {
        //get bugs from storage
        let bugs = JSON.parse(window.localStorage.getItem('bugs'));
        if (bugs == null) {
            bugs = [];  
        }
        const newbug = {
            'ID': bugs.length > 0 ? parseInt(bugs[bugs.length - 1]['id']) + 1 : 1,
            'Issue': issueName,
            'Priority': issuePriority,
            'Status': issueStatus,
            'Description': issueDescription,
            'Identified by': identifier,
            'Target Complete Date': targetCompletionDate,
            'Date Identified': dateIdentified,
            'Actual Complete Date': actualCompletionDate,
            'Assigned To': assignedTo,
            'Project': project,
        }
        //add bug to array
        if (edit == true) {
            if (bugTableID > 0) {
                let length = bugs.length;
                let i = -1;
                let bugExists = false;
                while (i < length && !bugExists) {
                    i++;
                    if (bugs[i]['id'] == bugTableID) {
                        bugExists = true; 
                        newbug["id"] = bugTableID;        
                        bugs[i] = newbug;
                    }
                }
                window.localStorage.setItem('bugs', JSON.stringify(bugs));
                LoadBugs();
            } else {
                alert("Select a bug first");
            } 
        } else {    
            bugs.push(newbug);
            //store array again
            window.localStorage.setItem('bugs', JSON.stringify(bugs));
            LoadBugs();
        }
    }
}

function LoadBugs(){
    let arrBugs = JSON.parse(window.localStorage.getItem("bugs"));
    if (arrBugs !== null) {
        let arrBugs = JSON.parse(window.localStorage.getItem("bugs"));
        // Create Table from JSON object array
        let col = [];
        Object.keys(arrBugs[0]).forEach(function(key) {
            col.push(key);
        });

        // Create Table
        const table = document.createElement("table");
        table.setAttribute('class', 'BugsTable');

        // Create table header row using the extracted headers above
        let tr = table.insertRow(-1); // table row

        tr.setAttribute('class', 'colour3');

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th");// table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (let i = 0; i < arrBugs.length; i++) {

            tr = table.insertRow(-1);

            if (i % 2 == 0)
            {
                tr.setAttribute('class', 'colour1');
            }
            else
            {
                tr.setAttribute('class', 'colour2');
            }

            for (key in arrBugs[i])
            {            
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = arrBugs[i][key];

                if (arrBugs[i][key] == 'High')
                    tabCell.setAttribute('style', 'background-color:red');
                else if (arrBugs[i][key] == 'Medium')
                        tabCell.setAttribute('style', 'background-color:yellow');
                else if (arrBugs[i][key] == 'Low')
                    tabCell.setAttribute('style', 'background-color:green');          
            }
          
        }
        if (table) {
          for (var i = 0; i < table.rows.length; i++) {
            table.rows[i].onclick = function() {
                bugTableID = this.childNodes[0].innerHTML;
                document.getElementById('IssueName').value = this.childNodes[1].innerHTML;
                document.getElementById('IssuePriority').value = this.childNodes[2].innerHTML;
                document.getElementById('IssueStatus').value = this.childNodes[3].innerHTML;
                document.getElementById('IssueDescp').value = this.childNodes[4].innerHTML;
                document.getElementById('Identifier').value = this.childNodes[5].innerHTML;
                document.getElementById('TargetCompDate').value = this.childNodes[6].innerHTML;
                document.getElementById('DateIdentified').value = this.childNodes[7].innerHTML;
                document.getElementById('ActualCompDate').value = this.childNodes[8].innerHTML;
                document.getElementById('AssignedTo').value = this.childNodes[9].innerHTML;
                document.getElementById('projects').value = this.childNodes[10].innerHTML;
                /*
                // Is there a way to get a global array with all the IDs above? Then you iterate through idArr like
                // Or even add it to localStorage with key 'tableids' / 'bugids' etc.?
                // If it's a good idea and we're finished before Sunday evening, I'll do it
                const idArr = [];
                idArr.push[document.getId] // Smth like this, or manually add?
                for(let j = 0; j < idArr.length; j++)
                    document.getElementById(idArr[j]).value = this.childNodes[j].innerHTML; 
                // Replaces code in table.rows[i].onclick func
                */
            };
          }
        }

        // Now, add the newly created table with json data, to a container.
        const divShowData = document.getElementById('showBugs');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
    }
    else {
        const title = document.createElement("title");
        title.title = "No current bugs"
    }
    HighlightRow(table) // Where is this supposed to go? LoadBugs() goes into window.onload, so is this fine here?
}
function HighlightRow(table) {
    var cells = table.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cellVals = cells[i];
        // onclick event highlights
        cellVals.onclick = function () {
            // Get row id for cell
            var rowsNotSelected = table.getElementsByTagName('tr');
            var rowId = this.parentNode.rowIndex;
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            var selectedRow = table.getElementsByTagName('tr')[rowId];
            selectedRow.style.backgroundColor = "aliceblue";
            selectedRow.className += " selected"; // Don't understand this; will keep searching
            msg = 'The ID of the bug is: ' + selectedRow.cells[0].innerHTML;
            msg += '\nThe cell value is: ' + this.innerHTML;
            console.log(msg);
        }
    }
}

function RemoveBug(){   
    if (bugTableID > 0) {
        print(bugTableID);
        let bugs = JSON.parse(window.localStorage.getItem('bugs'));
        if (bugs !== null) {
            let length = bugs.length;
            if (length > 1) {
            let i = -1;
                let bugExists = false;
                while (i < length && !bugExists) {
                    i++;
                    if (bugs[i]['id'] == bugTableID) {
                        bugExists = true;            
                        bugs.splice(i, 1);
                    }
                }
                window.localStorage.setItem('bugs', JSON.stringify(bugs));
            } else {
                window.localStorage.removeItem('bugs');
            }
            LoadBugs();
            bugTableID = -1;
        }
    } else {
        alert("Select a bug first");
    }
}