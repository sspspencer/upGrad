// on change ADD to query
const institutionVal = document.querySelector('#institution-query');
const subjectVal = document.querySelector('#subject-query');
const collabVal = document.querySelector('#collab-query');
const unfinishedVal = document.querySelector('#not-finished-query');

const getSearchWords = (institutionVal, subjectVal, collabVal, unfinishedVal) => {
    const queriesArr = [];
    const queryCount = 0;
    let institutionQuery;
    let subjectQuery;
    let collabQuery;
    let unfinishedQuery;
    if (institutionVal !== null) {
        queryCount++;
        if(queryCount >= 1) {
            institutionQuery = `&institution=${institutionVal.value.toLowerCase()}`;
        } else {
            institutionQuery = `?institution=${institutionVal.value.toLowerCase()}`;
        }
        queriesArr.push(institutionQuery);
    }
    if (subjectVal !== null) {
        queryCount++;
        if(queryCount >= 1) {
            subjectQuery = `&subject=${subjectVal.value.toLowerCase()}`;
        } else {
            subjectQuery = `?subject=${subjectVal.value.toLowerCase()}`;
        }
        queriesArr.push(subjectQuery);
    }
    if (collabVal.checked) {
        queryCount++;
        if(queryCount >= 1) {
            collabQuery = `&collab=${collabVal.checked}`;
        } else {
            collabQuery = `?collab=${collabVal.checked}`;
        }
        queriesArr.push(collabQuery);
    }
    if (unfinishedVal.checked) {
        queryCount++;
        if(queryCount >= 1) {
            unfinishedQuery = `&unfinished=${collabVal.checked}`;
        } else {
            unfinishedQuery = `?unfinished=${collabVal.checked}`;
        }
        queriesArr.push(unfinishedQuery);
    }
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