// take in students score, and total possible score
// 15/20 you got a C(75%)


const gradeCal = (score, totalScore) => {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error(' There is an issue here')
    }

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

try {
    const result = gradeCal(15, 20)
    console.log(result)
} catch (error) {
    console.log(error.message)
}
