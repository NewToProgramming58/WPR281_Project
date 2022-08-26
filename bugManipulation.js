function AddBug(){
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
    
    if (issueName === '' || issuePriority === '' || issueStatus === '' || issueDescription === '' || identifier === ''
    || targetCompletionDate === '' || dateIdentified === '' || actualCompletionDate === '' || assignedTo === '') {
        alert('Please enter all fields');
    } else {
        //get bugs from storage
        let bugs = JSON.parse(window.localStorage.getItem('bugs'));
        const newbug = {
            id: parseInt(bugs[bugs.length - 1]['id']) + 1,
            issue: issueName,
            priority: issuePriority,
            status: issueStatus,
            description: issueDescription,
            identifier: identifier,
            targetCompDate: targetCompletionDate,
            dateIdentified: dateIdentified,
            actualCompDate: actualCompletionDate,
            assignedTo: assignedTo,
        }
        //add bug to array
        bugs.push(newbug);
        //store array again
        window.localStorage.setItem('bugs', JSON.stringify(bugs));

        LoadBugs();
    }
}

function LoadBugs(){
    let arrBugs = JSON.parse(window.localStorage.getItem("bugs"));

    if (arrBugs !== null) {
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
            let th = document.createElement("th");      // table header.
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

        // Now, add the newly created table with json data, to a container.
        const divShowData = document.getElementById('showBugs');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
    }
}

function EditBug(){
    var issueName = document.getElementById('IssueName').value;
    var issuePriority = document.getElementById('IssuePriority').value;
    var issueStatus = document.getElementById('IssueStatus').value;
    var issueDescription = document.getElementById('IssueDescp').value;
    var identifier = document.getElementById('Identifier').value;
    var targetCompletionDate = document.getElementById('TargetCompDate').value;
    var dateIdentified = document.getElementById('DateIdentified').value;
    var actualCompletionDate = document.getElementById('ActualCompDate').value;
    var assignedTo = document.getElementById('AssignedTo').value;

    const bug = {
        issue: issueName,
        priority: issuePriority,
        status: issueStatus,
        description: issueDescription,
        identifier: identifier,
        targetCompDate: targetCompletionDate,
        dateIdentified: dateIdentified,
        actualCompDate: actualCompletionDate,
        assignedTo: assignedTo,
    }

    // Check if the value does exist
    if (localStorage.getItem('BUG' + identifier) != null)
    {
        window.localStorage.setItem('BUG' + identifier, JSON.stringify(bug));  
    }
    //converting object to string

    LoadBugs();
}

function RemoveBug(){
    var identifier = document.getElementById('Identifier').value;

    // Check if the value does exist
    if (localStorage.getItem('BUG' + identifier) != null)
    {
        window.localStorage.removeItem('BUG' + identifier);  
    }

    LoadBugs();
}