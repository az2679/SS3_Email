
let replyHeadingArray, replyHeading, replyHeadingTextArray, replyHeadingText;


function setup() {
  createCanvas(windowWidth, windowHeight);


  let textHeight=30

  let emailSections = new Group()
  emailSections.collider = 's'
  emailSections.color = 230

  let emailWindow = new emailSections.Sprite()
  emailWindow.pos = {x: width/2, y: height/2}
  emailWindow.w = width*0.9
  emailWindow.h = height*0.9

  let emailWindowTab1 = new emailSections.Sprite()
  emailWindowTab1.w = emailWindow.w 
  emailWindowTab1.x = emailWindow.x
  emailWindowTab1.h = emailWindow.h*0.075
  emailWindowTab1.y = (emailWindow.y-emailWindow.h/2) + emailWindowTab1.h/2
  emailWindowTab1.color = 150

  let emailWindowTab2 = new emailSections.Sprite()
  emailWindowTab2.w = emailWindowTab1.w -2
  emailWindowTab2.x = emailWindowTab1.x
  emailWindowTab2.h = emailWindowTab1.h
  emailWindowTab2.y = (emailWindowTab1.y+emailWindowTab1.h/2) + emailWindowTab2.h/2
  emailWindowTab2.stroke = emailWindowTab2.color

  let sideBar = new emailSections.Sprite()
  sideBar.w = emailWindow.w*0.2 
  sideBar.x = (emailWindow.x-emailWindow.w/2) + sideBar.w/2 +2
  sideBar.h = emailWindow.h - emailWindowTab1.h - emailWindowTab2.h -2
  sideBar.y = emailWindow.y + emailWindowTab1.h
  sideBar.stroke = sideBar.color

  let margin = 10
  let inboxBar = new emailSections.Sprite()
  inboxBar.w = emailWindow.w*0.25
  inboxBar.x = (sideBar.x+sideBar.w/2) + inboxBar.w/2 + margin/2
  inboxBar.h = emailWindow.h - emailWindowTab1.h - emailWindowTab2.h
  inboxBar.y = emailWindow.y + emailWindowTab1.h
  inboxBar.color = 255

  let emailDraft = new emailSections.Sprite()
  emailDraft.w = emailWindow.w*0.53
  emailDraft.x = (emailWindow.x+emailWindow.w/2) - emailDraft.w/2 - margin
  emailDraft.h = emailWindow.h - emailWindowTab1.h - emailWindowTab2.h - margin
  emailDraft.y = emailWindow.y + emailWindowTab1.h - margin/2
  emailDraft.color = 255

  let emailInterface = new Group()
  emailInterface.collider = 's'
  emailInterface.color = 245
  emailInterface.stroke = emailInterface.color 

  let emailDraftTab = new emailInterface.Sprite()
  emailDraftTab.w = emailDraft.w
  emailDraftTab.x = emailDraft.x
  emailDraftTab.h = emailWindowTab2.h - margin/2
  emailDraftTab.y = emailWindowTab2.y

  let newMessageTab = new emailInterface.Sprite()
  newMessageTab.w = sideBar.w*0.75
  newMessageTab.x = (sideBar.x - sideBar.w/2) + newMessageTab.w/2 + margin*2
  newMessageTab.h = emailWindowTab2.h -margin/2
  newMessageTab.y = emailWindowTab2.y + margin/2

  let draftElements = new Group()
  draftElements.collider = 's'
  draftElements.color = 255
  draftElements.stroke = 0


  let draftHeading = new draftElements.Sprite()
  draftHeading.w = emailDraft.w
  draftHeading.x = emailDraft.x
  draftHeading.h = emailDraft.h*0.3
  draftHeading.y = (emailDraft.y - emailDraft.h/2) + draftHeading.h/2
  draftHeading.visible = false
  
  let draftReplyTo = new draftElements.Sprite()
  draftReplyTo.w = emailDraft.w
  draftReplyTo.x = emailDraft.x
  draftReplyTo.h = emailDraft.h*0.19
  draftReplyTo.y = (emailDraft.y + emailDraft.h/2) - draftReplyTo.h/2
  draftReplyTo.visible = false

  replyHeadingArray = []
  while(replyHeadingArray.length < 3){
   replyHeading = new draftElements.Sprite()
   replyHeadingArray.push(replyHeading)

   replyHeading.w = draftReplyTo.w * 0.1
   replyHeading.x = (draftReplyTo.x - draftReplyTo.w/2) + replyHeading.w/2 + margin*2
   replyHeading.h = textHeight
   replyHeading.y = (draftReplyTo.y - draftReplyTo.h/2) + (replyHeadingArray.length * replyHeading.h)
   replyHeading.color=200
  }
  replyHeadingTextArray = []
  while(replyHeadingTextArray.length < 3){
   replyHeadingText = new draftElements.Sprite()
   replyHeadingTextArray.push(replyHeadingText)

   replyHeadingText.w = draftReplyTo.w * 0.6
   replyHeadingText.x = (replyHeading.x + replyHeading.w/2) + replyHeadingText.w/2
   replyHeadingText.h = textHeight
   replyHeadingText.y = (draftReplyTo.y - draftReplyTo.h/2) + (replyHeadingTextArray.length * replyHeadingText.h)
   replyHeadingText.color=200
  }

  let replyLine = new draftElements.Sprite()
  replyLine.w = draftReplyTo.w * 0.94
  replyLine.x = (draftReplyTo.x - draftReplyTo.w/2) + replyLine.w/2 + margin*2
  replyLine.h = 0
  replyLine.y = draftReplyTo.y - draftReplyTo.h/2
  replyLine.stroke = 0

  sendHeadingArray = []
  while(sendHeadingArray.length < 3){
   sendHeading = new draftElements.Sprite()
   sendHeadingArray.push(sendHeading)

   sendHeading.w = draftHeading.w * 0.1
   sendHeading.x = (draftHeading.x - draftHeading.w/2) + sendHeading.w/2 + margin*2
   sendHeading.h = textHeight
   sendHeading.y = (draftHeading.y - draftHeading.h/2) + (sendHeadingArray.length * sendHeading.h * 1.3) 
   sendHeading.color=200
  }

  sendHeadingLinesArray = []
  while(sendHeadingLinesArray.length < 3){
   sendHeadingLines = new draftElements.Sprite()
   sendHeadingLinesArray.push(sendHeadingLines)

   sendHeadingLines.w = draftHeading.w * 0.75
   sendHeadingLines.x = (draftHeading.x + draftHeading.w/2) - sendHeadingLines.w/2 - margin*2
   sendHeadingLines.h = 0
   sendHeadingLines.y = (draftHeading.y - draftHeading.h/2) + (sendHeadingLinesArray.length * (textHeight) * 1.3) + textHeight*0.4
   sendHeadingLines.stroke=200
  }

  let textEditor = new draftElements.Sprite()
  textEditor.w = draftHeading.w * 0.94
  textEditor.x = draftHeading.x - draftHeading.w/2 + textEditor.w/2 + margin*2
  textEditor.h = sendHeading.h*1.1
  textEditor.y = draftHeading.y + draftHeading.h/2 - textEditor.h/2 
  textEditor.color = 240
  textEditor.stroke = textEditor.color


}

function draw() {
  background(200);
}
