const getSearchWords = (queryObj) => {
    const queriesArr = ['where: {', '}'];
    let queryCount = 0;
    // these would be input fields on frontend
    let institutionQuery;
    let subjectQuery;
    // these would be radio buttons (true/false) on frontend
    let collabQuery;
    let unfinishedQuery;

    // if there is a value in input field...
    if (queryObj.institution) {
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        institutionQuery = 'institution: req.query.institution,';
        queriesArr.splice(1 + queryCount, 0, institutionQuery);
        queryCount++;
    }
    // if there is a value in input field...
    if (queryObj.subject) {
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        subjectQuery = 'subject: req.query.subject,';
        queriesArr.splice(1 + queryCount, 0, subjectQuery);
        queryCount++;
    }
    // if the 'open collab' radio button is checked...
    if (queryObj.collab) {
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        queryObj.collab = 'collab_status: req.query.collab,';
        queriesArr.splice(1 + queryCount, 0, collabQuery);
        queryCount++;
    }
    // if the 'open collab' radio button is checked...
    if (queryObj.unfinished) {
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        unfinishedQuery = 'ongoing_status = req.query.unfinished,';
        queriesArr.splice(1 + queryCount, 0, unfinishedQuery);
        queryCount++;
    }
    // join the query fragments into one whole query & return
    const queryStr = queriesArr.join(' ');
    return queryStr;
}

module.exports = getSearchWords;

