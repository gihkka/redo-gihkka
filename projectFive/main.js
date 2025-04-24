//Followed this tutorial https://www.youtube.com/watch?v=kayFBMl06q8&list=LL&index=5&t=1873s
//I didn't really want to use choices (and images) as much as the dude in the video, but I decided to do it once to show that I know how at least
//I learned how to use quotations in strings from this video/tutorial https://youtu.be/C3Ldd-5PKCw?si=aqYIpypfFuSK0PvM

var story;
function getStory(name) {
  return {
    currentScene: "chapOne",
    chapOne: {
      title: "Chapter 1: Child of Light",
      story: `You wake up in a cold sweat. You look frantically look around, it seems you are in forest. \"How did I get here?\" you mumble. 
        You take a long look around, the only thing that surrounds is trees, stumps and an assortment of different plants and unlit candles for miles. Deciding that
        there isn't much else to do, you think it would be best to reassess what you seem to DO know: you live on Earth, but this doesn't seem to be Earth, everything 
        within vision seems to be a bit hazy, and low quality. \"Who...am I? Why do I remember all these small details?\", you wonder. You are a human, like most of 
        Earth's citizens-and if this isn't Earth the inhabitants must be...You quickly forget about that train of thought as a glowing child approaches you, and approaches you FAST.
         \"Woah! Watch it there buddy.\" The glowing child suddenly throws it's arms upward, a little bit shocked at the noise from your speaking. \"Do you know where I am? How can I 
         get back home?\". The child ponders for a while, and suddenly throws it's arms upwards again, but this time in revelation. The child walks away for a bit, returns with a branch, getures 
         downwards. You both crouch down together, when the Child suddenly flips the branch upside down. The child gestures towards you, and writes \"Kingdom of Sky\".
         \"The Kingdom of Sky, Huh? I obviously don't belong here...Is there any way you can lead me back home?\". The child nods eagerly, and holds out their hand for you to take. You grab the
         child's hand and it brings you to a rock, surrounded by candles. \"I presume we have to light these...But I haven't seen any fire sources nearby!\", just as
         you're about to start brainstorming the child pulls a candle out of their chest, using it to light the candles. The child then sits down and starts to meditate, only opening it's eyes to 
         look at you expectantly. After copying the child, a giant while circle appears on the ground! \"Is this SUPPOSED to happen!?\", you exclaim. Right as you look to the child everything fades to black.`,
      choices: [
        {
          choice: "1 Dollar World.",
          destination: 'chapSeph'
        },
        {
          choice: "2 Dollar World.",
          destination: 'chapShadow'
        }
      ]
    },
    chapThree: {
      title: "Chapter 3: The Scary World",
      story: `You wake up, in IMMENSE pain. \"Seriously...Did that guy HAVE to punch me?!\" You take a moment to breathe and look around, this is DEFINITELY not your home. Everything is a bit dark
      and grimy, you are in a small...security room? Around you are many small boxes of party supplies, things like party masks, hats, confetti, and papers are littered all over the desk in the center
      the room. Dead center, on top of the very prominent desk, is a camera feed. The place you seem to be in is a Restaurant...Playplace of some sort, through the camera feed you can see rooms like a Kitchen, Party Room, Play Room,
      Arcade Area, Stage, Backstage and Bathrooms. In the camera feed, something catches your eye, as it starts to flicker very rapidly. Soon you come face to face with an animatronic, now facing straight towards 
      the camera. \"Narrator...I'm getting the chills! Do something!\" Hmmm...NARRATOR CANNOT BE FOUND...just kidding! You notice buttons on the left and right side of the office, testing pressing one shows
      that the button closes the door. As you mess around a bit more, everything starts to flicker-the lights, the camera feeds, the small lights in the buttons beside the door. Until, there is a face right beside you,
      \"I always come back-Uh\", you immediately snap backwards and stare at the monster in shock. Now that the lights are no longer flickering, you take in the figure. A giant animatronic-like thing...suit...being?-stands right 
      infront of you. It's material a gross yellowish green colour. It's grimy, covered in rust, littered with multiple gaps, holes, and stray pieces of flesh and guts on the broken edges. \"I'm not who you were
      expected...right?\" you nervously try to communicate with it. \"I was caught off guard indeed, but no matter...there's always room for one more!\" he exclaims with a deranged look on his face. He then pulls out a 
      knife from somewhere inside that wretched suit, frozen in fear, shock, and some of the stench of this nasty place, you can only stare as he lunges towards you. As he tries to connect the knife with your body, there is 
      a bright flash of light.
      `,
      defaultDestination: 'chapFour',
      buttonText: "Next Chapter"
    },
    chapFour: {
      title: "Chapter 4: A Kind Architect Helps Out",
      story: `You wake up during the day this time. You figure that wherever you first appear has something to do with the rules of these strange worlds. You either seem to spawn at night, 
      or in a place where no one is able to see you. You figure this out because instead of waking up on the floor, you wake up on top of someones roof! \"God...I hope I don't get arrested for tresspassing or
      something...\" you hope and pray that no one notices you hopping down from the roof. You plop down onto the ground, \"Excuse me...! What were you doing on my roof?!\" someone yells. You wince as you turn around,
      with an awkward laugh you say \"Would you believe that I don't remember who I am and I keep being sent to different worlds?\" His jaw drops a bit, but only for a bit, he quickly composes himself and stares at you
      for a few seconds, trying to gauge whether or not you would lie about something so ridiculous! \"Say thats true...Why would you tell me this right away? What if I wanted to kill you...or EXPERIMENT on you?\" he questions. 
      \"I'm honestly just really tired! People have punched me and tried to kill me...I just wanna get back home!\" you whine. \"Please just help me...!\" You grab his shoulders and shake him, crying out at the same time. \"Okay! Okay!
      Fine! I'll help! You're lucky that you found me, someone generous AND helpful.\" he explains. \"My name is Kaveh, renowned architect-light of kshahrewar! Nice to meet you..?\" he prompts you to answer with your name, but no
      matter how hard you try, nothing comes to mind. Poor you, the narrator is quite sad you can't remember your own name! \"I honestly wish I could tell you my name but I don't remember.\" you sadly tell him. He at first looks shocked,
      but gives you a look and nod of sympathy. \"Nothing is worse than not being able to truly know yourself, I'll be sure to help you!\" Kaveh exclaims. He gestures for you to actually entire the house, instead of resting on top of the
      roof. As you pass, you take a look at the cozy living room. It's filled to the brim with books, and cute displays of different types of fruit bowls. Kaveh leads you to his room, where he seems to keep a considerable amount of little stray 
      trinkets and blueprints. He pushes everything to the side, willing to push aside whatever he was working on to help you. \"You can sit down anywhere, luckily I already have a few theories about interdimensional travel. You just being here
      confirms a few of them-it'll be much easier to create something now!\" he explains. You sit down and answer whichever questions he has for you as he scribbles and tinkers in response for hours and hours, suddenly there's a knock at the door. \"Can you answer that? I'm so close to figuring this out,
      it'll be worth it...I swear!\" he asks. You stand up to answer the door but suddenly it opens before you, a man with grey hair scowls at you, and turns to Kaveh. \"Kaveh, you haven't eaten...and who is this?\" the man questions Kaveh,
      trying to ignore you completely. \"Ah Haiyi! I'm trying to help this person get back home,\" he speaks without turning the the man, \"I'll explain it all later I promise!\" he shouts. \"Ah finally! I think I got it!\" he exclaims. In his
      hands, he holds a small metal device, and arrow stands facing forwards in the middle. It is seperated by 3 different layers. He gives it to you and explains, \"The machine is still a bit of a prototype, but it should help you get back home without being punched and beaten up! The device is split into
      3 sections. Match up each section with the arrow, the first section is Era- the time, or year that you came from! The second is the dimensions, meaning the amount of faces your dimension has! And the last one is the id of your world, since you don't remember you might just have 
      to mess around and see...\" he says, all in one breath-laughing nervously at the end. \"I still appreciate it Kaveh, I might finally be able to get home!\" you cry out. Finally relieved of all this trouble, you give Kaveh a hug, in your moment
      you feel a pair of eyes on you...Ah the grey haired man. Ending the hug, you thank Kaveh profusely and try to use the gadget. You are once again greeted by a familiar bright white flash of light.
      
      `,
      defaultDestination: 'chapFive',
      buttonText: "Next Chapter"
    },
    chapFive: {
      title: "Chapter 5: Trying out the Architect's Gadget ",
      story: `Once again, you wake up in the middle of nowhere. In the distance you can see a beach, you realize you are on a boardwalk. You wonder...Am I finally home? Is this Earth!? Though the area seems awfully 
      empty for the sun-setting. Where are all the people? As you approach the beach, you see one lone person sitting on a bench. A blonde woman, dressed in all pink, staring out towards the ocean. Not wanting to scare the woman, you try to
       speak first, \"Excuse me? Do you know where we are? I'm just trying to get back home...\" you ask. She suddenly turns around, with a kind smile gestures for you to sit at the bench as well. \"Why you, silly stranger, are in BarbieLand...Don't you love
       life...There's nothing greater than it.\" she says. Ah...so it's not Earth there's no reason to stay then! \"Ah I see...Thanks anyways, I was-mistaken I guess!\" you quickly explain. As you walk towards the forest, using the device once again. 
       When you wake up, you hear noises of fighting and war! \"Crap, crap, crap, shit! Wrong world! Wrong world!\" you freak out as you look at the commotion in the sky. There's a giant blue dragon and what looks something on fire flying around, there's millions of gold and 
       black particles flying around, or that's what YOU can see from this far. Whatever you saw, is enough for you to want to quickly get out of this world, you activate the device once again. When you wake again, you hear noises of commotion, whatever it was that 
       was keeping you from waking up in front of other people, is completely gone now! \"It must be the work of that Kaveh...!\" you exclaim. Unfortunately for you, speaking is what gets everyone currently involved in what looks like an epic brawl, to look directly at you.
       A blond woman with weird antennae on her head, \"WHO is this TWERP?!\" She screams as she scowls directly at you. As this is not the type of environment you were looking for, you immediately start to tinker with the gadget again. As you are doing that, the woman gets increasingly 
       annoyed with you. She then screams in frustration and lunges straight at you, electric powers bursting and crackling at her palms. She gets closer, closer and closer...until finally a familar white flash blinds everyone. 
       This time you wake up in another familar place, a bright white lab-filled with blue patients. This isn't what you thought you were looking for, but something about this lab feels strangely, homely to you. You're finally back huh, BANBAN?
      
      `,
      defaultDestination: 'chapSix',
      buttonText: "Next Chapter"
    },
    chapSix: {
      title: "Chapter 6: The Banban-binale",
      story: `\"Banban huh...That's...me?\" you ask. Yep, I knew it all along, as we are two halves to one whole Banban, for I am Flumbo-your celestial other half. You were a scientist working on many, many different experiments. You worked on creation of different kinds of kid's entertainment and 
      areas of resources. Daycares, Kindergartens, Pizzerias, Restaurants, Schools and more. You would create kid's mascots for all of these different types of locations, but people didn't know the inner working of your experiments. You eventually tested on yourself
      turning your skin red, and eventually forgetting all that you ever loved and remembered. Not caring about the world that you currently lived in, you worked and worked on the research of interdimensional travel. It was possible, and you made it work-
      over and over again. To continue getting funding from all of the previous locations, you would take people from different dimensions, forcing experiments on them-turning them into fellow kid's mascots and entertainment tools. That wasn't enough for you though, 
      you are a cold-blooded scientist after all, you have to keep going, keep pushing, keep researching! You didn't want to only travel, but to create! You tried to create a world, not knowing that it would contain all of the monsters that you created...In the process of 
      the creation of your world, everything imploded on you. Causing you to wake up in multiple worlds, over and over and over again. This is not the first time this little adventure has happened. This won't be the last time it happens. Forever and ever, we must repent for the sin of creation, 
      for we are not gods my friend. We don't have the authority to create beings and worlds, and for that reason-I'll see you again my other half. The end. 
      
      `,
      defaultDestination: 'chapOne',
      buttonText: "Reread the story!"
    },
    chapSeph: {
      title: "Chapter 2: Did Sephiroth do this?",
      story: `You wake up suddenly, face down in a pile of dirt and leaves. \"This feeling is starting to feel awfully familar...\", you mumble. Once again realizing you've
        fallen into a world entirely different from your own, you dust yourself off and you take in your surroundings. Unlike last time, this is a seemingly populated town instead of the forest. You would 
        be able to really tell if it wasn't the middle of the night. While walking you encounter the town square and in the middle are 2 lampposts, it almost looks like the warm-glow of these 2 lights  
        somehow seem to illuminate the entire town. \"Hey!\", someone shouts at you from behind. You whip around to see someone approaching you, a young man. He has spikey blonde hair and super vibrant
        eyes. You decide it's easiest to start with, \"Ah...Not to intrude, but I'm super lost!\" \"You aren't from here, are you?\" the stranger says. \"Well, if that wasn't obvious from how I look! 
        I need some help getting back home...I'm not exactly from, this world-\", he interrupts you. \"Listen, I don't know what kind of crazy you are, but I don't have time for it,
        I can bring you to the border but I'm looking for someone.\" he explains. \"Of course! I can help-as long as it finds me a way back home\". you say. Feeling more relieved than ever,
        you offer the man a handshake, \"I would tell you my name, but I've geniunely forgotten it!\" you nervously rub the back of your head as the young man looks at you suspiciously, even I the narrator, 
        I'm astounded! How could you forget your name! Tsk tsk! The man gives you a look, but shrugs it off \"I have more serious things to worry about, my name is Cloud\". he says, and gestures for you to follow him. You and 
        him walk past all the closed shops and restaurants, witnessing the soft-glow of other lampposts around town. \"Would you also happen to be able to tell me where I am currently?\" He doesn't even look back as the
        two of you walk, \"This is Traverse Town, I usually have trouble sleeping-so I patrol the area just in case...HE comes around...\" he explains. \"Who's-?\" just as you're about to ask, 
        something concrete is thrown in your direction, \"I knew it! Weird things only happen around here because of YOU!\" Cloud exclaims. Suddenly before you know it, you see something fly right past you. A blur
        of black and silver. \"Sephiroth! Did you bring this person here?!\" Cloud yells at another man. Now standing still you see him clearly, a tall man in fancy black garmets with long silver hair adorning all that 
        is a REALLY LONG sword. \"I did not, but they aren't important, in fact,\" Before you can even react, he brings his sword out, slicing open the air. The person named Sephiroth then sucker-punches you in the gut
        sending you straight through the air rift.
        `,
      defaultDestination: 'chapThree',
      buttonText: "Next Chapter"
    },
    chapShadow: {
      title: "Chapter 2: Shadow's Surprise Appearance",
      story: `When you wake up, in a plain bed in bland white room. Around the room are different scientific, and operational tools. Are you they planning to experiemnt on you?! Oh, that's not very fun...is it.
         Something about this type of setting seems awfully familar to you, it could be the bright white colour of the room-or entire scene related to ideas of science and experimentation. Before you can ponder 
         more, a little girl wanders into your room. \"Hi! My names Maria...You're quite strange aren't you! Your skin is red!\" she excalims. \"I wouldn't know...I haven't really had time to assess who I am...I've 
         been trying to get back home!\" you explain. She nods in understanding, \"I see...! I have an alien friend too...Maybe he can help you?\" she suggests. \"You think so? Could you ask him to help me?\" you try.
         It might be better to try and fail than just accepting that you are stranded somewhere strange forever. She takes your hand, leading you throughout the strange facility, finally reaching...an anthropomorphic 
         being. \"Hey Shadow! This fella needs help getting back home!\" she explains to him. Shadow and Maria seem to converse before turning to you, asking about your current situation. There isn't much to be said 
         though, as you can't remember much about yourself. After a long while brainstorming, Shadow seems to come up with an idea, \"I'll build up enough chaos energy, and displace it directly into you-it might be 
         be able to bring you to the home that you speak of.\" he suggests. \"Anything that gets me home...I'm desperate!\", you cry. Suddenly he starts building up energy, and displaces it into you-by punching you
         straight in the gut, you get punched so hard that you black out.
        `,
      defaultDestination: 'chapThree',
      buttonText: ""
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('#start-button')
  var content = document.querySelector('#content')
  button.addEventListener('click', function() {
    story = getStory()
    renderScene()
  })
})

function renderScene() {
  var buttonText = "Continue"
  
  content.innerHTML = `
  <h1>${story[story.currentScene].title}</h1>
  <p>${story[story.currentScene].story}</p>
 
  ${getInputs()}
  <button id = "submit-button">${buttonText}</button>
  `
 
  var button = document.querySelector("#submit-button");
  button.addEventListener('click', function() {
    getInputValue()
  })
}

function getInputValue() {
  var inputs = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      story.currentScene = inputs[i].getAttribute('data-destination')
      renderScene();
      return;
    }
  }
  story.currentScene = story[story.currentScene].defaultDestination
  renderScene()
}

function getInputs() {
  var input = ""
  if (!story[story.currentScene].choices) {
    return ""
  }
  for(var i = 0; i < story[story.currentScene].choices.length; i++) {
    input += `
    <div>
      <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
      <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
    </div>`
  }
  return input;
}
