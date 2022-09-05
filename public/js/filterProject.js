// on change ADD to query
// const institutionVal = document.querySelector('#institution-query');
// const subjectVal = document.querySelector('#subject-query');
// const collabVal = document.querySelector('#collab-query');
// const unfinishedVal = document.querySelector('#not-finished-query');

// this function is creating a query string based on what the user enters. This query string would then be handled
// on the backend.
const getSearchWords = (queryObj) => {
    const queriesArr = [];
    let queryCount = 0;
    // these would be input fields on frontend
    let institutionQuery;
    let subjectQuery;
    // these would be radio buttons (true/false) on frontend
    let collabQuery;
    let unfinishedQuery;

    // if there is a value in input field...
    if (queryObj.institution) {
        queryCount++;
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            institutionQuery = `&institution=${queryObj.institution.toLowerCase()}`;
        } else {
            institutionQuery = `?institution=${queryObj.institution.toLowerCase()}`;
        }
        queriesArr.push(institutionQuery);
    }
    // if there is a value in input field...
    if (queryObj.subject) {
        queryCount++;
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            subjectQuery = `&subject=${queryObj.subject.toLowerCase()}`;
        } else {
            subjectQuery = `?subject=${queryObj.subject.toLowerCase()}`;
        }
        queriesArr.push(subjectQuery);
    }
    // if the 'open collab' radio button is checked...
    if (queryObj.collab) {
        queryCount++;
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            collabQuery = `&collab=${queryObj.collab}`;
        } else {
            collabQuery = `?collab=${queryObj.collab}`;
        }
        queriesArr.push(collabQuery);
    }
    // if the 'open collab' radio button is checked...
    if (queryObj.unfinished) {
        queryCount++;
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            unfinishedQuery = `&unfinished=${queryObj.unfinished}`;
        } else {
            unfinishedQuery = `?unfinished=${queryObj.unfinished}`;
        }
        queriesArr.push(unfinishedQuery);
    }
    // join the query fragments into one whole query & return
    const queryStr = queriesArr.join('');
    return queryStr;
}

getSearchWords();

// const filter = (event) => {
//     event.preventDefault(); //is this needed
//     let target = event.target;
//     // if the user doesn't click on the elements related to the query, return
//     if (target !== institutionVal 
//         && target !== subjectVal
//         && target !== collabVal
//         && target !== unfinishedVal) return;
//     // else, fetch query;
//     response;
// };

// const response = await fetch(`api/projects${getSearchWords(
//         institutionVal, subjectVal, collabVal, unfinishedVal
//     )}`, {
//     method: 'GET',
//     body: JSON.stringify({queryStr}),
//     header: {
//         'Content-Type': 'application/json'
//     }
// });

// document.querySelector('#navbarToggleExternalContent').addEventListener('click', filter);