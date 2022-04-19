
  // import { correctAnswerVideoList }  from './db/videoLists.js'
  let fullEquationData = {}
  let correctAnswersList = []
  let correctAnswersSetsList = []
  let maxSetOfCorrectAnswers = 4
  let maxNumberOfCorrectAnswersToMakeASet = 1
  let level = 1
  let equationType = 'addition'
  let videoIdx = 0


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
        // {
        //   videoTitle: "sammy Styles trailer",
        //   ytId: 'jK8I37sHQjg',
        //   url: 'https://www.youtube.com/watch?v=jK8I37sHQjg'
        // },
        // {
        //   videoTitle: "sammy Styles trailer",
        //   ytId: '7-Fe9bzDVAk',
        //   url: 'https://www.youtube.com/watch?v=7-Fe9bzDVAk'
        // },
        // {
        //   videoTitle: "sammy Styles trailer",
        //   ytId: '7-Fe9bzDVAk',
        //   url: 'https://www.youtube.com/watch?v=xAtvik8N_8c'
        // },
        // {
        //   videoTitle: "sammy Styles trailer",
        //   ytId: 'GtpUesWmJkI',
        //   url: 'https://www.youtube.com/watch?v=GtpUesWmJkI'
        // },
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

const divisionData = (a, b) => {
  let answer
  let equation
        if(a % b === 0) {
          answer = a / b
          equation = `${a} / ${b}`
      }
}

const doDivide = (numToRandomize) => {
    const numOne = Math.floor(Math.random() * numToRandomize)
    const numTwo = Math.floor(Math.random() * numToRandomize)
    const type = '/'
    let answer = numOne / numTwo
    let equation = `${numOne} / ${numTwo}`

    if (numOne > numTwo) {
      if(numOne % numTwo === 0) {
        answer = numOne / numTwo
        equation = `${numOne} / ${numTwo}`
      }

   } else {
    if(numOne % numTwo === 0) {
      answer = numTwo / numOne
      equation = `${numTwo} / ${numOne}`
    }

   }


  const equationData =  {
    numOne: numOne,
    numTwo: numTwo,
    type: type,
    answer: answer,
    equation: equation,
  }

  console.log('equationData', equationData)

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
    setTimeout( () => {
      nextButton()
    }, 2000)
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

  const wrongAnswerMessage = `Not ${inputedAnswer}. Please try again`


  if (inputedAnswer === fullEquationData.answer) {

    answerMessageElement.innerHTML = correctAnswerMessage
    addCorrectAnswerToAnswerList(inputedAnswer)
    addCorrectAnswerImageToScreen()

  } else {

    answerMessageElement.innerHTML = wrongAnswerMessage

  }

  document.getElementById('answerInput').focus()


}


const initMathToScreen = () => {

  const answerInputForm = document.getElementById('answerInputForm')
  if(equationType === '' || level === '') {
    document.getElementById('equation').innerHTML = `<p class="equationPrompt"> Pick your level and math type above to start your game.</p>`
    answerInputForm.classList.add('hide')
  } else {
    answerInputForm.classList.remove('hide')
    const finalEquation = createMathEquation(level, equationType)
    // do answers here
    // const randomWrongAnswers = autoGenerateAnswers(finalEquation)
    // const correctAnswer = finalEquation.answer
    // console.log('randomWrongAnswers initMathToScreen', randomWrongAnswers)
    // console.log('randomWrongAnswers initMathToScreen', correctAnswer)
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
    console.log('videoIdx4', videoIdx)


    document.getElementById('videoToPlay').classList.add('hide')
    document.getElementById('equationContainer').classList.remove('hide')
    document.getElementById('correctAnswerImageContainer').innerHTML = ''
    clearInputs()
    player.loadVideoById(correctAnswerVideoList[videoIdx].ytId)
    player.stopVideo();
    initMathToScreen()

    correctAnswersList = []

}

const nextButton = (e) => {
  // e.preventDefault()
  clearInputs()
  initMathToScreen()
  // do a check if it's hidden
  let equationContainer = document.getElementById('equationContainer')
  removeHelp(e)

  if(equationContainer.classList.contains('hide')) {
    console.log('its hidden')
    nextVideo()
  }

}

const clearInputs = () => {
  document.getElementById('answerInput').value = ''
  document.getElementById('answerMessage').innerHTML = ''
}


// const makeYoutubeVideo = () => {
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  height: '390',
  width: '640',
  videoId: `${correctAnswerVideoList[videoIdx].ytId}`, // 'M7lc1UVf-VE',
  playerVars: {
    'playsinline': 1
  },
  events: {
    // 'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
});
}

// 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
if (event.data === 0) {
  player.stopVideo();
  nextVideo()
  done = true;
  player.loadVideoById(correctAnswerVideoList[videoIdx].ytId)
  player.stopVideo();


}


}

function stopVideo() {
player.stopVideo();
}

// }

// makeYoutubeVideo()

// make largest number always 1st.
//make egg hatch.
//put answer after = sign

// ====================================
// ============================


const autoGenerateAnswers = (finalEquation) => {
  console.log('finalEquation1', finalEquation)
  const randomAnswersArray = []

  do {
    const randomNumHigher =  Math.floor(Math.random() * 4 ) + finalEquation.answer
    randomAnswersArray.push(randomNumHigher)
    const randomNumLower =  finalEquation.answer - 7 + Math.floor(Math.random() * 4 )

    if (randomNumHigher !== randomNumLower  && !finalEquation.answer === randomNumHigher && !finalEquation.answer === randomNumLower) {
      randomAnswersArray.push(randomNumHigher)
      randomAnswersArray.push(randomNumLower)
    }



    // const numOne = Math.floor(Math.random() * numToRandomize)

  } while (randomAnswersArray.length < 4)
  console.log('randomAnswersArray', randomAnswersArray)
  console.log('finalEquation.answer', finalEquation.answer)


}

const getHelp = (e) => {
  e.preventDefault();
  document.getElementById('getHelp').innerHTML = `
    <button onclick="removeHelp(event)">Remove Help</button>
    <div id="framedModal" class="framedModal">
      <iframe src="https://apps.mathlearningcenter.org/number-pieces" style="width: 800; height: 600;"></iframe>
    </div>
  `
}

const removeHelp = (e) => {
  // e.preventDefault();
  document.getElementById('getHelp').innerHTML = `
    <button onclick="getHelp(event)">Get Help?</button>
    <div id="framedModal" class="framedModal">
    </div>
  `
}


{/* <div id="getHelp" class="framedModal">
<button onclick="getHelp(event)">need help?</button>
<div id="framedModal" class="framedModal"></div>
</div> */}


const addCorrectAnswerImageToScreen = () => {
  let image = document.createElement('img');
  image.classList.add('correctAnswerTallyImage')
  image.src = 'images/dragon.png';
  document.getElementById('correctAnswerImageContainer').prepend(image)

}

// document.getElementById('correctAnswerImageContainer').innerHTML = ''

// let image = document.createElement('img');
// image.src = 'images/toothless-dragon.png';
// console.log('image', image)
// document.getElementById('app').appendChild(image)

