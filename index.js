
  // import { correctAnswerVideoList }  from './db/videoLists.js'
  let fullEquationData = {}
  let correctAnswersList = []
  let correctAnswersSetsList = []
  let maxSetOfCorrectAnswers = 9
  let maxNumberOfCorrectAnswersToMakeASet = 1
  let level = 0
  let equationType = 'multiplication'
  let videoIdx = 0


    const initDom = () => {
      let levelButtonElement = document.getElementById('dropbtnLevel')
      if(level === 0 ) {
        levelButtonElement.innerHTML = `custom`
      } else {
        levelButtonElement.innerHTML = `Level ${level}`
      }

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
          ytId: 'GOR4YDdY9dk',
          url: 'https://www.youtube.com/watch?v=GOR4YDdY9dk'
        },
        {
          videoTitle: "101 dal",
          ytId: '6PydtFfyFtY',
          url: 'https://www.youtube.com/watch?v=6PydtFfyFtY'
        },
        {
          videoTitle: "song",
          ytId: 'fJqzizJprOk',
          url: 'https://www.youtube.com/watch?v=fJqzizJprOk'
        },
        {
          videoTitle: "story bots",
          ytId: 'p2xikumJDAY',
          url: 'https://www.youtube.com/watch?v=p2xikumJDAY'
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
    level = Number(e.target.innerHTML)
        if(level !== '') {
          let levelButtonElement = document.getElementById('dropbtnLevel')
          if(level === 0 ) {
            levelButtonElement.innerHTML = `custom`
          } else {
            levelButtonElement.innerHTML = `Level ${level}`
          }
        }
    initMathToScreen()

  }

  const selectEquationType = (e) => {
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


  const equationData =  {
    numOne: numOne,
    numTwo: numTwo,
    type: type,
    answer: answer,
    equation: equation,
  }

  return equationData


}

const customTestNumbers = (baseNumbers) => {
  return baseNumbers.flatMap(num => {
    return Array.from({ length: 9 }, (_, i) => ({ numOne: num, numTwo: i + 2 }));
  });
};


const customMultiplicationEquations = () => {
  // Define an array of custom equations with only numOne and numTwo
  // console.log('yahh')
  const multiplyBy = [10, 5, 2, 4, 8, 3, 6, 7]
  const customEquations = customTestNumbers(multiplyBy)
  // const customEquations = [
  //   { numOne: 5, numTwo: 5 },
  //   { numOne: 2, numTwo: 3 },
  //   { numOne: 7, numTwo: 8 }
  // ];



// // testOneMultiply x 10s
// for (let i = 2; i <= 10; i++) {
//   customEquations.push({ numOne: 10, numTwo: i });
// }
// // testTwo multiply x 5's
// for (let i = 2; i <=10; i ++) {
//   customEquations.push({numOne: 5, numTwo: i})
// }
// // testThree x 2's
// for (let i = 2; i <= 10; i++) {
//   customEquations.push({numOne: 2, numTwo: i})
// }
// //testFour x 4's
// for (let i = 2; i <= 10; i++) {
//   customEquations.push({numOne: 4, numTwo: i})
// }
// //testFive x8's
// for (let i = 2; i <= 10; i++) {
//   customEquations.push({numOne: 8, numTwo: i})
// }
console.log('customEquations', customEquations)
  // Randomly select one of the custom equations
  const randomIndex = Math.floor(Math.random() * customEquations.length);
  const selectedEquation = customEquations[randomIndex];

  if (Math.random() > 0.5) { // gives 50/50 chance
    [selectedEquation.numOne, selectedEquation.numTwo] = [selectedEquation.numTwo, selectedEquation.numOne];
  }

  // Calculate the answer
  const answer = selectedEquation.numOne * selectedEquation.numTwo;

  // Construct and return the equation data
  return {
    numOne: selectedEquation.numOne,
    numTwo: selectedEquation.numTwo,
    type: 'X',
    answer: answer,
    equation: `${selectedEquation.numOne} x ${selectedEquation.numTwo}`,
  };
};



const doMultiply = (numToRandomize) => {
console.log('numToRandomize', numToRandomize)
  if(!numToRandomize) {
    return customMultiplicationEquations()
  } else {
    const numOne = Math.floor(Math.random() * numToRandomize)
    const numTwo = Math.floor(Math.random() * numToRandomize)
    const type = 'X'
    const answer = numOne * numTwo
    const equation = `${numOne} x ${numTwo}`


  const equationData =  {
    numOne: numOne,
    numTwo: numTwo,
    type: type,
    answer: answer,
    equation: equation,
  }

  return equationData

  }



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
        case 0:
          numToRandomize = null
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
  window.scrollTo(0, 0);


}


const runVideo = (setNumber) => {

  document.getElementById('videoToPlay').classList.remove('hide')
  document.getElementById('equationContainer').classList.add('hide')


}




const addCorrectAnswerToAnswerList = (inputedAnswer) => {
  if(correctAnswersList.length < maxSetOfCorrectAnswers) {
    correctAnswersList.push(inputedAnswer)
    setTimeout( () => {
      nextButton()
    }, 2000)
  } else {

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
    // showBalloons()

  } else {

    answerMessageElement.innerHTML = wrongAnswerMessage

  }

  document.getElementById('answerInput').focus()


}

const showBalloons = () => {
  const balloonContainer = document.getElementById('balloons-container')
  balloonContainer.classList.remove("hide")
}

const hideBalloons = () => {
  const balloonContainer = document.getElementById('balloons-container')
  balloonContainer.classList.add("hide")
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
    initHelpIcons(finalEquation)


    document.getElementById('answerInput').focus()

  }


  console.log('level', level, 'equationType', equationType)


}

const makeRandomVideoNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const nextVideo = () => {

    if (videoIdx === correctAnswerVideoList.length) {
      videoIdx = 0
    } else {
      // videoIdx = videoIdx + 1
      videoIdx = makeRandomVideoNumber(0, correctAnswerVideoList.length)
    }
    console.log('videoIdx4', videoIdx)


    document.getElementById('videoToPlay').classList.add('hide')
    document.getElementById('equationContainer').classList.remove('hide')
    document.getElementById('correctAnswerImageContainer').innerHTML = ''
    clearInputs()
    player.loadVideoById(correctAnswerVideoList[videoIdx].ytId)
    player.stopVideo();

    correctAnswersList = []
    initMathToScreen()


}

const nextButton = (e) => {
  // e.preventDefault()
  clearInputs()
  removeHelp(e)
  initMathToScreen()
  // do a check if it's hidden
  let equationContainer = document.getElementById('equationContainer')

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



  } while (randomAnswersArray.length < 4)
  console.log('randomAnswersArray', randomAnswersArray)
  console.log('finalEquation.answer', finalEquation.answer)


}

const getHelp = (e) => {
  // e.preventDefault();


  const framedModal = document.getElementById('framedModal')
  framedModal.classList.remove('hide')

  const button = document.getElementById('getHelpButton')
  button.removeEventListener('click', getHelp)
  button.addEventListener('click',   removeHelp)
  button.innerHTML = "hide help"

}

const removeHelp = (e) => {
  // e.preventDefault();
  document.getElementById('framedModal').innerHTML = ''

  const framedModal = document.getElementById('framedModal')
  framedModal.classList.add('hide')

  const button = document.getElementById('getHelpButton')
  button.removeEventListener('click', removeHelp)
  button.addEventListener('click',   getHelp)
  button.innerHTML = "help"



}



const addCorrectAnswerImageToScreen = () => {
  let image = document.createElement('img');
  image.classList.add('correctAnswerTallyImage')
  image.src = 'images/dragon.png';
  document.getElementById('correctAnswerImageContainer').prepend(image)

}

const makeBalloons = () => {
  for (x=0; x < 9; x++) {
  const balloon = document.createElement('div')
  const p = document.createElement('p')
  p.classList.add('balloonNum')
  // p.innerText = '9'
  // p.setAttribute('data-')
  balloon.classList.add('balloon')
  balloon.appendChild(p)
  document.getElementById('balloons-container').appendChild(balloon)
}
}


// repeat to dom 8 or how ever many
// create 4random numbers.
// add answer number.
// print number on each
// when clicked it fills the number in the answer and pops.
// stop balloons when video plays.

const initHelpIcons = (finalEquation) => {
  // const finalEquation = fullEquationData
  let a = finalEquation.numOne
  let b = finalEquation.numTwo
  let sign = finalEquation.type

  const divContainer = document.getElementById('framedModal')

  for (let x = 0; x < a; x ++) {

    let image = document.createElement('img');
    image.classList.add('correctAnswerTallyImage')
    image.src = 'images/dragon1.png';
    divContainer.appendChild(image)

  }

  let plusSign = document.createElement('p')
  plusSign.classList.add('plusSign')
  plusSign.innerText = sign
  divContainer.appendChild(plusSign)

  for (let x = 0; x < b; x ++) {
    let image = document.createElement('img');
    image.classList.add('needHelpIcon')
    image.src = 'images/dragon1.png';
    divContainer.appendChild(image)
  }

}
// initHelpIcons()
