/*
 *
 * Write a function that finds the experience level with 
 * the highest gap and returns its name and gap value
 * 
 * Cybersecurity Talent-Gap Analysis:
 * 
 * Total Talent Gap: 300,000
 * 
 * Highest Shortage: Mid-level with a gap of 200,000
 */

// Array with XP level --> job openings ---> talent available

const jobData = [
    {
        level: "Entry Level",
        talent: 400,
        openings: 500
    },
    {
        level: "Mid Level",
        talent: 300,
        openings: 500
    },
    {
        level: "Senior Level",
        talent: 300,
        openings: 450
    }
];

function findLargestOpenings(data) {
    console.log("Running findLargestOpenings. Finding the XP level with the highest gap and returning its name and gap value");

    let highestGapLevel = null;
    let highestGapValue = 0;
    let totalGap = 0

    data.forEach(job => {
        const gap = job.openings - job.talent;
        totalGap = job.openings + totalGap

        if (gap > highestGapValue) {
            highestGapValue = gap;
            highestGapLevel = job.level;
        }
    });

    return { level: highestGapLevel, levelGap: highestGapValue, total: totalGap};
}

function loadArray(data) {
    console.log("Running loadArray. Outputting array data to the console");
    console.log("data =>", data);
}

loadArray(jobData);
const result = findLargestOpenings(jobData);

console.log('CyberSecurity Talent-Gap Analysis:');
console.log(`Total Talent Gap: ${result.total}`);
console.log(`Highest Shortage: ${result.level} with a gap of ${result.levelGap}`);
