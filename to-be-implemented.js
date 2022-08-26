function ViewIssues()
{   
    return JSON.parse(window.localStorage.getItem("issues"));
}
function ViewIssues(i)
{
    let issues = JSON.parse(window.localStorage.getItem("issues"));

    issues.map(function()
    {
        return i.id
    })
}
/*
function ViewIssue(issueID) // make this an onclick event?
{
    let issues = JSON.parse(window.localStorage.getItem("issues"));
    //let obj = issues.find(o => o.id === issueID);
    //if()
    //{}
    
    let obj = arr.find((o, i = issues.findIndex(issueID)) => {
        if (o.name === 'string 1') {
            arr[i] = { name: 'new string', value: 'this', other: 'that' };
            return true; // stop searching
            }
    });
}*/