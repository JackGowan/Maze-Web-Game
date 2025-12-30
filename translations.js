// Translation data for English and Traditional Chinese
// Total pages: 98
// Last updated: 2025-12-29T18:41:50.098Z

const translations = {
  'a1_maze-left_light': {
    en: {
      text: `In the dark dungeon hallway, you pass by a series of locked doors. Unnatural chittering and scratches and rustles come from the doors. It seems like there are large strange creatures inside each cell. Gulping, you make your way towards the halo of light at the end of the hallway.
      <p>You see the light is coming from a female statue with two beaming eyes. Its mouth is open and you hear faint breathing coming from it.
      Curious you draw nearer to investigate. The woman looks like the Roman Goddess Ceres but you can't be sure...</p>
      <p>Something about the statue fascinates you. Yet you are also alarmed by the rising strange insect like noises in the doors behind you.</p>`,
      choices: {
        prompt: "Do you:",
        options: [
                  "Further explore the statue",
                  "Move past the statue and continue on your journey"
        ]
      }
    },
    zh: {
      text: `在黑暗的地牢走廊中，你經過一系列鎖著的門。不自然的唧唧聲、抓撓聲和沙沙聲從門後傳來。似乎每個牢房裡都有大型奇怪的生物。你吞了口口水，朝著走廊盡頭的光環走去。
      <p>你看到光線來自一尊女性雕像，她有一雙明亮的眼睛。她的嘴巴張開著，你聽到微弱的呼吸聲從中傳來。
      出於好奇，你走近調查。這個女人看起來像羅馬女神刻瑞斯，但你不能確定...</p>
      <p>雕像的某些東西讓你著迷。然而，你身後門後不斷增強的奇怪昆蟲般的噪音也讓你感到警覺。</p>`,
      choices: {
        prompt: "你會：",
        options: [
                  "進一步探索雕像",
                  "繞過雕像繼續你的旅程"
        ]
      }
    }
  },
  'a1_maze-right_dark': {
    en: {
      title: "Into the Darkness",
      text: `You step into the darkness, lantern held high. The passage is silent - unnaturally so. No dripping water, no distant sounds, nothing.
      <p>Your footsteps echo strangely. The walls are smooth, featureless black stone. This part of the maze feels different. Older. More dangerous.</p>
      <p>Ahead, the corridor splits three ways. The left passage has strange beast symbols carved into the archway. The center passage looks completely clear and safe. The right passage has scorch marks around its entrance.</p>
      <p>In this silence, you hear your own breathing loud in your ears. One of these paths is trapped. Or maybe all of them are.</p>
      <p>You realise you are in the realm of traps, a deadly section of the maze. Surely there are easier ways through? From the little information you have you are certain that passage that is damaged is the way through.</p>`,
      choices: {
        prompt: "Choose your path:",
        options: [
                  "Take the left passage with the beast symbols",
                  "Take the center passage that looks safe",
                  "Take the right passage with scorch marks",
                  "go back the other way. You have a bad feeling about this."
        ]
      }
    },
    zh: {
      title: "進入黑暗",
      text: `你高舉燈籠踏入黑暗之中。通道一片寂靜——異常的寂靜。沒有滴水聲，沒有遠處的聲響，什麼都沒有。
      <p>你的腳步聲迴響得很奇怪。牆壁平滑，黑色的石頭毫無特徵。迷宮的這一部分感覺不同。更古老。更危險。</p>
      <p>前方，走廊分成三條路。左邊的通道拱門上刻有奇怪的野獸符號。中間的通道看起來完全暢通且安全。右邊的通道入口周圍有燒焦的痕跡。</p>
      <p>在這片寂靜中，你聽到自己的呼吸聲在耳邊迴盪。這些路徑中有一條是陷阱。或者也許全部都是。</p>
      <p>你意識到自己身處陷阱領域，迷宮中的致命區段。肯定有更容易通過的方法吧？從你掌握的少量資訊來看，你確信那條受損的通道才是出路。</p>`,
      choices: {
        prompt: "選擇你的道路：",
        options: [
                  "走左邊刻有野獸符號的通道",
                  "走中間看起來安全的通道",
                  "走右邊有燒焦痕跡的通道",
                  "往回走另一條路。你對此有不祥的預感。"
        ]
      }
    }
  },
  'a1_maze-wait': {
    en: {
      text: `You decide to wait at the entrance of the maze, taking in your surroundings and gathering your courage.
            <p>As you stand there, the stone walls seem to pulse with ancient energy. You must decide on which direction to go on.`,
      choices: {
        prompt: "How do you respond?",
        options: [
                  "head left towards the light",
                  "head right into the dark"
        ]
      }
    },
    zh: {
      text: `你決定在迷宮入口等待，觀察周圍環境並鼓起勇氣。
            <p>當你站在那裡時，石牆似乎跳動著古老的能量。你必須決定朝哪個方向前進。`,
      choices: {
        prompt: "你如何回應？",
        options: [
                  "向左前往光明處",
                  "向右進入黑暗中"
        ]
      }
    }
  },
  'a1_maze-wait_0': {
    en: {
      text: `<p>You need to keep thinking. There is surely something you have missed. You squint at the stone walls. Perhaps there is something you have missed.</p>`,
      choices: {
        prompt: "How do you respond?",
        options: [
                  "head back to the caverns",
                  "head right into the dark",
                  "investigate the room"
        ]
      }
    },
    zh: {
      text: `<p>你需要繼續思考。肯定有什麼東西被你遺漏了。你瞇著眼睛看著石牆。也許有些東西你錯過了。</p>`,
      choices: {
        prompt: "你如何回應？",
        options: [
                  "返回洞穴",
                  "向右進入黑暗中",
                  "調查房間"
        ]
      }
    }
  },
  'a1_maze-wait_2': {
    en: {
      text: `<p>A door reveals itself to you. 
              A secret of the maze was that you didn't need to rush through all the lairs. The answer was right here before you all along.
            The tunnel ahead looks like it is goes deep into the maze. Through patience you have earned the right to go forward.           </p>
            <p> You are all too aware that you have missed out on a serious of deadly encounters.</p>`,
      choices: {
        prompt: "You have no choice",
        options: [
                  "You walk through the tunnel."
        ]
      }
    },
    zh: {
      text: `<p>一扇門向你顯現。
              迷宮的秘密是你不需要匆忙穿過所有巢穴。答案一直就在你眼前。
            前方的隧道看起來通往迷宮深處。透過耐心，你已贏得前進的權利。           </p>
            <p> 你非常清楚自己錯過了一系列致命的遭遇。</p>`,
      choices: {
        prompt: "你別無選擇",
        options: [
                  "你穿過隧道。"
        ]
      }
    }
  },
  'a2_maze-dark-trap-1-center': {
    en: {
      title: "The Obvious Trap",
      text: `The center passage looks safe. Too safe. But maybe it really is the right choice?
            <p>You take three steps into the passage. Nothing happens. You take another step, feeling more confident.</p>
            <p>CLICK.</p>
            <p>A pressure plate. The walls begin to close in from both sides, grinding stone on stone. You try to run forward but there's no escape - the walls are too fast, the passage too long.</p>
            <p>You're crushed between ancient stone blocks, your bones cracking like kindling. Your last thought is that you should have known better.</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
            <p>The obvious safe choice is often the deadliest trap.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "明顯的陷阱",
      text: `中間的通道看起來很安全。太安全了。但也許這真的是正確的選擇？
            <p>你走進通道三步。什麼也沒發生。你又邁出一步，感覺更有信心了。</p>
            <p>咔嗒。</p>
            <p>一個壓力板。牆壁開始從兩側合攏，石頭磨著石頭。你試圖向前跑，但無處可逃——牆壁太快，通道太長。</p>
            <p>你被古老的石塊壓碎，骨頭像柴火一樣斷裂。你最後的想法是你應該知道得更清楚。</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
            <p>明顯安全的選擇往往是最致命的陷阱。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始再試一次"
        ]
      }
    }
  },
  'a2_maze-dark-trap-1-left': {
    en: {
      title: "The Rune Trap",
      text: `You choose the left passage. The symbols look like warnings - maybe they'll help you avoid danger.
            <p>As you pass under the archway, the runes begin to glow. Too late, you realize they aren't warnings. They're triggers.</p>
            <p>The floor drops away beneath your feet. You fall into a pit lined with rusted spikes. Your lantern tumbles with you, casting crazy shadows as you plummet.</p>
            <p>The spikes punch through your body. The pain is excruciating. You hang there, impaled, dying slowly in the darkness.</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
            <p>Sometimes warnings are invitations to disaster.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "符文陷阱",
      text: `你選擇左邊的通道。符號看起來像警告——也許它們會幫你避開危險。
            <p>當你走過拱門時，符文開始發光。太遲了，你意識到它們不是警告。它們是觸發器。</p>
            <p>地板在你腳下塌陷。你掉進一個布滿生鏽尖刺的深坑。你的燈籠隨你翻滾，在你墜落時投下瘋狂的陰影。</p>
            <p>尖刺刺穿你的身體。疼痛難以忍受。你被刺穿懸掛在那裡，在黑暗中慢慢死去。</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
            <p>有時警告是災難的邀請。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始再試一次"
        ]
      }
    }
  },
  'a2_maze-dark-trap-1-right': {
    en: {
      title: "The three doors",
      text: `The scorch marks suggest danger, but also that someone survived this path before. You choose the right passage.                                 
         <p> ahead, the passage continues into more darkness. You hear water dripping somewhere up ahead.</p>
            <p>Around a bend, you find another choice: three doorways. One door is made of iron. One is wooden. One is just an open archway with no door at all.</p>
            <p>Carved into the wall beside them, you notice ancient writing:</p>`,
      choices: {
        prompt: "This riddle is important - you need to think...",
        options: [
                  "Enter through the iron door",
                  "Enter through the wooden door",
                  "Enter through the open archway"
        ]
      }
    },
    zh: {
      title: "三扇門",
      text: `燒焦的痕跡表明危險，但也表明有人之前在這條路上倖存下來。你選擇右邊的通道。                                 
         <p> 前方，通道繼續進入更深的黑暗。你聽到前方某處有水滴聲。</p>
            <p>轉過彎道，你發現另一個選擇：三個門口。一扇門是鐵製的。一扇是木製的。一個只是一個開放的拱門，根本沒有門。</p>
            <p>在它們旁邊的牆上刻著，你注意到古老的文字：</p>`,
      choices: {
        prompt: "這個謎題很重要——你需要思考...",
        options: [
                  "穿過鐵門",
                  "穿過木門",
                  "穿過開放的拱門"
        ]
      }
    }
  },
  'a2_maze-flee': {
    en: {
      title: "The Chase",
      text: `Terror seizes your heart. You turn and sprint down the corridor as the door explodes behind you. A shriek pierces the darkness.You don't look back - but some thing is after you.        <p>CLICK-CLACK-CLICK-CLACK </p>
            <p>CLICK-CLACK-CLICK-CLACK.</p>
            <p>You round a corner, your elven lantern swinging wildly, casting mad shadows on the walls. Left turn. Right turn. Another left. The maze is a blur of stone and darkness. Your lungs burn, gasping for air.
            <p>CLICK-CLACK-CLICK-CLACK.</p>
            <p>You scan your surroundings</p>
            <p>To your left, an ancient stone bridge spans a chasm of unknown depth. The bridge is broken in the middle - a gap of about six feet separates the two halves. You'd have to jump. In the dark. While exhausted. With that THING right behind you. Don't do it traveller!</p>
            <p>To your right, a steep staircase heads upwards</p>
            <p>CLICK-CLACK-CLICK-CLACK-CLICK! It's almost upon you! The sound of claws scraping stone is right around the last corner!</p>
            <p style="font-weight: bold;">What do you do?!</p>`,
      choices: {
        prompt: "Choose quickly:",
        options: [
                  "Jump across the broken bridge",
                  "run up the stairs!"
        ]
      }
    },
    zh: {
      title: "追逐",
      text: `恐懼攫住你的心臟。你轉身沿著走廊狂奔，身後的門爆炸了。一聲尖叫刺穿黑暗。你不敢回頭——但有東西在追你。        <p>咔嗒咔嗒咔嗒咔嗒 </p>
            <p>咔嗒咔嗒咔嗒咔嗒。</p>
            <p>你轉過一個拐角，精靈燈籠瘋狂搖擺，在牆上投下瘋狂的陰影。左轉。右轉。再左轉。迷宮變成石頭和黑暗的模糊。你的肺在燃燒，喘著氣。
            <p>咔嗒咔嗒咔嗒咔嗒。</p>
            <p>你掃視周圍環境</p>
            <p>在你左邊，一座古老的石橋橫跨深度未知的深淵。橋在中間斷裂——大約六英尺的間隙隔開兩半。你必須跳過去。在黑暗中。在精疲力竭時。那個東西就在你身後。別這樣做，旅行者！</p>
            <p>在你右邊，一個陡峭的樓梯向上延伸</p>
            <p>咔嗒咔嗒咔嗒咔嗒咔嗒！它快追上你了！爪子刮擦石頭的聲音就在最後一個拐角處！</p>
            <p style="font-weight: bold;">你該怎麼辦？！</p>`,
      choices: {
        prompt: "快速選擇：",
        options: [
                  "跳過斷橋",
                  "跑上樓梯！"
        ]
      }
    }
  },
  'a2_maze-ignore-statue': {
    en: {
      title: "You press forward",
      text: `You decide the statue is a distraction. The insect noises behind those doors are growing louder and more agitated. Best to keep moving.
      <p>You hurry past the glowing statue and down a narrow corridor. The light fades behind you as you descend deeper into the maze.</p>
      <p>Going carefully along the tunnels you patiently search out any traps, you journey along one corridor and then another.</p>
      <p>You see a bridge, broken in the middle, it looks far too risky to jump across.</p>
      <p>You go up a flight of stairs.</p>`,
      choices: {
        prompt: "Your only path in the maze is up the staircase:",
        options: [
                  "Cautiously you move up the staircase"
        ]
      }
    },
    zh: {
      title: "你繼續前進",
      text: `你決定那座雕像只是個干擾。那些門後的昆蟲聲音越來越響，越來越躁動。最好繼續前進。
      <p>你匆匆走過發光的雕像，進入一條狹窄的走廊。當你深入迷宮更深處時，光線在你身後消失了。</p>
      <p>你小心翼翼地沿著隧道前進，耐心地搜尋任何陷阱，你走過一條走廊，然後又是另一條。</p>
      <p>你看到一座橋，中間斷裂了，跳過去看起來實在太危險了。</p>
      <p>你走上一段樓梯。</p>`,
      choices: {
        prompt: "你在迷宮中唯一的路就是上樓梯：",
        options: [
                  "你謹慎地走上樓梯"
        ]
      }
    }
  },
  'a2_maze-light-wait': {
    en: {
      text: `You grip your elven lantern tightly, deciding to face whatever emerges from behind that door.
                  
          <p>A massive insectoid creature bursts through, its chitinous exoskeleton gleaming in the white light.</p>
            <p>You swing the lantern desperately, but the creature is too fast.</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
            <p>Sometimes bravery without preparation is simply foolishness.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      text: `你緊握著精靈燈籠，決定面對從那扇門後出現的任何東西。
                  
          <p>一隻巨大的昆蟲生物衝破門，牠的殼質外骨骼在白光中閃閃發光。</p>
            <p>你絕望地揮舞著燈籠，但這生物太快了。</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
            <p>有時沒有準備的勇敢只是愚蠢。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始再試一次"
        ]
      }
    }
  },
  'a2_maze-touch-statue': {
    en: {
      text: `The statue is cold to touch. You press your ear up to it to better understand the soft breathing. You feel all around Ceres's head for a device.
      <p>There is a loud thud behind you - one of the locked doors is being rammed from the inside - Something is trying to break out!!</p>
      <p>You have no weapon and would be at a severe disadvantage.</p>
      <p>What is your choice?</p>`,
      choices: {
        prompt: "Choose your path:",
        options: [
                  "Wait and fight",
                  "Run like hell"
        ]
      }
    },
    zh: {
      text: `雕像觸感冰冷。你把耳朵貼上去，想要更清楚地聽到那輕微的呼吸聲。你在克瑞斯的頭部周圍摸索著尋找裝置。
      <p>你身後傳來巨大的撞擊聲——一扇上鎖的門正被從裡面猛烈撞擊——有東西想要衝出來！！</p>
      <p>你沒有武器，將處於極大的劣勢。</p>
      <p>你會如何選擇？</p>`,
      choices: {
        prompt: "選擇你的道路：",
        options: [
                  "等待並戰鬥",
                  "拼命逃跑"
        ]
      }
    }
  },
  'a3_maze-after-chasm': {
    en: {
      title: "A desperate leap",
      text: `You don't think. There's no time to think. You run toward the broken bridge, your feet pounding on ancient stone.
           <p>You JUMP.</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
            
            <p>well you were warned!</p>`,
      choices: {
        prompt: "",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "絕望的一躍",
      text: `您無法思考。沒有時間思考。您奔向破損的大橋，腳步踏在古老的石頭上。
           <p>您跳躍。</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">您已死亡</p>
            
            <p>好吧，您早已被警告！</p>`,
      choices: {
        prompt: "",
        options: [
                  "從頭再試一次"
        ]
      }
    }
  },
  'a3_maze-dark-trap-2-iron': {
    en: {
      title: "The Iron Prison",
      text: `You push open the heavy iron door. It swings inward with a deep groan.
            <p>The moment you step through, the door slams shut behind you with a CLANG. You're in a small iron chamber. The walls begin to heat up, glowing red-hot.</p>
            <p>You try the door but it's sealed. The heat becomes unbearable. Your skin blisters. You scream and pound on the door but there's no escape.</p>
            <p>The iron chamber becomes an oven. You cook alive, your flesh melting, your blood boiling. The maze claims another victim.</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
            <p>Iron doors make excellent ovens.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "鐵牢獄",
      text: `您推開沉重的鐵門。它發出深沉的呻吟聲向內搖晃。
            <p>您踏入的那一刻，門在您身後砰地一聲關上。您置身於一個狹小的鐵室內。牆壁開始升溫，發出紅熱的光芒。</p>
            <p>您試圖打開門，但它被密封了。熱度變得難以忍受。您的皮膚起泡。您尖叫著砰砰敲打著門，但沒有逃脫之路。</p>
            <p>鐵室變成了一個烤爐。您活著被烹飪，您的血肉融化，您的血液沸騰。迷宮又奪去了一條生命。</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">您已死亡</p>
            <p>鐵門確實是絕佳的烤爐。</p>`,
      choices: {
        prompt: "您的旅程到此結束：",
        options: [
                  "從頭再試一次"
        ]
      }
    }
  },
  'a3_maze-dark-trap-2-open': {
    en: {
      title: "Unexpected Safety",
      text: `The open archway seems humble, unassuming. You walk steadily ready to dodge or roll. 
            <p>But nothing happens.  Beyond is a simple corridor with no traps visible.</p>
            <p>You knew it, you bloody knew it!</p>
            <p>You proceed cautiously, testing each stone before putting your weight on it. Still nothing. The corridor opens into a wider passage.</p>
            <p>Ahead, you see a junction. Three ways forward: a steep staircase going down, a narrow tunnel barely wide enough to crawl through, and a wide corridor that slopes gently upward.</p>
            <p>You hear sounds from different directions: water rushing from below (the stairs), scraping sounds from the tunnel, and distant echoes from the upward corridor.</p>
            <p>Scratched into the stone floor, you find another message:</p>`,
      choices: {
        prompt: "Choose your path:",
        options: [
                  "Descend the stairs toward the water",
                  "Crawl through the narrow tunnel",
                  "Take the upward sloping corridor"
        ]
      }
    },
    zh: {
      title: "意外的安全",
      text: `敞開的拱門看起來謙卑而不起眼。您穩定地走著，準備躲避或翻滾。
            <p>但什麼事都沒有發生。前方是一條簡單的走廊，看不見任何陷阱。</p>
            <p>您早就知道了，您該死的早就知道了！</p>
            <p>您謹慎地前進，踩踏每塊石頭之前都先測試。仍然沒有任何情況。走廊開闊成了一條更寬闊的通道。</p>
            <p>前方，您看到一個交叉口。有三條前進之路：向下的陡峭階梯、勉強寬足以爬行的狹窄隧道，以及緩緩向上傾斜的寬闊走廊。</p>
            <p>您從不同方向聽到聲音：來自下方的水聲（階梯）、來自隧道的刮擦聲，以及來自向上走廊的遠處迴聲。</p>
            <p>刻在石地板上，您發現了另一則訊息：</p>`,
      choices: {
        prompt: "選擇您的道路：",
        options: [
                  "向下階梯靠近水的方向",
                  "爬過狹窄的隧道",
                  "走緩緩向上傾斜的走廊"
        ]
      }
    }
  },
  'a3_maze-dark-trap-2-wood': {
    en: {
      title: "The Poison Mist",
      text: `Surely the wooden door asks nothing-  You walk through confidently.
            <p>Immediately, green mist begins pouring from vents in the ceiling. You smell it - sweet, cloying, chemical.</p>
            <p>You try to run forward but the mist follows you, filling the corridor. Your lungs start to burn. You can't breathe. You stumble, vision blurring.</p>
            <p>The poison gas overwhelms you. You collapse to the floor, convulsing. Your body betrays you as the toxin shuts down your organs one by one.</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
            <p>It is clear that riddles challenge you.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "毒霧",
      text: `木門肯定不會有什麼要求——您滿懷信心地走了進去。
            <p>立刻，綠色的霧氣從天花板的通風口湧出。您聞到它——甜蜜、粘膩、化學的味道。</p>
            <p>您試圖向前奔跑，但霧氣追著您，填滿了走廊。您的肺開始灼痛。您無法呼吸。您踉蹌跌踏，視線模糊。</p>
            <p>毒氣壓倒了您。您摔到地板上，身體痙攣。當毒素逐一關閉您的器官時，您的身體背叛了您。</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">您已死亡</p>
            <p>顯然謎題對您是一個挑戰。</p>`,
      choices: {
        prompt: "您的旅程到此結束：",
        options: [
                  "從頭再試一次"
        ]
      }
    }
  },
  'a3_maze-hide-stairs': {
    en: {
      title: "Upward Flight",
      text: `<p>You burst through a doorway into a vast chamber. Moonlight! Blessed moonlight streams through cracks in a collapsed ceiling high above. Fresh air fills your lungs.</p>
            <p>You are all alone.</p>
             <p>You're in what appears to be an ancient temple chamber. Moonlight illuminates the room. </p>
             <p>You could use your strength to climb up towards the moonlight and fresh air - an escape route to freedom. To your right, an intact corridor descends back into the maze's depths, lit by strange phosphorescent fungi.</p>
            <p style="font-weight: bold;">Do you seek escape or continue exploring?</p>`,
      choices: {
        prompt: "Choose your path:",
        options: [
                  "Escape the maze through the moonlight ceiling",
                  "Go deeper into the Maze"
        ]
      }
    },
    zh: {
      title: "向上逃脫",
      text: `<p>您衝破門口進入一個寬敞的房間。月光！祝福的月光透過高處塌陷天花板的裂縫灑下來。新鮮空氣充滿了您的肺部。</p>
            <p>您完全獨自一人。</p>
             <p>您位於一個古老的寺廟房間裡。月光照亮了房間。</p>
             <p>您可以用您的力量向上爬向月光和新鮮空氣——一條通往自由的逃脫路線。您的右邊，一條完整的走廊向下延伸進入迷宮的深處，由奇異的螢光真菌照亮。</p>
            <p style="font-weight: bold;">您尋求逃脫還是繼續探索？</p>`,
      choices: {
        prompt: "選擇您的道路：",
        options: [
                  "通過月光天花板逃離迷宮",
                  "深入迷宮"
        ]
      }
    }
  },
  'a3_maze-prison': {
    en: {
      title: "The prison cell",
      text: `You rush through a doorway into a small chamber. Your hands find a heavy wooden door and you slam it shut behind you. There's a thick iron bar mounted on the wall - you grab it and drop it into place across the door with a satisfying CLUNK.
      <p>You spin around, raising your lantern. The chamber holds a prison cell. Iron bars divide the room. Behind them, huddled in the corner, a human is whimpering.</p>
      <p>Then you look past the cell - there's another door on the far side of the chamber, beyond the prison bars, an escape route.</p>
      <p>Something tells you that there is something wrong with the far door. Choose wisely.</p>`,
      choices: {
        prompt: "Do you:",
        options: [
                  "Investigate the prison cell and try to help the prisoner",
                  "Flee through the far door alone"
        ]
      }
    },
    zh: {
      title: "牢房",
      text: `你衝過門口進入一個小房間。你的雙手找到一扇厚重的木門，把它重重地關上。牆上掛著一根粗大的鐵栓——你抓住它，將它卡進門上的槽裡，發出令人滿意的「咔噹」一聲。
      <p>你轉過身來，舉起燈籠。房間裡有一個牢房。鐵欄杆將房間分隔開來。在鐵欄杆後面，一個人蜷縮在角落裡啜泣。</p>
      <p>然後你越過牢房望去——房間遠端還有另一扇門，在監獄鐵欄杆的另一邊，那是一條逃生路線。</p>
      <p>某種直覺告訴你，那扇遠處的門有問題。明智地選擇吧。</p>`,
      choices: {
        prompt: "你會：",
        options: [
                  "調查牢房並試圖幫助囚犯",
                  "獨自從遠處的門逃走"
        ]
      }
    }
  },
  'a3_maze-prison-blonde': {
    en: {
      title: "A desperate leap",
      text: `The person in the cell is a young woman with long blonde hair, a skinny waist and large breasts. Her face streaked with dirt and tears. She looks up at you with desperate blue eyes.</p>
            <p>"Please!" she cries out, stumbling to her feet and gripping the bars. "Please help me! I've been trapped here for days! The key - it's hanging on the wall beside you!"</p>
            <p>You glance to your left - there it is, a rusty key hanging on a hook.
            <p>The woman's eyes plead with you. "Please! Don't leave me here to die!"</p>
            <p style="font-weight: bold;">What do you do?!</p>`,
      choices: {
        prompt: "Do you:",
        options: [
                  "Grab the key and free the woman",
                  "Flee through the far door alone"
        ]
      }
    },
    zh: {
      title: "絕望的一躍",
      text: `牢房裡的人是一位年輕的女性，擁有長長的金色長髮、纖細的腰部和豐滿的胸部。她的臉被污垢和淚水弄髒。她用絕望的藍眼睛望著您。</p>
            <p>「請！」她哭喊著，踉蹌著站起來緊緊抓住欄杆。「請幫助我！我被困在這裡好幾天了！鑰匙——它掛在您身邊的牆上！」</p>
            <p>您向左邊看——那裡有一把生鏽的鑰匙掛在鉤子上。
            <p>這位女性的眼睛懇求著您。「請！別把我留在這裡等死！」</p>
            <p style="font-weight: bold;">您要做什麼？！</p>`,
      choices: {
        prompt: "您會：",
        options: [
                  "拿起鑰匙釋放這位女性",
                  "獨自逃離遠處的門"
        ]
      }
    }
  },
  'a4_maze-dark-trap-3-stairs': {
    en: {
      title: "The Drowning Chamber",
      text: `<p>You choose the upward sloping corridor. Up usually means toward the surface, toward freedom.
            The corridor is long but straight. </p>
            
       as soon as you reach the top step, a stone door slams down behind you, sealing the exit.</p>
            <p>The water level begins to rise. Rapidly. You look for another way out but the walls are smooth stone. No doors, no passages, nothing.</p>
            <p>The water reaches your waist. Your chest. Your chin. You tilt your head back, gasping for air as the water rises to the ceiling.</p>
            <p>You take one last breath before the chamber fills completely. You hold it as long as you can, swimming desperately, searching for an escape that doesn't exist. Eventually, your lungs give out.</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
            <p>Not all paths that lead down lead forward.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "溺水室",
      text: `<p>您選擇向上傾斜的走廊。向上通常意味著朝向地面，朝向自由。
            走廊很長但很直。</p>
            
       當您到達最高步時，一扇石門在您身後砰地關上，密封了出口。</p>
            <p>水位開始上升。迅速。您尋找另一個出口，但牆壁是光滑的石頭。沒有門，沒有通道，什麼都沒有。</p>
            <p>水上升到您的腰部。您的胸部。您的下巴。您將頭向後傾斜，當水位上升到天花板時喘著氣尋求空氣。</p>
            <p>在房間完全充滿水之前，您吸了最後一口氣。您盡可能長地屏住呼吸，絕望地游動，尋找一個並不存在的逃脫方式。最終，您的肺衰竭了。</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">您已死亡</p>
            <p>並非所有向下的路都通往前方。</p>`,
      choices: {
        prompt: "您的旅程到此結束：",
        options: [
                  "從頭再試一次"
        ]
      }
    }
  },
  'a4_maze-dark-trap-3-tunnel': {
    en: {
      title: "The Crushing Tunnel",
      text: `The scraping sounds are concerning, but the tunnel looks navigable. You drop to your hands and knees and begin crawling.
            <p>About twenty feet in, you realize what's making the scraping sounds. The tunnel is getting narrower. No - the walls are closing in, very slowly but steadily.</p>
            <p>You try to crawl faster but panic makes you clumsy. Your shoulders scrape against stone. The space gets tighter. Tighter.</p>
            <p>You're stuck. The walls continue their inexorable movement. You scream and struggle but there's nowhere to go, no way to move. The stone presses against your ribs.</p>
            <p>You can't breathe. The pressure becomes unbearable. Your bones crack. The tunnel crushes you slowly, methodically, like an ancient predator.</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
            <p>Never trap yourself in a space with no escape route.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "粉碎隧道",
      text: `刮擦聲令人擔憂，但隧道看起來可以通行。您跪倒雙手並開始爬行。
            <p>大約進去二十英尺後，您意識到刮擦聲的來源。隧道變得越來越狹窄。不——牆壁在關閉，非常緩慢但穩定地。</p>
            <p>您試圖爬得更快，但恐慌使您笨手笨腳。您的肩膀在石頭上刮擦。空間變得越來越緊。越來越緊。</p>
            <p>您被困了。牆壁繼續其不可逆轉的運動。您尖叫著掙扎，但沒有地方可去，沒有方式可以移動。石頭壓在您的肋骨上。</p>
            <p>您無法呼吸。壓力變得難以忍受。您的骨頭裂開。隧道慢慢地、有條不紊地壓碎您，就像一隻古老的掠食者。</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">您已死亡</p>
            <p>永遠不要把自己困在沒有逃脫路線的空間裡。</p>`,
      choices: {
        prompt: "您的旅程到此結束：",
        options: [
                  "從頭再試一次"
        ]
      }
    }
  },
  'a4_maze-dark-trap-3-water': {
    en: {
      title: "Survival Through Caution",
      text: `You descend the stairs toward the sound of rushing water. Maybe there's a way out through an underground waterway. You are certain this is the right way.
            <p>The stairs lead to a chamber with a fast-flowing stream.</p>
            <P>You walk carefully, testing each stone, watching for triggers. Nothing happens. Just a long walk downward through the darkness.</p>`,
      choices: {
        prompt: "Continue forward:",
        options: [
                  "You continue on"
        ]
      }
    },
    zh: {
      title: "通過謹慎生存",
      text: `您向著水流聲向下走階梯。也許有辦法通過地下水道逃脫。您確信這是正確的方向。
            <p>階梯通向一個有急流的房間。</p>
            <P>您小心地走著，測試每塊石頭，觀察觸發裝置。什麼都沒有發生。只是在黑暗中向下走的長途旅程。</p>`,
      choices: {
        prompt: "向前繼續：",
        options: [
                  "您繼續前進"
        ]
      }
    }
  },
  'a4_maze-dark-trap-4-dwarf_1': {
    en: {
      title: "The trapped Dwarf",
      text: `You encounter a dwarf crushed by a huge boulder. 
            <p> He must have been caught by a trap. You scan the area but no obvious threats are around you.</p>
            <p> Drawing closer you can see that the dward is still breathing. But he is firmly trapped there is no way you could possibly help him.</p>
            <p> Do you try to wake the dwarf and ask him what he knows about the traps or continue on?</p>`,
      choices: {
        prompt: "what is your choice:",
        options: [
                  "Interrogate the Dwarf",
                  "Leave him. Focus on getting to the heart of the maze."
        ]
      }
    },
    zh: {
      title: "被困的矮人",
      text: `您遇到一個被巨大的岩石壓碎的矮人。
            <p>他一定是被陷阱所困。您掃描了該區域，但周圍沒有明顯的威脅。</p>
            <p>靠近一點，您可以看到這位矮人仍然在呼吸。但他被牢牢困住，沒有任何方式可以幫助他。</p>
            <p>您是嘗試喚醒矮人並詢問他對陷阱了解什麼，還是繼續前進？</p>`,
      choices: {
        prompt: "您的選擇是什麼：",
        options: [
                  "審問矮人",
                  "離開他。專注於到達迷宮的中心。"
        ]
      }
    }
  },
  'a4_maze-dark-trap-4-dwarf_2': {
    en: {
      title: "THE MAZE",
      text: ``,
      choices: {
        prompt: "What will you do traveller?",
        options: [
                  "You can handle more traps - keep going",
                  "Go back to the start. You've got some info."
        ]
      }
    },
    zh: {
      title: "THE MAZE",
      text: ``,
      choices: {
        prompt: "What will you do traveller?",
        options: [
                  "You can handle more traps - keep going",
                  "Go back to the start. You've got some info."
        ]
      }
    }
  },
  'a4_maze-dark-trap-4-dwarf_3': {
    en: {
      title: "The trapped Dwarf",
      text: ``,
      choices: {
        prompt: "What is your final choice?",
        options: [
                  "move forward - no restart",
                  "He's right. Its too dangerous. Go back."
        ]
      }
    },
    zh: {
      title: "The trapped Dwarf",
      text: ``,
      choices: {
        prompt: "What is your final choice?",
        options: [
                  "move forward - no restart",
                  "He's right. Its too dangerous. Go back."
        ]
      }
    }
  },
  'a4_maze-dark-trap-5-roku_lair_1': {
    en: {
      title: "The Chamber of Six",
      text: `<p>You enter a vast chamber. The walls are lined with hundreds of drawn bows, arrows nocked and aimed at six stone panels in the center of the room.</p>
            <p>Each panel bears a number: 1, 2, 3, 4, 5, and 6.</p>
            <p>Above the panels, an inscription glows with an eerie light:</p>
            <br>
            <p><em>"Six paths before thee, five bring thy end.</em></p>
            <p><em>One path of hot death in a foreign land of grapevines</em></p>
            <p><em>One path of laughter in a foreign land of smiles</em></p>
            <p><em>One path of clear death in a foreign land of hotsprings</em></p>
            <p><em>One path of still death in a foreign land of stables</em></p>
            <p><em>One path of sibling death in a foreign land of pasta</em></p>
            <p><em>One path of death in the foreign land of stone</em></p>
            <br>
            <p>Your hand trembles as you approach. One wrong choice means death by a thousand arrows.</p>`,
      choices: {
        prompt: "Which panel do you press?",
        options: [
                  "Press Panel 1",
                  "Press Panel 2",
                  "Press Panel 3",
                  "Press Panel 4",
                  "Press Panel 5",
                  "Press Panel 6"
        ]
      }
    },
    zh: {
      title: "六仙室",
      text: `<p>您進入一個寬敞的房間。牆壁上排列著數百把已拉好弦的弓箭，箭頭瞄準房間中央的六塊石板。</p>
            <p>每塊石板上都有一個數字：1、2、3、4、5 和 6。</p>
            <p>石板上方，一則銘文以詭異的光芒閃耀：</p>
            <br>
            <p><em>「六條路在您面前，五條通向您的終結。</em></p>
            <p><em>一條路通往葡萄園異鄉的炙熱之死</em></p>
            <p><em>一條路通往笑容異鄉的歡笑</em></p>
            <p><em>一條路通往溫泉異鄉的清晰之死</em></p>
            <p><em>一條路通往馬廄異鄉的寂靜之死</em></p>
            <p><em>一條路通往義大利麵異鄉的手足之死</em></p>
            <p><em>一條路通往石頭異鄉的死亡</em></p>
            <br>
            <p>當您靠近時，您的手顫抖著。一個錯誤的選擇意味著被千箭射死。</p>`,
      choices: {
        prompt: "您按哪個石板？",
        options: [
                  "按石板 1",
                  "按石板 2",
                  "按石板 3",
                  "按石板 4",
                  "按石板 5",
                  "按石板 6"
        ]
      }
    }
  },
  'a4_maze-dark-trap-6-sanjyu_golden_room_0': {
    en: {
      title: "The Golden Chamber of Thirty-Six",
      text: `<p>You step through into a magnificent golden chamber. Before you stands a massive circular table with 36 ornate chalices, each filled with shimmering liquid.</p>
            <p>The chalices are arranged in a perfect 6x6 grid, numbered 1 through 36.</p>
            <p>A skeletal hand clutches a parchment near chalice 13. </p>
            <br>
            <p>The parchment reads:</p>
            <p><em>"Alone you stand, six squared before thee, thirty-five are death's embrace.</em></p>
            <p><em>Seek the number where three and four in sequence trace.</em></p>
            <p><em>A dozen added to this score,</em></p>
            <p><em>Plus eight and zero and add no more,</em></p>
            <p><em>divide by two the friend whispered --</em></p>
            <p><em>And add by three society ordered --</em></p>
            <p><em>subtract one just for fun </em></p>
            <p><em>mindful of those who are done </em></p>  
            <p><em>As high is ceiling and low is floor. </em></p>                
            <p><em>Drink from this and pass through the door."</em></p>
            <br>
            <p> The warning is clear: all but one contain deadly poison. Behind the table, you see a sealed passageway that will only open when the correct chalice is chosen.</p>
            <p> You can not go back. Out there Greg is stalking the hallways looking for you.</p>

            <P> You must focus on the details of the parchment.</P>`,
      choices: {
        prompt: "Which chalice do you drink from?",
        options: [
                  "Chalice 1",
                  "Chalice 2",
                  "Chalice 3",
                  "Chalice 4",
                  "Chalice 5",
                  "Chalice 6",
                  "Chalice 7",
                  "Chalice 8",
                  "Chalice 9",
                  "Chalice 10",
                  "Chalice 11",
                  "Chalice 12",
                  "Chalice 13",
                  "Chalice 14",
                  "Chalice 15",
                  "Chalice 16",
                  "Chalice 17",
                  "Chalice 18",
                  "Chalice 19",
                  "Chalice 20",
                  "Chalice 21",
                  "Chalice 22",
                  "Chalice 23",
                  "Chalice 24",
                  "Chalice 25",
                  "Chalice 26",
                  "Chalice 27",
                  "Chalice 28",
                  "Chalice 29",
                  "Chalice 30",
                  "Chalice 31",
                  "Chalice 32",
                  "Chalice 33",
                  "Chalice 34",
                  "Chalice 35",
                  "Chalice 36"
        ]
      }
    },
    zh: {
      title: "三十六黃金室",
      text: `<p>您步入一個壯麗的黃金房間。在您面前矗立著一張巨大的圓形桌子，上面放著 36 個精美的聖杯，每個都盛滿了閃閃發光的液體。</p>
            <p>聖杯排成完美的 6x6 網格，編號從 1 到 36。</p>
            <p>一隻骷髏手在聖杯 13 附近緊握著一份羊皮紙。</p>
            <br>
            <p>羊皮紙上寫著：</p>
            <p><em>「您獨自站立，六的平方在您面前，三十五是死亡的懷抱。</em></p>
            <p><em>尋找三和四按順序排列的數字。</em></p>
            <p><em>在這個數字上加十二，</em></p>
            <p><em>加八和零，不再加其他，</em></p>
            <p><em>朋友低聲說除以二——</em></p>
            <p><em>社會命令加三——</em></p>
            <p><em>只為了好玩而減一</em></p>
            <p><em>留意那些已經完成的人</em></p>  
            <p><em>如天花板般高，地板般低。</em></p>                
            <p><em>從此飲用並穿過門。"</em></p>
            <br>
            <p>警告很清楚：除了一個外，其他都含有致命毒藥。在桌子後面，您看到一條密封的通道，只有當選擇正確的聖杯時才會打開。</p>
            <p>您無法回頭。格雷格在外面徘徊在走廊裡尋找您。</p>

            <P>您必須專注於羊皮紙上的細節。</P>`,
      choices: {
        prompt: "您從哪個聖杯喝？",
        options: [
                  "聖杯 1",
                  "聖杯 2",
                  "聖杯 3",
                  "聖杯 4",
                  "聖杯 5",
                  "聖杯 6",
                  "聖杯 7",
                  "聖杯 8",
                  "聖杯 9",
                  "聖杯 10",
                  "聖杯 11",
                  "聖杯 12",
                  "聖杯 13",
                  "聖杯 14",
                  "聖杯 15",
                  "聖杯 16",
                  "聖杯 17",
                  "聖杯 18",
                  "聖杯 19",
                  "聖杯 20",
                  "聖杯 21",
                  "聖杯 22",
                  "聖杯 23",
                  "聖杯 24",
                  "聖杯 25",
                  "聖杯 26",
                  "聖杯 27",
                  "聖杯 28",
                  "聖杯 29",
                  "聖杯 30",
                  "聖杯 31",
                  "聖杯 32",
                  "聖杯 33",
                  "聖杯 34",
                  "聖杯 35",
                  "聖杯 36"
        ]
      }
    }
  },
  'a4_maze-dark-trap-6-sanjyu_golden_room_1': {
    en: {
      title: "The Golden Chamber of Thirty-Six",
      text: `<p>The arrows remain still. You survived.</p>
            <p>You step through into a magnificent golden chamber. Before you stands a massive circular table with 36 ornate chalices, each filled with shimmering liquid.</p>
            <p>The chalices are arranged in a perfect 6x6 grid, numbered 1 through 36.</p>
            <p>A skeletal hand clutches a parchment near chalice 13. The warning is clear: all but one contain deadly poison.</p>
            <br>
            <p>The parchment reads:</p>
            <p><em>"Alone you stand, six squared before thee, thirty-five are death's embrace.</em></p>
            <p><em>Seek the number where three and four in sequence trace.</em></p>
            <p><em>A dozen added to this score,</em></p>
            <p><em>Plus eight and zero and add no more,</em></p>
            <p><em>divide by two the friend whispered --</em></p>
            <p><em>And add by three society ordered --</em></p>
            <p><em>subtract one just for fun </em></p>
            <p><em>mindful of those who are done </em></p>  
            <p><em>As high is ceiling and low is floor. </em></p>                
            <p><em>Drink from this and pass through the door."</em></p>
            <br>
            <p>Behind the table, you see a sealed passageway that will only open when the correct chalice is chosen.</p>`,
      choices: {
        prompt: "Which chalice do you drink from?",
        options: [
                  "You won't drink any. You'll go back to the start",
                  "Chalice 1",
                  "Chalice 2",
                  "Chalice 3",
                  "Chalice 4",
                  "Chalice 5",
                  "Chalice 6",
                  "Chalice 7",
                  "Chalice 8",
                  "Chalice 9",
                  "Chalice 10",
                  "Chalice 11",
                  "Chalice 12",
                  "Chalice 13",
                  "Chalice 14",
                  "Chalice 15",
                  "Chalice 16",
                  "Chalice 17",
                  "Chalice 18",
                  "Chalice 19",
                  "Chalice 20",
                  "Chalice 21",
                  "Chalice 22",
                  "Chalice 23"
        ]
      }
    },
    zh: {
      title: "三十六黃金室",
      text: `<p>箭矢保持靜止。您活了下來。</p>
            <p>您步入一個壯麗的黃金房間。在您面前矗立著一張巨大的圓形桌子，上面放著 36 個精美的聖杯，每個都盛滿了閃閃發光的液體。</p>
            <p>聖杯排成完美的 6x6 網格，編號從 1 到 36。</p>
            <p>一隻骷髏手在聖杯 13 附近緊握著一份羊皮紙。警告很清楚：除了一個外，其他都含有致命毒藥。</p>
            <br>
            <p>羊皮紙上寫著：</p>
            <p><em>「您獨自站立，六的平方在您面前，三十五是死亡的懷抱。</em></p>
            <p><em>尋找三和四按順序排列的數字。</em></p>
            <p><em>在這個數字上加十二，</em></p>
            <p><em>加八和零，不再加其他，</em></p>
            <p><em>朋友低聲說除以二——</em></p>
            <p><em>社會命令加三——</em></p>
            <p><em>只為了好玩而減一</em></p>
            <p><em>留意那些已經完成的人</em></p>  
            <p><em>如天花板般高，地板般低。</em></p>                
            <p><em>從此飲用並穿過門。"</em></p>
            <br>
            <p>在桌子後面，您看到一條密封的通道，只有當選擇正確的聖杯時才會打開。</p>`,
      choices: {
        prompt: "您從哪個聖杯喝？",
        options: [
                  "您不會喝任何東西。您將回到開始",
                  "聖杯 1",
                  "聖杯 2",
                  "聖杯 3",
                  "聖杯 4",
                  "聖杯 5",
                  "聖杯 6",
                  "聖杯 7",
                  "聖杯 8",
                  "聖杯 9",
                  "聖杯 10",
                  "聖杯 11",
                  "聖杯 12",
                  "聖杯 13",
                  "聖杯 14",
                  "聖杯 15",
                  "聖杯 16",
                  "聖杯 17",
                  "聖杯 18",
                  "聖杯 19",
                  "聖杯 20",
                  "聖杯 21",
                  "聖杯 22",
                  "聖杯 23"
        ]
      }
    }
  },
  'a4_maze-dark-trap-6-sanjyu_golden_room_2': {
    en: {
      title: "Death by a Thousand Arrows",
      text: `<p>Your finger presses against the cold stone panel.</p>
            <p>For a moment, nothing happens.</p>
            <p>Then you hear it—the deadly whisper of a thousand bowstrings releasing at once.</p>
            <br>
            <p>You chose wrong.</p>
            <br>
            <p>The arrows find their mark before you can even scream. Your body falls, riddled with shafts, joining the countless others who failed to solve the riddle.</p>
            <p>The Chamber of Six claims another victim.</p>
            <br>
            <p><strong>YOU HAVE DIED</strong></p>`,
      choices: {
        prompt: "Your journey ends here.",
        options: [
                  "Start Over"
        ]
      }
    },
    zh: {
      title: "千箭穿心",
      text: `<p>您的手指按在冰冷的石板上。</p>
            <p>片刻間，一切寂靜無聲。</p>
            <p>隨後，您聽見了——千條弓弦同時鬆開的致命低語。</p>
            <br>
            <p>您選錯了。</p>
            <br>
            <p>羽箭在您尚未發出尖叫前便已射中目標。您的身軀頹然倒下，周身插滿箭矢，與無數其他未能破解謎題者相伴。</p>
            <p>六龍殿再次奪去一條生命。</p>
            <br>
            <p><strong>您已經死亡</strong></p>`,
      choices: {
        prompt: "您的旅程至此結束。",
        options: [
                  "重新開始"
        ]
      }
    }
  },
  'a4_maze-dark-trap-7-hyaku_room_0': {
    en: {
      title: "The Endless Hall of Fifty Doors",
      text: `<p>Alone you stand... And so there is no one that can whisper or order you to do anything. Any outside voices are all in your head. The only force is your force.
            You drink from the cup and hear the sound of a stone entrance emerging. </p>

              A passage opens and you find yourself in a lair that looks like it is full of traps.
            You are in a long corridor. Stretching before you are exactly 50 identical wooden doors, each bearing only a number.</p>
            <p>The air is thick with ancient magic. You know instinctively that choosing wrong means certain death.</p>
       
            <p>Carved into the stone archway above, you read:</p>
            <p><em>"There is a great demon lord.</em></p>
            <p><em> Of all numbers one he likes..."</em></p>

            <p>The rest of the text has been destroyed. But you think you know the answer.</p>  
            <p>The doors seem to pulse with malevolent energy. Screams echo faintly behind some of them.</p>
            <p>Which door do you open?</p>`,
      choices: {
        prompt: "You know this answer.",
        options: [
                  "Door 1",
                  "Door 2",
                  "Door 3",
                  "Door 4",
                  "Door 5",
                  "Door 6",
                  "Door 7",
                  "Door 8",
                  "Door 9",
                  "Door 10",
                  "Door 11",
                  "Door 12",
                  "Door 13",
                  "Door 14",
                  "Door 15",
                  "Door 16",
                  "Door 17",
                  "Door 18",
                  "Door 19",
                  "Door 20",
                  "Door 21",
                  "Door 22",
                  "Door 23",
                  "Door 24",
                  "Door 25",
                  "Door 26",
                  "Door 27",
                  "Door 28",
                  "Door 29",
                  "Door 30",
                  "Door 31",
                  "Door 32",
                  "Door 33",
                  "Door 34",
                  "Door 35",
                  "Door 36",
                  "Door 37",
                  "Door 38",
                  "Door 39",
                  "Door 40",
                  "Door 41",
                  "Door 42",
                  "Door 43",
                  "Door 44",
                  "Door 45",
                  "Door 46",
                  "Door 47",
                  "Door 48",
                  "Door 49",
                  "Door 50"
        ]
      }
    },
    zh: {
      title: "五十扇門的無盡走廊",
      text: `<p>您孤身立於此地……故而無人能耳語或命令您做任何事。任何外來的聲音都只存於您的心頭。唯一的力量是您自己的力量。
            您從杯中飲下，聽聞石門浮現的聲音。</p>

              一條通道豁然敞開，您發現自己身處一個佈滿陷阱的洞穴。
            您位於一條漫長的走廊之中。眼前排列著恰好五十扇相同的木製大門，每扇門上僅刻有一個數字。</p>
            <p>空氣中瀰漫著古老的魔法氣息。您本能地明白，選擇錯誤將意味著死亡。</p>
       
            <p>您讀到刻在頭頂石拱門上的文字：</p>
            <p><em>「有一位偉大的魔王。</em></p>
            <p><em> 在眾數中，他最鍾愛其一……」</em></p>

            <p>其餘的文字已被摧毀。但您認為您知道答案。</p>  
            <p>這些門似乎脈動著邪惡的力量。尖叫聲在其中幾扇門後隱隱傳來。</p>
            <p>您要打開哪扇門？</p>`,
      choices: {
        prompt: "您知道這個答案。",
        options: [
                  "第一門",
                  "第二門",
                  "第三門",
                  "第四門",
                  "第五門",
                  "第六門",
                  "第七門",
                  "第八門",
                  "第九門",
                  "第十門",
                  "第十一門",
                  "第十二門",
                  "第十三門",
                  "第十四門",
                  "第十五門",
                  "第十六門",
                  "第十七門",
                  "第十八門",
                  "第十九門",
                  "第二十門",
                  "第二十一門",
                  "第二十二門",
                  "第二十三門",
                  "第二十四門",
                  "第二十五門",
                  "第二十六門",
                  "第二十七門",
                  "第二十八門",
                  "第二十九門",
                  "第三十門",
                  "第三十一門",
                  "第三十二門",
                  "第三十三門",
                  "第三十四門",
                  "第三十五門",
                  "第三十六門",
                  "第三十七門",
                  "第三十八門",
                  "第三十九門",
                  "第四十門",
                  "第四十一門",
                  "第四十二門",
                  "第四十三門",
                  "第四十四門",
                  "第四十五門",
                  "第四十六門",
                  "第四十七門",
                  "第四十八門",
                  "第四十九門",
                  "第五十門"
        ]
      }
    }
  },
  'a4_maze-dark-trap-7-hyaku_room_1': {
    en: {
      title: "The Endless Hall of Fifty Doors",
      text: `<p>The passage opens. You survived the poison.</p>
            <p>You are in a long corridor. Stretching before you are exactly 50 identical wooden doors, each bearing only a number.</p>
            <p>The air is thick with ancient magic. You know instinctively that choosing wrong means certain death.</p>
            <p>Carved into the stone archway above, you read:</p>
        
            <p><em>"There is a great demon lord.</em></p>
            <p><em> Of all numbers one he likes..."</em></p>
   
            <p>The rest of the text has been destroyed. You search around desparate for another clue but there is nothing else. </p>  
            <p> Who is this mad genious who devised such a riddle? You rack your brain but nothing related to demons and numbers come up.</p>
            <p>The doors seem to pulse with malevolent energy. Screams echo faintly behind some of them.</p>`,
      choices: {
        prompt: "Which door do you open?",
        options: [
                  "head back to the start and go another way",
                  "Door 1",
                  "Door 2",
                  "Door 3",
                  "Door 4",
                  "Door 5",
                  "Door 6",
                  "Door 7",
                  "Door 8",
                  "Door 9",
                  "Door 10",
                  "Door 11",
                  "Door 12",
                  "Door 13",
                  "Door 14",
                  "Door 15",
                  "Door 16",
                  "Door 17",
                  "Door 18",
                  "Door 19",
                  "Door 20",
                  "Door 21",
                  "Door 22",
                  "Door 23",
                  "Door 24",
                  "Door 25",
                  "Door 26",
                  "Door 27",
                  "Door 28",
                  "Door 29",
                  "Door 30",
                  "Door 31",
                  "Door 32",
                  "Door 33",
                  "Door 34",
                  "Door 35",
                  "Door 36",
                  "Door 37",
                  "Door 38",
                  "Door 39",
                  "Door 40",
                  "Door 41",
                  "Door 42",
                  "Door 43",
                  "Door 44",
                  "Door 45",
                  "Door 46",
                  "Door 47",
                  "Door 48",
                  "Door 49",
                  "Door 50"
        ]
      }
    },
    zh: {
      title: "五十扇門的無盡走廊",
      text: `<p>通道豁然敞開。您活著離開了毒液。</p>
            <p>您位於一條漫長的走廊之中。眼前排列著恰好五十扇相同的木製大門，每扇門上僅刻有一個數字。</p>
            <p>空氣中瀰漫著古老的魔法氣息。您本能地明白，選擇錯誤將意味著死亡。</p>
            <p>您讀到刻在頭頂石拱門上的文字：</p>
        
            <p><em>「有一位偉大的魔王。</em></p>
            <p><em> 在眾數中，他最鍾愛其一……」</em></p>
   
            <p>其餘的文字已被摧毀。您四處搜尋，急切地尋找另一條線索，卻一無所獲。</p>  
            <p> 是誰這個瘋狂的天才設計了這樣的謎題？您絞盡腦汁卻想不起任何與魔王和數字相關的事物。</p>
            <p>這些門似乎脈動著邪惡的力量。尖叫聲在其中幾扇門後隱隱傳來。</p>`,
      choices: {
        prompt: "您要打開哪扇門？",
        options: [
                  "折返起點，另尋他路",
                  "第一門",
                  "第二門",
                  "第三門",
                  "第四門",
                  "第五門",
                  "第六門",
                  "第七門",
                  "第八門",
                  "第九門",
                  "第十門",
                  "第十一門",
                  "第十二門",
                  "第十三門",
                  "第十四門",
                  "第十五門",
                  "第十六門",
                  "第十七門",
                  "第十八門",
                  "第十九門",
                  "第二十門",
                  "第二十一門",
                  "第二十二門",
                  "第二十三門",
                  "第二十四門",
                  "第二十五門",
                  "第二十六門",
                  "第二十七門",
                  "第二十八門",
                  "第二十九門",
                  "第三十門",
                  "第三十一門",
                  "第三十二門",
                  "第三十三門",
                  "第三十四門",
                  "第三十五門",
                  "第三十六門",
                  "第三十七門",
                  "第三十八門",
                  "第三十九門",
                  "第四十門",
                  "第四十一門",
                  "第四十二門",
                  "第四十三門",
                  "第四十四門",
                  "第四十五門",
                  "第四十六門",
                  "第四十七門",
                  "第四十八門",
                  "第四十九門",
                  "第五十門"
        ]
      }
    }
  },
  'a4_maze-dark-trap-7-hyaku_room_3': {
    en: {
      title: "Death by Poison",
      text: `<p>You lift the chalice to your lips. The liquid shimmers beautifully in the golden light.</p>
            <p>The first sip tastes sweet, almost pleasant.Then the burning begins.</p>
            <p>Your throat constricts. Your vision blurs. The chalice slips from your trembling fingers and shatters on the floor. Soon you too fall down.</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
            <p>The Golden Chamber claims another victim. Be careful of others...</p>`,
      choices: {
        prompt: "Your journey ends here.",
        options: [
                  "Start Over"
        ]
      }
    },
    zh: {
      title: "毒液之死",
      text: `<p>您將聖杯舉至唇邊。液體在金色光線下閃閃發光。</p>
            <p>第一口品嚐起來甘甜，幾乎舒適宜人。隨後，灼燒開始了。</p>
            <p>您的喉嚨收縮。您的視線模糊。聖杯從顫抖的手指中滑落，在地上碎裂。不久，您也倒下了。</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">您已經死亡</p>
            <p>黃金殿堂又奪去一條生命。小心其他陷阱……</p>`,
      choices: {
        prompt: "您的旅程至此結束。",
        options: [
                  "重新開始"
        ]
      }
    }
  },
  'a4_maze-dark-trap-8-room-1': {
    en: {
      title: "Death Behind the Door",
      text: `<p>Your hand grips the cold iron handle. The door swings open with an ominous creak.</p>
            <br>
            <p>You chose wrong.</p>
            <br>
            <p>Beyond the threshold lies nothing but darkness—and then the floor beneath you gives way.</p>
            <p>You plummet into an endless void, your screams echoing in the pitch black until they fade to nothing.</p>
            <p>The Hall of Fifty Doors has claimed another victim who failed to solve its riddle.</p>
            <br>
            <p>The wrong door. The wrong choice. The wrong end.</p>
            <br>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>`,
      choices: {
        prompt: "Your journey ends here.",
        options: [
                  "Start Over"
        ]
      }
    },
    zh: {
      title: "門後之死",
      text: `<p>您的手緊緊握著冰冷的鐵把手。門在不祥的吱呀聲中豁然敞開。</p>
            <br>
            <p>您選錯了。</p>
            <br>
            <p>門檻那一側只有一片黑暗——隨後，腳下的地面塌陷。</p>
            <p>您墜入無盡的虛空，尖叫聲在漆黑之中迴盪，直至消亡無聲。</p>
            <p>五十扇門的殿堂再次奪去一位未能破解謎題的倖存者。</p>
            <br>
            <p>錯誤的門。錯誤的選擇。錯誤的結局。</p>
            <br>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">您已經死亡</p>`,
      choices: {
        prompt: "您的旅程至此結束。",
        options: [
                  "重新開始"
        ]
      }
    }
  },
  'a4_maze-dark-trap-8-room-2': {
    en: {
      title: "Escape from the Hall",
      text: `<p>Your hand grips the handle of Door 29. The riddle echoes in your mind: "The demon lord's favourite number".
            You pull the door open.</p>
              <p>A shimmer of light. You can feel that you have the correct answer. You've proven yourself worthy.</p>
            <p>You step through, and the door slams shut behind you with finality. When you turn to look back, the door has vanished, replaced by solid stone.</p>
                 
            <p>Ahead, you see what appears to be a prison corridor stretching into shadow...</p>`,
      choices: {
        prompt: "Continue forward.",
        options: [
                  "Enter the Prison"
        ]
      }
    },
    zh: {
      title: "逃離大廳",
      text: `<p>您的手握著第二十九扇門的把手。謎題在您心中迴盪：「魔王最鍾愛的數字」。
            您拉開了門。</p>
              <p>一陣光芒閃爍。您能感受到您已經得到了正確答案。您已證明自己值得通過。</p>
            <p>您踏了進去，門在身後以絕對的沉重感關閉。當您轉身回望時，門已消失無蹤，取而代之的是堅實的石牆。</p>
                 
            <p>前方，您看到一條監獄走廊在陰影中延伸……</p>`,
      choices: {
        prompt: "繼續向前。",
        options: [
                  "進入牢房"
        ]
      }
    }
  },
  'a4_maze-flee-alone': {
    en: {
      title: "You flee through the far door",
      text: `You can't afford to help anyone. Survival is all that matters. You turn away from the cell.
            <p>"Wait!" the prisoner cries out, a desperate female voice. "Don't go that way! That corridor is trapped! The maze master uses it to—"</p>
            <p>But you're already running. You slam through the far door and into a long hallway. Too late, you realize the walls are covered in strange runes that pulse with a sickly green light.</p>
            <p>The air becomes thick, poisonous. Your lungs burn. You can't breathe. You stumble forward, gasping, but there's no air, only toxic fumes.</p>
            <p>You collapse to your knees. The last thing you hear is the woman's voice, faint and mournful: "I tried to warn you..."</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
            <p>Perhaps helping others is sometimes the wisest form of self-preservation.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "您獨自逃出",
      text: `您無法承受幫助任何人的代價。生存才是唯一重要的。您轉身離開了牢房。
            <p>「等等！」囚犯發出絕望的女性聲音。「別往那邊去！那條走廊設有陷阱！迷宮之主用它來——」</p>
            <p>但您已經奔跑起來。您衝出遠端的門，衝入一條漫長的走廊。太遲了，您才意識到牆壁上佈滿了脈動著病態綠光的奇異符文。</p>
            <p>空氣變得稠密、有毒。您的肺部灼痛。您無法呼吸。您蹣跚向前，喘息著，卻只有毒氣，沒有空氣。</p>
            <p>您跪倒在地。您聽到的最後聲音是那女人的聲音，微弱而哀傷：「我試圖警告您……」</p>
            <p style="color: #ff0000; font-weight: bold; text-align: center;">您已經死亡</p>
            <p>也許幫助他人有時正是最聰明的自我保全之道。</p>`,
      choices: {
        prompt: "您的旅程至此結束：",
        options: [
                  "從頭開始重試"
        ]
      }
    }
  },
  'a4_maze-free-woman': {
    en: {
      title: "Following the Voices",
      text: `You pull yourself from the underground pool and follow the dark tunnel toward the voices. The sound echoes strangely, making it hard to tell how far away they are.
            <p>As you get closer, you recognize the voices - guttural, harsh. Beast men. You slow down, moving cautiously.</p>
            <p>The tunnel opens into a chamber where you can see through iron bars into a prison area. You've found a back way into the same prison cells where prisoners are kept.</p>
            <p>Through the bars, you see a human figure huddled in the corner - a woman with long blonde hair. She looks up, hearing your footsteps, hope and fear mixing in her blue eyes.</p>
            <p>The path has led you to Alice, just via a different route. The key to her cell hangs on the wall, just within reach through the bars.</p>`,
      choices: {
        prompt: "Do you:",
        options: [
                  "Grab the key and free the woman",
                  "Leave her and continue alone"
        ]
      }
    },
    zh: {
      title: "尋隨聲音",
      text: `您從地下池塘中爬起，沿著黑暗的隧道向聲音走去。聲音迴盪著，難以判斷距離。
            <p>當您越來越近時，您認出了這些聲音——粗啞、刺耳。獸人。您放慢步伐，謹慎地移動。</p>
            <p>隧道豁然開闊成一個房間，您能通過鐵欄看到監獄區域。您發現了一條進入關押囚犯的牢房的密道。</p>
            <p>透過欄杆，您看到一個蜷縮在角落裡的人形——一位長著金髮的女性。她聽到您的腳步聲，抬起頭來，藍色的眼睛中混雜著希望和恐懼。</p>
            <p>這條路將您引向愛麗絲，只是途徑不同。她牢房的鑰匙掛在牆上，正好在欄杆內側可以夠到的地方。</p>`,
      choices: {
        prompt: "您的選擇是：",
        options: [
                  "搶過鑰匙並釋放這女人",
                  "留下她，獨自繼續前進"
        ]
      }
    }
  },
  'a4_maze-prison-blonde': {
    en: {
      title: "You free the prisoner",
      text: `You grab a rusty key on the wall and unlock the cell door. The prisoner, a blonde woman stumbles out. Her large chest heaves with relief as she catches her breath.
            <p>"Thank you," she gasps. "I'm Alice. I was captured three days ago by the beast men who guard this maze."</p>
            <p>Alice's eyes are wide with fear, but there's something else there too - determination. "Thank you for saving me." She says again. "But the maze master won't be pleased if he finds out." </p>
            <p>"The Mase master is near?"</p>
            <p> Alice draws close to you. "He is near... In secret chambers below. He locked me in here due to my magical powers. We must get out of here."</p> 
            <p> "You're safe with me." You can see that she is capable of ancient magic.</p>  
            <p> You stare at her and she stares at you.</p>
            <p> "Let us escape from this place." Alice says at last.</p>
            <p> "No. I've come too far. I will go on. And you must help me. How do we find this maze master?" </p>
            <p> "The far door leads to a death trap. But..." She closes her eyes and whispers strange words. Her hands glow with faint blue light.</p>
            <p>The stone wall to your right shimmers and becomes transparent, revealing a hidden staircase descending into darkness.</p>
            <p>"I will be able to guide you some of the way." Alice says, her voice trembling. "This passage leads deeper into the maze, toward its heart. The beast men patrol these lower levels. We must be careful."</p>
            <p>She clutches your arm, her fingers trembling. "Please... don't let them find us. I can't go back in that cell."</p>
            <p> "I will be firm but fair. And protect you at all costs."</p>`,
      choices: {
        prompt: "You have no choice but forward:",
        options: [
                  "Descend with Alice into the depths"
        ]
      }
    },
    zh: {
      title: "您釋放了囚犯",
      text: `您搶過牆上一把生銹的鑰匙，打開了牢房門。一位金髮女囚跌跌撞撞地走了出來。她豐滿的胸膛隨著恢復呼吸而起伏。
            <p>「謝謝您，」她喘著氣說。「我是愛麗絲。三天前我被守衛這迷宮的獸人抓捕。」</p>
            <p>愛麗絲的眼睛睜得很大，充滿恐懼，但還有別的東西——決心。「謝謝您救了我，」她再次說道。「但如果迷宮之主發現了，他不會高興的。」</p>
            <p>「迷宮之主在附近？」</p>
            <p> 愛麗絲靠近您。「他就在附近……在下面的秘密房間裡。因為我的魔法力量，他把我關在這裡。我們必須逃離。」</p> 
            <p> 「在我身邊您是安全的。」您能看出她擁有古老的魔法力量。</p>  
            <p> 您注視著她，她也注視著您。</p>
            <p> 「讓我們從這個地方逃離吧，」愛麗絲最後說道。</p>
            <p> 「不。我已經走得太遠了。我將繼續前進。而您必須幫助我。我們如何找到這位迷宮之主？」</p>
            <p> 「遠端的門通往死亡陷阱。但是……」她閉上眼睛，低聲吟誦奇異的言語。她的雙手散發出淡藍色的光芒。</p>
            <p>您右側的石牆閃爍著，變得透明，露出一條隱蔽的樓梯向下延伸至黑暗中。</p>
            <p>「我能在一定程度上引導您，」愛麗絲說道，聲音顫抖。「這條通道深入迷宮，通往其核心。獸人在這些下層巡邏。我們必須謹慎。」</p>
            <p>她緊緊抓著您的手臂，手指顫抖。「請……別讓他們發現我們。我不能再回到那個牢房。」</p>
            <p> 「我將堅定但公正。並不惜一切代價保護您。」</p>`,
      choices: {
        prompt: "您別無選擇，只能向前：",
        options: [
                  "與愛麗絲一起深入黑暗"
        ]
      }
    }
  },
  'a5_maze-alice-1': {
    en: {
      title: "The First Patrol",
      text: `Alice is close behind as you tread through the dark stone corridors, her breathing quick and shallow.
            <p>The passage opens into a stone chamber. Torches flicker. Heavy footsteps approach - a beast man is in the dungeon but has not yet seen you.</p>
            <p>Seven feet tall with a bull's head and muscular body. It carries a crude axe, sniffing suspiciously.</p>
            <p> "Please," Alice whispers. Her blonde hair falls across frightened eyes. "Don't fight these things." Alice begs. "You won't stand a chance".</p>
            <br>
            <p>An alcove to your left could hide you both. Crates to your right. Or push Alice away and fight.</p>
            <p>`,
      choices: {
        prompt: "Choose quickly:",
        options: [
                  "Pull Alice into the alcove and hide",
                  "Push her toward the crates while you fight"
        ]
      }
    },
    zh: {
      title: "第一次巡邏",
      text: `當您穿過黑暗的石走廊時，愛麗絲緊跟在後，呼吸急促而淺薄。
            <p>通道豁然開闊成一個石室。火把閃爍著光芒。沉重的腳步聲逼近——一隻獸人在地牢裡，但還沒有發現您。</p>
            <p>它身高七英尺，長著公牛般的頭顱和肌肉發達的身軀。它手持一把粗糙的斧頭，警惕地嗅著空氣。</p>
            <p> 「求您，」愛麗絲低聲說。她金色的頭髮遮住了害怕的眼睛。「別與這些東西搏鬥，」愛麗絲乞求著。「您不會有勝算的」。</p>
            <br>
            <p>您左邊的壁龕可以隱藏你們兩個。您右邊是木箱。或者推開愛麗絲並戰鬥。</p>
            <p>`,
      choices: {
        prompt: "快速做出選擇：",
        options: [
                  "將愛麗絲拉進壁龕躲藏",
                  "將她推向木箱，您去戰鬥"
        ]
      }
    }
  },
  'a5_maze-alice-10': {
    en: {
      title: "The Heart of the Maze",
      text: `Alone you stand in a darkened corridor. There are strange glowing symbols on the celing. Purple rune signs on the floor.
        <p> You are near to the heart of the maze.</p>
        <p> You have found it. </p>
        <p> The creator will pay.</p>`,
      choices: {
        prompt: "You move on:",
        options: [
                  "Enter the heart of the maze"
        ]
      }
    },
    zh: {
      title: "迷宮的心臟",
      text: `您孤身立於一條黑暗的走廊。天花板上有奇異的發光符號。地面上有紫色的符文標記。
        <p> 您正逼近迷宮的核心。</p>
        <p> 您已找到它。</p>
        <p> 創造者必將付出代價。</p>`,
      choices: {
        prompt: "您繼續前行：",
        options: [
                  "進入迷宮的核心"
        ]
      }
    }
  },
  'a5_maze-alice-2': {
    en: {
      title: "The Narrow Passage",
      text: `You pull Alice into the tight corner space - her body presses against yours. There is something odd about Alice but you have no time to question.
        <p>The beast man stomps past, sniffing. Its shadow crosses your hiding spot. Alice buries her face against your chest. You hold still.</p>
        <p>The creature grunts and continues. Footsteps fade.</p>
        <p>Alice exhales. "Thank you," she whispers. "I thought it would find us." Relief glistens in her eyes.</p>
        <p>Three exits to the room. One leads to caged corridors - that won't work. Another descends via rough steps. The third - a crawlspace behind a collapsed pillar.</p>`,
      choices: {
        prompt: "What do you do:",
        options: [
                  "Send Alice through the crawlspace first to scout ahead",
                  "Descend the rough steps, keeping Alice close"
        ]
      }
    },
    zh: {
      title: "狹窄通道",
      text: `您將愛麗絲拉入一個狹窄的角落——她的身體緊貼著您。愛麗絲身上有些奇異之處，但您沒有時間質疑。
        <p>獸人咚咚地走過，嗅著空氣。它的影子掠過您的藏身之處。愛麗絲將她的臉埋在您的胸膛上。您保持靜止。</p>
        <p>那生物咕噥著，繼續前行。腳步聲消褪。</p>
        <p>愛麗絲呼出一口氣。「謝謝您，」她低聲說。「我以為它會找到我們。」如釋重負的光芒在她眼中閃爍。</p>
        <p>房間有三個出口。一條通往籠形走廊——那行不通。另一條通過粗糙的台階向下。第三條是倒塌的柱子後面的爬行空間。</p>`,
      choices: {
        prompt: "您將如何選擇：",
        options: [
                  "先讓愛麗絲通過爬行空間探路",
                  "沿著粗糙的台階下降，讓愛麗絲靠近"
        ]
      }
    }
  },
  'a5_maze-alice-3': {
    en: {
      title: "The Feeding Chamber",
      text: `You descend the stairs together alert to the silence of the maze. 
        <p>You go past a room of long tables, rotting meals on its surface. </p> 
        <p>Moving on you come to a set of stairs.</p>  
        <p> "This is the way." Alice says. "I'm sure of it."</p>
        <p> "What is that noise?"</p>
        <p> You stand still. Beast men approach and there is no where obvious to hide. </p>
        <p>Scanning the room there are two options.</p>
        <p>A trapdoor beneath a table. An ale barrel left.</p>`,
      choices: {
        prompt: "Choose quickly:",
        options: [
                  "Hide in the barrel and hope Alice finds her own hiding spot",
                  "Open the trapdoor and pull Alice down with you"
        ]
      }
    },
    zh: {
      title: "餵食室",
      text: `您與愛麗絲一起下樓，警惕著迷宮中的寂靜。
        <p>您走過一個房間，長桌上擺著腐爛的食物。</p> 
        <p>繼續前行，您來到另一段樓梯。</p>  
        <p> 「這條就是我們要去的方向，」愛麗絲說。「我很確定。」</p>
        <p> 「那是什麼聲音？」</p>
        <p> 您靜止不動。獸人靠近，卻沒有明顯的躲藏地點。</p>
        <p>掃視房間，有兩個選擇。</p>
        <p>桌子下的活板門。一個遺留的啤酒桶。</p>`,
      choices: {
        prompt: "快速做出選擇：",
        options: [
                  "躲在桶裡，希望愛麗絲找到自己的藏身地點",
                  "打開活板門，把愛麗絲拉下去"
        ]
      }
    }
  },
  'a5_maze-alice-4': {
    en: {
      title: "Below the Feast Hall",
      text: `You pull Alice through the trapdoor and climb lower down into darkness, landing on damp stone.
        <p>Above, the beast men don't notice. You hold Alice's body tight your hand around her mouth in case she screams.</p>
        <p>The beastmen eventually fade into darkness.</p> 
        <p>"This is too much" Alice whispers.</p>
        <p> "Be quiet".</p>
        <p>You light your lantern. The tunnel leads on to a wet passage way.</p>
        <p>Alice touches your arm. "I am not sure I can take much more of this."</p>`,
      choices: {
        prompt: "Choose your path:",
        options: [
                  "Take the passage and force Alice to stay with you",
                  "Tell Alice to wait here while you scout the flooded passage"
        ]
      }
    },
    zh: {
      title: "宴會廳下方",
      text: `您將愛麗絲拉過活板門，往下爬入黑暗中，落在潮濕的石頭上。
        <p>上面的獸人沒有發現。您緊緊抱住愛麗絲，用手掩住她的嘴，以防她尖叫。</p>
        <p>獸人最終消失在黑暗中。</p> 
        <p>「這太多了，」愛麗絲低聲說。</p>
        <p> 「保持安靜」。</p>
        <p>您點亮了提燈。隧道通向一條濕漉漉的通道。</p>
        <p>愛麗絲觸碰您的手臂。「我不確定我還能承受多少。」</p>`,
      choices: {
        prompt: "選擇您的路線：",
        options: [
                  "踏上通道並強迫愛麗絲跟您在一起",
                  "告訴愛麗絲在這裡等著，您去偵察被淹沒的通道"
        ]
      }
    }
  },
  'a5_maze-alice-5': {
    en: {
      title: "The Guardian Post",
      text: `The passage opens eventually into a guard chamber. Weapon racks surround the room you could arm yourself again.
        <p>Two beast men play dice. Engrossed in their game they haven't noticed you yet.</p>
        <p> Reading Alice's signals you are aware that you need to go round the two guards. She grips your arm, breathing rapid and panicked. </p>
        <p> Fighting isn't an option. You can't assassinate both of them at their table.</p>
        <p>A side passage behind a weapons rack. You could sneak to it. Or risk a fight.</p>
        <p>One beast man snorts and looks up. Seconds to act.</p>`,
      choices: {
        prompt: "Choose quickly:",
        options: [
                  "Shield Alice and sneak toward the side passage together",
                  "Kill them both"
        ]
      }
    },
    zh: {
      title: "守衛哨所",
      text: `通道最終豁然開闊成一個守衛室。武器架環繞著房間，您可以再次武裝自己。
        <p>兩隻獸人在玩骰子。他們沉迷於遊戲，還沒有發現您。</p>
        <p> 根據愛麗絲的信號，您意識到需要繞過這兩個守衛。她緊緊抓住您的手臂，呼吸急促而驚慌。</p>
        <p> 戰鬥不是選項。您不可能同時刺殺他們兩個。</p>
        <p>武器架後有一條側通道。您可以潛行過去。或者冒著戰鬥的風險。</p>
        <p>其中一隻獸人發出鼻音並抬起頭。您只有幾秒鐘的時間行動。</p>`,
      choices: {
        prompt: "快速做出選擇：",
        options: [
                  "保護愛麗絲，一起向側通道潛行",
                  "殺死他們兩個"
        ]
      }
    }
  },
  'a5_maze-alice-6': {
    en: {
      title: "Silent Steps",
      text: `You shield Alice with your body, inching toward the side passage.
        <p>Her breathing is ragged as she matches your movements.</p>
        <p>One beast man yawns. The other watches the dice. You slip behind the rack into the passage.</p>
        <p>Out of sight, Alice exhales shakily. "Too close," she whispers. "But we made it. Together."</p>
        <p>The passage descends steeply. Warmer air. Strange humming like distant chanting.</p>
        <p>Alice's eyes widen. "we are nearing the end. Wait. There are traps here." </p>
        <p>"Can you disarm them?"</p> 
        <p>"I think so."</p>
          Beyond you walk greater into the darkness. Paranoia is creeping in to you.`,
      choices: {
        prompt: "Choose your path:",
        options: [
                  "Keeping moving keeping Alice close.",
                  "Let Alice go first to check for magical traps"
        ]
      }
    },
    zh: {
      title: "靜寂的腳步",
      text: `你用身體護住艾莉絲，緩緩向側廊邊移動。
        <p>她急促的呼吸聲與你的動作保持著同步。</p>
        <p>一個獸人打著哈欠。另一個凝視著骰子。你滑過架子，進入側廊。</p>
        <p>遠離視線，艾莉絲顫抖著呼出一口氣。「太危險了，」她低聲說。「但我們成功了。一起。」</p>
        <p>側廊陡峭地向下延伸。空氣漸漸溫暖。奇異的嗡嗡聲，像是遠方的詭異吟誦。</p>
        <p>艾莉絲眼睛睜大。「我們接近終點了。等等。這裡有陷阱。」</p>
        <p>「你能拆除它們嗎？」</p> 
        <p>「我認為可以。」</p>
          在你前方的黑暗中前行。偏執的念頭逐漸滲入你的心中。`,
      choices: {
        prompt: "選擇你的路徑：",
        options: [
                  "繼續前進，保持與艾莉絲的親近。",
                  "讓艾莉絲先行查探魔法陷阱"
        ]
      }
    }
  },
  'a5_maze-alice-7': {
    en: {
      title: "The Excitement of Escape",
      text: `You take Alice's hand. "Together."
        <p>"We are near the main rune door" Alice pulls at your hand tight "We must hurry".</p>
        <p>Alice squeezes your hand tight. Is it you or has her face changed? Who is she?</p>
        <p>Beyond - a stone rune door.</p>
        <p>"I can't go beyond this door." Alice states. "I can open the door for you. But there will be a price."
        <p>"What price is that?"</p>
        <p>"I will likely be gone from this world."</p>
        <p> "Forever?"</p>
        <p> "I can't say..."</p>
        <p> Deep down you realise that Alice is completely at your command. She will do as you wish.</p>`,
      choices: {
        prompt: "Choose your path:",
        options: [
                  "Ask Alice to open the door",
                  "Order Alice away you will solve the rune door by yourself"
        ]
      }
    },
    zh: {
      title: "逃脫的激動",
      text: `你握住艾莉絲的手。「一起。」
        <p>「我們已經接近主符文門了」艾莉絲緊緊拉住你的手「我們必須加快速度」。</p>
        <p>艾莉絲牢牢地握著你的手。是你的錯覺還是她的臉已經改變？她究竟是誰？</p>
        <p>眼前——一扇石製的符文門。</p>
        <p>「我無法穿過這扇門。」艾莉絲聲明。「我可以為你打開門。但這會付出代價。」
        <p>「代價是什麼？」</p>
        <p>「我可能會從這個世界消失。」</p>
        <p>「永遠？」</p>
        <p>「我說不準...」</p>
        <p>你深深地意識到艾莉絲完全受你的掌控。她會按你的意願行動。</p>`,
      choices: {
        prompt: "選擇你的路徑：",
        options: [
                  "要求艾莉絲打開門",
                  "命令艾莉絲離開，你將自己解開符文門"
        ]
      }
    }
  },
  'a5_maze-alice-8': {
    en: {
      title: "The choice",
      text: `You take Alice's hand. "Open the door"
        <p>"As you so wish."</p>
        <p>She moves you aside and begins to chant. Wild bright light begins to emmanate from the rune door.</p>
        <p>"I've never seen magic like this" You say to yourself mesmerised.</p>
        <p>The runes flare golden. Warmth washes over her and you.</p>
        <p>But the energy is too powerful. You try to call out to her to stop. But nothing comes from your throat.</p> 
        <p>Alice is becoming engulfed in magic fire</p>`,
      choices: {
        prompt: "All you can do is stare:",
        options: [
                  "All you can do is look"
        ]
      }
    },
    zh: {
      title: "選擇",
      text: `你握住艾莉絲的手。「打開門。」
        <p>「如你所願。」</p>
        <p>她推開你，開始吟唱。野性而耀眼的光芒從符文門湧出。</p>
        <p>「我從未見過這樣的魔法，」你被迷住了，喃喃自語。</p>
        <p>符文閃耀著金色光芒。溫暖洋溢著她和你。</p>
        <p>但能量太強大了。你試圖叫她停下來。但沒有聲音從你的喉嚨發出。</p> 
        <p>艾莉絲被魔火吞沒。</p>`,
      choices: {
        prompt: "你只能凝視著：",
        options: [
                  "你只能看著"
        ]
      }
    }
  },
  'a5_maze-alice-9': {
    en: {
      title: "The sacrifice",
      text: `Alice turns into the fire of the rune door. In half silence she chants wildly taming the magic of the door.</p>
        <p>Fixed on the spot there is nothing you can do as Alice is consumed by the door's magic.</p>
        <p>She disintegrates before you...</p>
        <p>Gone.</p>
        <p>But now you can proceed</p>
        <p>"Oh well." You shrug your shoulders.</p>`,
      choices: {
        prompt: "You have no choice:",
        options: [
                  "The rune door has opened"
        ]
      }
    },
    zh: {
      title: "犧牲",
      text: `艾莉絲轉身進入符文門的火焰中。在半寂靜中，她瘋狂地吟唱，馴服著門的魔法。</p>
        <p>你釘在原地，無法動彈，只能眼看艾莉絲被門的魔法吞沒。</p>
        <p>她在你眼前瓦解了......</p>
        <p>消失了。</p>
        <p>但現在你可以繼續。</p>
        <p>「算了。」你聳了聳肩。</p>`,
      choices: {
        prompt: "你沒有選擇：",
        options: [
                  "符文門已經打開"
        ]
      }
    }
  },
  'a5_maze-alice-death-1': {
    en: {
      title: "Betrayal",
      text: `You push Alice toward the crates and dive into the alcove alone.
        <p>Alice stumbles, making too much noise. The beast man's head snaps toward the sound.</p>
        <p>"NO!" she screams as it spots her hair in torchlight.</p>
        <p>The beast man charges. Alice tries to run but trips. The axe falls.</p>
        <p>The creature turns toward your hiding spot, nostrils flaring. Without Alice's magic, you have no way deeper. It advances with a hungry grin.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>You cannot navigate this maze alone. Protecting your companion was your only path.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "背叛",
      text: `你將艾莉絲推向木箱，獨自跳入壁龕。
        <p>艾莉絲跌跌撞撞，聲音太大。獸人的頭猛地轉向聲音的來處。</p>
        <p>「不！」火光映照著她的頭髮時，她尖叫起來。</p>
        <p>獸人衝過來。艾莉絲試圖逃跑卻絆倒了。斧頭落下。</p>
        <p>生物轉身朝你的藏身處走來，鼻孔張開。沒有艾莉絲的魔法，你無法深入。它露著飢餓的笑容逼近。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
        <p>你無法獨自穿過迷宮。保護同伴是你唯一的出路。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始再試一次"
        ]
      }
    }
  },
  'a5_maze-alice-death-2': {
    en: {
      title: "The Crawlspace",
      text: `"You're smaller. Go through first and see if it's safe."
        <p>Alice's eyes widen. "But... what if something's in there?" She obeys, crawling into the narrow space.</p>
        <p>Frightened breathing. Then - a click. Grinding stone.</p>
        <p>"NO! It's a trap! It's closing!" The walls contract.</p>
        <p>You try to pull her back but she's wedged tight. Her screams echo, then stop with a sickening crunch.</p>
        <p>Behind you, the beast man returns, drawn by noise. Without Alice's magic, you're trapped. It grins, raising its axe.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>A leader goes first into danger, or not at all.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "爬行通道",
      text: `「你比較小。先進去看看是否安全。」
        <p>艾莉絲睜大眼睛。「但...萬一裡面有什麼呢？」她順從地爬進狹窄的空間。</p>
        <p>害怕的呼吸聲。然後——咔噠一聲。石頭摩擦聲。</p>
        <p>「不！這是陷阱！它在關閉！」牆壁收縮。</p>
        <p>你試圖將她拉回來，但她被卡住了。她的尖叫聲迴蕩，然後以令人厭惡的嘎吱聲停止。</p>
        <p>身後，獸人被聲音吸引回來。沒有艾莉絲的魔法，你被困住了。它咧著嘴笑著，舉起斧頭。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
        <p>領導者要麼率先進入危險，要麼就不進去。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始再試一次"
        ]
      }
    }
  },
  'a5_maze-alice-death-3': {
    en: {
      title: "Abandoned",
      text: `You dive into the barrel alone. Cramped, reeking of stale ale, but hidden.
        <p>Through a crack, you watch Alice search for cover. Her frame and blonde hair make her conspicuous. She dives under a table as three beast men enter.</p>
        <p>They smell something different. One snorts and points toward her table.</p>
        <p>"Fresh human." They flip the table aside. Alice screams.</p>
        <p>After they drag her away, you wait for hours. Finally emerge. Without Alice's magic, the deeper maze is sealed. You wander lost until thirst and hunger claim you.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>Two survive together, or both perish apart.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "遺棄",
      text: `你獨自跳進桶裡。狹窄、充斥著陳舊麥酒的臭味，卻很隱蔽。
        <p>透過裂縫，你看著艾莉絲尋找掩護。她的身形和金色頭髮使她很顯眼。三個獸人進來時，她跳到桌子下面。</p>
        <p>他們聞到了不同的味道。一個哼了一聲，指向她的桌子。</p>
        <p>「新鮮的人類。」他們翻過桌子。艾莉絲尖叫起來。</p>
        <p>他們拖走她之後，你等了幾個小時。最後才出現。沒有艾莉絲的魔法，更深層的迷宮被封住了。你迷失地遊蕩著，直到口渴和飢餓奪走你的生命。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
        <p>兩人一起活著，或各自孤獨地死去。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始再試一次"
        ]
      }
    }
  },
  'a5_maze-alice-death-4': {
    en: {
      title: "Separated",
      text: `"Stay here. I'll check if the passage is safe."
        <p>Alice's eyes fill with fear. "Please don't leave me alone..." But you're already wading into murky water.</p>
        <p>Water rises to your chest. You push forward, lantern high. Behind you, Alice's voice: "Wait! I hear something—"</p>
        <p>Then her scream. Splashing, snarling, desperate cries for help.</p>
        <p>You try to rush back but the current is strong, the passage too narrow. By the time you reach the junction - only blood on stones and drag marks toward the trapdoor.</p>
        <p>A beast man's laugh echoes above. Without Alice, you're lost. You wander flooded tunnels until exhaustion drags you under.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>Never leave your companion vulnerable and alone.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "分離",
      text: `「留在這裡。我去查看通道是否安全。」
        <p>艾莉絲的眼中充滿恐懼。「請不要讓我獨自一人...」但你已經涉入渾濁的水中。</p>
        <p>水上升到你的胸部。你向前推進，高舉燈籠。身後，艾莉絲的聲音：「等等！我聽到了什麼——」</p>
        <p>然後是她的尖叫。濺水聲、咆哮聲、絕望的求救聲。</p>
        <p>你試圖衝回去，但水流很強，通道太窄。當你到達十字路口時——只有石頭上的血跡和朝活板門拖動的痕跡。</p>
        <p>獸人的笑聲在上方迴蕩。沒有艾莉絲，你迷失了。你在被水淹沒的隧道中遊蕩，直到筋疲力盡將你拖入水下。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
        <p>永遠不要讓你的同伴脆弱而孤獨。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始再試一次"
        ]
      }
    }
  },
  'a5_maze-alice-death-5': {
    en: {
      title: "The Distraction",
      text: `You kick the rocks. They clatter loudly in the opposite direction. The beast men jump up, grabbing weapons.
        <p>"Go!" you whisper, pushing Alice toward the side passage.</p>
        <p>But Alice is frozen. She trembles as the beast men's eyes sweep the room. One spots her blonde hair in the firelight.</p>
        <p>"There!" it roars.</p>
        <p>Alice screams and tries to run, but her legs won't cooperate. She stumbles. The beast men are on her in seconds. You fight but there are two, much stronger.</p>
        <p>The last thing you see is Alice's terrified eyes as darkness takes you both.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>In danger, stay together. Separated, you are both vulnerable.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "分心",
      text: `你踢動岩石。它們在相反的方向大聲發出聲響。獸人跳起來，抓起武器。
        <p>「走！」你低聲說，推著艾莉絲朝側廊走去。</p>
        <p>但艾莉絲凍住了。當獸人的眼睛掃過房間時，她顫抖著。一個在火光下看到了她的金色頭髮。</p>
        <p>「那裡！」它咆哮道。</p>
        <p>艾莉絲尖叫著試圖逃跑，但她的腿不聽使喚。她跌倒了。獸人在幾秒鐘內就撲到她身上。你試圖抵抗，但有兩個，而且強大得多。</p>
        <p>你最後看到的是艾莉絲恐懼的眼睛，隨著黑暗降臨，你們都消失了。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
        <p>在危險中，要並肩同行。分開了，你們都很脆弱。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始再試一次"
        ]
      }
    }
  },
  'a5_maze-alice-death-6': {
    en: {
      title: "The Last Test",
      text: `"You're the one with magic. You should check for traps."
        <p>Alice's face falls. She nods as she steps toward a doorway.</p>
        <p>She touches runes on the door. They flare with blinding white light.</p>
        <p>"It's... a test," Alice gasps. "Of character. It's reading my intentions, my—" She turns to you, eyes wide with realization and hurt. "You kept me safe because you needed me. Not because you cared."</p>
        <p>The runes turn crimson trapping Alice in place. An alarm is set off, and with it the roar of Beastmen booms all around you both.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>The maze judges not just actions, but the heart behind them. True companionship requires genuine care, not utility.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "最後的考驗",
      text: `「你是有魔法的那個。你應該檢查陷阱。」
        <p>艾莉絲的臉色沉了下去。她點著頭走向門道。</p>
        <p>她觸摸門上的符文。它們炫耀著刺眼的白光。</p>
        <p>「這...是個考驗，」艾莉絲喘著氣說。「品格的考驗。它在讀取我的意圖，我的——」她轉身面向你，眼睛睜得很大，既醒悟又受傷。「你保護我是因為你需要我。不是因為你在乎我。」</p>
        <p>符文變成深紅色，困住艾莉絲。警報響起，獸人的怒吼聲在你們周圍轟隆隆地迴蕩。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
        <p>迷宮評判的不僅是行動，還有背後的心意。真正的同伴關係需要真摯的關懷，而不是利用。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始再試一次"
        ]
      }
    }
  },
  'a5_maze-alice-death-7': {
    en: {
      title: "Old Habits",
      text: `"Go" You order. Stunned, Alice accepts your order without expression.
        <p>A parting. A hug. And she slips away into the night. </p>
        <p>Your hands brush over every surface of the rune door. You are close you just have to put more effort into it.</p>
        <p>There is a click. You have done something. The door begins to shine red.
        <p>Right before it explodes right into your face.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>No man is an island. All of us need others.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "舊習慣",
      text: `「走，」你命令道。艾莉絲驚呆了，默默地接受了你的命令。
        <p>告別。一個擁抱。她消失在夜幕中。</p>
        <p>你的雙手在符文門的每個表面上摩擦。你已經很接近了，只需要投入更多的努力。</p>
        <p>有一個咔噠聲。你做了什麼。門開始發出紅光。
        <p>就在爆炸直接擊中你的臉之前。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
        <p>沒有人是孤島。我們都需要他人。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始再試一次"
        ]
      }
    }
  },
  'a5_maze-ghost-1': {
    en: {
      title: "A Guardian",
      text: `You are in a deeper part of the maze. You awaken to the sight of a green being smiling at you. You don't know what it is. It seems weird. 
        <p>"Hi there" It says.</p>
        <p>"What's going on. What is this"</p>
        <p>"You, you, you've been asleep. You want a little drinky?"</p>
        <p>"Where am I? </p>
        <p>"Greg's place". The being whispers.</p>
        <p>Is this the end of the maze?"</p>
        <p>"A traveller with lots of question" The being beams "The delight of my life." </p>
        <p>You get up and start to look around. You are out of the crystal caverns and in a deeper section of the maze. A series of inner caves for sure but with lived in furniture and homely torches on the wall.
          You are making progress. You just need to get rid of this thing in front of you.</p>
        <p> Greg continues to stare at you expectantly and with intense curiosity.</p>
        <p>"I need to get going. Sorry but I've got a few things on". You state boldly</p>
        <p>"But why the rush?</p>
        <p>"I'm on an important mission"</p>  
         <p>"When are you free?"</p>
        <p> "I'm man about town. Got a few things on. I've got to get going."</p>
        <p>"Why not chat right now?" It would be awfully good of you stay and chat."</p>
        <p>"I'm a bit busy"</p>  
        <p>"Can't you tell me your story of how you learned of the maze and how you got here?
        <p>You notice you are unarmed again. Careful traveller. You sense something about this being, that as pathetic as it looks. It is very, very, dangerous. Choose wisely.</p>`,
      choices: {
        prompt: "What will you do?",
        options: [
                  "attack",
                  "Try to walk past without engaging",
                  "stay awhile and tell Greg about your experience of the maze"
        ]
      }
    },
    zh: {
      title: "守護者",
      text: `你在迷宮的更深處。你甦醒時看到一個綠色的生物對著你笑。你不知道它是什麼。它看起來很奇怪。
        <p>「嗨，那邊，」它說。</p>
        <p>「發生了什麼事。這是什麼」</p>
        <p>「你、你、你一直在睡覺。你想要點喝的嗎？」</p>
        <p>「我在哪裡？」</p>
        <p>「格雷格的地方」。這個生物低聲說。</p>
        <p>這是迷宮的終點嗎？」</p>
        <p>「一個有很多問題的旅行者，」這個生物燦爛地笑著說，「我人生的喜悅。」</p>
        <p>你起身開始看四周。你已經離開了水晶洞穴，進入迷宮的更深層次。確實是一系列內部洞穴，但有住宅用的傢俱和牆上溫暖的火把。
          你正在取得進展。你只需要擺脫眼前的這個東西。</p>
        <p>格雷格繼續期待地注視著你，眼中充滿熾熱的好奇心。</p>
        <p>「我需要出發。對不起，但我有幾件事要忙。」你大膽地說。</p>
        <p>「但為什麼要趕時間呢？」</p>
        <p>「我在執行一項重要任務」</p>
        <p>「你什麼時候有空？」</p>
        <p>「我是一個城裡人。有幾件事要忙。我得走了。」</p>
        <p>「為什麼不現在聊天呢？」要是你願意留下來聊天就好了。」</p>
        <p>「我有點忙。」</p>
        <p>「你能告訴我你如何得知迷宮以及如何來到這裡的故事嗎？」</p>
        <p>你發現你又一次手無寸鐵了。小心，旅行者。你感覺到這個生物身上有什麼東西，盡管它看起來很可憐。但它非常、非常危險。明智地選擇。</p>`,
      choices: {
        prompt: "你會做什麼？",
        options: [
                  "攻擊",
                  "試著走過去而不與其交涉",
                  "留下來向格雷格講述你在迷宮中的經歷"
        ]
      }
    }
  },
  'a5_maze-ghost-2': {
    en: {
      title: "The Tale of Battle",
      text: `You tell Greg about how you discovered the maze. The sacrifices you had to make to find it. All the hard training you had to put yourself through. Your fight with the Troll and orcs and the crystal caverns.
        <p>Greg listens intently, its form rippling with interest. When you finish, it makes a sound like distant laughter.</p>
        <p>"Do you like Bailey's?" The being says "Its a smooth creamy liquor."</p>
        <p> "I'm not that thirsty"</p>
        <p>I want to know you. I want to hear all about your past. I want you to tell me everything. Let me pour you a glass and then you tell me all about yourself."</p>`,
      choices: {
        prompt: "What is your choice:",
        options: [
                  "Shout \"Enough of these games - I told you a story. Now fuck off.\"",
                  "refuse to drink the bailey's",
                  "Drink the bailey's gladly and tell your backstory in detail"
        ]
      }
    },
    zh: {
      title: "戰鬥的故事",
      text: `你告訴格雷格你如何發現了迷宮。你為了找到它而不得不做出的犧牲。你必須經歷的所有艱苦訓練。你與巨魔、獸人和水晶洞穴的戰鬥。
        <p>格雷格聚精會神地聆聽，它的形態隨著興趣而波動。當你講完時，它發出像遠方笑聲的聲音。</p>
        <p>「你喜歡貝禮詩嗎？」這個生物說，「這是一種光滑順暢的烈酒。」</p>
        <p>「我不是那麼渴」</p>
        <p>我想要了解你。我想聽聽你的所有過去。我想要你告訴我一切。讓我為你倒一杯，然後你告訴我所有關於你的事情。」</p>`,
      choices: {
        prompt: "你的選擇是什麼：",
        options: [
                  "大喊「夠了這些遊戲——我給你講了個故事。現在滾出去。」",
                  "拒絕喝貝禮詩",
                  "樂意地喝貝禮詩並詳細講述你的背景故事"
        ]
      }
    }
  },
  'a5_maze-ghost-3': {
    en: {
      title: "The Journey Recounted",
      text: `You tell the ghost about your childhood and teenage years. The hours flow by just as one bottle of bailey's follows another. Greg wants to know everything about you.
        On and on you talk. Everytime you skim over details of your life Greg stops you and insists that you go deeper into your life. Creamy smooth bailey's flows down you as you recall all who you are.
        And after some time you fall asleep. 
        <P>The next day you awken and Greg is staring at you expectantly. He wants you to continue your story of your teenage years. And so you talk on and throughout the day about yourself. No stone left untutned. The bailey's keeps being poured. </p>
        <p>You feel a closeness emerging. He may even be your best friend.</p>
        <p>"Did you know that my favourite number is 29?" Greg reveals one day.</p>
        <p>"That's a really interesting fact."</p>
        <p>"I love the ring of it. And its a prime number. All good numbers are prime".</p>
        <p>"I can see you know a lot of things."</p>
        <p></p>"I do water colours" Greg says close to your ear. Me and you can paint one day. I'm gonna show some of them later." </p>
        <p>"That sounds like some thing I would very much like" You gulp. You can see Greg's power more and more.</p>
        <p>"Tell me about your darkest fears?" Greg says. He is warming to you.</p>
        <p>The air crackles with magical energy.</p>`,
      choices: {
        prompt: "Choose your response:",
        options: [
                  "Pour Greg a glass of bailey's and ask instead about his water colour pictures",
                  "Share honestly about the weight on you",
                  "Deflect - some memories are too personal"
        ]
      }
    },
    zh: {
      title: "回憶的旅程",
      text: `你告訴幽靈關於你的童年和青少年時期。時光流逝，一瓶接一瓶的貝禮詩被喝完。格雷格想要了解你的一切。
        你不斷地述說。每當你略過生活中的細節時，格雷格都會叫停你，堅持要你更深入地述說你的人生。當你回憶起自己的一切時，光滑順暢的貝禮詩流入你的喉嚨。
        過了一段時間，你睡著了。
        <p>第二天你甦醒時，格雷格期待地注視著你。他希望你繼續講述你的青少年時期。所以你整天都在述說關於自己的故事。沒有遺漏任何細節。貝禮詩不斷被倒入。</p>
        <p>你感到一種親密感在浮現。他甚至可能是你最好的朋友。</p>
        <p>「你知道我最喜歡的數字是29嗎？」格雷格某天透露說。</p>
        <p>「那確實是個有趣的事實。」</p>
        <p>「我喜歡它的韻味。而且它是質數。所有好的數字都是質數」。</p>
        <p>「我看得出你知道很多事情。」</p>
        <p>「我畫水彩，」格雷格靠近你的耳邊說。「我和你可以有一天一起畫畫。我待會兒會給你看一些。」</p>
        <p>「那聽起來是我非常樂意做的事情」你嚥下唾沫說。你越來越能看到格雷格的力量。</p>
        <p>「告訴我你最深的恐懼？」格雷格說。他正在對你暖和起來。</p>
        <p>空氣中閃爍著魔法能量。</p>`,
      choices: {
        prompt: "選擇你的回應：",
        options: [
                  "為格雷格倒一杯貝禮詩，改為詢問他的水彩畫",
                  "誠實地分享你心中的沉重",
                  "迴避——有些記憶太私人了"
        ]
      }
    }
  },
  'a5_maze-ghost-4': {
    en: {
      title: "A change",
      text: `You speak honestly about your deepest fears and your messed up past. Again the talk seems to go on for hours and then days. 
        Greg a sphinx of smiles draws you on. From time to time a glass of bailey's is poured. 
        <p> You share what you have done in the maze. The cost of violence, the burden of responsibility, the loneliness of danger.</p>
        <p>Greg listens in complete silence. Its form becomes still, almost peaceful.</p>
        <p> When you finish, there's a long pause.</p>`,
      choices: {
        prompt: "You look in fear as Greg's eyes turn white:",
        options: [
                  "continue"
        ]
      }
    },
    zh: {
      title: "改變",
      text: `你誠實地述說了你最深的恐懼和混亂的過去。談話似乎又進行了數小時，然後是數天。
        格雷格，一個微笑的獅身人面像，將你引向前。時不時一杯貝禮詩被倒入。
        <p>你分享了你在迷宮中所做的事情。暴力的代價，責任的負擔，危險的孤獨。</p>
        <p>格雷格在完全的沉默中傾聽。它的形態變得靜止，幾乎很平靜。</p>
        <p>當你講完時，有一個長時間的停頓。</p>`,
      choices: {
        prompt: "你驚恐地看著格雷格的眼睛變成白色：",
        options: [
                  "繼續"
        ]
      }
    }
  },
  'a5_maze-ghost-4_2': {
    en: {
      title: "Truth and Connection",
      text: `<p> The long pause drags on and on.</p>
        <p>Then Greg speaks, his voice softer: "Thank you for sharing all of that with me. Come" Greg says "hold my hands and together we will go on the journey of a lifetime."</p>
        <p> Greg's eyes are full white. It seems like he can not see anything. He gestures for you to hold his hands.</p>`,
      choices: {
        prompt: "What will you do:",
        options: [
                  "Hold Greg's hands. Be patient and bide your time",
                  "Start playing some love games on Greg",
                  "Slip away now. Run while you have the chance",
                  "He is going blind. Kill him."
        ]
      }
    },
    zh: {
      title: "真實與連繫",
      text: `<p>漫長的沉默一直拖延著。</p>
        <p>隨後葛雷格開口，聲音變得溫柔：「感謝您與我分享一切。來吧，」葛雷格說，「牽著我的手，我們將一起踏上一生中最重要的旅程。」</p>
        <p>葛雷格的眼睛完全變白了。看起來他似乎什麼都看不見。他做出手勢，示意您牽著他的手。</p>`,
      choices: {
        prompt: "您將做什麼：",
        options: [
                  "牽著葛雷格的手。保持耐心，靜觀其變",
                  "與葛雷格開始玩愛情遊戲",
                  "現在悄悄溜走。趁機逃跑",
                  "他即將失明。殺死他。"
        ]
      }
    }
  },
  'a5_maze-ghost-5': {
    en: {
      title: "The flight",
      text: ``,
      choices: {
        prompt: "You keep moving:",
        options: [
                  "continue"
        ]
      }
    },
    zh: {
      title: "The flight",
      text: ``,
      choices: {
        prompt: "You keep moving:",
        options: [
                  "continue"
        ]
      }
    }
  },
  'a5_maze-ghost-death-1': {
    en: {
      title: "Fatal Disrespect",
      text: `"I don't have time for this" You state boldly..
        <p>The cavern goes black. Temperature drops fifty degrees. You can't move. Frozen in place.</p>
        <p>Greg's voice becomes terrible, ancient rage given sound: "YOU DARE IGNORE ME? AFTER TEN THOUSAND YEARS OF SOLITUDE, YOU WOULD DENY ME EVEN THE COURTESY OF CONVERSATION?"</p>
        <p> You are unable to respond</p>
        <p>"I ASKED FOR A STORY. SUCH A SMALL THING. BUT YOU SHOWED NO RESPECT, NO ACKNOWLEDGMENT OF MY PATIENCE AND POWER. SO I WILL TAKE WHAT I NEED."</p>
        <p>The darkness enters your mouth, eyes, ears. Greg consumes your memories, experiences, your very soul - feasting on your essence for entertainment.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>Some beings have earned respect through age and power. To ignore them is to invite destruction.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "致命的不尊重",
      text: `「我沒有時間浪費在這上面，」您大膽地說道。
        <p>洞穴陷入黑暗。溫度驟降五十度。您無法動彈。被凍在原地。</p>
        <p>葛雷格的聲音變得可怕，古老的憤怒化為聲音：「您敢無視我？在經歷了一萬年的孤獨之後，您竟然連基本的交談禮儀都要拒絕我？」</p>
        <p>您無法回應。</p>
        <p>「我只是要求一個故事。這是多小的要求啊。但您沒有表現出尊重，沒有承認我的耐心與力量。所以我將奪取我所需要的。」</p>
        <p>黑暗侵入您的口腔、眼睛、耳朵。葛雷格吞噬您的記憶、經歷與靈魂本身──以您的本質為娛樂來源。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">您已經死亡</p>
        <p>有些生物因年歲與力量贏得了尊重。無視它們就是招致毀滅。</p>`,
      choices: {
        prompt: "您的旅程在此終結：",
        options: [
                  "從頭再來一次"
        ]
      }
    }
  },
  'a5_maze-ghost-death-2': {
    en: {
      title: "Displeased Spirit",
      text: `"One story is enough. I've entertained you. Now let me pass."
        <p>Greg's form darkens. The cavern's temperature plummets. "ENOUGH? ENOUGH?!"</p>
        <p>"I HAVE WAITED TEN THOUSAND YEARS FOR COMPANY, AND YOU OFFER ME ONE BRIEF TALE THEN DEMAND PASSAGE? YOUR ARROGANCE IS... DISAPPOINTING."</p>
        <p>Greg feeds on your pain, your fear, finally getting the entertainment it craved - your suffering.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>When dealing with immortal beings, patience is not negotiable. Give them what they ask for, or perish.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "不悅的幽靈",
      text: `「一個故事就夠了。我已經娛樂您了。現在讓我通過。」
        <p>葛雷格的形態變暗。洞穴的溫度急速下降。「夠了？夠了？！」</p>
        <p>「我等待了一萬年才得到陪伴，而您卻只給我講一個短故事，然後還要求通行？您的傲慢...令人失望。」</p>
        <p>葛雷格以您的痛苦和恐懼為食，終於得到了它渴望的娛樂──您的苦難。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">您已經死亡</p>
        <p>在與不朽的生物打交道時，耐心是不可協商的。給予它們所求，否則死亡。</p>`,
      choices: {
        prompt: "您的旅程在此終結：",
        options: [
                  "從頭再來一次"
        ]
      }
    }
  },
  'a5_maze-ghost-death-3': {
    en: {
      title: "Rejection",
      text: `"That's too personal. I've told you enough stories. My inner thoughts are my own."
        <p>Silence. Heavy, terrible silence.</p>
        <p>Then the ghost's voice, cold as the void between stars: "TOO PERSONAL? TOO... PERSONAL?"</p>
        <p>"I HAVE SHARED THIS CAVERN WITH NOTHING BUT STONE AND SILENCE FOR TEN THOUSAND YEARS. I ASK FOR CONNECTION, FOR TRUTH, FOR HONEST SHARING, AND YOU DENY ME?"</p>
        <p>The ghost's form becomes something monstrous - all teeth and darkness and hunger. "IF YOU WILL NOT SHARE YOUR PAIN WILLINGLY, I WILL EXTRACT IT BY FORCE."</p>
        <p>Spectral claws dig into your mind, ripping through memories, tearing apart thoughts. The ghost takes what it wants, but the process destroys your sanity. You collapse, screaming, as your mind fractures into pieces.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>The ghost asked for vulnerability, for connection. To deny it was to invite violation.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "拒絕",
      text: `「這太私人了。我已經給您講了足夠多的故事。我的內心想法是我自己的。」
        <p>寂靜。沉重而可怕的寂靜。</p>
        <p>隨後鬼魂的聲音，冷如星辰之間的虛空：「太私人了？太...私人了？」</p>
        <p>「我在這個洞穴裡與石頭和寂靜共處了一萬年。我請求連繫，請求真實，請求誠心分享，而您竟然拒絕我？」</p>
        <p>鬼魂的形態變成了怪物──全是牙齒、黑暗與飢餓。「如果您不願意主動分享您的痛苦，我就會用暴力來提取。」</p>
        <p>幽靈的爪子挖入您的心靈，撕裂記憶，粉碎思想。鬼魂奪取它想要的，但這個過程摧毀了您的理智。您尖叫著崩潰，您的心靈碎裂成片段。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">您已經死亡</p>
        <p>鬼魂要求的是脆弱與連繫。拒絕它就是邀請侵犯。</p>`,
      choices: {
        prompt: "您的旅程在此終結：",
        options: [
                  "從頭再來一次"
        ]
      }
    }
  },
  'a5_maze-ghost-death-4': {
    en: {
      title: "The Wrong Answer",
      text: `"I wouldn't change anything. Every choice made me who I am. Regret is pointless."
        <p>The ghost's warm golden light flickers and dies. Its form turns cold, disappointed.</p>
        <p>"WRONG," it says flatly. "THAT IS THE ANSWER OF SOMEONE WHO HASN'T TRULY REFLECTED ON THEIR CHOICES."</p>
        <p>"TO CLAIM YOU WOULD CHANGE NOTHING IS TO CLAIM YOU LEARNED NOTHING. IT IS TO DENY GROWTH, TO REFUSE WISDOM. YOU JUST TOLD ME OF YOUR DOUBTS AND FEARS, YET NOW YOU CLAIM PERFECT CERTAINTY?"</p>
        <p>The cavern begins to collapse. "YOU WERE SO CLOSE TO UNDERSTANDING. BUT IN THE END, YOU CHOSE COMFORTABLE LIES OVER HONEST REFLECTION."</p>
        <p>Stone falls from above. The ghost watches, disappointed, as the cavern buries you alive.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>True wisdom requires acknowledging our mistakes, not pretending they were all necessary.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "錯誤的答案",
      text: `「我不會改變任何事。每個選擇都造就了現在的我。遺憾是毫無意義的。」
        <p>鬼魂溫暖的金色光芒閃爍後熄滅。它的形態變得冰冷，失望。</p>
        <p>「錯了，」它平淡地說。「這是一個沒有真正反思自己選擇的人的答案。」</p>
        <p>「聲稱您不會改變任何事，就是聲稱您沒有學到任何東西。這是拒絕成長，拒絕智慧。您剛才才告訴我您的疑慮和恐懼，現在卻聲稱擁有完美的確定性？」</p>
        <p>洞穴開始崩塌。「您距離理解已經那麼近。但最後，您選擇了舒適的謊言而非誠實的反思。」</p>
        <p>石頭從上方墜落。鬼魂失望地看著洞穴活埋了您。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">您已經死亡</p>
        <p>真正的智慧需要承認我們的錯誤，而非假裝它們都是必要的。</p>`,
      choices: {
        prompt: "您的旅程在此終結：",
        options: [
                  "從頭再來一次"
        ]
      }
    }
  },
  'a5_maze-ghost-death-5': {
    en: {
      title: "Rejection",
      text: `"That's too personal. I've told you enough stories. My inner thoughts are my own."
        <p>Silence. Heavy, terrible silence.</p>
        <p>Then the ghost's voice, cold as the void between stars: "TOO PERSONAL? TOO... PERSONAL?"</p>
        <p>"I HAVE SHARED THIS CAVERN WITH NOTHING BUT STONE AND SILENCE FOR TEN THOUSAND YEARS. I ASK FOR CONNECTION, FOR TRUTH, FOR HONEST SHARING, AND YOU DENY ME?"</p>
        <p>The ghost's form becomes something monstrous - all teeth and darkness and hunger. "IF YOU WILL NOT SHARE YOUR PAIN WILLINGLY, I WILL EXTRACT IT BY FORCE."</p>
        <p>Spectral claws dig into your mind, ripping through memories, tearing apart thoughts. The ghost takes what it wants, but the process destroys your sanity. You collapse, screaming, as your mind fractures into pieces.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>The ghost asked for vulnerability, for connection. To deny it was to invite violation.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "拒絕",
      text: `「這太私人了。我已經給您講了足夠多的故事。我的內心想法是我自己的。」
        <p>寂靜。沉重而可怕的寂靜。</p>
        <p>隨後鬼魂的聲音，冷如星辰之間的虛空：「太私人了？太...私人了？」</p>
        <p>「我在這個洞穴裡與石頭和寂靜共處了一萬年。我請求連繫，請求真實，請求誠心分享，而您竟然拒絕我？」</p>
        <p>鬼魂的形態變成了怪物──全是牙齒、黑暗與飢餓。「如果您不願意主動分享您的痛苦，我就會用暴力來提取。」</p>
        <p>幽靈的爪子挖入您的心靈，撕裂記憶，粉碎思想。鬼魂奪取它想要的，但這個過程摧毀了您的理智。您尖叫著崩潰，您的心靈碎裂成片段。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">您已經死亡</p>
        <p>鬼魂要求的是脆弱與連繫。拒絕它就是邀請侵犯。</p>`,
      choices: {
        prompt: "您的旅程在此終結：",
        options: [
                  "從頭再來一次"
        ]
      }
    }
  },
  'a5_maze-ghost-death-6': {
    en: {
      title: "Fatal Disrespect",
      text: `You run in with your sword. 
        <p>The cavern goes black. Temperature drops fifty degrees. You can't move. Frozen in place.</p>
        <p>Greg's voice becomes terrible, ancient rage given sound: "YOU TRY TO HURT ME? YOU'RE MY BEST FRIEND SINCE CURLY JEFFERSON, YOU WOULD DENY ME EVEN THE COURTESY OF COMPANIONSHIP!"</p>
        <p> You are unable to respond</p>
        <p>"ME AND YOU WERE GETTING SO CLOSE. SO I WILL TAKE WHAT I NEED."</p>
        <p>The darkness enters your mouth, eyes, ears. Greg consumes your memories, experiences, your very soul - feasting on your essence for entertainment.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>Never under any circumstances attack a demon lord</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "致命的不尊重",
      text: `您拔劍衝了進去。
        <p>洞穴陷入黑暗。溫度驟降五十度。您無法動彈。被凍在原地。</p>
        <p>葛雷格的聲音變得可怕，古老的憤怒化為聲音：「您敢傷害我？您是我自從卷毛傑佛遜以來最好的朋友，您竟然連基本的同伴禮儀都要拒絕我？」</p>
        <p>您無法回應。</p>
        <p>「我們和您本來快要關係非常密切了。所以我將奪取我所需要的。」</p>
        <p>黑暗侵入您的口腔、眼睛、耳朵。葛雷格吞噬您的記憶、經歷與靈魂本身──以您的本質為娛樂來源。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">您已經死亡</p>
        <p>在任何情況下都不要攻擊魔鬼領主。</p>`,
      choices: {
        prompt: "您的旅程在此終結：",
        options: [
                  "從頭再來一次"
        ]
      }
    }
  },
  'a5_maze-ghost-greg-end': {
    en: {
      title: "Together Forever",
      text: `<p>You kneel down and take hold of Greg's hands.</p>
      <p>Staring into each others eyes, all the posibilities of games flood through your minds</p>
     <p> games... love games </p> 
      <p> Greg takes you to places, secret places you have never dreamed of.</p>  
      <p> You know him.</p>
       <p> Soon enough he takes you to his special mountain that only he knows about. You legs grow strong as you lead each other up its side.</p>
       <p> Long nights in Greg's arms await. </p>
        <p style="color: #ffff00; font-weight: bold; text-align: center;">YOUR QUEST FOR THE MAZE IS OVER</p>
        <p>You've escaped the maze alive. But you didn't complete it. Your story now is with Greg. Make it a good one.</p>`,
      choices: {
        prompt: "",
        options: [
                  "Play again to discover the maze's secrets"
        ]
      }
    },
    zh: {
      title: "永遠在一起",
      text: `<p>您跪下，握住葛雷格的手。</p>
      <p>凝視著彼此的眼睛，所有遊戲的可能性洪水般湧過您的心靈。</p>
     <p>遊戲...愛情遊戲。</p> 
      <p>葛雷格帶您去往秘密之地，您從未夢想過的地方。</p>  
      <p>您認識他。</p>
       <p>不久，他帶您去了他的特殊山峰，只有他知道的山峰。當您們一起向上攀登時，您的雙腿變得強壯。</p>
       <p>在葛雷格懷抱中的漫漫長夜等待著您。</p>
        <p style="color: #ffff00; font-weight: bold; text-align: center;">您尋求迷宮的冒險已經結束</p>
        <p>您活著逃出了迷宮。但您沒有完成它。現在，您的故事是和葛雷格在一起。好好創造這個故事吧。</p>`,
      choices: {
        prompt: "",
        options: [
                  "再玩一次以發現迷宮的秘密"
        ]
      }
    }
  },
  'a5_maze-ghost-pre1': {
    en: {
      title: "The Caverns",
      text: `You enter a vast natural cavern. Crystalline formations glow with inner light, casting prismatic patterns. The air hums with magical power.
        <p> But something isn't quite right. Everthing in this area looks the same. And there is a feeling that ahead is something dangerous and way above your level.</p>
        <p>Maybe you got it wrong perhaps there is another way to go.</p>`,
      choices: {
        prompt: "What should you do?",
        options: [
                  "You keep moving",
                  "This isn't the right way head back to the start of the maze"
        ]
      }
    },
    zh: {
      title: "洞穴",
      text: `您進入了一個廣闊的天然洞穴。晶體構造散發著內在的光，投射出彩虹圖案。空氣中迴盪著魔法力量。
        <p>但有些地方不太對勁。這個區域的一切看起來都一樣。而且有種感覺，前面有危險的東西，遠遠超過您的水平。</p>
        <p>也許您走錯了。也許還有別的路。</p>`,
      choices: {
        prompt: "您應該做什麼？",
        options: [
                  "您繼續前進",
                  "這不是對的方向，回到迷宮的起點"
        ]
      }
    }
  },
  'a5_maze-ghost-pre2': {
    en: {
      title: "The Caverns",
      text: `You wonder through the crystal caverns, searching. Crystalline formations glow with inner light, casting prismatic patterns. The air hums with magical power.
        <p> But something isn't quite right. Havent you been here before?</p>
        <p> There is a feeling that ahead is something dangerous and way above your level.</p>
        <p>Maybe you got it wrong perhaps there is another way to go.</p>`,
      choices: {
        prompt: "You continue on but with doubts:",
        options: [
                  "You still keep moving",
                  "maybe head back to the start of the maze"
        ]
      }
    },
    zh: {
      title: "洞穴",
      text: `您在晶體洞穴中游蕩搜索。晶體構造散發著內在的光，投射出彩虹圖案。空氣中迴盪著魔法力量。
        <p>但有些地方不太對勁。您不是曾經來過這裡嗎？</p>
        <p>有種感覺，前面有危險的東西，遠遠超過您的水平。</p>
        <p>也許您走錯了。也許還有別的路。</p>`,
      choices: {
        prompt: "您懷疑著繼續前進：",
        options: [
                  "您仍然繼續前進",
                  "也許回到迷宮的起點"
        ]
      }
    }
  },
  'a5_maze-ghost-pre3': {
    en: {
      title: "The Caverns",
      text: `Crystalline formations glow with inner light, casting prismatic patterns. The air hums with magical power.
        <p> But something isn't quite right.Everthing in this area looks the same.</p>
        <p> You have a very bad feeling about what lies ahead.</p>`,
      choices: {
        prompt: "What should you do?",
        options: [
                  "You will keep moving",
                  "You are lost, retrace your steps, use a new strategy"
        ]
      }
    },
    zh: {
      title: "洞穴",
      text: `晶體構造散發著內在的光，投射出彩虹圖案。空氣中迴盪著魔法力量。
        <p>但有些地方不太對勁。這個區域的一切看起來都一樣。</p>
        <p>您對前面等待著的東西有非常不好的預感。</p>`,
      choices: {
        prompt: "您應該做什麼？",
        options: [
                  "您將繼續前進",
                  "您迷路了，回溯您的步伐，使用新的策略"
        ]
      }
    }
  },
  'a5_maze-ghost-pre4': {
    en: {
      title: "The Caverns",
      text: `Crystalline formations glow with inner light, casting prismatic patterns. The air hums with magical power.
          <p>This way seems different. You think this is the right way</p>
          <p> And yet... you feel a dread upon you. You sense a dark power.</p>`,
      choices: {
        prompt: "What should you do?",
        options: [
                  "You keep moving",
                  "Go forward and meet the darkness"
        ]
      }
    },
    zh: {
      title: "洞穴",
      text: `晶體構造散發著內在的光，投射出彩虹圖案。空氣中迴盪著魔法力量。
          <p>這條路看起來不同。您認為這是對的方向。</p>
          <p>但是...您感到一種恐懼籠罩著您。您感受到黑暗力量。</p>`,
      choices: {
        prompt: "您應該做什麼？",
        options: [
                  "您繼續前進",
                  "向前走，迎接黑暗"
        ]
      }
    }
  },
  'a5_maze-ghost-pre5': {
    en: {
      title: "Hidden Ways",
      text: `Following along the crystalline formations you start to understand the way of the maze. You feel it. You know it. You are it.
         <p>Danger lies ahead. Deep dark danger.
         <p>In a dark stone tunnel you realise that a gas has been released.</p>
      <p> You can see yourself falling down onto the floor.</p>`,
      choices: {
        prompt: "You lose consciousness:",
        options: [
                  "continue"
        ]
      }
    },
    zh: {
      title: "隱秘之路",
      text: `沿著晶體構造，您開始理解迷宮的方式。您感受到它。您知道它。您就是它。
         <p>危險在前方。深沉黑暗的危險。
         <p>在一條黑暗的石頭隧道中，您意識到一種氣體被釋放出來了。</p>
      <p>您可以看到自己倒在地上。</p>`,
      choices: {
        prompt: "您失去了意識：",
        options: [
                  "繼續"
        ]
      }
    }
  },
  'a5_maze-ghost3_ext1': {
    en: {
      title: "The Journey Recounted",
      text: `The joy on Greg's face is unmistakeable - pure incredible joy. He hastens you to a new room to sit. He reveals from a cupboard his first master piece.
        <p>"This is my favourite number. 29"</p>
      <p>"Its very nice."</p>
      <p> "I got some more." Greg rustles through sheet upon sheet of paper in a cupboard out of view.</p>`,
      choices: {
        prompt: "It would be wise to continue:",
        options: [
                  "Look at another watercolour picture"
        ]
      }
    },
    zh: {
      title: "旅程的敘述",
      text: `葛雷格臉上的喜悅毫無保留──純粹而令人難以置信的喜悅。他匆匆引領您進入一個新房間坐下。他從櫃子裡取出他的第一件傑作。
        <p>「這是我最喜歡的數字。29」</p>
      <p>「非常漂亮。」</p>
      <p>「我還有更多。」葛雷格翻著櫃子裡成疊的紙張。</p>`,
      choices: {
        prompt: "繼續會是明智之舉：",
        options: [
                  "看另一幅水彩畫"
        ]
      }
    }
  },
  'a5_maze-ghost3_ext2': {
    en: {
      title: "The Journey Recounted",
      text: `<p>"This is a self portrait of me when I'm feeling a little angsty." Greg beams.</p>
        <p>"I love it, its great."</p>
        <p>"I've got some more."</p>`,
      choices: {
        prompt: "Choose your response:",
        options: [
                  "look at another water colour",
                  "break down and tell him all you know",
                  "Tell him he's really weird"
        ]
      }
    },
    zh: {
      title: "旅程的訴述",
      text: `<p>「這是我感到有些憂鬱時的自畫像。」葛雷格燦爛笑著。</p>
        <p>「我喜歡，真是太棒了。」</p>
        <p>「我還有一些。」</p>`,
      choices: {
        prompt: "選擇您的回應：",
        options: [
                  "欣賞另一幅水彩畫",
                  "情緒失控並告訴他你所知的一切",
                  "告訴他他真的很奇怪"
        ]
      }
    }
  },
  'a5_maze-ghost3_ext3': {
    en: {
      title: "The Journey Recounted",
      text: `<p>"This is a bottle of bailey's"</p>
        <p>"Fascinating I think this might be your best picture"</p>
        <p>"let me keep digging up some pictures."</p>`,
      choices: {
        prompt: "Choose your response:",
        options: [
                  "Look at more Water colours",
                  "Distract him. Share with him your darkest fears",
                  "Shout \"Enough of these games - I want out of this place.\""
        ]
      }
    },
    zh: {
      title: "旅程的訴述",
      text: `<p>「這是一瓶貝利斯利口酒。」</p>
        <p>「令人著迷，我認為這可能是你最好的圖畫。」</p>
        <p>「讓我繼續挖掘一些圖畫。」</p>`,
      choices: {
        prompt: "選擇您的回應：",
        options: [
                  "欣賞更多水彩畫",
                  "分散他的注意力。與他分享你最黑暗的恐懼",
                  "大喊「夠了，這些遊戲—我想離開這個地方。」"
        ]
      }
    }
  },
  'a5_maze-orcs': {
    en: {
      title: "The Feasting Hall",
      text: `You unlock the iron door and push it open. A massive feasting hall lit by roaring fire pits.
        <p>At a long table sit ten fat old orcs. They look slow traveller - generations of gluttony and idleness make them weak. Four hundred pounds each, armor straining. They're gorging on roasted meat, bones cracking between their teeth.</p>
        <p>They haven't noticed you. Too absorbed in their feast, arguing over the choicest cuts, laughing with mouths full.</p>
        <p>Your enchanted sword gleams - you could take these fatties, attack while they're distracted. But... there's a side passage hidden by tapestries - you might sneak past.</p>
        <p>One orc starts to turn toward the door. Seconds to decide!</p>`,
      choices: {
        prompt: "Choose quickly:",
        options: [
                  "Attack while they're distracted",
                  "Try to sneak past through the side passage"
        ]
      }
    },
    zh: {
      title: "宴會廳",
      text: `你解開鐵門上的鎖並推開它。一個巨大的宴會廳，由咆哮的火坑照亮。
        <p>長桌邊坐著十隻肥胖的老獸人。他們看起來動作遲緩—幾代人的暴飲暴食和懶惰使他們虛弱。每隻四百磅重，盔甲緊繃。他們狼吞虎嚥著烤肉，骨頭在牙齒間碎裂。</p>
        <p>他們還沒有注意到你。太沉浸在盛宴中，為最好的肉塊而爭吵，嘴裡塞滿食物地笑著。</p>
        <p>你的魔法劍閃閃發光—你可以對付這些肥豬，在他們分心時發動攻擊。但是...有一條被掛毯隱藏的側廊—你可能會偷偷溜過。</p>
        <p>一隻獸人開始轉身面向門。只有幾秒鐘做決定！</p>`,
      choices: {
        prompt: "快速選擇：",
        options: [
                  "在他們分心時發動攻擊",
                  "試著從側廊偷偷溜過"
        ]
      }
    }
  },
  'a5_maze-orcs-hide': {
    en: {
      title: "Discovered",
      text: `You edge along the wall toward the side passage. Moving slowly, carefully, keeping tapestries between you and the orcs.
        <p>Almost there. Just a few more steps...</p>
        <p>CRACK! Your foot lands on a discarded bone. The sound echoes.</p>
        <p>Ten pairs of bloodshot eyes turn toward you. Silence.</p>
         <p>"HUMAN! IN OUR HALL!" one bellows.</p>
        <p>You try to run but they surround you. Ten orcs, even fat ones, are too many. Their crude weapons fall like rain. Your enchanted sword claims two before the numbers overwhelm you.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>One brave man trained, is stronger than an idle ten .</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "被發現",
      text: `你沿著牆壁向側廊移動。緩慢而謹慎地移動，保持掛毯在你與獸人之間。
        <p>快到了。再走幾步...</p>
        <p>卡擦！你的腳踏上一根丟棄的骨頭。聲音迴盪。</p>
        <p>十雙血紅的眼睛轉向你。寂靜。</p>
         <p>「人類！在我們的大廳裡！」一隻獸人咆哮。</p>
        <p>你試圖逃跑，但他們將你包圍。十隻獸人，即使是肥胖的，也太多了。他們的粗糙武器像雨一樣落下。你的魔法劍在人數壓倒你之前擊倒了兩隻。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
        <p>一個受過訓練的勇敢人比十個閒散的人更強大。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始重試"
        ]
      }
    }
  },
  'a5_maze-orcs-kill': {
    en: {
      title: "The Battle of the Feast Hall",
      text: `You charge in with a battle cry. Your enchanted sword arcs through the air, striking the nearest orc before they can react.
        <p>Surprise is everything. The orcs are slow, bloated from years of excess. They scramble for weapons but you're already among them, your blade singing.</p>
        <p>One falls. Two. Three. Your sword cuts through armor and flesh with supernatural sharpness.</p>
        <p>Four. Five. Six. The remaining orcs panic, no longer attacking but fleeing. But they're too slow.</p>
        <p>Seven. Eight. Nine. The last orc drops to its knees, begging.</p>
        <p>Ten orcs lie dead. You're breathing hard, covered in sweat and blood, but victorious. The enchanted sword glows brighter, pleased with the battle.</p>
        <p>Beyond the feast hall, a narrow passage leads to natural caverns. You sense you're getting closer to something significant.</p>`,
      choices: {
        prompt: "Continue deeper:",
        options: [
                  "Enter the caverns"
        ]
      }
    },
    zh: {
      title: "宴會廳的戰役",
      text: `你發出戰鬥怒吼衝了進去。你的魔法劍在空中劃過，在獸人反應之前擊中最近的一隻。
        <p>出其不意是關鍵。獸人動作遲緩，多年過量飲食使他們臃腫。他們為武器而爭奪，但你已經在他們中間，劍刃唱著歌曲。</p>
        <p>一隻倒下。兩隻。三隻。你的劍以超自然的銳利穿透盔甲和血肉。</p>
        <p>四隻。五隻。六隻。剩餘的獸人驚慌失措，不再攻擊而是逃竄。但他們太遲鈍了。</p>
        <p>七隻。八隻。九隻。最後一隻獸人跪地乞求。</p>
        <p>十隻獸人橫屍眼前。你喘著粗氣，渾身是汗水和血跡，但勝利了。魔法劍發出更亮的光，對這場戰役感到滿意。</p>
        <p>宴會廳外，一條狹窄的通道通往天然洞穴。你感到自己越來越接近某個重要的東西。</p>`,
      choices: {
        prompt: "繼續深入：",
        options: [
                  "進入洞穴"
        ]
      }
    }
  },
  'a5_maze-sword-explore': {
    en: {
      title: "The Choice to Continue",
      text: `In a dark chamber you come across a silver sword. You take hold of it - the perfect weight, there seems to be a dim glow about it. There is no mistake, it is magical.
        <p>The maze has tested you. You want to see what lies at its heart.</p>
        <p>The corridor winds downward, glowing fungi providing eerie green light. Air grows warmer and humid. You pass old storage rooms, abandoned guard posts, evidence of ancient civilization.</p>
        <p> Blade in hand, you slowly make your way forward.</p>`,
      choices: {
        prompt: "You feel powerful",
        options: [
                  "move on"
        ]
      }
    },
    zh: {
      title: "繼續的選擇",
      text: `在一個黑暗的房間裡，你發現了一把銀劍。你握住它—完美的重量，它周圍似乎有淡淡的光芒。毫無疑問，這是一把魔法劍。
        <p>迷宮已經考驗過你。你想看看在它的心臟裡隱藏著什麼。</p>
        <p>走廊向下蜿蜒，發光的真菌提供著詭異的綠光。空氣變得溫暖而潮濕。你經過古老的儲藏室、廢棄的衛兵哨所，看到古代文明的痕跡。</p>
        <p>手握著刀刃，你慢慢向前前進。</p>`,
      choices: {
        prompt: "你感到強大",
        options: [
                  "繼續前進"
        ]
      }
    }
  },
  'a5_maze-sword-explore2': {
    en: {
      title: "The Choice to Continue",
      text: `<p>In the darkness you hear something loud move. Than a smell - body odor mixed with rotting meat.</p>
        <p>You round a corner and freeze. Sitting on bones and treasure, blocking the way forward - a massive troll. Eight feet tall, blue-grey skin. Both of you are in shock.</p>
        <p>You grip the enchanted sword tightly. The troll wears a crude necklace with a key hanging from it.</p>`,
      choices: {
        prompt: "You have no choice:",
        options: [
                  "Confront the troll"
        ]
      }
    },
    zh: {
      title: "繼續的選擇",
      text: `<p>在黑暗中，你聽到一些沉重的東西移動。然後是氣味—體臭混合著腐爛的肉的臭味。</p>
        <p>你轉過一個角落，僵住了。坐在骨頭和寶藏上，擋住前路的—一隻巨大的巨魔。八英尺高，藍灰色的皮膚。你們都震驚了。</p>
        <p>你緊緊握著魔法劍。巨魔戴著一條粗糙的項鍊，上面掛著一把鑰匙。</p>`,
      choices: {
        prompt: "你別無選擇：",
        options: [
                  "對抗巨魔"
        ]
      }
    }
  },
  'a5_maze-troll': {
    en: {
      title: "Guardian of the Deep",
      text: `Yellow, bloodshot eyes fix on you.
      <p>"HUMAN," it rumbles like grinding rocks. "TURN BACK OR DIE."</p>
      <p>Your enchanted sword gleams. You're armed, prepared. The troll looks slow, brutish. You could take it.</p>
      <p>But then you notice something odd. The troll's eyes aren't entirely hostile. Sad? Tired?</p>
      <p>This creature has been here a long time. Alone.</p>
      <p>The troll raises a massive club, the motion reluctant. "DON'T MAKE TROLL HURT YOU."</p>`,
      choices: {
        prompt: "Choose your approach:",
        options: [
                  "Attack the troll with your sword",
                  "Lower your weapon and try to talk to the troll"
        ]
      }
    },
    zh: {
      title: "深淵守護者",
      text: `黃色的充血雙眼盯著你。
      <p>「人類，」它像磨石般低沉地說。「回頭或者死。」</p>
      <p>你的附魔劍閃閃發光。你有武器，有準備。這個巨魔看起來動作緩慢、野蠻。你可以對付它。</p>
      <p>但隨後你注意到一些奇怪的事情。巨魔的眼神並非完全充滿敵意。悲傷？疲憊？</p>
      <p>這個生物在這裡待了很長時間。孤獨地。</p>
      <p>巨魔舉起一根巨大的木棒，動作有些勉強。「別讓巨魔傷害你。」</p>`,
      choices: {
        prompt: "選擇你的做法：",
        options: [
                  "用劍攻擊巨魔",
                  "放下武器並試圖與巨魔交談"
        ]
      }
    }
  },
  'a5_maze-troll-kill': {
    en: {
      title: "Merciful Death",
      text: `You charge forward, enchanted sword gleaming. The troll swings its club but you're faster. Your blade cuts deep.
        <p>The troll gasps in shock as you lob its head clean off. That will teach the little barstead to mess with you.</p>
        <p>You take the key hanging from the troll's necklace. Beyond, a massive iron door stands sealed. The key fits perfectly.</p>
        <p>Through the door - voices. Guttural, harsh voices. Many of them. The smell of cooking fires and unwashed bodies.</p>`,
      choices: {
        prompt: "Continue forward:",
        options: [
                  "Unlock the door and proceed"
        ]
      }
    },
    zh: {
      title: "仁慈的死亡",
      text: `你向前衝去，魔法劍閃閃發光。巨魔揮舞著木棒，但你速度更快。你的刀刃深深切入。
        <p>當你乾淨俐落地砍掉巨魔的頭顱時，它驚恐地喘氣。這樣可以教訓這個小混蛋別惹你。</p>
        <p>你取下掛在巨魔項鍊上的鑰匙。外面是一扇巨大的鐵門，緊緊關閉。鑰匙完美地插入。</p>
        <p>門外—聲音。低沉、刺耳的聲音。很多。煮火和未洗淨身體的臭味。</p>`,
      choices: {
        prompt: "繼續前進：",
        options: [
                  "打開門並前進"
        ]
      }
    }
  },
  'a5_maze-troll-nice': {
    en: {
      title: "A Grave Mistake",
      text: `You lower your sword. "I don't want to fight. I'm just trying to find my way through the maze."
        <p>The troll's eyes widen. Its club wavers. "YOU...NO WANT TO FIGHT TROLL?"</p>
        <p>"No," you say gently.</p>
        <p>Without your weapon ready, you have no chance. The club falls.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE DIED</p>
        <p>Kindness has its place, but not all situations resolve with gentle words.</p>`,
      choices: {
        prompt: "Your journey ends here:",
        options: [
                  "Try again from the beginning"
        ]
      }
    },
    zh: {
      title: "致命的錯誤",
      text: `你放低劍。「我不想打鬥。我只是想找到通過迷宮的路。」
        <p>巨魔的眼睛睜大了。它的木棒搖晃著。「你...不想和巨魔打鬥？」</p>
        <p>「不，」你溫柔地說。</p>
        <p>沒有武器防備，你沒有機會。木棒揮下。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">你已死亡</p>
        <p>仁慈有其作用，但並非所有情況都能用溫和的言語解決。</p>`,
      choices: {
        prompt: "你的旅程在此結束：",
        options: [
                  "從頭開始重試"
        ]
      }
    }
  },
  'a6_maze-heart-room-1': {
    en: {
      title: "The Chamber of Reflection",
      text: `The chamber was cold with nearly the whole room covered by a pool of water. In the centre stood seven white pillars with a black platform raised around them. Heat came from flower like lamps at the centre.
        
        <p>In the waters, you see yourself. Every decision you made in the maze plays out in silvery images. The paths you chose. The dangers you faced.</p>     
        <p>At the far end it leads to another chamber.</p>`,
      choices: {
        prompt: "What would you like to do?",
        options: [
                  "Explore the room",
                  "Go to the next Chamber"
        ]
      }
    },
    zh: {
      title: "反思之室",
      text: `房間很冷，幾乎整個房間被一池水覆蓋。中央聳立著七根白色支柱，周圍有一個抬起的黑色平台。熱量來自中央像花朵一樣的燈。
        
        <p>在水中，你看到了自己。你在迷宮中做出的每一個決定都以銀色的影像上演著。你選擇的路徑。你面對的危險。</p>     
        <p>在遠端通向另一個房間。</p>`,
      choices: {
        prompt: "你想做什麼？",
        options: [
                  "探索房間",
                  "去下一個房間"
        ]
      }
    }
  },
  'a6_maze-heart-room-1-explore': {
    en: {
      title: "Exploring the Chamber of Reflection",
      text: `You wade through the water to the central platform.
        On the platform island you are struck by a life-like female doll wearing a silver tiara. Is that... Alice? You can't be sure. 
        You take your time to carefully explore the island.
        <p>The floor beneath is made of polished obsidian that reflects the ceiling above - a ceiling painted with constellations that slowly rotate, as if you're watching the night sky speed through time. The mirrors are not ordinary glass - they seem to be made of liquid silver that ripples when you approach. </p>
        <p>The air itself seems to hum with a gentle energy, encouraging contemplation and honest self-assessment. This is truly a chamber designed to make you see yourself clearly.</p>`,
      choices: {
        prompt: "What would you like to do?",
        options: [
                  "Return to the Chamber"
        ]
      }
    },
    zh: {
      title: "探索反思之室",
      text: `你涉水走到中央平台。
        在平台島嶼上，你被一個栩栩如生的女性娃娃所震撼，她戴著銀冠。那是...愛麗絲嗎？你無法確定。
        你花時間仔細探索這個島嶼。
        <p>下方的地板由拋光的黑曜石製成，反射著上面的天花板—天花板上繪有緩緩旋轉的星座，彷彿你在看夜空加速流逝。鏡子不是普通玻璃—它們似乎由液態銀製成，當你靠近時會泛起漣漪。</p>
        <p>空氣本身似乎發出溫和的能量嗡嗡聲，鼓勵思考和誠實的自我評估。這確實是一個設計來讓你清楚地看到自己的房間。</p>`,
      choices: {
        prompt: "你想做什麼？",
        options: [
                  "回到房間"
        ]
      }
    }
  },
  'a6_maze-heart-room-2': {
    en: {
      title: "The Chamber of Courage",
      text: `The second chamber is vast. A walkway leads to a bridge overlooking bottomless depths. There are three monstrous ornate sculptures at the far end. 
        <p> The walkaway leads on to the next chamber or you can go back.</p>`,
      choices: {
        prompt: "What would you like to do?",
        options: [
                  "Explore the room",
                  "Go to the next room",
                  "Go to the previous room"
        ]
      }
    },
    zh: {
      title: "勇氣之室",
      text: `第二個房間廣闊。一條走道通向俯瞰無底深淵的橋。遠端有三尊怪異的精緻雕像。
        <p>走道通向下一個房間，或者你可以回頭。</p>`,
      choices: {
        prompt: "你想做什麼？",
        options: [
                  "探索房間",
                  "去下一個房間",
                  "回到上一個房間"
        ]
      }
    }
  },
  'a6_maze-heart-room-2-explore': {
    en: {
      title: "A mystery Unknown",
      text: `<p>You walk across the bridge to the central monstrous column. </p>
        <p>A large tapestry catches your eye. A wide almost egg-shell like man stares at you with wise eyes. He holds his hands, patient. Across the walls are pictures of travellers layered over centuries. Warriors, scholars, common folk. </p>
        <p>In the center of the chamber stands a brazier that burns with steady white flame. </p>
        <p>High above, carved into the vaulted ceiling, are words in an ancient script.</p>
        <p>The chamber feels different now - not menacing, but empowering. This is a place that strengthens those who pass through it.</p>`,
      choices: {
        prompt: "What would you like to do?",
        options: [
                  "Return to the Chamber of Courage"
        ]
      }
    },
    zh: {
      title: "未知的謎團",
      text: `<p>你走過橋，來到中央的怪異柱子。</p>
        <p>一幅巨大的掛毯吸引了你的注意。一個寬闊、幾乎像蛋殼一樣的男人用智慧的眼睛凝視著你。他耐心地舉起雙手。牆壁上是跨越幾個世紀的旅者圖片。戰士、學者、平民。</p>
        <p>在房間中央立著一個火盆，燃燒著穩定的白色火焰。</p>
        <p>高處，刻在拱形天花板上的是古代文字。</p>
        <p>房間現在感覺不同了—不是威脅性的，而是賦予力量的。這是一個增強穿過它的人的地方。</p>`,
      choices: {
        prompt: "你想做什麼？",
        options: [
                  "回到勇氣之室"
        ]
      }
    }
  },
  'a6_maze-heart-room-3': {
    en: {
      title: "The Chamber of Wisdom",
      text: `The third chamber is filled with ancient books and scrolls. Pedestals hold artifacts of forgotten civilizations. Knowledge radiates from every surface.
        <p>You pick up a scroll and find it's written in a language you can somehow read: "The maze is not meant to trap, but to transform..."</p>
        <p>Beyond there is a further chamber.</p>`,
      choices: {
        prompt: "What would you like to do?",
        options: [
                  "Explore the room",
                  "Go to the next room",
                  "Go to the previous room"
        ]
      }
    },
    zh: {
      title: "智慧之室",
      text: `第三個房間裡堆滿了古代書籍和卷軸。基座上放著被遺忘的文明的古物。知識從每個表面散發出來。
        <p>你拿起一卷卷軸，發現它是用一種你不知道為何能讀懂的語言寫成的：「迷宮的目的不是困住，而是改變...」</p>
        <p>再往前還有另一個房間。</p>`,
      choices: {
        prompt: "你想做什麼？",
        options: [
                  "探索房間",
                  "去下一個房間",
                  "回到上一個房間"
        ]
      }
    }
  },
  'a6_maze-heart-room-3-explore': {
    en: {
      title: "Exploring the Chamber of Wisdom",
      text: `You take your time exploring the Chamber of Wisdom, marveling at the accumulated knowledge of ages past.
        <p> On a wall an elven tree god with large brown eyes and skin looks ahead. It is Ifor a god an ancient god of knowledge.</p>
        <p> "This room is irrelavant" You state with annoyance. "Where are you?"</p>
        <p> the books in this room are just a distraction. This whole thing is a distraction </p>`,
      choices: {
        prompt: "What would you like to do?",
        options: [
                  "Return to the Chamber of Wisdom"
        ]
      }
    },
    zh: {
      title: "探索智慧之室",
      text: `你花時間探索智慧之室，驚嘆於過去幾個年代積累的知識。
        <p>牆上是一位擁有褐色大眼睛和皮膚的精靈樹神凝視前方。他是艾佛，知識的古老之神。</p>
        <p>「這個房間無關緊要，」你煩躁地說。「你在哪裡？」</p>
        <p>這個房間裡的書籍只是分散注意力。整個事情都是分散注意力。</p>`,
      choices: {
        prompt: "你想做什麼？",
        options: [
                  "回到智慧之室"
        ]
      }
    }
  },
  'a6_maze-heart-room-4': {
    en: {
      title: "The Chamber",
      text: `<p> The fourth chamber is simple. Two chairs are on a platform and in between them is a large glowing white crystal.</p>`,
    },
    zh: {
      title: "密室",
      text: `<p>第四個密室十分簡樸。一個平台上放著兩張椅子，中間放著一個巨大的發光白色水晶球。</p>`,
    }
  },
  'a6_maze-heart-room-4-alt': {
    en: {
      title: "The Wrong Choice",
      text: `You reach for the crystal. The power calls to you. Imagine what you could do with such magic.
        <p>"No..." Alice whispers, her blue eyes filling with tears. "Please don't..."</p>
        <p>But you grasp the crystal anyway. Power floods through you - intoxicating, overwhelming, magnificent. You can feel reality bending to your will.</p>
        <p>Alice screams. She's dissolving, fading away. "You learned nothing!" she cries. "The maze tried to teach you that bonds matter more than power, but you chose yourself! You chose—"</p>
        <p>Her voice cuts off as she disappears completely.</p>
        <p>You're alone in the chamber. A door opens, leading to the outside world. You walk through, crystal in hand, power thrumming through your veins.</p>
        <p>But as you emerge into sunlight, you feel it. The crystal isn't giving you power. It's draining you. It was a curse disguised as a gift.</p>
        <p>You try to drop it but it's fused to your hand. Your life force pours into the crystal, feeding it, sustaining it. You fall to your knees as the curse takes hold.</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">YOU HAVE FAILED</p>
        <p>You escaped the maze alive, but you failed its test. Power without companionship is just another prison. And you'll carry this curse forever, alone.</p>`,
    },
    zh: {
      title: "錯誤的選擇",
      text: `你伸手去碰水晶球。力量在呼喚你。想像你能用這樣的魔法做什麼。
        <p>「不...」愛麗絲低聲說道，她湛藍的雙眼盈滿淚水。「請不要...」</p>
        <p>但你還是緊緊握住水晶球。力量洪流般湧過你的全身——令人目眩神迷、勢不可擋、華麗輝煌。你能感受到現實在你的意志下彎曲。</p>
        <p>愛麗絲尖叫起來。她正在消散，漸漸消失。「你什麼都沒有學到!」她哭喊著。「迷宮試著教你，羈絆比力量更重要，但你選擇了自己!你選擇了——」</p>
        <p>她的聲音在她完全消失時斷絕了。</p>
        <p>你獨自一人站在密室裡。一扇門開啟了，通向外面的世界。你走出門去，手中握著水晶球，力量在你的血管中颤動。</p>
        <p>但當你浮現在陽光下時，你感覺到了。水晶球並非在賦予你力量。它在吸取你的生命。這是披著禮物外衣的詛咒。</p>
        <p>你試著丟掉它，但它已經與你的手融為一體。你的生命力源源不斷地流入水晶球，餵養它、維持它。當詛咒控制住你時，你跪倒在地。</p>
        <p style="color: #ff0000; font-weight: bold; text-align: center;">你已經失敗</p>
        <p>你活著逃出了迷宮，但你失敗了它的考驗。沒有同伴的力量，只是另一種監獄。你將永遠獨自背負著這份詛咒。</p>`,
    }
  },
  'a6_maze-heart-room-4-explore': {
    en: {
      title: "Exploring the Crystal",
      text: `"So you found me" A man says from within the glowing rock.
      <p>"Indeed I have man in the crystal or should I say maze master" You relish the words. </p>
      <p>"You seem a little... put out. Did you suffer to get here?" The maze master looks at you with great wisdom.</p> 
      <p>"More than a little."</p>
      <p>"I perhaps should have made it harder." The Maze master ponders.</p>
      <p>"Its too late now."</p>
      <p>"That is true."</p>`,
    },
    zh: {
      title: "探尋水晶球",
      text: `「所以你找到我了，」一名男子從發光的岩石內傳出聲音。
      <p>「的確，我找到了你，水晶球中的人，或者說迷宮之主，」你細細咀嚼著這些話語。</p>
      <p>「你似乎有些...不悅。來到這裡你吃盡了苦頭嗎?」迷宮之主用深邃的智慧注視著你。</p> 
      <p>「遠不止此。」</p>
      <p>「也許我應該把它設計得更艱難些，」迷宮之主沉思著。</p>
      <p>「現在說這些太晚了。」</p>
      <p>「確實如此。」</p>`,
    }
  },
  'a_maze-start': {
    en: {
      title: "THIS IS THE START",
      text: `Welcome Traveler. You are at the start of the maze.
      <p>You wake up to find yourself in a dimly lit dungeon cell. You know how you got here but those details are not important right now. Finding the way out of the maze is all that matters.</p>
      A lantern, clearly of elven origin and made of fine silver with little weight about it highlights the bare stone room walls. There is nothing of interest in the room.
      You pickup the lantern and with skillful means unlock the cell door. Nervous you scan the even darker corridor outside.
      <p>To the left you see light up ahead and hear strange insect like sounds.</p>
      <p>To the right all is dark and all is calm.</p>
      <p>You are unarmed.</p>`,
      choices: {
        prompt: "Choose your path:",
        options: [
                  "head left towards the light",
                  "head right into the dark",
                  "wait and think"
        ]
      }
    },
    zh: {
      title: "這是起點",
      text: `歡迎旅行者。你正處於迷宮的起點。
      <p>你醒來發現自己身處一個昏暗的地牢牢房中。你知道自己是如何來到這裡的，但那些細節現在並不重要。找到走出迷宮的路才是最重要的。</p>
      一盞燈籠，顯然是精靈製作的，由上等銀製成，輕盈無比，照亮了光禿禿的石牆。房間裡沒有什麼值得注意的東西。
      你拿起燈籠，憑藉熟練的技巧打開了牢房門。你緊張地掃視著外面更加黑暗的走廊。
      <p>左邊，你看到前方有光，並聽到奇怪的昆蟲般的聲音。</p>
      <p>右邊，一切都是黑暗的，一切都很平靜。</p>
      <p>你沒有武器。</p>`,
      choices: {
        prompt: "選擇你的路徑：",
        options: [
                  "向左走向光明",
                  "向右走進黑暗",
                  "等待並思考"
        ]
      }
    }
  },
  'a_maze-start_0': {
    en: {
      title: "Back to the Beginning",
      text: `<p>You are back at the start of the maze. You have survived horrors no man should go through.
                Thoughts invade your mind of something you may have missed. Perhaps you should head back to the crystal caverns afterall.
                There must be something you missed. Or do you choose to go seek out another part of the maze. Perhaps that way is easier?</p>       
            <p> To the right all is dark and all is calm.</p>`,
    },
    zh: {
      title: "回到起點",
      text: `<p>你回到了迷宮的起點。你幸存了沒有人應該經歷的恐怖。
                念頭掠過你的心間，你可能遺漏了什麼。也許你應該回到水晶洞穴去。
                那裡一定有什麼你沒有發現的東西。或者你選擇探索迷宮的另一部分?也許那樣會更容易?</p>       
            <p>右側黑暗而寧靜。</p>`,
    }
  },
  'z_complete-maze': {
    en: {
      title: "MAZE COMPLETED",
      text: `You walk through the tunnel of golden light, and with each step the maze falls away behind you. The walls, the chambers, the trials - all dissolving into radiance.
        <p>At the true center of the maze, you find yourself in a space that defies description. It's not a room, but a convergence - where all the paths meet, where all the lessons crystallize into understanding.</p>
        <br>
        <p style="color: #ffff00; font-weight: bold; text-align: center;">YOU HAVE COMPLETED THE MAZE</p>
        <br>
        <p>Whatever lies ahead, you carry those lessons with you. The maze is behind you. Your new journey begins now.</p>
        <p>But something tells you, that you have not seen the last of the maze master...</p>`,
    },
    zh: {
      title: "迷宮已完成",
      text: `你走過金色光芒的隧道，每一步都將迷宮拋在身後。牆壁、密室、試煉——都融化在光輝中。
        <p>在迷宮的真正中心，你發現自己身處一個難以名狀的空間。這不是一個房間，而是一個匯聚點——所有路徑相遇的地方，所有教誨凝聚成領悟的地方。</p>
        <br>
        <p style="color: #ffff00; font-weight: bold; text-align: center;">你已完成迷宮</p>
        <br>
        <p>無論前路如何，你都帶著這些教誨前行。迷宮已在身後。你的新旅程現在開始了。</p>
        <p>但某種預感告訴你，你還未與迷宮之主做最後的告別...</p>`,
    }
  },
  'z_credits': {
    en: {
      title: "CREDITS",
      text: `<p> Story by Jack Gowan</p>
        <p> Illustrations by Jack Gowan (and midjourney)</p>
        <p> Programming by Jack Gowan (and Claude)</p>

        <p> If you liked the game do forward it on</p>
        
        <p> Happy to answer any questions you may have: jackgowan@gmail.com</p>`,
    },
    zh: {
      title: "製作人員",
      text: `<p>故事創作 Jack Gowan</p>
        <p>插圖繪製 Jack Gowan (以及 midjourney)</p>
        <p>程式設計 Jack Gowan (以及 Claude)</p>

        <p>若你喜歡這款遊戲，歡迎分享給他人</p>
        
        <p>樂意回答任何你的問題：jackgowan@gmail.com</p>`,
    }
  },
  'z_give-up': {
    en: {
      title: "The Last Act",
      text: `"So the only choice I have is to smash the crysal?" You inquire.
        <p>"Yes that is the only choice."</p>
        <p>"I give up" You plead. "This isn't what I after."</p>
        <p> "You have no choice sadly"</p>
        <p> And with that you slam the crystal to the floor shattering it to a 1000 pieces.</p>
        <p> Ahead a door appears. The light is warm, welcoming. You can feel it calling to you, promising not power or reward, but understanding. </p>`,
    },
    zh: {
      title: "最後的抉擇",
      text: `「那麼我唯一的選擇就是打碎這個水晶球嗎?」你詢問著。
        <p>「是的，這是唯一的選擇。」</p>
        <p>「我放棄了，」你哀求著。「這不是我想要的。」</p>
        <p>「可悲的是，你別無選擇。」</p>
        <p>於是你將水晶球狠狠砸向地面，將它粉碎成千片百片。</p>
        <p>眼前出現了一扇門。光線溫暖而熱切。你能感受到它在召喚你，承諾的不是力量或獎勵，而是領悟。</p>`,
    }
  },
  'z_maze-escape-no-secret': {
    en: {
      title: "Freedom, But Not Victory",
      text: `<p>You scramble through, pulling yourself out into a forest clearing. You're free. You've escaped the maze alive.</p>
        <p>You look back at the ruins behind you - crumbling stones covered in moss. The entrance is already sealing itself, stone grinding against stone until there's nothing but a rock face.</p>
        <p>You survived.You escaped with your life. By any measure, you succeeded.</p>
        <p>Yet as you walk away through the forest, you can't shake a strange feeling of incompleteness. The maze had secrets, deeper mysteries you'll never understand. Somewhere in those depths, there were answers you'll never find.</p>
        <p style="color: #ffff00; font-weight: bold; text-align: center;">YOU ESCAPED THE MAZE</p>
        <p>But you didn't complete it. Sometimes survival is enough. Sometimes it isn't.</p>`,
    },
    zh: {
      title: "自由，卻非勝利",
      text: `<p>你踉踉蹌蹌地爬出去，將自己拉進森林空地。你自由了。你活著逃出了迷宮。</p>
        <p>你回頭看著身後的廢墟——被苔蘚覆蓋的碎裂石頭。入口已經在自行密閉，石頭磨擦著石頭，直到只剩下一面岩石牆壁。</p>
        <p>你活著了。你逃出來了。以任何標準衡量，你都成功了。</p>
        <p>然而當你踏過森林離去時，一種奇異的不完整感揮之不去。迷宮曾有秘密，有深層的謎團你永遠無法理解。在那些深處，有你永遠找不到的答案。</p>
        <p style="color: #ffff00; font-weight: bold; text-align: center;">你已逃出迷宮</p>
        <p>但你並未完成它。有時活著就足夠了。有時卻不是。</p>`,
    }
  }
};

module.exports = translations;
