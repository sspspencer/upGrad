// on change ADD to query
const institutionVal = document.querySelector('#institution-query');
const subjectVal = document.querySelector('#subject-query');
const collabVal = document.querySelector('#collab-query');
const unfinishedVal = document.querySelector('#not-finished-query');

// this function is creating a query string based on what the user enters. This query string would then be handled
// on the backend.
const getSearchWords = (institutionVal, subjectVal, collabVal, unfinishedVal) => {
    const queriesArr = [];
    const queryCount = 0;
    // this would be an input field on frontend
    let institutionQuery;
    // this would be an input field on frontend
    let subjectQuery;
    // this would be radio button (true/false)
    let collabQuery;
    // this would be radio button (true/false)
    let unfinishedQuery;
    // if there is a value in input field...
    if (institutionVal !== null) {
        queryCount++;
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            institutionQuery = `&institution=${institutionVal.value.toLowerCase()}`;
        } else {
            institutionQuery = `?institution=${institutionVal.value.toLowerCase()}`;
        }
        queriesArr.push(institutionQuery);
    }
    // if there is a value in input field...
    if (subjectVal !== null) {
        queryCount++;
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            subjectQuery = `&subject=${subjectVal.value.toLowerCase()}`;
        } else {
            subjectQuery = `?subject=${subjectVal.value.toLowerCase()}`;
        }
        queriesArr.push(subjectQuery);
    }
    // if the 'open collab' radio button is checked...
    if (collabVal.checked) {
        queryCount++;
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            collabQuery = `&collab=${collabVal.checked}`;
        } else {
            collabQuery = `?collab=${collabVal.checked}`;
        }
        queriesArr.push(collabQuery);
    }
    // if the 'open collab' radio button is checked...
    if (unfinishedVal.checked) {
        queryCount++;
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            unfinishedQuery = `&unfinished=${unfinishedVal.checked}`;
        } else {
            unfinishedQuery = `?unfinished=${unfinishedVal.checked}`;
        }
        queriesArr.push(unfinishedQuery);
    }
    // join the query fragments into one whole query & return
    const queryStr = queriesArr.join('');
    return queryStr;
}

const filter = (event) => {
    event.preventDefault(); //is this needed
    let target = event.target;
    // if the user doesn't click on the elements related to the query, return
    if (target !== institutionVal 
        && target !== subjectVal
        && target !== collabVal
        && target !== unfinishedVal) return;
    // else, fetch query;
    response;
};

const response = await fetch(`api/projects${getSearchWords(
        institutionVal, subjectVal, collabVal, unfinishedVal
    )}`, {
    method: 'GET',
    body: JSON.stringify({}), // what would be the body
    header: {
        'Content-Type': 'application/json'
    }
});

document.querySelector('#navbarToggleExternalContent').addEventListener('click', filter);