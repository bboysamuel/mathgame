

     // 2. This code loads the IFrame Player API code asynchronously.

    //  const data = require('./db/videoLists.json');

    //  console.log('data', data)

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
         videoId: 'TBmZjOHrVJ0',
         playerVars: {
           'playsinline': 1 // 0 gets rid of extra videos? rel 0.
           // 'rel': 0
         },
         events: {
           'onReady': onPlayerReady,
           'onStateChange': onPlayerStateChange
         }
       });

       console.log('player times2', player)

   //        const testFunc = async () => {
   //   console.log('test func')
   //   const playerTime = player.getCurrentTime()
   //   console.log('num', playerTime)


   // }
   // testFunc()
     }

     // setTimeout( () => {
     //   const currentTimeOnPlayer = player.getCurrentTime()
     //   const totalVideoDurration = player.getDuration()
     // console.log('currentTimeOnPlayer', currentTimeOnPlayer)
     // console.log('totalVideoDurration', totalVideoDurration)
     // }, 7000)

     // const num = player.getDuration()
   //  const numTwo = num.Number


   // const testFunc = async () => {
   //   console.log('test func')
   //   const playerTime = player.getCurrentTime()
   //   console.log('num', playerTime)


   // }
   // testFunc()

     // console.log('player times1111', player.getDuration())



     // 4. The API will call this function when the video player is ready.
     function onPlayerReady(event) {
       // event.target.playVideo();

     }

     // 5. The API calls this function when the player's state changes.
     //    The function indicates that when playing a video (state=1),
     //    the player should play for six seconds and then stop.
     var done = false;
     function onPlayerStateChange(event) {

       const currentTimeOnPlayer = player.getCurrentTime()
       const totalVideoDurration = player.getDuration()
     console.log('currentTimeOnPlayer', currentTimeOnPlayer)
     console.log('totalVideoDurration', totalVideoDurration)

     if(currentTimeOnPlayer === totalVideoDurration) {
       console.log('ended!!!!', currentTimeOnPlayer)
     }

       // if (event.data == YT.PlayerState.PLAYING && !done) {
       //   setTimeout(stopVideo, 6000);
       //   done = true;
       // }


     }
     function stopVideo() {
       player.stopVideo();

     }




