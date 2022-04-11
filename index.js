
  let fullEquationData = {}
  let correctAnswersList = []
  let correctAnswersSetsList
  let maxSetOfCorrectAnswers = 2
  let maxNumberOfCorrectAnswersToMakeASet = 3
  let level = ''
  let equationType = ''

  // https://developers.google.com/youtube/iframe_api_reference#Playback_status
  const videoList = [
    // {videoTitle: "sammy Styles trailer"},
    'jK8I37sHQjg',
    '7-Fe9bzDVAk',
    'xAtvik8N_8c',
    'GtpUesWmJkI',
    // kids videos short
    // https://www.youtube.com/watch?v=uONIJ5TQ2DA - math song easy
    // https://www.youtube.com/watch?v=ZHAqT4hXnMw story bots
    // https://www.youtube.com/watch?v=3w-I-WRYlqE story bots theme song
    // https://www.youtube.com/watch?v=i235Y2HRksA story bots song moon
    // https://www.youtube.com/watch?v=GOR4YDdY9dk story bot song dino
    // https://www.youtube.com/watch?v=KECKqtKZXEE story bot dino
    // https://www.youtube.com/watch?v=uqYfyza4e-c story bot dino
    // https://www.youtube.com/watch?v=633OgEaFbDk
    // https://www.youtube.com/watch?v=WRvX67aPHZo
    // https://www.youtube.com/watch?v=t-kzdR93bqw
    // https://www.youtube.com/watch?v=2S2WmgPKIi0
    // https://www.youtube.com/watch?v=Mzs40SdIabE
    // https://www.youtube.com/watch?v=cp2AtBECmEs
    // https://www.youtube.com/watch?v=xdYZNe7_GGA
    // https://www.youtube.com/watch?v=S-ngtAg9tW4
    // https://www.youtube.com/watch?v=3lglFs99juc
    // https://www.youtube.com/watch?v=G0HkkG09koE
    //https://www.youtube.com/watch?v=cp2AtBECmEs
    // https://www.youtube.com/watch?v=2p6EJNRIHYw
    // https://www.youtube.com/watch?v=kvpPmHtZwOs
    // https://www.youtube.com/watch?v=zOJtGOsXX_U
    // https://www.youtube.com/watch?v=TBmZjOHrVJ0
    // https://www.youtube.com/watch?v=do5vkwjO0pI
    // https://www.youtube.com/watch?v=ZfICoMlHmdg






  ]

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


const runVideo = (setNumber) => {
  console.log('videolistid', videoList[setNumber])

  document.getElementById('framedVideoToPlay').src = `https://www.youtube.com/embed/${videoList[setNumber]}`



}

const videoPlayer = () => {



}


const addCorrectAnswerToAnswerList = (inputedAnswer) => {
  if(correctAnswersList.length < maxSetOfCorrectAnswers) {
    correctAnswersList.push(inputedAnswer)
    console.log('correctAnswersList', correctAnswersList)
  } else {
    //play video // when video is done remove video and wipe out correctanswer list

    console.log('maxSetOfCorrectAnswers', maxSetOfCorrectAnswers)
    runVideo(0)
  }


}

const checkAnswer = (inputedAnswer) => {

  const answerMessageElement = document.getElementById('answerMessage')

  const correctAnswerMessage = `Great Job. ${inputedAnswer} is the correct answer.`

  const wrongAnswerMessage = `${inputedAnswer} is not correct. Please try again`


  if (inputedAnswer === fullEquationData.answer) {

    answerMessageElement.innerHTML = correctAnswerMessage
    addCorrectAnswerToAnswerList(inputedAnswer)


  } else {

    answerMessageElement.innerHTML = wrongAnswerMessage

  }

}


const initMathToScreen = () => {

  const answerInputForm = document.getElementById('answerInputForm')
  if(equationType === '' || level === '') {
    document.getElementById('equation').innerHTML = `<p class="equationPrompt"> Pick your level and math type above to start your game.</p>`
    answerInputForm.classList.add('hide')
  } else {
    answerInputForm.classList.remove('hide')
    const finalEquation = createMathEquation(level, equationType)
    const equation = `${finalEquation.equation} = `
    document.getElementById('equation').innerHTML = equation
    // answerInputForm.focus()
    document.getElementById('answerInput').focus()

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


