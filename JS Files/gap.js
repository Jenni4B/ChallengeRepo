

// Array with XP lvl --> job openings ---> talent availiable

const jobData = [
    {
        level: "Entry Level",
        talent: 400,
        openings: 500
    },
    {
        level: "Mid Level",
        talent: 300,
        openings: 450
    },
    {
        level: "Senior Level",
        talent: 300,
        openings: 450
    }
];


/*
 *
 * Write a function that finds the experience level with 
 * the highest gap and returns its name and gap value
 * 
 * Using the data from Mon. Wed. & Thurs, create the expected output
 * 
 * Cybersecurity Talent-Gap Analysis:
 * 
 * Total Talent Gap: 300,000
 * 
 * Highest Shortage: Mid-level with a gap of 200,000
 * 
 */

function findLargestOpenings(data){
    console.log("Running findLargestOpenings. Finding the XP lvl with the highest" + 
        " gap and returns it's name and gap value"
    )

    console.log("data => ", data)
}

function loadArray(data){
    console.log("Running loadArray. Outputs array data into the console"
    )

    console.log("data => ", data)
}

loadArray(jobData);


