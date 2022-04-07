
  let fullEquationData = {}
  const correctAnswers = []
  let level = ''
  let equationType = ''

  const selectLevel = (e) => {
    // level = ''
    level = Number(e.target.innerHTML)
        // ### TODO - set to screen You are on level 1.

    // console.log('level', level)
    initMathToScreen()

  }

  const selectEquationType = (e) => {
    // equationType = []
    // equationType.push(e.target.innerHTML) // NOTE: TODO. to do multiple make an array later.
    equationType = e.target.innerHTML
    // ### TODO - set to screen - you are doing subtraction
    // later make it .data-equationtype
    // console.log('equationType', equationType)
    initMathToScreen()

  }



const doAddition = (numToRandomize) => {

    const numOne = Math.floor(Math.random() * numToRandomize)
    const numTwo = Math.floor(Math.random() * numToRandomize)
    const type = '+'
    const answer = numOne + numTwo
    const equation = `${numOne} + ${numTwo}`


  const equationData =  {
    numOne: numOne,
    numTwo: numTwo,
    type: type,
    answer: answer,
    equation: equation,
  }

  return equationData


}

const doSubtraction = (numToRandomize) => {

    const numOne = Math.floor(Math.random() * numToRandomize)
    const numTwo = Math.floor(Math.random() * numToRandomize)
    const type = '-'
    let answer = ''
    let equation = ''
    if (numOne > numTwo) {
       answer = numOne - numTwo
       equation = `${numOne} - ${numTwo}`
    } else {
       answer = numTwo - numOne
       equation = `${numTwo} - ${numOne}`
    }
    // const answer = numOne - numTwo
    // const equation = `${numOne} - ${numTwo}`


  const equationData =  {
    numOne: numOne,
    numTwo: numTwo,
    type: type,
    answer: answer,
    equation: equation,
  }

  return equationData


}

const doMultiply = (numToRandomize) => {

    const numOne = Math.floor(Math.random() * numToRandomize)
    const numTwo = Math.floor(Math.random() * numToRandomize)
    const type = '*'
    const answer = numOne * numTwo
    const equation = `${numOne} * ${numTwo}`


  const equationData =  {
    numOne: numOne,
    numTwo: numTwo,
    type: type,
    answer: answer,
    equation: equation,
  }

  return equationData


}

const doDivide = (numToRandomize) => {
    const numOne = Math.floor(Math.random() * numToRandomize)
    const numTwo = Math.floor(Math.random() * numToRandomize)
    const type = '/'
    // const answer = numOne / numTwo
    // const equation = `${numOne} / ${numTwo}`

    if (numOne > numTwo) {
      answer = numOne / numTwo
      equation = `${numOne} / ${numTwo}`
   } else {
      answer = numTwo / numOne
      equation = `${numTwo} / ${numOne}`
   }


  const equationData =  {
    numOne: numOne,
    numTwo: numTwo,
    type: type,
    answer: answer,
    equation: equation,
  }

  return equationData

}



const createMathEquation = (level, type) => {

    let numToRandomize = ''
    switch(level) {
      case 1:
        numToRandomize = 6
        break;
      case 2:
         numToRandomize = 11
        break;
      case 3:
        numToRandomize = 21
        break;
      case 4:
        numToRandomize = 100
        break;
    }

  switch(type) {
    case "addition":
        fullEquationData = doAddition(numToRandomize)
        break;
    case "subtraction":
        fullEquationData = doSubtraction(numToRandomize)
        break;
    case "multiplication":
        fullEquationData = doMultiply(numToRandomize)
        break;
    case "division":
        fullEquationData = doDivide(numToRandomize)
      break;
  }


  return fullEquationData


}


const getAnswer = (e) => {
  e.preventDefault();
  const inputedAnswerString = document.getElementById('answerInput').value
  const inputedAnswerNumber = Number(inputedAnswerString)
  checkAnswer(inputedAnswerNumber)

}

const checkAnswer = (inputedAnswer) => {

  const answerMessageElement = document.getElementById('answerMessage')

  const correctAnswerMessage = `Great Job. ${inputedAnswer} is the correct answer.`

  const wrongAnswerMessage = `${inputedAnswer} is not correct. Please try again`


  if (inputedAnswer === fullEquationData.answer) {

    answerMessageElement.innerHTML = correctAnswerMessage
    correctAnswers.push(answer)


  } else {

    answerMessageElement.innerHTML = wrongAnswerMessage

  }

}


const initMathToScreen = () => {

  if(equationType === '' || level === '') {
    document.getElementById('equation').innerHTML = `<p class="equationPrompt"> Pick your level and math type above to start game.</p>`
    document.getElementById('answerInputForm').classList.add('hide')
  } else {
    document.getElementById('answerInputForm').classList.remove('hide')
    const finalEquation = createMathEquation(level, equationType)
    const equation = `${finalEquation.equation} = `
    document.getElementById('equation').innerHTML = equation
  }

  console.log('level', level, 'equationType', equationType)


}

const nextButton = (e) => {
  e.preventDefault()
  clearInputs()
  initMathToScreen()


}

const clearInputs = () => {
  document.getElementById('answerInput').value = ''
  document.getElementById('answerMessage').innerHTML = ''
}




// make largest number always 1st.
//make egg hatch.
//put answer after = sign


