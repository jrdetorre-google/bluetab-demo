/*
* The function tenureBucket() takes as input the name of the tenure field and returns a CASE statement that maps ages age buckets
* You can learn more about functions on https://cloud.google.com/dataform/docs/reuse-code-includes
*/


function tenureBucket(user_tenure) {
const tenure_clean = `cast(${user_tenure} as int64)`;
return `case
         when ${tenure_clean} between 0 and 2 then "newbie"
         when ${tenure_clean} between 3 and 5 then "improving"
         when ${tenure_clean} between 6 and 10 then "experienced"
         else "master"
       end`;
}


module.exports = {
tenureBucket
};
