RandomMessage1 = ["Ko rano rani, ", "Ako ih ne možeš pobijediti, ", "Ispod mire, ", "Ko brzo sudi, ", "Ko pjeva, ", "Ko visoko leti, ", "Ispeci, ", "Tiha vida, ", "Um caruje, ", "Nema hljeba, ", "Vuk dlaku mijenja, ", "Šuplju glavu, "];
RandomMessage2 = ["dvije sreće grabi, ", "pridruži im se, ", "100 đavola vire, ", "brzo se i kaje, ", "zlo ne misli, ", "nisko pada, ", "pa reci, ", "brijeg roni, ", "a snaga klade valja, ", "bez motike, ", "Al ćud nikad, ", "vjetar nosi, "];
RandomMessage3 = ["para vrti.", "gdje burgija neće.", "ko drugom jamu kopa.", "sam u nju upada.", "ko pita.", "ne skita."];

const MixedMessage = (arr1, arr2, arr3) => {
    let i = Math.floor((Math.random() * arr1.length));
    let j = Math.floor((Math.random() * arr2.length));
    let k = Math.floor((Math.random() * arr3.length));
    let message = arr1[i] + arr2[j] + arr3[k];
    return message;
}

console.log(MixedMessage(RandomMessage1, RandomMessage2, RandomMessage3));

