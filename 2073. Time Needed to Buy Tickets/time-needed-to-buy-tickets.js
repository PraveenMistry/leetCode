// A) Using BF | Queue

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let count = 0;
    let start = 0;
    while(tickets[k] > 0){
        for(let i=0;i<tickets.length;i++){
            if(tickets[k] == 0){
               return count;
            }
            if(tickets[i] > 0){
                count++;
                tickets[i]--;
            }
        }
        if(tickets[k] == 0){
            break;
        }
    }
    return count;
};



/*
Runtime: 192 ms, faster than 5.21% of JavaScript online submissions for Time Needed to Buy Tickets.
Memory Usage: 45.8 MB, less than 6.16% of JavaScript online submissions for Time Needed to Buy Tickets.
*/


// Better Approach One Liner

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    return tickets.reduce((x, v, i)=>x + Math.min(v, tickets[k] - (i > k)), 0);
}