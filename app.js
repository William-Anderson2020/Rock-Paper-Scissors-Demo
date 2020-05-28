console.log("Hello world!");

const buttons = Array.from(document.getElementsByClassName("button"));

buttons.forEach(el => {
    el.addEventListener("click", () => {
        let p1 = el.id;
        if(document.getElementById("one_player").checked){
            let p2 = Math.ceil(Math.random()*3);
            switch(p2){
                case 1:
                    p2 = "rock";
                    break;
                case 2:
                    p2 = "paper";
                    break;
                case 3:
                    p2 = "scissors";
                    break;
                default:
                    alert("Default @ line 10");
                    break;
            };
            compare(p1, p2);
        }else{
            alert("Player 2, make your choice.");
        };
    });
});

function compare(p1, p2){
    switch(p1){
        case "rock":
            switch(p2){
                case "rock":
                    alert("It's a tie!");
                    break;
                case "paper":
                    alert("Player 2 wins!");
                    break;
                case "scissors":
                    alert("Player 1 wins!");
                    break;
                default:
                    alert("Default @ ln 33");
            };
            break;
        case "paper":
            switch(p2){
                case "rock":
                    alert("Player 1 wins!");
                    break;
                case "paper":
                    alert("It's a tie!");
                    break;
                case "scissors":
                    alert("Player 2 wins!");
                    break;
                default:
                    alert("Default @ ln 48");
            };
            break;
        case "scissors":
            switch(p2){
                case "rock":
                    alert("Player 2 wins!");
                    break;
                case "paper":
                    alert("Player 1 wins!");
                    break;
                case "scissors":
                    alert("It's a tie!");
                    break;
                default:
                    alert("Default @ ln 63");
            };
            break;
        default:
            console.log("Default @ ln 31");
            break;
    }
}