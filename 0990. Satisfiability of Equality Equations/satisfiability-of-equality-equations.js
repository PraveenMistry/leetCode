/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const map = new Map(),
          find = item => {
              map.set(item, map.get(item) || item);
              return item === map.get(item) ? item : find(map.get(item));
          };
    
    equations.forEach(([a, eq, , b]) => {
        if (eq === '=') {
            map.set(find(a), find(b));
        }
    });
    
    let complies = true;
    equations.forEach(([a, eq, , b]) => {
        if (eq === '!') {
            if (find(a) === find(b)) complies = false;
        }
    });
    
    return complies;
}

/*

*/