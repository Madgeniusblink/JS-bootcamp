// take in students score, and total possible score
// 15/20 you got a C(75%)


const gradeCal = function(score, totalScore) {
    const percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        let letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent}%)`
}



// call function(student score,total possible score)

const result = gradeCal(2, 20)

console.log(result)