
  // import { correctAnswerVideoList }  from './db/videoLists.js'
  let fullEquationData = {}
  let correctAnswersList = []
  let correctAnswersSetsList = []
  let maxSetOfCorrectAnswers = 0
  let maxNumberOfCorrectAnswersToMakeASet = 1
  let level = 1
  let equationType = 'addition'
  let videoIdx = 5


    const initDom = () => {
      let levelButtonElement = document.getElementById('dropbtnLevel')
      levelButtonElement.innerHTML = `Level ${level}`

      const mathTypeButtonMathType = document.getElementById('dropbtnMathType')
      mathTypeButtonMathType.innerHTML = `${equationType}`

    }

    initDom()



  // https://developers.google.com/youtube/iframe_api_reference#Playback_status
  //
  const correctAnswerVideoList = [
        {
          videoTitle: "sammy Styles trailer",
          ytId: 'jK8I37sHQjg',
          url: 'https://www.youtube.com/watch?v=jK8I37sHQjg'
        },
        {
          videoTitle: "sammy Styles trailer",
          ytId: '7-Fe9bzDVAk',
          url: 'https://www.youtube.com/watch?v=7-Fe9bzDVAk'
        },
        {
          videoTitle: "sammy Styles trailer",
          ytId: '7-Fe9bzDVAk',
          url: 'https://www.youtube.com/watch?v=xAtvik8N_8c'
        },
        {
          videoTitle: "sammy Styles trailer",
          ytId: 'GtpUesWmJkI',
          url: 'https://www.youtube.com/watch?v=GtpUesWmJkI'
        },
        {
          videoTitle: "math music video",
          ytId: 'uONIJ5TQ2DA',
          url: 'https://www.youtube.com/watch?v=uONIJ5TQ2DA'
        },
        {
          videoTitle: "story bots",
          ytId: 'ZHAqT4hXnMw',
          url: 'https://www.youtube.com/watch?v=ZHAqT4hXnMw'
        },
        {
          videoTitle: "story bots",
          ytId: '3w-I-WRYlqE',
          url: 'https://www.youtube.com/watch?v=3w-I-WRYlqE'
        },
        {
          videoTitle: "story bots",
          ytId: 'i235Y2HRksA',
          url: 'https://www.youtube.com/watch?v=i235Y2HRksA'
        },
        {
          videoTitle: "story bots",
          ytId: 'GOR4YDdY9dk',
          url: 'https://www.youtube.com/watch?v=GOR4YDdY9dk'
        },
        {
          videoTitle: "story bots",
          ytId: 'KECKqtKZXEE',
          url: 'https://www.youtube.com/watch?v=KECKqtKZXEE'
        },
        {
          videoTitle: "story bots",
          ytId: 'uqYfyza4e-c',
          url: 'https://www.youtube.com/watch?v=uqYfyza4e-c'
        },
        {
          videoTitle: "story bots",
          ytId: '633OgEaFbDk',
          url: 'https://www.youtube.com/watch?v=633OgEaFbDk'
        },
        {
          videoTitle: "story bots",
          ytId: 'WRvX67aPHZo',
          url: 'https://www.youtube.com/watch?v=WRvX67aPHZo'
        },
        {
          videoTitle: "story bots",
          ytId: 't-kzdR93bqw',
          url: 'https://www.youtube.com/watch?v=t-kzdR93bqw'
        },
        {
          videoTitle: "story bots",
          ytId: '2S2WmgPKIi0',
          url: 'https://www.youtube.com/watch?v=2S2WmgPKIi0'
        },
        {
          videoTitle: "story bots",
          ytId: 'Mzs40SdIabE',
          url: 'https://www.youtube.com/watch?v=Mzs40SdIabE'
        },
        {
          videoTitle: "story bots",
          ytId: 'cp2AtBECmEs',
          url: 'https://www.youtube.com/watch?v=cp2AtBECmEs'
        },
        {
          videoTitle: "story bots",
          ytId: 'xdYZNe7_GGA',
          url: 'https://www.youtube.com/watch?v=xdYZNe7_GGA'
        },
        {
          videoTitle: "story bots",
          ytId: 'S-ngtAg9tW4',
          url: 'https://www.youtube.com/watch?v=S-ngtAg9tW4'
        },
        {
          videoTitle: "story bots",
          ytId: '3lglFs99juc',
          url: 'https://www.youtube.com/watch?v=3lglFs99juc'
        },
        {
          videoTitle: "story bots",
          ytId: 'G0HkkG09koE',
          url: 'https://www.youtube.com/watch?v=G0HkkG09koE'
        },
        {
          videoTitle: "story bots",
          ytId: 'cp2AtBECmEs',
          url: 'https://www.youtube.com/watch?v=cp2AtBECmEs'
        },
        {
          videoTitle: "story bots",
          ytId: '2p6EJNRIHYw',
          url: 'https://www.youtube.com/watch?v=2p6EJNRIHYw'
        },
        {
          videoTitle: "story bots",
          ytId: 'kvpPmHtZwOs',
          url: 'https://www.youtube.com/watch?v=kvpPmHtZwOs'
        },
        {
          videoTitle: "story bots",
          ytId: 'zOJtGOsXX_U',
          url: 'https://www.youtube.com/watch?v=zOJtGOsXX_U'
        },
        {
          videoTitle: "story bots",
          ytId: 'TBmZjOHrVJ0',
          url: 'https://www.youtube.com/watch?v=TBmZjOHrVJ0'
        },
        {
          videoTitle: "story bots",
          ytId: 'do5vkwjO0pI',
          url: 'https://www.youtube.com/watch?v=do5vkwjO0pI'
        },
        {
          videoTitle: "story bots",
          ytId: 'ZfICoMlHmdg',
          url: 'https://www.youtube.com/watch?v=ZfICoMlHmdg'
        },

      ]




  const selectLevel = (e) => {
    // level = ''
    level = Number(e.target.innerHTML)
        // ### TODO - set to screen You are on level 1.
        // if(level !== '') {
          let levelButtonElement = document.getElementById('dropbtnLevel')
          levelButtonElement.innerHTML = `Level ${level}`
        // }

    // console.log('level', level)
    initMathToScreen()

  }

  const selectEquationType = (e) => {
    // equationType = []
    // equationType.push(e.target.innerHTML) // NOTE: TODO. to do multiple make an array later.
    equationType = e.target.innerHTML

    // if(equationType !== '') {
      const mathTypeButtonMathType = document.getElementById('dropbtnMathType')
      mathTypeButtonMathType.innerHTML = `${equationType}`
    // }


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
  // console.log('videolistid', correctAnswerVideoList[setNumber])

  // document.getElementById('framedVideoToPlay').src = `https://www.youtube.com/embed/${correctAnswerVideoList[setNumber]}`

  // videoPlayer(correctAnswerVideoList[7].ytId)

  // do the logic to change video id. switch to hide.
  document.getElementById('videoToPlay').classList.remove('hide')
  document.getElementById('equationContainer').classList.add('hide')


  // console.log('videoIdx 1', videoIdx)
  // videoIdx = videoIdx +1


}




const addCorrectAnswerToAnswerList = (inputedAnswer) => {
  if(correctAnswersList.length < maxSetOfCorrectAnswers) {
    correctAnswersList.push(inputedAnswer)
    // console.log('correctAnswersList', correctAnswersList)
  } else {
    //play video // when video is done remove video and wipe out correctanswer list

    // console.log('maxSetOfCorrectAnswers', maxSetOfCorrectAnswers)
    // videoIdx = videoIdx +1
    // console.log('videoIdx in addCorrectAnswerToAnswerList', videoIdx)
    runVideo()
  }


}

const checkAnswer = (inputedAnswer) => {

  const answerMessageElement = document.getElementById('answerMessage')

  const correctAnswerMessage = `Great Job! ${inputedAnswer} is correct.`

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

const nextVideo = () => {

    if (videoIdx === correctAnswerVideoList.length) {
      videoIdx = 0
    } else {
      videoIdx = videoIdx + 1
    }

    document.getElementById('videoToPlay').classList.add('hide')
    document.getElementById('equationContainer').classList.remove('hide')
    clearInputs()
    initMathToScreen()

    correctAnswersList = []

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

// ====================================
// ============================




