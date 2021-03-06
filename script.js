var str = "Skill Safari"

console.log(str.length)
console.log(str.toUpperCase())
console.log(str.indexOf("a"))

console.log("\nTony Stark: Hey, you wanna see something cool? I pulled something from Dad's archives. Felt timely. FDR signed the Lend-Lease bill with these in 1941. Provided support to the Allies when they needed it most.\nSteve Rogers: Some would say it brought our country closer to war.\nTony: See? If not for these, you wouldn't be here. I'm trying to... What do you call it? That's an olive branch. Is that what you call it?\nSteve: Is Pepper here? I didn't see her.\nT: We're kinda... Well, not kinda...\nS: Pregnant?\nT: No. Definitely not. We're taking a break. It's nobody's fault.\nS: I'm so sorry, Tony. I didn't know.\nT: A few years ago, I almost lost her, so I trashed all my suits. Then, we had to mop up HYDRA... and then Ultron. My fault. And then, and then, and then, I never stopped. Because the truth is I don't wanna stop. I don't wanna lose her. I thought maybe the Accords could split the difference. In her defense, I'm a handful. Yet, Dad was a pain in the ass, but he and Mom always made it work.\nS: I'm glad Howard got married. I only knew him when he was young and single\nT: Oh, really? You two knew each other? He never mentioned that. Maybe only a thousand times. God, I hated you.\nS: I don't mean to make things difficult.\nT: I know, because you're a very polite person.\nS: If I see a situation pointed south... I can't ignore it. Sometimes I wish I could.\nT: No, you don't.\nS: No, I don't. Sometimes... Sometimes I wanna punch you in your perfect teeth.\nT: But I don't wanna see you gone. We need you, Cap. So far, nothing's happened that can't be undone, if you sign. We can make the last 24 hours legit. Barnes gets transferred to an American psych-centre... instead of a Wakandan prison.\nS: I'm not saying it's impossible... but there would have to be safeguards.\nT: Sure. Once we put out the PR fire, those documents can be amended. I'd file a motion to have you and Wanda reinstated...\nS: Wanda? What about Wanda?\nT: She's fine. She's confined to the compound, currently. Vision's keeping her company.\nS: Oh, God, Tony. Every time I think you see things the right way...\nT: It's 100 acres with a lap pool. It's got a screening room. There's worse ways to protect people.\nS: Protection? Is that how you see this? This is protection? It's internment, Tony.\nT: She's not a US citizen. Oh, come on, Tony. And they don't grant visas to weapons of mass destruction.\nS: She's a kid!\nT: Give me a break! I'm doing what has to be done. To stave off something worse.\nS: You keep telling yourself that. Hate to break up the set.\n\n")

var weight = window.prompt("Enter your weight in kilograms: ");
var height = window.prompt("Enter your height in meters: ");

const bmi = weight/Math.pow(height, 2)

console.log("Weight: " + weight + "kg | Height: " + height + "m\nBMI: " + bmi)

if (bmi < 18.5) {
    console.log("Status: Underweight")
}

else if(bmi >= 18.5 && bmi < 25) {
    console.log("Status: Normal Weight")
}

else if(bmi >= 25 && bmi < 30) {
    console.log("Status: Overweight")
}

else {
    if(bmi >= 30 && bmi < 35) {
        console.log("Status: Obisity - Mild (Class 1)")
    }
    else if(bmi >= 35 && bmi < 40) {
        console.log("Status: Obisity - Moderate (Class 2)")
    }
    else if(bmi > 40) {
        console.log("Status: Obisity - Morbid (Class 3)")
    }

    console.log("Consult a doctor!")
}