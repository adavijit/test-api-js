const Db={
	"robotics":{
        "title":"ROBOTICS",
		"options":[
            'DEATH RACE','ROBO RACE','ROBO SOCCER','MAZE RUNNER',
			'PUCK COLLECT','ROBO RUMBLE'	
		],
        "content":'Will robots inherit the earth?'
    },
    "coding":{
        "title":"CODING",
    	"options":['HACKATHON','CAPTURE THE FLAG','NITD PROGRAMMING LEAGUE',
    		'CLASH OF CODES','BLANK CODING','MACHINE LEARNING CHALLENGE',
    		'CODE GOLF','REVERSE CODING'

    	],
        "content":'Talk is cheap. Show me the code.'
    },
    "informal":{
        title:"INFORMAL",
    	options:['BULL RIDE','TWISTER','PAINTBALL'],
        content:'None of us is as smart as all of us.'
    },
    "misc":{
        title:"MISCELLANEOUS",
    	options:['VIRTUAL STOCK MARKET',],
        content:'Mystery keeps us awake.'
    },
    'DEATH RACE':{
        intro:"For all RC car lovers, we provide a big platform to prove yourself as the champion among all the RC Car drivers. If you love RC cars and have excellence in driving cars then drive through the toughest path filled up by high bumps, sharpest turns and high ramps to fly you in air and grab huge prizes.",
        intropoints:['<b>Contact : </b> +91 72890 17595 (Ayush Pranav)'],
        ps:"You have to design a RC car with given technical specifications and drive it on a track full of obstacles and traps.",
        team:3,
        fee:100,
        win:'The car with the maximum points at the end of the race wins the round.',
        rules1:[
                'Maximum participants per team = 3',
                'Each round will last for a maximum of 5 minutes in which the participants have to cover the track.',
                'Limited car size (25 cm width x 25 cm length x 20 cm height).',
				'Weight of the Car should not exceed 1.5Kg',
                'Cars can have weapon like mechanisms to hit or push other cars like high torqued industrial motors, protective armour sheets etc.',
                "Participants can hit each other's cars. They can push opponent's car into trap while avoiding it themselves.",
                'The organizers reserve the right to change the rules as they deem fit.'
        ],
        rules2:[]
    },
    'ROBO RACE':{
        intro:'Enough trash talk. Let the robo do the running." Robots compete in a race to prove their speed. The bot to cross the finish line first emerges as victor.',
        intropoints:['<b>Contact : </b> +91 72890 17595 (Ayush Pranav)'],
        ps:'You have to design a RC car with given technical specifications and drive it on a track with obstacles and traps.',
        team:3,
        fee:100,
        win:'The car with the maximum points at the end of the race wins the round.',
        rules1:[
                'Maximum participants per team = 3',
                'Each round will last for a maximum of 5 minutes in which the participants have to cover the track',
                'Limited car size (25 cm width x 25 cm length x 20 cm height)',
                'The organizers reserve the right to change the rules as they deem fit.'

        ],
        rules2:[]
    },
    'ROBO SOCCER':{
        intro:'Robo soccer confronts the sheer and intensified tryst of the football lovers with robomaniacs. The love for the game just got technically amplified with the circuits and steel fighting for the precious prize. Infiltrate your robot with the soccer skill, it just might be the striker you need.',
        intropoints:['<b>Contact : </b> +91 72890 17595 (Ayush Pranav)'],
        ps:'',
        team:3,
        fee:100,
        win:'The team scoring the maximum goals in a round will win that round.',
        rules1:[
            'Each round will last for 2 minutes.',
            'Maximum participants per team = 3.',
            'Robots must be manually controlled.',
            'Bots should not use more than 12v power supply and only one supply for whole system. You cannot use parallel batteries for generating higher power.',
            "No bot can remain inactive for more than 1 min in arena exceeding which will result in disqualification. By in-activity we mean-not able to take open ball to opponent's half.",
            "If your bot is designed for capturing that ball then you can do so for not more than 5 sec. And interval between successive captures must be 10 secs.",
            "No physical intervention in the arena would be tolerated. This would lead to direct disqualification.",
            "Bots should be controlled be designated controller/manual switching and not by physical pushing or pulling.",
            "Any kind of weapon that are intentionally added to harm the opponent would not be accepted.",
            "1Dimensions of bot must follow below mentioned criteria-(30cm x 30cm x 15cm)",
            "Weight of bot is limited to 1kg + 0.2kg. Weight of external power source would not be considered in weight of bot.",
            "1Organisers are bound to disqualify any team breaking the rules.",
        ],
        rules2:[]   
    },
    'MAZE RUNNER':{
        intro:"If you're going to decipher a hidden code from a complex set of different mazes, I'm pretty sure you need a Sherlock’s brain running the show.",
        intropoints:['<b>Contact : </b> +91 72890 17595 (Ayush Pranav)',
        "The robot should be autonomous, not manual.",
        "No damage should be made by a bot to the arena or to other's team bot in any manner.",
        "Bots should not be disassembled until the results are declared.",
        "When a team is called, they must report within five minutes.",
        "Two restarts are allowed in the final round.",
        "In case of a restart, the bot will be started from the starting point (origin).",
        "The organizers reserve the right to change the rules as they deem fit.",
		"Dimensions of the bot must be <b>less than 25cm x 25cm x 20cm</b>",
        "Teams can make minor changes to their bots between consecutive rounds but any major change would lead to disqualification." ],

        ps:'',
        team:2,
        fee:100,
        win:'',
        rules1:["Time limit 3 min.",
        "Two restarts are allowed in this round.",
        "In case of a restart, the bot will be started from the starting point (origin).",
        "No reorientation is permitted during the run.",
        "Single hand touch of robots is only allowed during run in case robot goes out of arena.",
        "For every restart in the race 20 points will be deducted.",
        "For every checkpoint cleared you will get 10 points and completion of path will give you additional 100 points.",
        "The bot will start from the starting point and following a path confined by walls, it will reach the end point."],
        rules2:["For every checkpoint cleared you will get 10 points and completion of path will give you additional 100 points.",
        "Time limit 5 min.",
        "Two restarts are allowed in the final round.",
        "In case of a restart, the bot will be started from the starting point (origin).",
        "No reorientation is permitted during the run.",
        "For every restart in the race 20 points will be deducted",
        "There will be intruder bots on your path if they are able to catch you before you finish the maze you will have to start from the last checkpoint with 20 points deduction."]
    },
    'PUCK COLLECT':{
    	intro:"TerraTechnica'18 is back with its dais ready for young and ardent minds to exhibit their innovation in designing and to prove their mettle in the RIDE under technology. Let's not waste any more time in awaiting the opportunity, just get busy in availing it. Enter the field of robo-mech war, with your bots ready to collect their assigned pucks and leave the place with excitement of triumph over opponents. Come, conquer and savour victory!!",
    	intropoints:['<b>Contact : </b> +91 72890 17595 (Ayush Pranav)'],
    	ps:'Two Remote Controlled robots compete. 10 pucks of each assigned colour are distributed randomly on the Arena. The aim is to collect all pucks of the assigned colour and carry them to the own home base.',
    	team:2,
        fee:100,
    	win:'',
    	rules1:["Max Size of robot can be 30 x 30 CM.",
    	"Participants can use any wireless technology for remote control.",
    	"Robot must not physically separate into pieces.",
    	"Participants are allowed to buy robotic gripper or build their own (preferred).",
    	"Each round will last for 2 minutes.",
    	"The team collecting the maximum pucks will win the round.",
    	"The participants must not deliberately hit their opponent’s bot, doing so will lead to disqualification."],
    	rules2:[]
    },
    'ROBO RUMBLE':{
        intro:"",
        intropoints:[
            '<b>Contact : </b> +91 72890 17595 (Ayush Pranav)',
            "<b>Arena</b> will be square(2m x 2m) in shape open from top and arena will be open from all sides so as to eliminate the opponent's robot by pushing, lifting, etc outside the ring. Participants keep in mind that wire should be sufficient. Exact arena will opened at the time of event. ",
        ],
        ps:"To design and construct a warfare robot which should be capable of eliminating other robots from the arena justlike Royal Rumble and the last robot standing will be declared as the winner.",
        team:4,
        fee:100,
        win:'The last standing bot in the arena will be the winner.',
        rules1:[
            "<b>Basic rules :</b><br/><ul><li>Maximum participants per team = 4</li><li>Each new entry will be in 30 seconds on the basis of chit system.</li><li>Maximum of two members of a team are allowed to operate the remote controller.</li><li>If the participants are not present at the arena on the given time slot then that team will be disqualified</li><li>The machines are not allowed to leave any loose parts on any part of the arena.</li><li>Bots immobilized for 15 seconds or more will result in warning. If any machine remains immobilized for 30 seconds it will be treated passive and will be disqualified.</li><li>Damage to arena is not allowed and will lead to disqualification of team.</li><li>Teams should take care of their bot; they will be responsible for the damage to their bots.</li><li>Hopping outside the ring will result in disqualification.</li><li>Flying (using airfoil, helium balloons, ornithopters etc.) is not allowed.</li><li>No rematch will be there.</li><li>Any team that is not ready at the time specified will be eliminated from the competition.</li><li>Co-ordination Committee reserves the right to add or update rules.</li></ul>",
            "Max Size of robot <b>30CM x 30CM x 25CM</b>.<br/>Max weight 7kg(tolerance +/- 0.3kg).<br/>Excluding any external controlling device or batteries.",
            "The machine should be controlled by a wireless remote control Mechanism or wired one throughout the war. In case of wireless system, it should have a minimum four Frequency remote control circuit or two dual control circuits or a transmitter-receiver paired module so that the frequency interferences opponent team can be avoided (in case of any interference in the wireless systems, they will not be considered for rematch or in the results).",
            "The machine must not be made from Lego parts, or any readymade Kit, if we find such machine it will be disqualified.",
            "If the machine is wired then the wire should remain slack under all circumstances during the competition. All the wires coming out of the Machine should be stacked as single unit.",
            "It is necessary for all that teams that the bot must be electrically or electronically powered. If any team uses any type of mechanical powered system like IC ENGINE or other then it will be disqualified.",
            "Robots can have any kind of cutters, flippers, saws, hammers, lifting devices etc. as weapons,with the following exceptions:<br/><ul><li>'Liquid projectiles.'</li><li>'Acid based Weapons.'</li><li>'EMP generators'</li><li>'Any kind of flammable liquid.'</li><li>'Flame-producing weapons.'</li><li>'Any kind of explosive material.'</li><li>'Nets, glue or any other entanglement devices.'</li><li>'High power magnets or electromagnets, Radio jammers.'</li><li>'Pneumatic weapons.'</li></ul>",
            "Batteries must be sealed, immobilized electrolyte types (gel cells, lithium, NiCad, or dry cells). The electric voltage anywhere in the machine should not be more than 24V DC at any point of time. On board power supply of 24V DC will be provided. The teams can also use their own power supply."
        ],
        rules2:[]
    },
    'METAL HUNT':{
    	intro:'The event objective is to find the maximum number of metal pieces in a given location by using metal detector in provided time duration. The metal pieces will be placed inside the soil with maximum depth of 10 cms. All teams will find the metal pieces at the same time and the team which gets maximum number of metal pieces in the provided time duration will be awarded as winner.',
    	intropoints:['<b>Contact : </b> +91 72890 17595 (Ayush Pranav)'],
    	ps:'',
    	team:3,
        fee:100,
    	win:'The team which manages to find the maximum number of metal peices (specifically designed for the event) within the designated time will be declared the winner.',
    	rules1:["Participants must start and finish between the time alloted for the event.",
    	"Metal detector must be fully functional.",
    	"Participants are supposed to remain within boundaries of campus during conduction of event.",
    	"Participants would be liable for fine in case of any damage caused to property of NIT Delhi."],
    	rules2:[]
    },
    'HACKATHON':{
    	intro:'"Walking on water and developing software from a specification are easy if both are frozen." Hackathon is an onsite mobile app building competition where we give you an opportunity to design and develop your own mobile or even web app, show off your skills to win the battle and be the master of web world.',
    	intropoints:['<b>Contact : </b> +91 88022 20624 (Anurag Giri)'],
    	ps:'Your team will be required to build an app from scratch, based on the given theme. With two days to make it, you and your team can code all day and seek learning resources as well, so participate whether or not you know how to make an app or not. The submissions will then be judged on a number of criteria and the best will be declared the winner.',
    	team:5,
        fee:0,
    	win:'',
    	rules1:["Your team will be required to create an application.",
    	"The app can be for any platform, or even a web app. The only requirement is that it should be mobile compatible.",
    	"Hackathon will be a two day event, during which you can code your app. It is to be built from scratch, but you can use free libraries in your code",
    	"Your submissions will be judged on a number of criteria, and the best will be chosen as the winner."],
    	rules2:[]
    },
    'CAPTURE THE FLAG':{
    	intro:'CAPTURE THE FLAG is an event which provides a platform for participants to work out on real world scenarios like malware analysis ¸pretesting , system administration.  The game is played in team of four players where each team is provided with a real world scenario along with an system where they need to seek out a solution which promotes next level. Each level is associated with different kind of scenario of increasing difficulty. This allows the participants to apply various concepts and techniques to reach a solution. The game is entirely based on Command line interface. The team is given secured access to a system to analyse, execute instructions to find the flag. The games assumes players to have knowledge in computer engineering such as files, networking, various tools of system administration. The game duration is estimated to be around 3hrs.',    	intropoints:[],
    	intropoints:['<b>Contact : </b> +91 88022 20624 (Anurag Giri)'],
        ps:'',
    	team:2,
        fee:0,
    	win:'',
    	rules1:[],
    	rules2:[]
    },
    'NITD PROGRAMMING LEAGUE':{
    	intro:'“Truth can only be found in one place: the code.”  Robert C. Martin minced no words while he made that statement. For those who think themselves as the problem solvers and all the code freaks out there, Terra Technica’18 is back with a platform for you to prove your mettle. This could be the event that gives you that confidence to code which could change your life forever.',
    	intropoints:['<b>Contact : </b> +91 88022 20624 (Anurag Giri)'],
    	ps:'This is a competitive programming event. There will be a set of questions, and participants will be required to write programs to solve them (in C, C++ or Java), which will be judged by an online judge. The team which solves the maximum number of questions in least time will be declared as the winner.',
    	team:3,
        fee:0,
    	win:'',
    	rules1:["•	 Your team will be required to write programs to solve the given problems, which will then have to be submitted to an online judge.",
    	"Your programs can be written in any language.",
    	"There will be a runtime limit for each problem. Your solution should pass all the hidden test data within that time limit to receive the accepted verdict.",
    	"The winner will be declared on the basis of number of questions solved. If number of questions solved is same, the winner will be the team who solves the problems in least amount of time.",
    	"There will be a time penalty for each wrong submission to the online judge, but not for compilation error.",
    	"Team will have no access to cellphones.",
    	"Taking help of any kind will result in immediate disqualification."],
    	rules2:[]
    },
    'CLASH OF CODES':{
    	intro:'Outwit, outplay, outlastGet ready for your chance to glory, where you would have to unleash your coding skills but, you would win only if you outlast your competitors.It’s an opportunity to boast your coding skills, but you can’t entirely rely on them…..May the odds always be in your favour.',
		intropoints:['<b>Contact : </b> +91 88022 20624 (Anurag Giri)',
            '<a target="_blank" href="http://35.200.170.45"><b>Play</b></a>'

        ],
    	ps:'',
    	team:1,
        fee:0,
    	win:'',
    	rules1:["Participants will be asked to submit one player code for a given game.",
    	"Before 7 days of the starting of fest one online portal will be opened where participants will improve their algorithm by playing with other’s code.",
    	"On the day of event, there will be offline knock out matches.", "•	The one who will win the final knock-out match will be the winner.",
    	"Rest will be notified on online portal."],
    	rules2:[]
    },
    'BLANK CODING':{
    intro:'Got good hands in Coding? Ever thought of writing the codes with MONITOR OFF? Sounds challenging?',
    intropoints:['<b>Contact : </b> +91 88022 20624 (Anurag Giri)',"Individual Event",
    "The allowed language is C and compiler Turbo C ",
    "Consists of two rounds",
    "The Judge’s decision is final"],
    ps:'',
    team:1,
    fee:0,
    win:'',
    rules1:["A simple code with syntax error will be given on paper.",
    "Participants have to correct the errors on paper and type the code with MONITOR SWITCHED OFF.",
    "Ten minutes will be given to type and correct the code.",
    "Based on the results of first round the participants will be selected for second round."],
    rules2:["Only problem statement will be provided.",
    "Participants need to type the code in TURBO C with MONITORS SWITCHED OFF.",
    "Twenty minutes will be given to each participant.",
    "Winners will be announced based on the results of compilation and execution."]	
    },
    'MACHINE LEARNING CHALLENGE':{
    	intro:"Key phrases can provide highly condensed valuable information that allows users to quickly acquire the main ideas of text. The task is to automatically extract Key phrases from documents .",
    	intropoints:['<b>Contact : </b> +91 88022 20624 (Anurag Giri)',
            "<b>Solution Required : </b>  We want an AI to -<br><ul><li>Index all documents</li><li>Extract a list of potential topics from each document (building a taxonomy of topics)</li><li>Link supporting entities to the taxonomies</li><li>A working Model for the same</li></ul>"

        ],
    	ps:'',
    	team:2,
        fee:0,
    	win:'',
    	rules1:[
           "Do not use any paid APIs or software in your toolset",
            "A summarisation algorithm can be a good by-product of the challenge (but not necessary)",
            "A deep learning working solution will be preferred , but we are not discouraging other approaches",
            "We are looking for an open source working solution , that will be challenged by test cases that FIL will share on the day of evaluation/presentation",
            "This should work on the stock articles / News on Yahoo finance or Economic times or other similar textual information. ",
            "Participants will have to give a live demo on the event day.",
            "<b>Example</b><br>China has the world’s fastest growing major economy with growth rates averaging 10% over the past 30 years, according to the International Monetary Fund (IMF). As of the end of 2017, the country’s economy was the second largest in the world by nominal gross domestic product (GDP) and the world's largest by purchasing power parity (PPP) next to the United States, driven largely by its manufacturing sector that exports goods that are widely consumed around the world.",
            "<b>Extract Topics</b><br>From 1,00,000 tweets (such as 1 above) about Chinese economy (Tweets could be from BBC , CNN , FOX News , Yahoo Finance)",
            "<b>After Extracting</b><br>After extracting “china fastest growing economy” as 1 possible topic from 1,00,000 tweets , matches for the topic would be verified against different forms of the same topic, e.g. “economy china”, “fastest growing ”, “china experiencing fast growth”. -> Link “china fastest growing economy“ to “IMF” , “GDP” , “PPP” , “USA”"
        ],
    	rules2:[]
    },
    'CODE GOLF':{
    	intro:"CodeGolf is a competitive coding challenge for all the geeks out there, but what makes it different is, you have to code short to fetch more marks. Lesser you code, better you score. Though what's priceless is solving interesting problems and the thrill of competition. To deal with it, you require a level patience and skill that escapes ordinary programmers. Are you ready?",
    	intropoints:['<b>Contact : </b> +91 88022 20624 (Anurag Giri)',
                    'Participants have to register  <a target="_blank" href="http://hck.re/ncg"><b>here</b></a> also.'
        ],
    	ps:'',
    	team:2,
        fee:0,
    	win:'',
    	rules1:["Your team will be required to write programs to solve the given problems, which will then have to be submitted to an online judge.",
    	"Shorter the code, Higher will be the score.",
    	"Your programs can be written in any language.",
    	"There will be a runtime limit for each problem. Your solution should pass all the hidden test data within that time limit to receive the accepted verdict",
    	"The winner will be declared on the basis of total score.",
    	"There will be a time penalty for each wrong submission to the online judge, but not for compilation error.",
    	"Team will have no access to cell phones.",
    	"Taking help of any kind will result in immediate disqualification."],
    	rules2:[]
    },
    'REVERSE CODING':{
    	intro:"Think you know everything about programming? Well there are many ways to go, let’s see which one you pick. This event looks for the real star that stands up to the ability of creativity and logic. So, be ready to storm out not just by switching systems but switching your brains into the all new arena.",
    	intropoints:['<b>Contact : </b> +91 88022 20624 (Anurag Giri)',
                        'Participants have to register  <a target="_blank" href="http://hck.re/nrcv20"><b>here</b></a> also.'
        ],
    	ps:'The difference between general competitive programming competition and reverse coding is that you will not be given the exact question statement but you will be provided with some set of sample inputs and outputs which will be sufficient enough to guess the problem and then you have to submit a code for your guessed problem. Interesting... right?',
    	team:3,
        fee:0,
    	win:'',
    	rules1:["This is a team event. There can be 1-3 members in a team.",
    	"Your team will be required to guess the problem with help of given input and output set and write program to solve the problems, which will then have to be submitted to an online judge.",
    	"Your programs can be written in one of either C, C++ or Java language.",
    	"There will be a runtime limit for each problem. Your solution should pass all the hidden test data within that time limit to receive the accepted verdict.",
    	"The winner will be declared on the basis of number of questions solved. If number of questions solved is same, the winner will be the team who solves the problems in least amount of time",
    	"There will be a time penalty for each wrong submission to the online judge, but not for compilation error.",
    	"Team will have no access to cellphones.",
    	"Taking help of any kind will result in immediate disqualification."],
    	rules2:[]
    },
    'VIRTUAL STOCK MARKET':{
    	intro:'Always cherished striking gold, trading at Dalal Street/Nasdaq? Think you can grab opportunities and make most of out of the dynamic stock market? Are you that smart investor who can buy right and sell right? Do you believe that the Stock Market is where you belong? BRACE YOURSELF. Here comes the simulation of it i.e. VIRTUAL STOCK MARKET game presented by TerraTechnica in association with MoneyPot. It is an exciting opportunity to show your investment skills and win prizes by playing this game.',
    	intropoints:[
        "People who are registered can start participating in the event from <b>10 March,2018.</b>",
        "Registrations will be <b>closed from  13th March</b>.So register as soon as possible.",
        "VSM is a multiplayer game which is conducted online. The start time, time of declaration of winners, and other similar details can be found on the online portal.", 
        "Participants interested need to login to TerraTechnica website and can play this game when it will be put live. Participants need to bring their own laptops.", "Every participant is given some amount of money(dummy) before he/she starts playing the game i.e. the balance of each participant is credited with a particular amount initially.", "Here, you can buy and sell dummy shares of various companies.", "The company listings would be according to BSE(Bombay Stock Exchange).", "Participants can view the number of shares and price of each share for every company. (Note: The information would not be real and it is only for the sake of playing game)", "Participants can now choose for which company they would like to invest. This can be done by buying the shares of that company.", "Every time a participant buys shares of a particular company, corresponding amount would be deducted from his/her balance.", "Participants could also sell their shares, which they own, at current price of the shares.", "The rate of shares of a particular company is decided according to the growth/decline of the company in Stock Market, news pertaining to that company etc.", "The rates will be fluctuating in between the game and would be visible to all the participants.", "Participants could also view the growth of company from the period when the game started in form of graphs which would help them decide which company's share to buy.", "Participants will be provided with the new statistics and can plan accordingly", "The participant with highest balance at the end of the game will be the winner of VSM.", "The final balance of each participant would be calculated by summing the price value of all the shares the participant owns and the money(amount) that he has.",
        "In case find difficulties in registering Mail to 141100025@nitdelhi.ac.in",
        "<a href='https://play.google.com/store/apps/details?id=com.moneypot&hl=en'><b>Android App</b></a>",
        "<a href='https://itunes.apple.com/in/app/moneypot-app/id1159626753?mt=8'><b>iOS App</b></a>",
        "Prize money worth 5000 /- Rs.(all may not be in cash)",
        "<ul><li>1st Prize 3000 Rs./-</li><li>2nd Prize 2000 Rs./-</li></ul>",
        "Other prizes will be given in form of goodies.",
        ],
    	ps:'',
    	team:1,
        fee:0,
    	win:'',
    	rules1:["Every participant is allowed to play the game with single login identity. Participants found playing the game with multiple logins would be disqualified.",
    	"Participants can not buy more than a particular amount of shares of a particular company which would be fixed by the game developer team and would be conveyed to all the participants at start of the game.",
        "Registrations will be approved first then participant can start VSM, ALL  approvals will be done from 9:00 PM, So kindly wait for the approval.",
        ],
    	rules2:[]
    },
    'WHO IS THE BOSS':{
    	intro:'This is not for the faint-hearted, the fearful, and the anxious. This is the game of leaders and of prestige. Each must prove their mettle, to ascertain their managerial skills to the edge of the humanely possible. You have to generate the greatest yield from the resources provided. You are the CEO of your own company, and must dare to take calculated risks in a simulated environment with surreal avenues and manage your way through the intricacies of logic.',
    	intropoints:[],
    	ps:'The event consists of 3 rounds in total, the first round which will be a general aptitude test will be open for all. Selected participants from each round will proceed to the next round. The second round will be where the participants will be separated into teams and a game will be played amongst these teams that will test their resource management skills. The third round will consist of a group discussion and further interviews with a panel of judges.',
    	team:1,
        fee:0,
    	win:'',
    	rules1:["This event is open to all college students free of cost.",
    	"The competition is open for individual participants and not as group/team from any college.",
    	"Participants need to carry valid ID Cards of their respective educational institutes.",
    	"The selection for main round will be purely based on the elimination conducted before main event.",
    	"The decision of Event Managers shall be treated as final and binding on all. ",
    	"They have rights to verify identity of participants if required."],
    	rules2:[]
    },
    'BULL RIDE':{
    	intro:'Getting on this raging mechanical bull needs courage but staying on it as it raves around is better said than done.',
    	intropoints:["Fee 50 Rs/-. per head.","The fee will be collected during the event.","Advance payment can be made at TerraTechnica office, Room no. 316, NIT Delhi."],
    	ps:'',
    	team:1,
        fee:0,
    	win:'',
    	rules1:[],
    	rules2:[]
    },
    'PAINTBALL':{
    	intro:'Want a good excuse to shoot your classmates? Come along for a session with paintball',
    	intropoints:["Fee 100 Rs/- per head.","The fee will be collected during the event.","Advance payment for group bookings (team of 6,8,10) can be made at TerraTechnica office, Room no. 316, NIT Delhi."],
    	ps:'',
    	team:1,
        fee:0,
    	win:'',
    	rules1:[],
    	rules2:[]
    },
    'TWISTER':{
    	"intro":'Think you are flexible? Think again. This fun game needs you to bend over yourself and stay like that till all your friends collapse.',
    	"intropoints":[],
    	ps:'',
    	team:1,
        fee:0,
    	win:'',
    	rules1:[],
    	rules2:[]
    },
    // 'DeathRace':{
    //     intro:'',
    //     ps:'',
    //     team:0,
    //     win:'',
    //     rules:[
            
    //     ]
    // }
}
// Db.e=events
export default Db; 
